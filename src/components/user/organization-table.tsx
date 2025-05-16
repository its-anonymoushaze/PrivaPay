import { type ColumnDef } from "@tanstack/react-table";

import { Table } from "../table.component";
import useRecordProvider from "../../providers/record.providers";
import { leo2js } from "../../lib/aleo";
import { asciiToString, stringToAscii } from "../../utils/stringToAscii";
import { withdrawableAmountCalculator } from "../../utils/withdrawableAmount";

interface Transaction {
  organizationId: string;
  organizationName: string;
  amount: number;
  claimedAmount: number;
}

const transactionColumns: ColumnDef<any>[] = [
  {
    accessorKey: "data.company_id",
    header: "Organization ID",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {leo2js.field(row.original.record.data.company_id)}
        </div>
      );
    },
  },
  {
    accessorKey: "data.company_name",
    header: "Organization Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {asciiToString(leo2js.u128(row.original.companyName))}
        </div>
      );
    },
  },
  {
    accessorKey: "data.amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {leo2js.u128(row.original.record.data.amount)}
        </div>
      );
    },
  },
  {
    accessorKey: "data.claimed_salary",
    header: "Claimed Amount",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {leo2js.u128(row.original.record.data.claimable_salary)}
        </div>
      );
    },
  },
  {
    accessorKey: "data.claimable_salary",
    header: "Current Claimable Amount",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {withdrawableAmountCalculator(
            leo2js.u128(row.original.record.data.amount),
            leo2js.u32(row.original.record.data.start_date),
            leo2js.u32(row.original.last_claim),
            leo2js.u32(row.original.record.data.end_date),
            row.original.current_height
          )}
        </div>
      );
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <button className="border border-orange-500 text-orange-500 bg-orange-500/10 px-4 py-2 rounded-md cursor-pointer">
            Claim amount
          </button>
        </div>
      );
    },
  },
];

const UserOrganizationTable = () => {
  const { employeeRecords } = useRecordProvider();
  console.log(employeeRecords);
  const isLoading = false;
  return (
    <Table
      data={employeeRecords}
      columns={transactionColumns}
      isLoading={isLoading}
      totalPages={1}
      error={
        employeeRecords.length === 0
          ? "No joined organization found"
          : undefined
      }
      currentPage={1}
    />
  );
};

export default UserOrganizationTable;
