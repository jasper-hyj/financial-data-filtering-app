import React, { useState } from "react";
import IncomeStatement, { IncomeStatementFilters } from "../model/types";
import { formatNumber } from "../util/formatNumber";

interface DataTableProps {
  setFilters: React.Dispatch<React.SetStateAction<IncomeStatementFilters>>;
  data: IncomeStatement[];
}

const DataTable: React.FC<DataTableProps> = ({ data, setFilters }) => {
  const [useSuffix, setUseSuffix] = useState(true);
  var sortOrder: string = "";
  var sortColumn: string = "";

  const handleSort = (column: keyof IncomeStatement, order: "asc" | "desc") => {
      setFilters((prev) => ({
        ...prev,
        sortBy: column,
        sortOrder: order
      }));
  };

  return (
    <div>
      <div className="mb-4">
        <label className="flex items-center">
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
          <thead>
          <tr>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Date
                  <div className="ml-2">
                  <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("date", "asc")}
                    >
                      &#9650;
                    </div>
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("date", "desc")}
                    >
                      &#9660;
                    </div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Revenue
                  <div className="ml-2">
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("revenue", "asc")}
                    >
                      &#9650;
                    </div>
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("revenue", "desc")}
                    >
                      &#9660;
                    </div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Net Income
                  <div className="ml-2">
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("netIncome", "asc")}
                    >
                      &#9650;
                    </div>
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("netIncome", "desc")}
                    >
                      &#9660;
                    </div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Gross Profit
                  <div className="ml-2">
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("grossProfit", "asc")}
                    >
                      &#9650;
                    </div>
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("grossProfit", "desc")}
                    >
                      &#9660;
                    </div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  EPS
                  <div className="ml-2">
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("eps", "asc")}
                    >
                      &#9650;
                    </div>
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("eps", "desc")}
                    >
                      &#9660;
                    </div>
                  </div>
                </div>
              </th>
              <th className="border border-gray-300 p-2">
                <div className="flex items-center">
                  Operating Income
                  <div className="ml-2">
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("operatingIncome", "asc")}
                    >
                      &#9650;
                    </div>
                    <div
                      className="cursor-pointer text-xs"
                      onClick={() => handleSort("operatingIncome", "desc")}
                    >
                      &#9660;
                    </div>
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
