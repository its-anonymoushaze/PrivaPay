import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { useCallback } from "react";

export const useFetchRecords = () => {
    const { publicKey, requestRecords } = useWallet();

    const fetchRecords = useCallback(async (program: string): Promise<any> => {

        if (!publicKey) throw new WalletNotConnectedError();
        if (requestRecords) {
            const records = await requestRecords(program);

            return records;
        }
    }, []);

    return { fetchRecords }
};