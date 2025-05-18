import React, { createContext, useEffect } from "react";
import {
  VITE_DAO_CONTRACT_NAME,
  VITE_PRIVAPAY_CONTRACT_NAME,
} from "../config/env";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { js2leo, leo2js } from "../lib/aleo";
import { useAleoContract } from "../hooks/useAleoContract";
import { parseJSONLikeString } from "../utils/parser";
import { pinata } from "../utils/pinata";
import { decodeFromFWithQuotient } from "../utils/encodeDecode";

interface ProposalContext {
  proposalList: any[];
}

const initialState: ProposalContext = {
  proposalList: [],
};

export const ProposalContext = createContext<ProposalContext>(initialState);

export const ProposalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publicKey } = useWallet();
  const [proposalList, setProposalList] = React.useState<any[]>([]);

  const { program } = useAleoContract();
  const getCompanyData = async (company_id: any) => {
    const companyData = await program(VITE_PRIVAPAY_CONTRACT_NAME)
      .map("registered_company")
      .get(js2leo.field(leo2js.field(company_id)));
    console.log({ companyData });
    const parsedCompanyData = parseJSONLikeString(companyData);
    // const parsedJSON = JSON.parse(parsedCompanyData);
    return parsedCompanyData as any;
  };

  useEffect(() => {
    const fetchProposals = async () => {
      const latestProposalId = await program(VITE_DAO_CONTRACT_NAME)
        .map("latest_proposal_id")
        .get("true");
      const proposals: any[] = [];
      const parsedProposalId = parseJSONLikeString(latestProposalId || "0u32");
      const proposalId = leo2js.u32(parsedProposalId);
      for (let i = 2; i <= proposalId; i++) {
        const proposal = await program(VITE_DAO_CONTRACT_NAME)
          .map("proposals")
          .get(js2leo.u32(i));
        const proposalStatus = await program(VITE_DAO_CONTRACT_NAME)
          .map("proposal_status")
          .get(js2leo.u32(i));
        const parsedProposalStatus = parseJSONLikeString(proposalStatus);
        const parsedProposal: any = parseJSONLikeString(proposal);
        const companyData = await getCompanyData(parsedProposal.company_id);
        const cid = decodeFromFWithQuotient(
          leo2js.field(parsedProposal.detail_hash[0]),
          leo2js.field(parsedProposal.detail_hash[1])
        );
        const { data } = await pinata.gateways.public.get(cid);
        console.log("Data:", { data });
        // const parsedProposalDetailsFromIPFS = JSON.parse(data as string);

        proposals.push({
          data: data as string,
          ...parsedProposal,
          ...companyData,
          status: parsedProposalStatus,
        });
      }
      setProposalList(proposals);
    };

    fetchProposals();
  }, [publicKey]);

  return (
    <ProposalContext.Provider
      value={{
        proposalList,
      }}
    >
      {children}
    </ProposalContext.Provider>
  );
};

const useProposalProvider = () => {
  const context = React.useContext(ProposalContext);
  if (!context) {
    throw new Error(
      "useProposalProvider Hook must be used within the Provider"
    );
  }
  return context;
};

export default useProposalProvider;
