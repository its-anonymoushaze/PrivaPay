import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";
import { useAddEmployee } from "../../hooks/useAddEmployee";
import { useState } from "react";
import { vUSDCTokenID } from "../../config/token";

interface AddEmployeeModalProps {
  open: boolean;
  close: () => void;
}

const AddEmployeeModal = ({ open, close }: AddEmployeeModalProps) => {
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeId: "",
    employeeName: "",
    employeeAddress: "",
    salary: "",
    startPeroiod: 0,
    endPeriod: 0,
  });

  const { addEmployee } = useAddEmployee();

  const handleAddEmployee = async () => {
    const companyId = BigInt(1); // Replace with actual value
    const employeeId = BigInt(employeeDetails.employeeId); // Replace with actual value
    const employeeAddress = employeeDetails.employeeAddress; // Replace with actual value
    const salary = BigInt(employeeDetails.salary); // Replace with actual value
    const tokenId = vUSDCTokenID; // Replace with actual value
    const startPeriod = employeeDetails.startPeroiod; // Replace with actual value
    const endPeriod = employeeDetails.endPeriod; // Replace with actual value
    const employeeName = employeeDetails.employeeName; // Replace with actual value

    try {
      await addEmployee(
        companyId,
        employeeId,
        employeeAddress,
        salary,
        tokenId,
        startPeriod,
        endPeriod,
        employeeName
      );

      alert("Employee added successfully");
      close();
    } catch (e) {
      console.log(e);
    }
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
          <Input
            label="Employee ID"
            required
            onChange={(e) => {
              setEmployeeDetails({
                ...employeeDetails,
                employeeId: e.target.value,
              });
            }}
          />
          <Input
            label="Employee Name"
            type="string"
            required
            onChange={(e) => {
              setEmployeeDetails({
                ...employeeDetails,
                employeeName: e.target.value,
              });
            }}
          />
          <Input
            label="Employee Address"
            required
            onChange={(e) => {
              setEmployeeDetails({
                ...employeeDetails,
                employeeAddress: e.target.value,
              });
            }}
          />
          <Input
            label="Salary"
            type="number"
            required
            onChange={(e) => {
              setEmployeeDetails({
                ...employeeDetails,
                salary: e.target.value,
              });
            }}
          />
          <Input
            label="Start Period"
            type="number"
            required
            onChange={(e) => {
              setEmployeeDetails({
                ...employeeDetails,
                startPeroiod: Number(e.target.value),
              });
            }}
          />
          <Input
            label="End Period"
            type="number"
            required
            onChange={(e) => {
              setEmployeeDetails({
                ...employeeDetails,
                endPeriod: Number(e.target.value),
              });
            }}
          />

          <Button onClick={handleAddEmployee}>Send Application</Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
