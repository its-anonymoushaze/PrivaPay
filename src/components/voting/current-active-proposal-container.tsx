import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import VoteComponent from "./voting-card";
import { leo2js } from "../../lib/aleo";
import { useDaoVoting } from "../../hooks/useDaoVoting";
import useRecordProvider from "../../providers/record.providers";
import { toast } from "sonner";

interface CurrentActiveProposalContainerProps {
  proposals: any[];
  packetsPerPage?: number;
}

const CurrentActiveProposalContainer = ({
  proposals,
  packetsPerPage = 1,
}: CurrentActiveProposalContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { voteProposal } = useDaoVoting();
  const { votingRecords } = useRecordProvider();

  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(proposals.length / packetsPerPage));

  // Get current packets
  const indexOfLastPacket = currentPage * packetsPerPage;
  const indexOfFirstPacket = indexOfLastPacket - packetsPerPage;
  const currentPackets = proposals.slice(indexOfFirstPacket, indexOfLastPacket);

  const handleVote = async (proposal: any, acceptance: boolean) => {
    console.log("Proposal", proposal);
    console.log("Acceptance", acceptance);
    try {
      await voteProposal(
        leo2js.u32(proposal.id),
        leo2js.field(proposal.company_id),
        votingRecords[0],
        acceptance
      );
      toast.success("Vote transaction initiated successfully");
    } catch (error) {
      console.error("Error voting on proposal:", error);
      toast.error("Error voting on proposal");
    }
  };
  // Handle pagination
  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between w-full">
        <div className="text-xl font-semibold">Current Active Proposal</div>
        <div className="flex gap-1">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className=" px-4 h-fit py-2 rounded cursor-pointer disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className=" px-4 h-fit py-2 rounded cursor-pointer disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      {currentPackets.length === 0 ? (
        <div className="flex w-full text-gray-600 text-center">
          No Active Proposals
        </div>
      ) : (
        currentPackets.map((proposal) => (
          <VoteComponent
            key={leo2js.u32(proposal.id)}
            proposal={proposal}
            title={proposal.data}
            description={proposal.data}
            proposer={proposal.proposer}
            status={"Active"}
            ends={leo2js.u32(proposal.time_limit).toString()}
            votesFor={Number(proposal.yes_hash_count)}
            votesAgainst={Number(proposal.no_hash_count)}
            voteDistributionPercent={
              (Number(proposal.yes_hash_count) /
                (Number(proposal.yes_hash_count) +
                  Number(proposal.no_hash_count))) *
              100
            }
            votingPowerAvailable={100}
            onVoteFor={(prop) => handleVote(prop, true)}
            onVoteAgainst={(prop) => handleVote(prop, false)}
          />
        ))
      )}
    </div>
  );
};

export default CurrentActiveProposalContainer;
