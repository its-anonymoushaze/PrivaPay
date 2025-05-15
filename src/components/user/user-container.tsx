import UserOrganizationTable from "./organization-table";

const UserContainer = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1 ">
            <span className="text-xl font-semibold">
              Organizations You are involved
            </span>
            <span className="text-sm font-semibold">
              Here is the list of all the employee
            </span>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <UserOrganizationTable />
        </div>
      </div>
    </>
  );
};

export default UserContainer;
