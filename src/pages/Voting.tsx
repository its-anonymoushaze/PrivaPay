import React, { useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import CreateProposalModal from "../components/voting/create-proposal-modal";
import VoteComponent from "../components/voting/voting-card";
import ProposalTable from "../components/voting/proposal-table";
import { pinata } from "../utils/pinata";

const Voting = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Current Active Proposal</div>
          <VoteComponent
            title="Increase Developer Fund by 5%"
            description="Allocate an additional 5% of treasury to the developer grants program to accelerate platform development."
            proposer="0x7a2C...F3b9"
            status="Active"
            ends="5/19/2025, 3:24:27 PM"
            votesFor={2350000}
            votesAgainst={1260000}
            voteDistributionPercent={65}
            votingPowerAvailable={57000}
            onVoteFor={() => alert("Voted For")}
            onVoteAgainst={() => alert("Voted Against")}
          />
        </div>

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
