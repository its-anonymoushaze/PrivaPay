import { useCallback } from 'react';
import { useWallet as useAleoWallet } from '@demox-labs/aleo-wallet-adapter-react';
import { Transaction } from '@demox-labs/aleo-wallet-adapter-base';
import { js2leo } from '../lib/aleo';
import { useAleoTransaction } from './useAleoTransaction';
import { ALEO_WALLET_ADAPTER } from '../config/walletAdapter';
import { VITE_PRIVAPAY_CONTRACT_NAME } from '../config/env';


export const ALEO_ZERO_ADDRESS = 'aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc';

export const useCompanyRegister = () => {

    const { publicKey, connected, requestTransaction } = useAleoWallet();
    const { addTxns } = useAleoTransaction();

    const registerCompany = useCallback(async (company_id: bigint, company_name: bigint) => {
        try {
            if (connected && Boolean(publicKey)) {
                const fee_microcredits = 650_000;
                const inputs = [
                    js2leo.field(company_id),
                    js2leo.u128(company_name),
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_PRIVAPAY_CONTRACT_NAME,
                    'register_company',
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
                            },
                            onSuccess: async () => {
                                console.log('Transaction successful:', txId);
                            },
                        });
                }
            } else {
                console.error('Wallet not connected or public key not available');
            }
        } catch (errors: any) {
            console.error('Error in registerCompany:', errors);
        }
    }, []);



    return {
        registerCompany
    };
};
