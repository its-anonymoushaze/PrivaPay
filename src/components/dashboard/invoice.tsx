"use client";
import React from "react";

import SendInvoiceModal from "./send-invoice-modal";
import PaymentConfirmationModal from "./payment-confirm-modal";
import Button from "../button.component";

const InvoiceSection = () => {
  const [openInvoice, setOpenInvoice] = React.useState(false);
  const [openPaymentConfirm, setOpenPaymentConfirm] = React.useState(false);
  return (
    <React.Fragment>
      <div className="flex flex-col divide-y-[1px] divide-gray-900">
        <div className="flex justify-between gap-6 items-center py-5">
          <div className="flex flex-col gap-1">
            <div className="font-semibold">Dont Forget to create invoice </div>
            <p className="text-sm text-gray-600">
              Invoice will be available to create after 20th of each month to
              25th. Not submitting invoice will result in delay in salary. So
              please, send invoice
            </p>
          </div>
          <Button onClick={() => setOpenInvoice(true)} variant="outline">
            Send invoice
          </Button>
        </div>
        <div className="flex justify-between gap-6 items-center py-5">
          <div className="flex flex-col gap-1">
            <div className="font-semibold">Received your salary? </div>
            <p className="text-sm text-gray-600">
              Please send us the email after you receive your salary. This will
              help us to keep track of your salary
            </p>
          </div>
          <Button onClick={() => setOpenPaymentConfirm(true)} variant="outline">
            Send confirmation
          </Button>
        </div>
      </div>
      <SendInvoiceModal
        open={openInvoice}
        close={() => setOpenInvoice(false)}
      />
      <PaymentConfirmationModal
        open={openPaymentConfirm}
        close={() => setOpenPaymentConfirm(false)}
      />
    </React.Fragment>
  );
};

export default InvoiceSection;
