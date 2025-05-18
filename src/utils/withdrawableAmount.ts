export const withdrawableAmountCalculator = (
    salary: bigint,
    start_period: number,
    last_period: number,
    end_period: number,
    current_period: number): bigint => {
    const total_periods = end_period - start_period;
    const current_periods = current_period - last_period;
    const withdrawable_amount = (salary * BigInt(current_periods)) / BigInt(total_periods);
    return withdrawable_amount;

}