import { type ColumnDef } from "@tanstack/react-table";

import { Table } from "../table.component";
import useRecordProvider from "../../providers/record.providers";
import { leo2js } from "../../lib/aleo";

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
          {leo2js.field(row.original.data.company_id)}
        </div>
      );
    },
  },
  {
    accessorKey: "organizationName",
    header: "Organization Name",
  },
  {
    accessorKey: "data.amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {leo2js.u128(row.original.data.amount)}
        </div>
      );
    },
  },
  {
    accessorKey: "data.claimable_salary",
    header: "Claimed Amount",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          {leo2js.u128(row.original.data.claimable_salary)}
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

const data: Transaction[] = [
  {
    organizationId: "123",
    organizationName: "Organization A",
    amount: 1000,
    claimedAmount: 500,
  },
  {
    organizationId: "456",
    organizationName: "Organization B",
    amount: 2000,
    claimedAmount: 1500,
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
      error={data.length === 0 ? "No joined organization found" : undefined}
      currentPage={1}
    />
  );
};

export default UserOrganizationTable;
