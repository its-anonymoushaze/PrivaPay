import React from "react";
import { placeholderImage } from "../../constant/image";

interface EmployeeCardProps {
  name: string;
  title: string;
  description: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  title,
  description,
}) => {
  return (
    <div className="flex rounded-lg shadow-md w-full h-fit border border-gray-700">
      {/* Image Placeholder */}
      <div className="w-1/3">
        <img
          src={placeholderImage}
          alt="Employee"
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>

      {/* Employee Details */}
      <div className="w-2/3 p-4">
        <h3 className="text-xl font-semibold ">{name}</h3>
        <p className="text-md text-gray-500">{title}</p>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
