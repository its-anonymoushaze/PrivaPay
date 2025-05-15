import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";

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
      showCloseButton
      onClose={close}
    >
      <div>
        <div className="flex flex-col gap-4">
          <Input label="Employee ID" required />
          <Input label="Employee Address" required />
          <Input label="Salary" type="number" required />
          <Input label="Start Date" type="date" required />
          <Input label="End Date" type="date" required />

          <Button>Send Application</Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
