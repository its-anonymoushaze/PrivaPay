import { type ColumnDef } from "@tanstack/react-table";

import { Table } from "../table.component";

interface Transaction {
  organizationId: string;
  organizationName: string;
  amount: number;
  claimedAmount: number;
}

const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "organizationId",
    header: "Organization ID",
  },
  {
    accessorKey: "organizationName",
    header: "Organization Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "claimedAmount",
    header: "Claimed Amount",
  },
  {
    header: "Action",
    cell: () => {
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
  const isLoading = false;
  return (
    <Table
      data={data}
      columns={transactionColumns}
      isLoading={isLoading}
      totalPages={1}
      error={data.length === 0 ? "No joined organization found" : undefined}
      currentPage={1}
    />
  );
};

export default UserOrganizationTable;
