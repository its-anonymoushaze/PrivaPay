import type { ColumnDef } from "@tanstack/react-table";
import { Table } from "../table.component";
import { leo2js } from "../../lib/aleo";
import { convertTokenAmountToDisplay } from "../../utils/tokenAmountFormatter";
import { vUSDCDecimal } from "../../config/token";

interface EmployeeTableProps {
  employeeRecords: any[];
  isLoading: boolean;
}

const employeeColumns: ColumnDef<any>[] = [
  {
    accessorKey: "employee_id",
    header: "Employee ID",
    cell: ({ row }) => {
      return (
        <span className="text-sm font-semibold">
          {leo2js.field(row.original.employee_id)}
        </span>
      );
    },
  },
  {
    accessorKey: "company_id",
    header: "Organization ID",
    cell: ({ row }) => {
      return (
        <span className="text-sm font-semibold">
          {leo2js.field(row.original.company_id)}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Salary",
    cell: ({ row }) => {
      return (
        <span className="text-sm font-semibold">
          {convertTokenAmountToDisplay(
            leo2js.u128(row.original.amount),
            vUSDCDecimal
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "employee_address",
    header: "Employee ANS Name",
    cell: ({ row }) => {
      return (
        <span className="text-sm font-semibold">
          {row.original.employeeName}
        </span>
      );
    },
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
