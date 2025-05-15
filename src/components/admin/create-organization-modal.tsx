import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";
import { useCompanyRegister } from "../../hooks/useCompanyRegister";
import { stringToAscii } from "../../utils/stringToAscii";

interface CreateOrganizationModalProps {
  open: boolean;
  close: () => void;
}

const CreateOrganizationModal = ({
  open,
  close,
}: CreateOrganizationModalProps) => {
  const { registerCompany } = useCompanyRegister();
  const handleCreateOrganization = async () => {
    const companyId = BigInt(1); // Replace with actual value
    const companyName = stringToAscii("Venture23"); // Replace with actual value
    await registerCompany(companyId, companyName);
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
        <Input label="Organization ID" required />
        <Input label="Organization Name" required />

        <Button>Create Organization</Button>
      </div>
    </Modal>
  );
};

export default CreateOrganizationModal;
