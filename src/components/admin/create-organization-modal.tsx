import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";
import { useCompanyRegister } from "../../hooks/useCompanyRegister";
import { stringToAscii } from "../../utils/stringToAscii";
import { useState } from "react";

interface CreateOrganizationModalProps {
  open: boolean;
  close: () => void;
}

const CreateOrganizationModal = ({
  open,
  close,
}: CreateOrganizationModalProps) => {
  const { registerCompany } = useCompanyRegister();

  const [organizationDetails, setOrganizationDetails] = useState({
    organizationId: "",
    organizationName: "",
  });
  const handleCreateOrganization = async () => {
    const companyId = BigInt(organizationDetails.organizationId);
    const companyName = stringToAscii(organizationDetails.organizationName);

    try {
      await registerCompany(companyId, companyName);
      alert("Organization created successfully");
      close();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      title="Create Organization"
      showCloseButton
      description="Please provide the necessary details to create an organization."
      isOpen={open}
      onClose={close}
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Organization ID"
          required
          onChange={(e) => {
            setOrganizationDetails({
              ...organizationDetails,
              organizationId: e.target.value,
            });
          }}
        />
        <Input
          label="Organization Name"
          required
          onChange={(e) => {
            setOrganizationDetails({
              ...organizationDetails,
              organizationName: e.target.value,
            });
          }}
        />

        <Button onClick={handleCreateOrganization}>Create Organization</Button>
      </div>
    </Modal>
  );
};

export default CreateOrganizationModal;
