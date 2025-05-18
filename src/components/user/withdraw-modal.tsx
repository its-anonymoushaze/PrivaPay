import React, { useMemo } from "react";
import Modal from "../modal.component";
import Input from "../input.component";
import Button from "../button.component";
import { leo2js } from "../../lib/aleo";
import { withdrawableAmountCalculator } from "../../utils/withdrawableAmount";
import { useWithdrawSalary } from "../../hooks/useWithdrawSalary";

interface WithdrawModalProps {
  open: boolean;
  close: () => void;
  record: any;
}

const WithdrawModal = ({ open, close, record }: WithdrawModalProps) => {
  const [inputAmount, setInputAmount] = React.useState("");
  const { withdrawSalary } = useWithdrawSalary();
  const withdrawableAmount = useMemo(() => {
    if (!record) return 0;
    return withdrawableAmountCalculator(
      leo2js.u128(record.record.data.amount),
      leo2js.u32(record.record.data.start_date),
      leo2js.u32(record.last_claim),
      leo2js.u32(record.record.data.end_date),
      record.current_height
    );
  }, [record]); // Replace with actual logic to calculate withdrawable amount
  const handleWithdrawFunds = async () => {
    await withdrawSalary(record.record, BigInt(inputAmount));
    alert("Withdraw request submitted successfully");
    close();
  };
  console.log({ record });
  return (
    <Modal
      title="Withdraw Funds"
      showCloseButton
      description="Please provide the necessary details to withdraw funds."
      isOpen={open}
      onClose={close}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span>
            Max Withdrawable Amount:{" "}
            <span className="text-orange-500">{withdrawableAmount}</span>
          </span>
          <button className="text-orange-500 border border-orange-500 bg-orange-500/5 rounded-md px-2 py-1 text-[12px]">
            Max
          </button>
        </div>
        <Input
          label="Withdraw Amount"
          required
          onChange={(e) => {
            setInputAmount(e.target.value);
          }}
        />

        <Button onClick={handleWithdrawFunds}>Withdraw Funds</Button>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
