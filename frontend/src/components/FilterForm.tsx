import React from "react";
import { IncomeStatementFilters } from "../model/types";

interface FilterFormProps {
  filters: IncomeStatementFilters;
  setFilters: React.Dispatch<React.SetStateAction<IncomeStatementFilters>>;
}

const FilterForm: React.FC<FilterFormProps> = ({ filters, setFilters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name.includes("min") || name.includes("max") ? Number(value) : value,
    }));
  };

  return (
    <form className="flex flex-wrap gap-4">
      <input
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={handleChange}
        placeholder="End Date"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="minRevenue"
        value={filters.minRevenue}
        onChange={handleChange}
        placeholder="Min Revenue"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="maxRevenue"
        value={filters.maxRevenue}
        onChange={handleChange}
        placeholder="Max Revenue"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="minNetIncome"
        value={filters.minNetIncome}
        onChange={handleChange}
        placeholder="Min Net Income"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="maxNetIncome"
        value={filters.maxNetIncome}
        onChange={handleChange}
        placeholder="Max Net Income"
        className="p-2 border border-gray-300 rounded"
      />
      <select
        name="sortBy"
        value={filters.sortBy}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="date">Date</option>
        <option value="revenue">Revenue</option>
        <option value="netIncome">Net Income</option>
        <option value="grossProfit">Gross Profit</option>
        <option value="eps">EPS</option>
        <option value="operatingIncome">Operating Income</option>
      </select>
      <select
        name="sortOrder"
        value={filters.sortOrder}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  );
};

export default FilterForm;
