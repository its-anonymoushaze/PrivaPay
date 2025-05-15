import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";

interface CreateOrganizationModalProps {
  open: boolean;
  close: () => void;
}

const CreateOrganizationModal = ({
  open,
  close,
}: CreateOrganizationModalProps) => {
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
