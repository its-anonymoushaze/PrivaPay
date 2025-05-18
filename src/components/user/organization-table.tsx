import { type ColumnDef } from "@tanstack/react-table";

import { useState } from "react";
import { leo2js } from "../../lib/aleo";
import useRecordProvider from "../../providers/record.providers";
import { asciiToString } from "../../utils/stringToAscii";
import { withdrawableAmountCalculator } from "../../utils/withdrawableAmount";
import { Table } from "../table.component";
import WithdrawModal from "./withdraw-modal";
import { convertTokenAmountToDisplay } from "../../utils/tokenAmountFormatter";
import { vUSDCDecimal } from "../../config/token";

const UserOrganizationTable = () => {
  const { employeeRecords } = useRecordProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(employeeRecords);

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
      accessorKey: "data.ans_name",
      header: "Employee ANS Name",
      cell: ({ row }) => {
        return <div className="flex gap-2">{row.original.employeeName}</div>;
      },
    },
    // {
    //   accessorKey: "data.employee_name",
    //   header: "Employee Name",
    //   cell: ({ row }) => {
    //     return (
    //       <div className="flex gap-2">
    //         {asciiToString(leo2js.u128(row.original.employeeName))}
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "data.amount",
      header: "Amount",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            {convertTokenAmountToDisplay(
              leo2js.u128(row.original.record.data.amount),
              vUSDCDecimal
            )}{" "}
            USDC
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
            {convertTokenAmountToDisplay(
              leo2js.u128(row.original.total_claimed_amount),
              vUSDCDecimal
            )}{" "}
            USDC
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
            {convertTokenAmountToDisplay(
              withdrawableAmountCalculator(
                leo2js.u128(row.original.record.data.amount),
                leo2js.u32(row.original.record.data.start_date),
                leo2js.u32(row.original.last_claim),
                leo2js.u32(row.original.record.data.end_date),
                row.original.current_height
              ),
              vUSDCDecimal
            )}{" "}
            USDC
          </div>
        );
      },
    },
    {
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <button
              onClick={() => openModal(row.original)}
              className="border border-orange-500 text-orange-500 bg-orange-500/10 px-4 py-2 rounded-md cursor-pointer"
            >
              Claim amount
            </button>
          </div>
        );
      },
    },
  ];

  const isLoading = false;
  return (
    <>
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
      <WithdrawModal
        open={isModalOpen}
        close={closeModal}
        record={selectedRecord}
      />
    </>
  );
};

export default UserOrganizationTable;
