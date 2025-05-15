import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";
import { useAddEmployee } from "../../hooks/useAddEmployee";

interface AddEmployeeModalProps {
  open: boolean;
  close: () => void;
}

const AddEmployeeModal = ({ open, close }: AddEmployeeModalProps) => {
  const { addEmployee } = useAddEmployee();

  const handleAddEmployee = async () => {
    const companyId = BigInt(1); // Replace with actual value
    const employeeId = BigInt(2); // Replace with actual value
    const employeeAddress = "0x1234567890abcdef"; // Replace with actual value
    const salary = BigInt(1000000); // Replace with actual value
    const tokenId = BigInt(3); // Replace with actual value
    const startPeriod = 1; // Replace with actual value
    const endPeriod = 2; // Replace with actual value

    await addEmployee(
      companyId,
      employeeId,
      employeeAddress,
      salary,
      tokenId,
      startPeriod,
      endPeriod
    );
  };

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
