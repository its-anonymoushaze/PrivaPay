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
    const hexArray = hexString.match(/.{1,2}/g) || [];
    const asciiArray = hexArray.map((hex) => String.fromCharCode(parseInt(hex, 16)));
    return asciiArray.join('');
}


