import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import {
  VITE_ALEO_BASE_URL,
  VITE_ANS_URL,
  VITE_PRIVAPAY_CONTRACT_NAME,
  VITE_TOKEN_REGISTRY_CONTRACT_NAME,
} from "../config/env";
import { useAleoContract } from "../hooks/useAleoContract";
import { useFetchRecords } from "../hooks/useFetchRecord";
import { js2leo, leo2js } from "../lib/aleo";
import { getEmployeeHash } from "../utils/employeeHash";
import { DAOTokenID, vUSDCTokenID } from "../config/token";
import { parseJSONLikeString } from "../utils/parser";

interface RecordContext {
  isFetching: boolean;
  setIsFetching: (value: boolean) => void;
  employeeRecords: any;
  companyRecords: any;
  employeeRecordsAdmin: any;
  votingRecords: any;
  companyList: any;
  setCompanyList: (value: any) => void;
  setVotingRecords: (value: any) => void;
  isAdmin: boolean;
  currentOrganization: bigint | null | undefined;
  setCurrentOrganization: (value: bigint | null | undefined) => void;
  setEmployeeRecords: (value: any) => void;
  setCompanyRecords: (value: any) => void;
  setEmployeeRecordsAdmin: (value: any) => void;
  setIsAdmin: (value: boolean) => void;
}

const initialState: RecordContext = {
  isFetching: true,
  employeeRecords: [],
  companyRecords: [],
  employeeRecordsAdmin: [],
  votingRecords: [],
  companyList: [],
  setCompanyList: () => {},
  setVotingRecords: () => {},
  isAdmin: false,
  currentOrganization: null,
  setCurrentOrganization: () => {},
  setEmployeeRecords: () => {},
  setCompanyRecords: () => {},
  setEmployeeRecordsAdmin: () => {},
  setIsAdmin: () => {},
  setIsFetching: () => {},
};

export const RecordContext = createContext<RecordContext>(initialState);

export const RecordContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publicKey, connected } = useWallet();
  const [employeeRecords, setEmployeeRecords] = useState<any[]>([]);
  const [companyRecords, setCompanyRecords] = useState<any[]>([]);
  const [companyList, setCompanyList] = useState<any[]>([]);
  const [employeeRecordsAdmin, setEmployeeRecordsAdmin] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [votingRecords, setVotingRecords] = useState<any[]>([]);
  const [currentOrganization, setCurrentOrganization] = useState<
    bigint | undefined | null
  >();
  const [isFetching, setIsFetching] = useState(true);
  const { fetchRecords } = useFetchRecords();
  const { program } = useAleoContract();
  const getCompanyData = async (company_id: any) => {
    const companyData = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("registered_company")
      .get(js2leo.field(leo2js.field(company_id)));
    console.log({ companyData });
    const parsedCompanyData = parseJSONLikeString(companyData);
    // const parsedJSON = JSON.parse(parsedCompanyData);
    return parsedCompanyData as any;
  };

  // const getAnsNameAndAddressFromField= async (employee_name_field: bigint) => {
  //   const employeeAndName=await fetch(`${VITE_ANS_URL}/${js2leo.field(employee_name_field)}`);
  //   const employeeAndNameParsed=await employeeAndName.json();
  //   const employeeName=employeeAndNameParsed.name;
  // }

  const getEmployeeNameWithNameField = async (employee_name_field: bigint) => {
    const employeeName = await fetch(
      `${VITE_ANS_URL}/${js2leo.field(employee_name_field)}`
    );
    const employeeNameParsed = await employeeName.json();
    const employeeNameField = employeeNameParsed.name;
    return employeeNameField;
  };

  const getEmployeeData = async (emp: any) => {
    const employeeHash = await getEmployeeHash(
      leo2js.field(emp.data.company_id),
      leo2js.field(emp.data.employee_id),
      leo2js.field(emp.data.employee_name_field),
      vUSDCTokenID
    );
    const employeeData = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("total_claimed")
      .get(employeeHash);
    const total_claimed = parseJSONLikeString(employeeData || "0u128");
    console.log({ total_claimed });
    const employeeName = await getEmployeeNameWithNameField(
      leo2js.field(emp.data.employee_name_field)
    );
    return { total_claimed_amount: total_claimed as any, employeeName };
  };

  const getEmployeeDataUser = async (emp: any) => {
    const employeeHash = await getEmployeeHash(
      leo2js.field(emp.data.company_id),
      leo2js.field(emp.data.employee_id),
      leo2js.field(emp.data.employee_name_field),
      vUSDCTokenID
    );
    const last_claim_height = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("latest_claim")
      .get(employeeHash);
    const total_claimed = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("total_claimed")
      .get(employeeHash);
    const total_claimed_amount = parseJSONLikeString(total_claimed || "0u128");
    const parsedEmployeeData = parseJSONLikeString(
      last_claim_height || emp.data.start_date
    );
    const employeeName = await getEmployeeNameWithNameField(
      leo2js.field(emp.data.employee_name_field)
    );
    return {
      total_claimed_amount,
      last_claimed: parsedEmployeeData as any,
      employeeName,
    };
  };

  const getLatestHeight = async () => {
    const latest_height = await axios.get(
      VITE_ALEO_BASE_URL + "/testnet/latest/height"
    );
    const parsedHeight = latest_height.data;
    return parsedHeight as any;
  };

  useEffect(() => {
    const filterRecords = async () => {
      try {
        const records = await fetchRecords(VITE_PRIVAPAY_CONTRACT_NAME);
        console.log("Fetched records:", records);

        const latest_height = await getLatestHeight();

        for (const record of records) {
          if (record.spent) continue;
          const recordData = record.data;
          const recordType = leo2js.u8(recordData.record_type);
          if (recordType == 0) {
            setIsAdmin(true);
            const parsedCompanyData = await getCompanyData(
              record.data.company_id
            );
            setCompanyList((prev) => [
              ...prev,
              { ...record.data, company_name: parsedCompanyData.company_name },
            ]);
            setCompanyRecords((prev) => [
              ...prev,
              { ...record.data, company_name: parsedCompanyData.company_name },
            ]);
            setCurrentOrganization(leo2js.field(record?.data?.company_id));
          } else if (recordType == 1) {
            const parsedEmployeeData = await getEmployeeDataUser(record);
            const parsedCompanyData = await getCompanyData(
              record.data.company_id
            );
            setCompanyList((prev) => [
              ...prev,
              { ...record.data, company_name: parsedCompanyData.company_name },
            ]);
            setEmployeeRecords((prev) => [
              ...prev,
              {
                record,
                last_claim: parsedEmployeeData.last_claimed,
                current_height: latest_height,
                total_claimed_amount: parsedEmployeeData.total_claimed_amount,
                companyName: parsedCompanyData.company_name,
                employeeName: parsedEmployeeData.employeeName,
              },
            ]);
            setCurrentOrganization(leo2js.field(record?.data?.company_id));
          } else if (recordType == 2) {
            const parsedEmployeeData = await getEmployeeData(record);
            setEmployeeRecordsAdmin((prev) => [
              ...prev,
              {
                ...record.data,
                total_claimed: parsedEmployeeData.total_claimed_amount,
                employeeName: parsedEmployeeData.employeeName,
              },
            ]);
            //   setEmployeeRecordsAdmin((prev) => [...prev, record]);
          }
        }
        setIsFetching(false);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    filterRecords();
  }, [publicKey]);

  useEffect(() => {
    const fetchVotingRecords = async () => {
      try {
        const records = await fetchRecords(VITE_TOKEN_REGISTRY_CONTRACT_NAME);
        const filteredRecords: any[] = [];
        for (const record of records) {
          if (record.spent) continue;
          const recordData = record.data;
          const token_id = leo2js.field(recordData.token_id);
          if (token_id == DAOTokenID) {
            filteredRecords.push(record);
          }
        }
        console.log("Fetched voting power records:", filteredRecords);
        setVotingRecords(filteredRecords);
      } catch (error) {
        console.error("Error fetching voting records:", error);
      }
    };
    fetchVotingRecords();
  }, [publicKey]);

  useEffect(() => {
    if (!connected) {
      setEmployeeRecords([]);
      setCompanyRecords([]);
      setEmployeeRecordsAdmin([]);
      setIsAdmin(false);
      setCurrentOrganization(null);
    }
  }, [connected]);

  return (
    <RecordContext.Provider
      value={{
        isFetching,
        setIsFetching,
        employeeRecords,
        companyRecords,
        employeeRecordsAdmin,
        isAdmin,
        companyList,
        setCompanyList,
        currentOrganization,
        votingRecords,
        setVotingRecords,
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
