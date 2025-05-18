import React, { useEffect, useMemo } from "react";
import CreateProposalModal from "../components/voting/create-proposal-modal";
import CurrentActiveProposalContainer from "../components/voting/current-active-proposal-container";
import ProposalTable from "../components/voting/proposal-table";
import AdminLayout from "../layouts/AdminLayout";
import useProposalProvider from "../providers/proposal.providers";
import { pinata } from "../utils/pinata";

const Voting = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { proposalList } = useProposalProvider();

  const currentActiveProposal = useMemo(() => {
    return proposalList.filter((proposal) => {
      return proposal.status === "0u8";
    });
  }, [proposalList]);

  console.log("Current Active Proposal", currentActiveProposal);

  useEffect(() => {
    const fetchData = async () => {
      const url = await pinata.gateways.public.convert(
        "bafkreigm3y3jbky22lyhrmuk7qeuxqcqo3gst42uvxklbx3cs4xg4j6g3y"
      );
      const { data } = await pinata.gateways.public.get(
        "bafkreigm3y3jbky22lyhrmuk7qeuxqcqo3gst42uvxklbx3cs4xg4j6g3y"
      );

      console.log(url);

      console.log("Data:", data);
    };
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-10 p-8">
        <CurrentActiveProposalContainer proposals={currentActiveProposal} />
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1 ">
            <span className="text-xl font-semibold">Proposal List</span>
            <span className="text-sm text-gray-500">
              Here is the list of all the proposals
            </span>
          </div>

          <button
            className="border border-orange-500 text-orange-500 bg-orange-500/5 px-4 h-fit py-2 rounded cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            + Create Proposal
          </button>
        </div>
        <ProposalTable />
      </div>
      <CreateProposalModal
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </AdminLayout>
  );
};

export default Voting;
