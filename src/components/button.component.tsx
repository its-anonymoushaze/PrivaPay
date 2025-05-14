import React from "react";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

const Button = ({ children, className, variant, ...rest }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2  duration-200 transition-colors text-nowrap h-fit text-sm rounded-lg disabled:cursor-not-allowed ${className} ${
        variant === "outline"
          ? "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          : "bg-orange-500 rounded-lg hover:bg-orange-600"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
