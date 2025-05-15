import { WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base";
import { VITE_NETWORK_TYPE } from "./env";

export const ALEO_WALLET_ADAPTER = VITE_NETWORK_TYPE === "mainnet" ? WalletAdapterNetwork.MainnetBeta : WalletAdapterNetwork.TestnetBeta;