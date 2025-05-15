import cn from "classnames";
import React from "react";
import { convertToCamelCase } from "../utils/convertToCamelCase";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input = ({ label, icon, className, required, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={convertToCamelCase(label ?? "")}
        className="text-xs text-gray-600 font-medium"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="flex gap-1 border border-gray-800 rounded-md items-center px-2">
        {icon && icon}
        <input
          id={convertToCamelCase(label ?? "")}
          className={cn(
            className,
            "bg-transparent w-full focus:outline-none py-2 appearance-none"
          )}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
