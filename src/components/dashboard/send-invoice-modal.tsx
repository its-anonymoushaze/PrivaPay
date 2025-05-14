import jsPDF from "jspdf";
import "jspdf-autotable";
import React from "react";
import Button from "../button.component";
import Input from "../input.component";
import Modal, { CustomModalProps } from "../modal.component";
import CustomReactSelect from "../react-multi-select.component";

interface InvoiceDetails {
  totalHours: number;
  invoiceAmount: number;
  projectWorkedOn: string;
}

const SendInvoiceModal = ({ open, close }: CustomModalProps) => {
  const [invoiceDetails, setInvoiceDetails] = React.useState<InvoiceDetails>({
    totalHours: 0,
    invoiceAmount: 0,
    projectWorkedOn: "",
  });

  const handleSendInvoice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text("Invoice for the month of January 2025", 14, 22);

    // Define the table data
    const tableData = [
      ["Invoice Submitted to", "Venture 23, Inc"],
      ["Name", "Sandip Puri"],
      ["For the Month", "January"],
      ["Total Hours worked", invoiceDetails?.totalHours],
      ["Invoice Amount", `$${invoiceDetails?.invoiceAmount}`],
      ["Projects Worked on", invoiceDetails?.projectWorkedOn],
    ];

    // Create the table using autoTable
    (doc as any).autoTable({
      startY: 30, // Start the table below the title
      body: tableData, // Table body
      theme: "grid", // Add grid lines
      styles: { fontSize: 12, cellPadding: 3 }, // Customize styles
      headStyles: { fillColor: "#007bff", textColor: "#fff" }, // Header styles
    });

    // Save the PDF
    doc.save("user-details.pdf");
  };
  return (
    <Modal
      open={open}
      close={close}
      title="Send Invoice"
      description="Fill up this form to send invoice for the month of September"
    >
      <form onSubmit={handleSendInvoice} className="flex flex-col gap-4">
        <Input
          label="Total hours worked"
          type="number"
          required
          onChange={(e) =>
            setInvoiceDetails({
              ...invoiceDetails,
              totalHours: Number(e.target.value),
            })
          }
        />
        <Input
          label="Invoice amount"
          required
          onChange={(e) =>
            setInvoiceDetails({
              ...invoiceDetails,
              invoiceAmount: Number(e.target.value),
            })
          }
        />
        <CustomReactSelect
          label="Project worked on"
          required
          options={[
            {
              label: "Project 1",
              value: "project_1",
            },
            {
              label: "Project 2",
              value: "project_2",
            },
            {
              label: "Project 3",
              value: "project_3",
            },
          ]}
          onHandleChange={(values: string[]) =>
            setInvoiceDetails({
              ...invoiceDetails,
              projectWorkedOn: values.join(", "),
            })
          }
        />

        <Button type="submit">Send Invoice</Button>
      </form>
    </Modal>
  );
};

export default SendInvoiceModal;
