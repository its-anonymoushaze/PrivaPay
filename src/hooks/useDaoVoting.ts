import { useCallback } from 'react';
import { useWallet } from '@demox-labs/aleo-wallet-adapter-react';
import { Transaction } from '@demox-labs/aleo-wallet-adapter-base';
import { js2leo, leo2js } from '../lib/aleo';
import { useAleoTransaction } from './useAleoTransaction';
import { ALEO_WALLET_ADAPTER } from '../config/walletAdapter';
import { VITE_DAO_CONTRACT_NAME } from '../config/env';
import { useAleoContract } from './useAleoContract';
import { parseJSONLikeString } from '../utils/parser';
import { toast } from 'sonner';


export const ALEO_ZERO_ADDRESS = 'aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc';

export const useDaoVoting = () => {

    const { publicKey, connected, requestTransaction } = useWallet();
    const { addTxns } = useAleoTransaction();
    const { program } = useAleoContract()

    const createProposal = useCallback(async (company_id: bigint, time_limit: number, detail_hash: bigint[], token_record: any) => {
        try {
            if (connected && Boolean(publicKey)) {
                const proposal_id_raw = await program(VITE_DAO_CONTRACT_NAME).map("latest_proposal_id").get("true")
                const proposal_id_parsed = parseJSONLikeString(proposal_id_raw || "0u32")
                const proposal_id = leo2js.u32(proposal_id_parsed) + 1
                const fee_microcredits = 650_000;
                const inputs = [
                    js2leo.u32(proposal_id),
                    js2leo.field(company_id),
                    js2leo.u32(time_limit),
                    `[${detail_hash.map((hash) => js2leo.field(hash)).join(',')}]`,
                    token_record
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_DAO_CONTRACT_NAME,
                    'propose',
                    inputs,
                    fee_microcredits,
                    false,
                );

                if (requestTransaction) {

                    // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
                    const txId = await requestTransaction(transction);

                    if (addTxns)
                        addTxns({
                            txID: txId,
                            onError: (error) => {
                                console.error('Transaction failed:', error);
                                toast.error('Transaction failed');
                            },
                            onSuccess: async () => {
                                console.log('Transaction successful:', txId);
                                toast.success('Transaction successful');
                            },
                        });
                }
            } else {
                console.error('Wallet not connected or public key not available');
            }
        } catch (errors: any) {
            console.error('Error in creating proposal:', errors);
        }
    }, []);


    const voteProposal = useCallback(async (proposal_id: number, company_id: bigint, token_record: any, accept: boolean) => {
        try {
            if (connected && Boolean(publicKey)) {
                const fee_microcredits = 650_000;
                const inputs = [
                    js2leo.u32(proposal_id),
                    js2leo.field(company_id),
                    token_record,
                    js2leo.boolean(accept)
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_DAO_CONTRACT_NAME,
                    'vote_proposal',
                    inputs,
                    fee_microcredits,
                    false,
                );

                if (requestTransaction) {

                    // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
                    const txId = await requestTransaction(transction);

                    if (addTxns)
                        addTxns({
                            txID: txId,
                            onError: (error) => {
                                console.error('Transaction failed:', error);
                                toast.error('Transaction failed');
                            },
                            onSuccess: async () => {
                                console.log('Transaction successful:', txId);
                                toast.success('Transaction successful');
                            },
                        });
                }
            } else {
                console.error('Wallet not connected or public key not available');
            }
        } catch (errors: any) {
            console.error('Error in creating proposal:', errors);
        }
    }, []);

    const cancelProposal = useCallback(async (proposal_id: number) => {
        try {

            if (connected && Boolean(publicKey)) {
                const fee_microcredits = 650_000;
                const inputs = [
                    js2leo.u32(proposal_id),
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_DAO_CONTRACT_NAME,
                    'cancel_proposal',
                    inputs,
                    fee_microcredits,
                    false,
                );

                if (requestTransaction) {

                    // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
                    const txId = await requestTransaction(transction);

                    if (addTxns)
                        addTxns({
                            txID: txId,
                            onError: (error) => {
                                console.error('Transaction failed:', error);
                                toast.error('Transaction failed');
                            },
                            onSuccess: async () => {
                                console.log('Transaction successful:', txId);
                                toast.success('Transaction successful');
                            },
                        });
                }
            } else {
                console.error('Wallet not connected or public key not available');
            }
        }
        catch (errors: any) {
            console.error('Error in creating proposal:', errors);
        }
    }, []);


    const closeProposal = useCallback(async (proposal_id: number, company_id: bigint, acceptance: boolean) => {
        try {
            if (connected && Boolean(publicKey)) {
                const fee_microcredits = 650_000;
                const inputs = [
                    js2leo.u32(proposal_id),
                    js2leo.field(company_id),
                    js2leo.boolean(acceptance)
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_DAO_CONTRACT_NAME,
                    'close_proposal',
                    inputs,
                    fee_microcredits,
                    false,
                );

                if (requestTransaction) {

                    // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
                    const txId = await requestTransaction(transction);

                    if (addTxns)
                        addTxns({
                            txID: txId,
                            onError: (error) => {
                                console.error('Transaction failed:', error);
                                toast.error('Transaction failed');
                            },
                            onSuccess: async () => {
                                console.log('Transaction successful:', txId);
                                toast.success('Transaction successful');
                            },
                        });
                }
            } else {
                console.error('Wallet not connected or public key not available');
            }
        } catch (errors: any) {
            console.error('Error in creating proposal:', errors);
        }
    }
        , []);
    return {
        createProposal,
        voteProposal,
        cancelProposal,
        closeProposal
    };
};
