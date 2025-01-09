import React, { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import DataTable from "./components/DataTable";
import IncomeStatement, { IncomeStatementFilters } from "./model/types";
import axios from "axios";

const App: React.FC = () => {
  const [data, setData] = useState<IncomeStatement[]>([]); // Raw data
  const [filteredData, setFilteredData] = useState<IncomeStatement[]>([]); // Filtered data
  const [filters, setFilters] = useState<IncomeStatementFilters>({
    startDate: "",
    endDate: "",
    minRevenue: 0,
    maxRevenue: Infinity,
    minNetIncome: 0,
    maxNetIncome: Infinity,
    sortBy: "date",
    sortOrder: "asc",
  });

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get<IncomeStatement[]>("/api/data");
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data
    } catch (error) {
      console.error("Error fetching financial data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, data]);

  const applyFilters = () => {
    const {
      startDate,
      endDate,
      minRevenue,
      maxRevenue,
      minNetIncome,
      maxNetIncome,
    } = filters;

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

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      const sortKey = filters.sortBy;
      const isAscending = filters.sortOrder === "asc";
      if (a[sortKey] < b[sortKey]) return isAscending ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return isAscending ? 1 : -1;
      return 0;
    });

    setFilteredData(sorted);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl text-center mb-3">Finance Data Filtering App (For AAPL)</h2>
      <FilterForm filters={filters} setFilters={setFilters} />
      <div className="mt-6">
        <DataTable data={filteredData} />
      </div>
    </div>
  );
};

export default App;