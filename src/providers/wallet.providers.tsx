import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";
import { useMemo } from "react";
import {
  PuzzleWalletAdapter,
  LeoWalletAdapter,
  FoxWalletAdapter,
  SoterWalletAdapter,
} from "aleo-adapters";
import { VITE_NETWORK_TYPE, VITE_PRIVAPAY_CONTRACT_NAME } from "../config/env";

export default function Providers({ children }: { children: React.ReactNode }) {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Aleo app",
      }),
      new PuzzleWalletAdapter({
        programIdPermissions: {
          [WalletAdapterNetwork.MainnetBeta]: [VITE_PRIVAPAY_CONTRACT_NAME],
          [WalletAdapterNetwork.TestnetBeta]: [VITE_PRIVAPAY_CONTRACT_NAME],
        },
        appName: "Aleo app",
        appDescription: "A privacy-focused DeFi app",
        appIconUrl: "",
      }),
      new FoxWalletAdapter({
        appName: "Aleo app",
      }),
      new SoterWalletAdapter({
        appName: "Aleo app",
      }),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.OnChainHistory}
      network={
        VITE_NETWORK_TYPE == "mainnet"
          ? WalletAdapterNetwork.MainnetBeta
          : WalletAdapterNetwork.TestnetBeta
      }
      autoConnect
    >
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
}
