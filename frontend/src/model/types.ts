// Model for IncomeStatement
export default interface IncomeStatement {
    date: string;
    revenue: number;
    netIncome: number;
    grossProfit: number; 
    eps: number;
    operatingIncome: number;
}


// Filters for IncomeStatement
export interface IncomeStatementFilters {
    startDate: string;
    endDate: string;
    minRevenue: number;
    maxRevenue: number;
    minNetIncome: number;
    maxNetIncome: number;
    sortBy: keyof IncomeStatement;
    sortOrder: "asc" | "desc";
}