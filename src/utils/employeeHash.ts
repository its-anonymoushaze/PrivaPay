import { js2leo } from "../lib/aleo";
import { hashStruct } from "./hasher";

export const getEmployeeHash =
    async (company_id: bigint,
        employee_id: bigint,
        employee_name_field: bigint,
        token_id: bigint): Promise<string> => {
        const employeeHash = await hashStruct({
            company_id: js2leo.field(company_id),
            employee_id: js2leo.field(employee_id),
            employee_name_field: js2leo.field(employee_name_field),
            token_id: js2leo.field(token_id)
        });
        return employeeHash
    }