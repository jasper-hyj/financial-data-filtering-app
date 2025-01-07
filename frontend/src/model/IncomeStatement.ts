// Default Model for IncomeStatement
export default interface IncomeStatement {
    date: string;
    revenue: bigint;
    netIncome: bigint;
    grossProfit: bigint;
    eps: number;
    operatingIncome: bigint;
    csi: boolean;
}