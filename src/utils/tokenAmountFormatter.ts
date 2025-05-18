export const convertTokenAmountToDisplay = (
    amount: bigint,
    decimal: number,
): string => {
    // this should convert amount to string and format it to decimal places, should be correct for edge cases as well
    const amountString = amount.toString();
    // put a decimal point at the right place no need to do division just append zeros if decimal number is less than length of decimal and add decimal point
    const decimalAmount = amountString.length - decimal;
    if (decimalAmount < 0) {
        return '0.' + '0'.repeat(-decimalAmount) + amountString;
    } else {
        return amountString.slice(0, decimalAmount) + '.' + amountString.slice(decimalAmount);
    }
}
export const convertDisplayAmountToToken = (
    amount: string,
    decimal: number,
): bigint => {
    const decimalAmount = BigInt(10 ** decimal);
    const displayAmount = BigInt(1);
    const amountInToken = BigInt(amount) * decimalAmount / displayAmount;
    return amountInToken;
}