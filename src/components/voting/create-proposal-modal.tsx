import { useState } from "react";
import Button from "../button.component";
import Input from "../input.component";
import Modal from "../modal.component";
import Select from "../select.component";
import Textarea from "../textarea.component";
import { getPreSignedURL, pinata } from "../../utils/pinata";

interface CreateProposalModalProps {
  open: boolean;
  close: () => void;
}

const CreateProposalModal = ({ open, close }: CreateProposalModalProps) => {
  const [proposalDetails, setProposalDetails] = useState({
    organizationId: "",
    blockHeight: "",
    title: "",
    description: "",
  });

  const [uploadStatus, setUploadStatus] = useState("");
  const [link, setLink] = useState("");

  const handleAddProposal = async () => {
    try {
      const textContent = `Title: ${proposalDetails.title}\nDescription: ${proposalDetails.description}`;

      // Create a Blob object with the text content
      const textBlob = new Blob([textContent], { type: "text/plain" });
      const file = new File([textBlob], "formData.txt", {
        type: "text/plain",
      });

      const urldata = await getPreSignedURL();
      console.log("URL", urldata);
      setUploadStatus("Uploading file...");

      const upload = await pinata.upload.public.file(file).url(urldata);

      if (upload.cid) {
        setUploadStatus("File uploaded successfully!");
        const ipfsLink = await pinata.gateways.public.convert(upload.cid);
        setLink(ipfsLink);
      } else {
        setUploadStatus("Upload failed");
      }
      alert("Proposal added successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      title="Create Proposal"
      description="Please fill in the details below:"
      isOpen={open}
      showCloseButton
      onClose={close}
    >
      <div className="flex flex-col gap-4">
        <Select
          required
          title="Organization"
          onhandleChange={(e: any) => {
            setProposalDetails({
              ...proposalDetails,
              organizationId: e.value,
            });
          }}
          options={[
            { label: "org1", value: "1" },
            { label: "org2", value: "2" },
          ]}
        />
        <Input
          label="Title"
          required
          onChange={(e) => {
            setProposalDetails({
              ...proposalDetails,
              title: e.target.value,
            });
          }}
        />

        <Textarea
          label="Description"
          required
          onChange={(e) => {
            setProposalDetails({
              ...proposalDetails,
              description: e.target.value,
            });
          }}
        />

        <Input
          label="End Date"
          required
          onChange={(e) => {
            setProposalDetails({
              ...proposalDetails,
              blockHeight: e.target.value,
            });
          }}
        />

        {link && (
          <a href={link} target="_blank">
            View File
          </a>
        )}

        <Button onClick={handleAddProposal}>
          {uploadStatus || "Submit Proposal"}
        </Button>
      </div>
    </Modal>
  );
};

export default CreateProposalModal;
