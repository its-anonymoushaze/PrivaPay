import React from "react";
import CreateOrganizationModal from "./create-organization-modal";

const CreateOrganization = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(true)}
        className="border-dashed border border-gray-800 rounded-md w-full py-1 cursor-pointer hover:border-"
      >
        + Add Organization
      </button>
      <CreateOrganizationModal open={open} close={() => setOpen(false)} />
    </React.Fragment>
  );
};

export default CreateOrganization;
