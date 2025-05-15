import React, { createContext, useEffect, useState } from "react";
import { useFetchRecords } from "../hooks/useFetchRecord";
import { VITE_PRIVAPAY_CONTRACT_NAME } from "../config/env";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { leo2js } from "../lib/aleo";

interface RecordContext {
  employeeRecords: any;
  companyRecords: any;
  employeeRecordsAdmin: any;
  isAdmin: boolean;
  setEmployeeRecords: (value: any) => void;
  setCompanyRecords: (value: any) => void;
  setEmployeeRecordsAdmin: (value: any) => void;
  setIsAdmin: (value: boolean) => void;
}

const initialState: RecordContext = {
  employeeRecords: [],
  companyRecords: [],
  employeeRecordsAdmin: [],
  isAdmin: false,
  setEmployeeRecords: () => {},
  setCompanyRecords: () => {},
  setEmployeeRecordsAdmin: () => {},
  setIsAdmin: () => {},
};

export const RecordContext = createContext<RecordContext>(initialState);

export const RecordContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publicKey } = useWallet();
  const [employeeRecords, setEmployeeRecords] = useState<any[]>([]);
  const [companyRecords, setCompanyRecords] = useState<any[]>([]);
  const [employeeRecordsAdmin, setEmployeeRecordsAdmin] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { fetchRecords } = useFetchRecords();

  useEffect(() => {
    const filterRecords = async () => {
      const records = await fetchRecords(VITE_PRIVAPAY_CONTRACT_NAME);
      console.log("Fetched records:", records);

      for (const record of records) {
        const recordData = record.data;
        const recordType = leo2js.u8(recordData.record_type);
        if (recordType == 0) {
          setIsAdmin(true);
          setCompanyRecords((prev) => [...prev, record]);
        } else if (recordType == 1) {
          setEmployeeRecords((prev) => [...prev, record]);
        } else if (recordType == 2) {
          setEmployeeRecordsAdmin((prev) => [...prev, record]);
        }
      }
    };
    filterRecords();
  }, [publicKey]);
  return (
    <RecordContext.Provider
      value={{
        employeeRecords,
        companyRecords,
        employeeRecordsAdmin,
        isAdmin,
        setIsAdmin,
        setEmployeeRecords,
        setCompanyRecords,
        setEmployeeRecordsAdmin,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

const useRecordProvider = () => {
  const context = React.useContext(RecordContext);
  if (!context) {
    throw new Error("useRecordProvider Hook must be used within the Provider");
  }
  return context;
};

export default useRecordProvider;
