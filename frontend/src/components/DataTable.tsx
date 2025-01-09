import React, { useState } from "react";
import IncomeStatement from "../model/types";
import { formatNumber } from "../util/formatNumber";

interface DataTableProps {
  data: IncomeStatement[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [useSuffix, setUseSuffix] = useState(true);

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
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Revenue</th>
            <th className="border border-gray-300 p-2">Net Income</th>
            <th className="border border-gray-300 p-2">Gross Profit</th>
            <th className="border border-gray-300 p-2">EPS</th>
            <th className="border border-gray-300 p-2">Operating Income</th>
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
  );
};

export default DataTable;
