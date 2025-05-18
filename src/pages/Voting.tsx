import React, { useEffect, useMemo } from "react";
import AdminLayout from "../layouts/AdminLayout";
import CreateProposalModal from "../components/voting/create-proposal-modal";
import VoteComponent from "../components/voting/voting-card";
import ProposalTable from "../components/voting/proposal-table";
import { pinata } from "../utils/pinata";
import useProposalProvider from "../providers/proposal.providers";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Voting = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { proposalList } = useProposalProvider();

  const [currentActiveShown, setCurrentActiveShown] = React.useState();

  const currentActiveProposal = useMemo(() => {
    return proposalList.filter((proposal) => {
      return proposal.status === "0u8";
    });
  }, [proposalList]);

  const handleClickRight = () => {
    if (currentActiveShown === undefined) {
      setCurrentActiveShown(currentActiveProposal[0]);
    } else if (currentActiveShown < currentActiveProposal.length - 1) {
      setCurrentActiveShown(currentActiveProposal[currentActiveShown + 1]);
    }
  };
  const handleClickLeft = () => {
    if (currentActiveShown === undefined) {
      setCurrentActiveShown(currentActiveProposal[0]);
    } else if (currentActiveShown > 0) {
      setCurrentActiveShown(currentActiveProposal[currentActiveShown - 1]);
    }
  };

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
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <div className="text-xl font-semibold">Current Active Proposal</div>
            <div className="flex gap-1">
              <button
                onClick={handleClickLeft}
                disabled={currentActiveShown === 0}
                className=" px-4 h-fit py-2 rounded cursor-pointer disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleClickRight}
                disabled={
                  currentActiveShown === currentActiveProposal.length - 1
                }
                className=" px-4 h-fit py-2 rounded cursor-pointer disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
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
