import React from "react";
import Button from "../button.component";
import Modal, { CustomModalProps } from "../modal.component";

const PaymentConfirmationModal = ({ open, close }: CustomModalProps) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Modal
      open={open}
      close={close}
      title="Send Payment Confirmation"
      description="Fill up this form to send payment confirmation for the month of September"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl">Subject: Confirmation of Payment</h2>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              Receipt Name: [Your Full Name]
            </span>
            <span className="text-sm font-semibold">
              For the month: [Month/Year]
            </span>
            <span className="text-sm font-semibold">
              Amount: [Credited Amount]
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-500 ">
            I hereby confirm that I have received the monthly salary for the
            month of september
          </span>
        </div>
        <Button disabled={!checked}>Send Confirmation</Button>
      </div>
    </Modal>
  );
};

export default PaymentConfirmationModal;
