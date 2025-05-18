import React from "react";

export interface ICustomSelectOptions {
  label: string;
  value: string;
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  title?: string;
  placeholder?: string;
  value?: string;
  options: ICustomSelectOptions[];
  onhandleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  id,
  onhandleChange,
  options,
  title,
  required,
  placeholder,
  value,
}: IProps) => {
  return (
    <div className="flex flex-col gap-1">
      {title && (
        <p className="text-xs text-gray-600 font-medium">
          {title} {required && <span className="text-red-500"> *</span>}
        </p>
      )}
      <select
        className="border border-gray-800 px-2 py-3 rounded-md text-sm focus:outline-none bg-transparent"
        value={value}
        id={id}
        onChange={onhandleChange}
      >
        <option value="">{`-- Select ${
          placeholder ?? title?.toLowerCase()
        } --`}</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
