import { ChevronsUpDown, LayoutDashboard } from "lucide-react";
import { CustomPopover } from "../popover.component";
import CreateOrganization from "./create-organization";

const organizationList = [
  { label: "Org 1", link: "/dashboard" },
  { label: "Org 2", link: "/leave" },
];

const Organization = () => {
  const path = window.location.pathname;
  return (
    <CustomPopover
      className="flex flex-col gap-2"
      trigger={
        <button className="lg:px-4 lg:py-2 border border-gray-800 rounded-md flex items-center gap-2 justify-between w-full">
          <span className="hidden lg:block">My Organization</span>
          <ChevronsUpDown size={16} />
        </button>
      }
    >
      <div className="space-y-2">
        <div>Swtich Organization</div>
        {organizationList.map((item, index) => (
          <button
            key={index}
            onClick={() => window.location.replace(item.link)}
            className={`flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-900 transition-colors ${
              path === item.link ? "bg-gray-800 text-white" : ""
            }`}
          >
            <LayoutDashboard className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
        <CreateOrganization />
      </div>
    </CustomPopover>
  );
};

export default Organization;
