import { hashStruct } from "./hasher";

export const getEmployeeHash =
    async (company_id: bigint,
        employee_id: bigint,
        employee_address: string,
        token_id: bigint): Promise<string> => {
        const employeeHash = await hashStruct({
            company_id,
            employee_id,
            employee_address,
            token_id
        });
        return employeeHash
    }