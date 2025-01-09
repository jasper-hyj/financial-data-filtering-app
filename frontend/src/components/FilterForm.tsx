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
        onChange={handleChange}
        placeholder="Start Date"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        name="endDate"
        onChange={handleChange}
        placeholder="End Date"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="minRevenue"
        onChange={handleChange}
        placeholder="Min Revenue"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="maxRevenue"
        onChange={handleChange}
        placeholder="Max Revenue"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="minNetIncome"
        onChange={handleChange}
        placeholder="Min Net Income"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="maxNetIncome"
        onChange={handleChange}
        placeholder="Max Net Income"
        className="p-2 border border-gray-300 rounded"
      />
    </form>
  );
};

export default FilterForm;
