import { useState } from "react";
import AddEmployeeModal from "../components/employee/add-employee-modal";
import EmployeeCard from "../components/employee/employee-card";
import AdminLayout from "../layouts/AdminLayout";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex justify-between w-full">
          <span>Employee List</span>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
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
    </AdminLayout>
  );
};

export default Employee;
