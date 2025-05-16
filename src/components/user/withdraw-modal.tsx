import React from "react";
import Modal from "../modal.component";
import Input from "../input.component";
import Button from "../button.component";

interface WithdrawModalProps {
  open: boolean;
  close: () => void;
  record: any;
}

const WithdrawModal = ({ open, close, record }: WithdrawModalProps) => {
  const [inputAmount, setInputAmount] = React.useState("");
  const handleWithdrawFunds = async () => {};
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
        <div>
          <span>
            Max Withdrawable Amount:{" "}
            <span className="text-orange-500">1000</span>
          </span>
          <button className="text-orange-500 border border-orange-500 bg-orange-500/5">
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
