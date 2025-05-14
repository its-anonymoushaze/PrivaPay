import React from "react";
import Modal from "../modal.component";
import Input from "../input.component";
import Select from "../select.component";
import Textarea from "../textarea.component";
import Button from "../button.component";

interface AddEmployeeModalProps {
  open: boolean;
  close: () => void;
}

const AddEmployeeModal = ({ open, close }: AddEmployeeModalProps) => {
  return (
    <Modal
      title="Add Employee"
      description="Please fill in the details below:"
      isOpen={open}
      onClose={close}
    >
      <div>
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
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
