import React, { createContext, useEffect, useState } from "react";
import { useFetchRecords } from "../hooks/useFetchRecord";
import { VITE_PRIVAPAY_CONTRACT_NAME } from "../config/env";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { js2leo, leo2js } from "../lib/aleo";
import { useAleoContract } from "../hooks/useAleoContract";
import { parseJSONLikeString } from "../utils/parser";
import { getEmployeeHash } from "../utils/employeeHash";
import { vUSDCTokenID } from "../config/token";

interface RecordContext {
  employeeRecords: any;
  companyRecords: any;
  employeeRecordsAdmin: any;
  isAdmin: boolean;
  currentOrganization: bigint | null | undefined;
  setCurrentOrganization: (value: bigint | null | undefined) => void;
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
  currentOrganization: null,
  setCurrentOrganization: () => {},
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
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [currentOrganization, setCurrentOrganization] = useState<
    bigint | undefined | null
  >();
  const { fetchRecords } = useFetchRecords();
  const { program } = useAleoContract();
  const getCompanyData = async (com: any) => {
    const companyData = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("registered_company")
      .get(js2leo.field(leo2js.field(com.data.company_id)));
    console.log({ companyData });
    const parsedCompanyData = parseJSONLikeString(companyData);
    // const parsedJSON = JSON.parse(parsedCompanyData);
    return parsedCompanyData as any;
  };

  const getEmployeeData = async (emp: any) => {
    const employeeHash = await getEmployeeHash(
      leo2js.field(emp.data.company_id),
      leo2js.field(emp.data.employee_id),
      leo2js.address(emp.data.employee_address),
      vUSDCTokenID
    );
    const employeeData = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("total_claimed")
      .get(employeeHash);
    const parsedEmployeeData = parseJSONLikeString(employeeData || "0u128");
    console.log({ parsedEmployeeData });
    return parsedEmployeeData as any;
  };

  const getEmployeeDataUser = async (emp: any) => {
    const employeeHash = await getEmployeeHash(
      leo2js.field(emp.data.company_id),
      leo2js.field(emp.data.employee_id),
      leo2js.address(emp.data.employee_address),
      vUSDCTokenID
    );
    const employeeData = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("latest_claim")
      .get(employeeHash);
    const parsedEmployeeData = parseJSONLikeString(employeeData || "0u32");
    return parsedEmployeeData as any;
  };

  useEffect(() => {
    const filterRecords = async () => {
      const records = await fetchRecords(VITE_PRIVAPAY_CONTRACT_NAME);
      console.log("Fetched records:", records);

      for (const record of records) {
        const recordData = record.data;
        const recordType = leo2js.u8(recordData.record_type);
        if (recordType == 0) {
          setIsAdmin(true);
          const parsedCompanyData = await getCompanyData(record);
          setCompanyRecords((prev) => [
            ...prev,
            { ...record.data, company_name: parsedCompanyData.company_name },
          ]);
          setCurrentOrganization(leo2js.field(record?.data?.company_id));
        } else if (recordType == 1) {
          const parsedEmployeeData = await getEmployeeDataUser(record);
          setEmployeeData((prev) => [
            ...prev,
            { ...record.data, amount: parsedEmployeeData },
          ]);
          setEmployeeRecords((prev) => [...prev, record]);
        } else if (recordType == 2) {
          const parsedEmployeeData = await getEmployeeData(record);
          setEmployeeRecordsAdmin((prev) => [
            ...prev,
            { ...record.data, amount: parsedEmployeeData },
          ]);
          //   setEmployeeRecordsAdmin((prev) => [...prev, record]);
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
        currentOrganization,
        setCurrentOrganization,
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
