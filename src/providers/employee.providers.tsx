import React, { createContext } from "react";

interface EmployeeContext {}

const initialState: EmployeeContext = {};

export const RecordContext = createContext<EmployeeContext>(initialState);

export const EmployeeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <RecordContext.Provider value={{}}>{children}</RecordContext.Provider>;
};

const useEmployeeProvider = () => {
  const context = React.useContext(RecordContext);
  if (!context) {
    throw new Error("useRecordProvider Hook must be used within the Provider");
  }
  return context;
};

export default useEmployeeProvider;
