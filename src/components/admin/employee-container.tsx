import { useState } from "react";
import AddEmployeeModal from "./add-employee-modal";
import EmployeeCard from "./employee-card";

const EmployeeContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            className="bg-orange-500 text-white px-4 h-fit py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Employee
          </button>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <EmployeeCard
            name="John Doe"
            title="Software Engineer"
            description="Passionate about building scalable applications."
          />
          <EmployeeCard
            name="Jane Smith"
            title="Product Manager"
            description="Expert in driving product vision and strategy."
          />
          <EmployeeCard
            name="Alice Johnson"
            title="UX Designer"
            description="Focused on creating user-friendly interfaces."
          />
          <EmployeeCard
            name="Bob Brown"
            title="Data Scientist"
            description="Skilled in data analysis and machine learning."
          />
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
