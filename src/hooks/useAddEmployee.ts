import { useCallback } from 'react';
import { useWallet as useAleoWallet } from '@demox-labs/aleo-wallet-adapter-react';
import { Transaction } from '@demox-labs/aleo-wallet-adapter-base';
import { js2leo } from '../lib/aleo';
import { useAleoTransaction } from './useAleoTransaction';
import { ALEO_WALLET_ADAPTER } from '../config/walletAdapter';
import { VITE_PRIVAPAY_CONTRACT_NAME } from '../config/env';
import { useAleoContract } from './useAleoContract';
import { parseJSONLikeString } from '../utils/parser';
import { getFormattedNameInput } from '../utils/ans_utils';


export const ALEO_ZERO_ADDRESS = 'aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc';

export const useAddEmployee = () => {

    const { publicKey, connected, requestTransaction } = useAleoWallet();
    const { addTxns } = useAleoTransaction();
    const { program } = useAleoContract()

    const addEmployee = useCallback(async (company_id: bigint, employee_id: bigint, employee_address: string, salary: bigint, token_id: bigint, start_period: number, end_period: number, name: string) => {
        try {
            if (connected && Boolean(publicKey)) {
                const registrar_data_raw = await program('ans_registrar_usd2.aleo').map('price_data').get('0u64')
                const registrar_data_parsed: any = parseJSONLikeString(registrar_data_raw)
                const name_array = getFormattedNameInput(name, 4)
                // const registrar_data_stringified=JSON.stringify(registrat_data_parsed)
                // const registrar_data=JSON.parse(registrar_data_stringified)
                // const price=
                const fee_microcredits = 650_000;
                const inputs = [
                    js2leo.field(company_id),
                    js2leo.field(employee_id),
                    js2leo.address(employee_address),
                    js2leo.u128(salary),
                    js2leo.field(token_id),
                    js2leo.u32(start_period),
                    js2leo.u32(end_period),
                    name_array,
                    registrar_data_parsed.timestamp,
                    registrar_data_parsed.price
                ];
                const transction = Transaction.createTransaction(
                    publicKey!,
                    ALEO_WALLET_ADAPTER,
                    VITE_PRIVAPAY_CONTRACT_NAME,
                    'add_employee',
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
        addEmployee
    };
};
