import React, { useState } from "react";
import IncomeStatement, { IncomeStatementFilters } from "../model/types";
import { formatNumber } from "../util/formatNumber";

// Input Props for datatable
interface DataTableProps {
  setFilters: React.Dispatch<React.SetStateAction<IncomeStatementFilters>>;
  data: IncomeStatement[];
}

const DataTable: React.FC<DataTableProps> = ({ data, setFilters }) => {
  // For suffix set
  const [useSuffix, setUseSuffix] = useState(false);
  
  // Handle sorting update
  const handleSort = (column: keyof IncomeStatement) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: column,
      sortOrder: prev.sortBy === column && prev.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div>
      <div className="mb-4">
        <label className="flex items-center select-none">
          <input
            type="checkbox"
            checked={useSuffix}
            onChange={(e) => setUseSuffix(e.target.checked)}
            className="mr-2"
          />
          Use Suffixes (K, M, T)
        </label>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="overflow-x-scroll table-auto w-full border-collapse border border-gray-300">
          <thead className="select-none">
            <tr>
              <th className="border border-gray-300 p-2 min-w-28">
                <div className="flex items-center">
                  Date
                  <div className="ml-auto pl-2" onClick={() => handleSort("date")}>
                    <div className="cursor-pointer text-xs">&#9650;</div>
                    <div className="cursor-pointer text-xs">&#9660;</div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div
                  className="flex items-center"
                  onClick={() => handleSort("revenue")}
                >
                  Revenue
                  <div className="ml-auto pl-2">
                    <div className="cursor-pointer text-xs">&#9650;</div>
                    <div className="cursor-pointer text-xs">&#9660;</div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Net Income
                  <div
                    className="ml-auto pl-2"
                    onClick={() => handleSort("netIncome")}
                  >
                    <div className="cursor-pointer text-xs">&#9650;</div>
                    <div className="cursor-pointer text-xs">&#9660;</div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Gross Profit
                  <div
                    className="ml-auto pl-2"
                    onClick={() => handleSort("grossProfit")}
                  >
                    <div className="cursor-pointer text-xs">&#9650;</div>
                    <div className="cursor-pointer text-xs">&#9660;</div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  EPS
                  <div className="ml-auto pl-2" onClick={() => handleSort("eps")}>
                    <div className="cursor-pointer text-xs">&#9650;</div>
                    <div className="cursor-pointer text-xs">&#9660;</div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Operating Income
                  <div
                    className="ml-auto pl-2"
                    onClick={() => handleSort("operatingIncome")}
                  >
                    <div className="cursor-pointer text-xs">&#9650;</div>
                    <div className="cursor-pointer text-xs">&#9660;</div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{item.date}</td>
                <td className="border border-gray-300 p-2">
                  {formatNumber(item.revenue, useSuffix)}
                </td>
                <td className="border border-gray-300 p-2">
                  {formatNumber(item.netIncome, useSuffix)}
                </td>
                <td className="border border-gray-300 p-2">
                  {formatNumber(item.grossProfit, useSuffix)}
                </td>
                <td className="border border-gray-300 p-2">{item.eps}</td>
                <td className="border border-gray-300 p-2">
                  {formatNumber(item.operatingIncome, useSuffix)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
