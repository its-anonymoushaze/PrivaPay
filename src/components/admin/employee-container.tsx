import { useState } from "react";
import AddEmployeeModal from "./add-employee-modal";
import EmployeeCard from "./employee-card";
import useRecordProvider from "../../providers/record.providers";
import { leo2js } from "../../lib/aleo";

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
            <span className="text-sm font-semibold">
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {employeeRecordsAdmin.map((item: any) => (
            <EmployeeCard
              name={leo2js.field(item.employee_id).toString()}
              title={leo2js.address(item.employee_address)}
              description={leo2js.u128(item.amount).toString()}
            />
          ))}
        </div>
      </div>
      <AddEmployeeModal
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default EmployeeContainer;
