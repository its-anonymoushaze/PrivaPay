import { type ColumnDef } from "@tanstack/react-table";

import { leo2js } from "../../lib/aleo";
import useProposalProvider from "../../providers/proposal.providers";
import { truncate } from "../../utils/formatAddress";
import { asciiToString } from "../../utils/stringToAscii";
import { Table } from "../table.component";

const ProposalTable = () => {
  const { proposalList } = useProposalProvider();

  const transactionColumns: ColumnDef<any>[] = [
    {
      accessorKey: "data.id",
      header: "Proposal ID",
      cell: ({ row }) => {
        return <div className="flex gap-2">{leo2js.u32(row.original.id)}</div>;
      },
    },
    {
      accessorKey: "data.company_name",
      header: "Organization Name",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            {asciiToString(leo2js.u128(row.original.company_name))}
          </div>
        );
      },
    },
    {
      accessorKey: "data.title",
      header: "Proposal Title",
      cell: ({ row }) => {
        return <div className="flex gap-2">{row.original.data}</div>;
      },
    },
    {
      accessorKey: "data.time_limit",
      header: "Valid Till Block Height",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            {leo2js.u32(row.original.time_limit)}
          </div>
        );
      },
    },
    {
      accessorKey: "data.status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            {leo2js.u8(row.original.status) === 0 ? "Active" : "Inactive"}
          </div>
        );
      },
    },
    {
      accessorKey: "data.yes_hash_count",
      header: "Votes For",
      cell: ({ row }) => {
        return <div className="flex gap-2">{row.original.yes_hash_count}</div>;
      },
    },
    {
      accessorKey: "data.no_hash_count",
      header: "Votes Against",
      cell: ({ row }) => {
        return <div className="flex gap-2">{row.original.no_hash_count}</div>;
      },
    },
    {
      accessorKey: "data.proposer",
      header: "Proposer",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            {truncate(leo2js.address(row.original.proposer))}
          </div>
        );
      },
    },
  ];

  const isLoading = false;
  return (
    <>
      <Table
        data={proposalList}
        columns={transactionColumns}
        isLoading={isLoading}
        totalPages={1}
        error={proposalList.length === 0 ? "No proposals found" : undefined}
        currentPage={1}
      />
    </>
  );
};

export default ProposalTable;
