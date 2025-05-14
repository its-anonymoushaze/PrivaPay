import React from "react";
import Button from "../button.component";
import Input from "../input.component";
import Modal, { CustomModalProps } from "../modal.component";
import Select from "../select.component";
import Textarea from "../textarea.component";

const AddProjectModal = ({ open, close }: CustomModalProps) => {
  return (
    <Modal
      open={open}
      close={close}
      title="Add project"
      description="Fill up this form to send email for leave application"
    >
      <div className="flex flex-col gap-4">
        <Input label="Start Date" type="date" required />
        <Input label="End Date" required />
        <Select
          title="Leave Type"
          required
          onhandleChange={(e) => console.log(e.target.value)}
          options={[
            {
              label: "Sick Leave",
              value: "sick_leave",
            },
            {
              label: "Casual Leave",
              value: "casual_leave",
            },
          ]}
        />
        <Textarea label="Reason" required />
        <Button>Send Application</Button>
      </div>
    </Modal>
  );
};

export default AddProjectModal;
