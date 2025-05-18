import { type ColumnDef } from "@tanstack/react-table";

import { useState } from "react";
import { leo2js } from "../../lib/aleo";
import { asciiToString } from "../../utils/stringToAscii";
import { withdrawableAmountCalculator } from "../../utils/withdrawableAmount";
import { Table } from "../table.component";
import WithdrawModal from "../user/withdraw-modal";
import useProposalProvider from "../../providers/proposal.providers";
import { truncate } from "../../utils/formatAddress";

const ProposalTable = () => {
  const { proposalList } = useProposalProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedRecord, setSelectedRecord] = useState(null);

  const openModal = (record: any) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

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
      <WithdrawModal
        open={isModalOpen}
        close={closeModal}
        record={selectedRecord}
      />
    </>
  );
};

export default ProposalTable;
