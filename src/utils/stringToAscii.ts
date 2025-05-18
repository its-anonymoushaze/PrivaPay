export const stringToAscii = (str: string): bigint => {
  // this function converts a string to an array of ASCII values, and then converts them into hex and concatenates them and then converts them to decimal

  const asciiArray = Array.from(str).map((char) => char.charCodeAt(0));
  const hexArray = asciiArray.map((num) => num.toString(16).padStart(2, "0"));
  const hexString = hexArray.join("");
  const decimalValue = BigInt(parseInt(hexString, 16));
  return decimalValue;
};

const big0 = BigInt(0);
const big1 = BigInt(1);
const big8 = BigInt(8);

export function bigToUint8Array(big: bigint) {
  if (big < big0) {
    // work out how long is the big int in bits and add 1
    const bits: bigint = (BigInt(big.toString(2).length) / big8 + big1) * big8;
    // create a BigInt that's 100000... of length of big + 1
    const prefix1: bigint = big1 << bits;
    big += prefix1;
  }
  let hex = big.toString(16);
  if (hex.length % 2) {
    hex = "0" + hex;
  }
  const len = hex.length / 2;
  const u8 = new Uint8Array(len);
  var i = 0;
  var j = 0;
  while (i < len) {
    u8[i] = parseInt(hex.slice(j, j + 2), 16);
    i += 1;
    j += 2;
  }
  return u8;
}

export const asciiToString = (ascii: bigint): string => {
  // this function converts a bigint to hex and then converts it to an array of ASCII values, and then converts them into a string
  const hexArray = bigToUint8Array(ascii);
  // convert hex string to array of ASCII values
  const asciiArray = [];
  for (let i = 0; i < hexArray.length; i += 1) {
    const asciiChar = String.fromCharCode(hexArray[i]);
    asciiArray.push(asciiChar);
  }
  // convert array of ASCII values to string

  return asciiArray.join("");
};

// console.log(stringToAscii("O1DAO")); // 448378203247
// console.log(asciiToString(126207244316550807246864384n)); // hello world
// console.log(await hashStruct(js2leo.json(374363288885082032439296n)))
