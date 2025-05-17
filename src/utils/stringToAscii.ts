export const stringToAscii = (str: string): bigint => {
    // this function converts a string to an array of ASCII values, and then converts them into hex and concatenates them and then converts them to decimal

    const asciiArray = Array.from(str).map((char) => char.charCodeAt(0));
    const hexArray = asciiArray.map((num) => num.toString(16).padStart(2, '0'));
    const hexString = hexArray.join('');
    const decimalValue = BigInt(parseInt(hexString, 16));
    return decimalValue;
}

export const asciiToString = (ascii: bigint): string => {
    // this function converts a bigint to hex and then converts it to an array of ASCII values, and then converts them into a string
    const hexString = ascii.toString(16);
    // convert hex string to array of ASCII values
    const asciiArray = [];
    for (let i = 0; i < hexString.length; i += 2) {
        const hexChar = hexString.slice(i, i + 2);
        const asciiChar = String.fromCharCode(parseInt(hexChar, 16));
        asciiArray.push(asciiChar);
    }
    // convert array of ASCII values to string

    return asciiArray.join('');
}


