import React, { useEffect, useState } from "react";
import FilterForm from "./components/FilterForm";
import axios from "axios";

interface FinancialData {
  date: string;
  revenue: number;
  netIncome: number;
  grossProfit: number;
  eps: number;
  operatingIncome: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<FinancialData[]>([]);
  const [filteredData, setFilteredData] = useState<FinancialData[]>([]);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minRevenue: 0,
    maxRevenue: Infinity,
    minNetIncome: 0,
    maxNetIncome: Infinity,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get<FinancialData[]>("/api/data");
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data
    } catch (error) {
      console.error("Error fetching financial data:", error);
    }
  };

  const applyFilters = () => {
    const { startDate, endDate, minRevenue, maxRevenue, minNetIncome, maxNetIncome } = filters;

    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date).getTime();
      const start = startDate ? new Date(startDate).getTime() : -Infinity;
      const end = endDate ? new Date(endDate).getTime() : Infinity;

      return (
        itemDate >= start &&
        itemDate <= end &&
        item.revenue >= minRevenue &&
        item.revenue <= maxRevenue &&
        item.netIncome >= minNetIncome &&
        item.netIncome <= maxNetIncome
      );
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Financial Data</h1>
      <FilterForm filters={filters} setFilters={setFilters} />
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Date</th>
              <th className="border border-gray-200 px-4 py-2">Revenue</th>
              <th className="border border-gray-200 px-4 py-2">Net Income</th>
              <th className="border border-gray-200 px-4 py-2">Gross Profit</th>
              <th className="border border-gray-200 px-4 py-2">EPS</th>
              <th className="border border-gray-200 px-4 py-2">Operating Income</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{item.date}</td>
                <td className="border border-gray-200 px-4 py-2">${item.revenue.toLocaleString()}</td>
                <td className="border border-gray-200 px-4 py-2">${item.netIncome.toLocaleString()}</td>
                <td className="border border-gray-200 px-4 py-2">${item.grossProfit.toLocaleString()}</td>
                <td className="border border-gray-200 px-4 py-2">{item.eps.toFixed(2)}</td>
                <td className="border border-gray-200 px-4 py-2">${item.operatingIncome.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
