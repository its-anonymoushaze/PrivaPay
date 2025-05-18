import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import VoteComponent from "./voting-card";

interface CurrentActiveProposalContainerProps {
  proposals: any[];
  packetsPerPage?: number;
}

const CurrentActiveProposalContainer = ({
  proposals,
  packetsPerPage = 1,
}: CurrentActiveProposalContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(proposals.length / packetsPerPage));

  // Get current packets
  const indexOfLastPacket = currentPage * packetsPerPage;
  const indexOfFirstPacket = indexOfLastPacket - packetsPerPage;
  const currentPackets = proposals.slice(indexOfFirstPacket, indexOfLastPacket);

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
      {currentPackets.map((packet) => (
        <VoteComponent
          key={packet.id}
          title={packet.title}
          description={packet.description}
          proposer={packet.proposer}
          status={packet.status}
          ends={packet.ends}
          votesFor={packet.votesFor}
          votesAgainst={packet.votesAgainst}
          voteDistributionPercent={packet.voteDistributionPercent}
          votingPowerAvailable={packet.votingPowerAvailable}
          onVoteFor={() => alert("Voted For")}
          onVoteAgainst={() => alert("Voted Against")}
        />
      ))}
    </div>
  );
};

export default CurrentActiveProposalContainer;
