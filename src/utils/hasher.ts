import init, { hash } from 'aleo-hasher-web';
import { js2leo } from '../lib/aleo';

export const hashStruct = async (struct: any, fieldName = 'field'): Promise<string> => {
    const structString = js2leo.json(struct)
    await init('../../aleo_hasher_bg.wasm');
    const structHash = hash("bhp256", structString, fieldName);
    return structHash
}