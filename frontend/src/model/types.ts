// Default Model for IncomeStatement
export default interface IncomeStatement {
    date: string; // ISO date format string
    revenue: number; // Total revenue
    netIncome: number; // Net income
    grossProfit: number; // Gross profit
    eps: number; // Earnings per share
    operatingIncome: number; // Operating income
}


// Filters for IncomeStatement
export interface IncomeStatementFilters {
    startDate: string; // Start date for filtering
    endDate: string; // End date for filtering
    minRevenue: number; // Minimum revenue
    maxRevenue: number; // Maximum revenue
    minNetIncome: number; // Minimum net income
    maxNetIncome: number; // Maximum net income
    sortBy: keyof IncomeStatement; // Column to sort by (e.g., "date", "revenue")
    sortOrder: "asc" | "desc"; // Sorting order
}