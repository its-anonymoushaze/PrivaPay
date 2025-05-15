import { js2leo } from "../lib/aleo";
import { hashStruct } from "./hasher";

export const getEmployeeHash =
    async (company_id: bigint,
        employee_id: bigint,
        employee_address: string,
        token_id: bigint): Promise<string> => {
        const employeeHash = await hashStruct({
            company_id: js2leo.field(company_id),
            employee_id: js2leo.field(employee_id),
            employee_address: js2leo.address(employee_address),
            token_id: js2leo.field(token_id)
        });
        return employeeHash
    }