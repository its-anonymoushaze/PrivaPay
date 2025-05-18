export function getFormattedNameInput(name: string, length: number): string {
    const nameInputs = padArray(splitStringToBigInts(name), length);
    return `[${nameInputs.map(i => i + 'u128').join(",")}]`;
}


export function padArray(array: bigint[], length: number): bigint[] {
    const paddingLength = length - array.length;
    if (paddingLength <= 0) {
        return array; // No padding needed
    }

    const padding = Array(paddingLength).fill(BigInt(0));
    const paddedArray = array.concat(padding);
    return paddedArray;
}

export function splitStringToBigInts(input: string): bigint[] {
    const encoder = new TextEncoder(); // Create a new TextEncoder instance
    const inputBytes = encoder.encode(input); // Encode the input string as bytes
    const chunkSize = 16; // Chunk size to split the string in bytes
    const numChunks = Math.ceil(inputBytes.length / chunkSize);
    const bigInts: bigint[] = [];

    for (let i = 0; i < numChunks; i++) {
        const chunkStart = i * chunkSize;
        const chunkEnd = chunkStart + chunkSize;
        const chunk = inputBytes.slice(chunkStart, chunkEnd);
        let bigIntValue = BigInt(0);
        for (let i = 0; i < chunk.length; i++) {
            const byteValue = BigInt(chunk[i]);
            const shiftedValue = byteValue << BigInt(8 * i);
            bigIntValue = bigIntValue | shiftedValue;
        }
        bigInts.push(bigIntValue);
    }

    return bigInts;
}