import { useState } from "react";
import useRecordProvider from "../../providers/record.providers";
import AddEmployeeModal from "./add-employee-modal";
import EmployeeTable from "./employee-table";

const EmployeeContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { employeeRecordsAdmin } = useRecordProvider();
  console.log({ employeeRecordsAdmin });
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1 ">
            <span className="text-xl font-semibold">Employee List</span>
            <span className="text-sm text-gray-500">
              Here is the list of all the employee
            </span>
          </div>

          <button
            className="border border-orange-500 text-orange-500 bg-orange-500/5 px-4 h-fit py-2 rounded cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Employee
          </button>
        </div>
        <EmployeeTable
          employeeRecords={employeeRecordsAdmin}
          isLoading={false}
        />
      </div>
      <AddEmployeeModal
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default EmployeeContainer;
