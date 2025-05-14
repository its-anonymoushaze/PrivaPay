import React from "react";
import Modal from "../modal.component";

interface AddEmployeeModalProps {
  open: boolean;
  close: () => void;
}

const AddEmployeeModal = ({ open, close }: AddEmployeeModalProps) => {
  return (
    <Modal title="Add Employee" isOpen={open} onClose={close}>
      <div>
        <h2>Add Employee</h2>
        <button onClick={close}>Close</button>
      </div>
    </Modal>
  );
};

export default AddEmployeeModal;
