
import ReactSelect, { type StylesConfig } from "react-select";
import { convertToCamelCase } from "../utils/convertToCamelCase";

interface OptionType {
  value: string;
  label: string;
}

const darkThemeStyles: StylesConfig<OptionType> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#transparent", // Dark background for the control
    borderColor: "#1f2937", // Border color
    ":hover": {
      borderColor: "#1f2937", // On hover border color
    },
    ":focus": {
      border: "none",
      borderColor: "transparent",
      outline: "none",
      outlineColor: "transparent",
    },
    boxShadow: state.isFocused ? "none" : "none", // Focus shadow
    color: "#fff", // Text color
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#000000" // Selected option background
      : state.isFocused
      ? "#1f1f1f" // Hovered option background
      : "transparent", // Default option background
    color: state.isSelected ? "#fff" : "#fff", // Text color
    ":active": {
      backgroundColor: "#f97316",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#171717", // Dropdown menu background
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff", // Selected value text color
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff", // Input text color
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#a0aec0", // Placeholder text color
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#222222",
      borderRadius: 6,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "",
    ":hover": {
      color: "red",
    },
  }),
};

interface CustomReactSelectProps {
  label?: string;
  required?: boolean;
  options: OptionType[];
  onHandleChange: (value: string[]) => void;
}
const CustomReactSelect = ({
  label,
  required,
  options,
  onHandleChange,
}: CustomReactSelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={convertToCamelCase(label ?? "")}
        className="text-xs text-gray-600 font-medium"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <ReactSelect
        onChange={(option) => onHandleChange(option.map((o) => o.value))}
        isMulti
        name={convertToCamelCase(label ?? "")}
        styles={darkThemeStyles}
        placeholder=""
        options={options}
        className="bg-background"
      />
    </div>
  );
};

export default CustomReactSelect;
