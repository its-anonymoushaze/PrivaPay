import { ChevronsUpDown, LayoutDashboard } from "lucide-react";
import { CustomPopover } from "../popover.component";
import CreateOrganization from "./create-organization";
import useRecordProvider from "../../providers/record.providers";
import { asciiToString } from "../../utils/stringToAscii";
import { leo2js } from "../../lib/aleo";
import { useMemo } from "react";

const Organization = () => {
  const {
    companyRecords,
    currentOrganization,
    employeeRecords,
    setCurrentOrganization,
  } = useRecordProvider();

  const currentOrganizationName = useMemo(() => {
    return (
      [...companyRecords].find(
        (item: any) => leo2js.field(item.company_id) === currentOrganization
      )?.company_name || "5u128"
    );
  }, [companyRecords, currentOrganization, employeeRecords]);
  console.log({ currentOrganizationName });
  const path = window.location.pathname;

  return (
    <CustomPopover
      className="flex flex-col gap-2"
      trigger={
        <button className="lg:px-4 lg:py-2 border border-gray-800 rounded-md flex items-center gap-2 justify-between w-full">
          <span className="hidden lg:block">
            {" "}
            {asciiToString(leo2js.u128(currentOrganizationName))}
          </span>
          <ChevronsUpDown size={16} />
        </button>
      }
    >
      <div className="space-y-2">
        <div>Swtich Organization</div>
        {companyRecords.map((item: any, index: any) => (
          <button
            key={index}
            onClick={() =>
              setCurrentOrganization(leo2js.field(item.company_id))
            }
            className={`flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-900 transition-colors ${
              path === item.link ? "bg-gray-800 text-white" : ""
            }`}
          >
            <LayoutDashboard className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">
              {asciiToString(leo2js.u128(item.company_name))}
            </span>
          </button>
        ))}
        <CreateOrganization />
      </div>
    </CustomPopover>
  );
};

export default Organization;
