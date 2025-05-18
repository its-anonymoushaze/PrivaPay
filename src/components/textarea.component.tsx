
import React from "react";
import { convertToCamelCase } from "../utils/convertToCamelCase";

export interface ITextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = ({ label, required, ...rest }: ITextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={convertToCamelCase(label)}
        className="text-xs text-gray-600 font-medium"
      >
        {label} {required && <span className="text-red-500"> *</span>}
      </label>

      <textarea
        rows={4}
        id={convertToCamelCase(label)}
        className="flex gap-1 border border-gray-800 rounded-md items-center px-2 py-1 bg-transparent focus:outline-none w-full"
        {...rest}
      />
    </div>
  );
};

export default Textarea;
