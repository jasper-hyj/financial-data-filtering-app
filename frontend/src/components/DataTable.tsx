import React from "react";

interface FinancialData {
  date: string;
  revenue: number;
  netIncome: number;
  grossProfit: number;
  eps: number;
  operatingIncome: number;
}

interface TableProps {
  data: FinancialData[];
  setFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const DataTable: React.FC<TableProps> = ({ data, setFilters }) => {
  const handleSort = (column: string) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: column,
      sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 cursor-pointer" onClick={() => handleSort("date")}>Date</th>
            <th className="py-2 px-4 cursor-pointer" onClick={() => handleSort("revenue")}>Revenue</th>
            <th className="py-2 px-4 cursor-pointer" onClick={() => handleSort("netIncome")}>Net Income</th>
            <th className="py-2 px-4">Gross Profit</th>
            <th className="py-2 px-4">EPS</th>
            <th className="py-2 px-4">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.revenue}</td>
              <td className="py-2 px-4">{row.netIncome}</td>
              <td className="py-2 px-4">{row.grossProfit}</td>
              <td className="py-2 px-4">{row.eps}</td>
              <td className="py-2 px-4">{row.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
