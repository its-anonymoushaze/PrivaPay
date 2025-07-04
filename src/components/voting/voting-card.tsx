import React from "react";

interface VoteComponentProps {
  proposal: any;
  title: string;
  description: string;
  proposer: string;
  status: string;
  ends: string;
  votesFor: number;
  votesAgainst: number;
  voteDistributionPercent: number;
  votingPowerAvailable: number;
  onVoteFor: (proposal: any) => void;
  onVoteAgainst: (proposal: any) => void;
}

const VoteComponent: React.FC<VoteComponentProps> = ({
  title,
  proposal,
  description,
  proposer,
  status,
  ends,
  votesFor,
  votesAgainst,
  voteDistributionPercent,
  votingPowerAvailable,
  onVoteFor,
  onVoteAgainst,
}) => {
  return (
    <div className="border border-gray-800 rounded-md p-5 w-full flex gap-16  shadow-sm">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className=" text-gray-400">{description}</p>
        </div>

        <div className="flex justify-between flex-col gap-4 mb-5 text-sm">
          <div>
            <div className="font-semibold">Proposer</div>
            <div>{proposer}</div>
          </div>
          <div>
            <div className="font-semibold">Status</div>
            <div>{status}</div>
          </div>
          <div>
            <div className="font-semibold">Ending Height</div>
            <div>{ends}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-around font-bold mb-5">
          <div className="text-green-600">
            For
            <div>{votesFor}</div>
          </div>
          <div className="text-red-600">
            Against
            <div>{votesAgainst}</div>
          </div>
        </div>
        <div className="mb-3">
          <div className="text-xs mb-1">Vote Distribution</div>
          <div className="w-full h-2 rounded bg-red-500 overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: `${voteDistributionPercent}%` }}
            />
          </div>
          <div className="text-right text-xs flex gap-6">
            <span>{voteDistributionPercent || 0}% For</span>
            <span>{100 - voteDistributionPercent || 0}% Against</span>
          </div>
        </div>
        <div>
          <strong className="block mb-1">Cast Your Vote</strong>
          <div className="text-xs mb-3 text-gray-600">
            You have {votingPowerAvailable} voting power available
          </div>
          {proposal.votedByUser ? (
            <div className="px-2 py-1 text-sm border border-blue-500 text-blue-500 bg-blue-500/10 rounded-sm text-center w-full">
              You have already voted
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => onVoteFor(proposal)}
                className="flex-1 bg-green-700 hover:bg-green-800 text-white py-2 rounded font-semibold flex justify-center items-center gap-2"
              >
                Vote For
              </button>
              <button
                onClick={() => onVoteAgainst(proposal)}
                className="flex-1 bg-red-700 hover:bg-red-800 text-white py-2 rounded font-semibold flex justify-center items-center gap-2"
              >
                Vote Against
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoteComponent;
