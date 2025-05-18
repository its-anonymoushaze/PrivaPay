import { useCallback } from 'react';
import { useWallet as useAleoWallet } from '@demox-labs/aleo-wallet-adapter-react';
import { Transaction } from '@demox-labs/aleo-wallet-adapter-base';
import { js2leo } from '../lib/aleo';
import { useAleoTransaction } from './useAleoTransaction';
import { ALEO_WALLET_ADAPTER } from '../config/walletAdapter';
import { VITE_PRIVAPAY_CONTRACT_NAME } from '../config/env';


export const ALEO_ZERO_ADDRESS = 'aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc';

export const useWithdrawSalary = () => {

    const { publicKey, connected, requestTransaction } = useAleoWallet();
    const { addTxns } = useAleoTransaction();

    const withdrawSalary = useCallback(async (employee_record: any, withdraw_amount: bigint) => {
        try {
            if (connected && Boolean(publicKey)) {
                const fee_microcredits = 650_000;
                const inputs = [
                    employee_record,
                    js2leo.u128(withdraw_amount),
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_PRIVAPAY_CONTRACT_NAME,
                    'withdraw_salary',
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
            console.error('Error in addEmployee:', errors);
        }
    }, []);



    return {
        withdrawSalary
    };
};
