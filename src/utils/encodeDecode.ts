function encodeToF(input: string) {
    // Define Fp as the modulo base
    const Fp = BigInt("8444461749428370424248824938781546531375899335154063827935233455917409239041");

    // Convert string to UTF-8 byte sequence
    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(input);

    // Convert UTF-8 bytes to little-endian unsigned integer
    let result = BigInt(0);
    for (let i = 0; i < utf8Bytes.length; i++) {
        result += BigInt(utf8Bytes[i]) << BigInt(8 * i); // Little-endian shift
    }

    // Take modulo Fp
    result %= Fp;

    return result;
}

function decodeFromF(encoded: bigint) {
    // Define Fp as the modulo base
    const Fp = BigInt("8444461749428370424248824938781546531375899335154063827935233455917409239041");

    // Ensure the input is in the correct field
    encoded = encoded % Fp;

    // Reconstruct bytes from the little-endian BigInt
    const bytes = [];
    while (encoded > 0n) {
        bytes.push(Number(encoded & 0xFFn)); // Extract lowest 8 bits
        encoded >>= 8n;                      // Shift right by 8 bits
    }

    // Convert byte array back to string
    const utf8Decoder = new TextDecoder();
    return utf8Decoder.decode(new Uint8Array(bytes));
}


export function encodeToFWithQuotient(input: string) {
    const Fp = BigInt("8444461749428370424248824938781546531375899335154063827935233455917409239041");

    const utf8Encoder = new TextEncoder();
    const utf8Bytes = utf8Encoder.encode(input);

    let m = BigInt(0);
    for (let i = 0; i < utf8Bytes.length; i++) {
        m += BigInt(utf8Bytes[i]) << BigInt(8 * i);
    }

    const remainder = m % Fp;
    const quotient = m / Fp;

    return { remainder, quotient };
}

export function decodeFromFWithQuotient(remainder: bigint, quotient: bigint) {
    const Fp = BigInt("8444461749428370424248824938781546531375899335154063827935233455917409239041");

    let m = quotient * Fp + remainder;

    const bytes = [];
    while (m > 0n) {
        bytes.push(Number(m & 0xFFn));
        m >>= 8n;
    }

    const utf8Decoder = new TextDecoder();
    return utf8Decoder.decode(new Uint8Array(bytes));
}

// console.log("Encoded with quotient:", encodeToFWithQuotient("b45165ed3cd437b9ffad02a2aad22a4ddc69162470e2622982889ce5826f6e3d"));
// console.log("Decoded with quotient:", decodeFromFWithQuotient(encodeToFWithQuotient("b45165ed3cd437b9ffad02a2aad22a4ddc69162470e2622982889ce5826f6e3d").remainder, encodeToFWithQuotient("b45165ed3cd437b9ffad02a2aad22a4ddc69162470e2622982889ce5826f6e3d").quotient));

// console.log("Encoded:", encodeToF("bafkreidmjtjee35doxvudfqj3vqrl63of7tabyizcspkel4stt7buidpwa"));
// console.log("Decoded:", decodeFromF(encodeToF("bafkreidmjtjee35doxvudfqj3vqrl63of7tabyizcspkel4stt7buidpwa")));