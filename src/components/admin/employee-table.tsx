import type { ColumnDef } from "@tanstack/react-table";
import { Table } from "../table.component";

interface EmployeeTableProps {
  employeeRecords: any[];
  isLoading: boolean;
}

const employeeColumns: ColumnDef<any>[] = [
  {
    accessorKey: "data.employee_id",
    header: "Employee ID",
  },
  {
    accessorKey: "data.company_id",
    header: "Organization ID",
  },
  {
    accessorKey: "data.company_id",
    header: "Organization ID",
  },
  {
    accessorKey: "data.company_id",
    header: "Organization ID",
  },
];

const EmployeeTable = ({ employeeRecords, isLoading }: EmployeeTableProps) => {
  return (
    <Table
      data={employeeRecords}
      columns={employeeColumns}
      isLoading={isLoading}
      totalPages={1}
      error={
        employeeRecords.length === 0
          ? "No employee found. Please add an employee."
          : undefined
      }
      currentPage={1}
    />
  );
};

export default EmployeeTable;
