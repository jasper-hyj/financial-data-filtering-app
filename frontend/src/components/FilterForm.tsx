import React, { useState } from "react";
import { IncomeStatementFilters } from "../model/types";

interface FilterFormProps {
  filters: IncomeStatementFilters;
  setFilters: React.Dispatch<React.SetStateAction<IncomeStatementFilters>>;
}

const FilterForm: React.FC<FilterFormProps> = ({ filters, setFilters }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // Filter Toggle Setting
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  // Handle value change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]:
        name.includes("min") || name.includes("max") ? Number(value) : value,
    }));
  };

  // Handle start year change
  const handleStartYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStartYear = e.target.value;
    setFilters((prev) => ({
      ...prev,
      startDate: `${selectedStartYear}-01-01`, // Set start date to January 1st of the selected start year
    }));
  };

  // Handle end year change
  const handleEndYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEndYear = e.target.value;
    setFilters((prev) => ({
      ...prev,
      endDate: `${selectedEndYear}-12-31`, // Set end date to December 31st of the selected end year
    }));
  };

  // Handle filter reset
  const handleFilterReset = () => {
    setFilters((prev) => ({
      startDate: "",
      endDate: "",
      minRevenue: 0,
      maxRevenue: Infinity,
      minNetIncome: 0,
      maxNetIncome: Infinity,
      sortBy: "date",
      sortOrder: "asc",
    }));
  };

  return (
    <div className="space-y-2 max-w-3xl m-auto">
      {/* Toggle button for showing/hiding filters */}
      <div className="flex space-x-1 justify-center">
        <button
          onClick={toggleFilterVisibility}
          className="text-blue-600 py-1 px-3 text-sm rounded-md hover:bg-blue-100 focus:outline-none transition duration-300"
        >
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>
        <button
          onClick={handleFilterReset}
          className="text-blue-600 py-1 px-3 text-sm rounded-md hover:bg-blue-100 focus:outline-none"
        >
          Reset Filters
        </button>
      </div>
      
      
      {/* Filter form with animation */}
      <div
        className={`p-3 overflow-hidden transition-all duration-500 ease-in-out ${
          isFilterVisible
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <form className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
          {/* Start Date Filter */}
          <div className="flex flex-col">
            <label
              htmlFor="startYear"
              className="text-xs font-semibold text-gray-700 mb-1"
            >
              Start Year
            </label>
            <select
              name="startYear"
              onChange={handleStartYearChange}
              value={filters.startDate?.substring(0, 4) || ""}
              className="p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            >
              <option value="">None</option>
              {Array.from({ length: 20 }, (_, index) => {
                const year = new Date().getFullYear() - index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          {/* End Date Filter */}
          <div className="flex flex-col">
            <label
              htmlFor="endYear"
              className="text-xs font-semibold text-gray-700 mb-1"
            >
              End Year
            </label>
            <select
              name="endYear"
              onChange={handleEndYearChange}
              value={filters.endDate?.substring(0, 4) || ""}
              className="p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            >
              <option value="">None</option>
              {Array.from({ length: 20 }, (_, index) => {
                const year = new Date().getFullYear() - index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Min Revenue Filter */}
          <div className="flex flex-col">
            <label
              htmlFor="minRevenue"
              className="text-xs font-semibold text-gray-700 mb-1"
            >
              Min Revenue
            </label>
            <input
              type="number"
              name="minRevenue"
              onChange={handleChange}
              value={filters.minRevenue || ""}
              className="p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          {/* Max Revenue Filter */}
          <div className="flex flex-col">
            <label
              htmlFor="maxRevenue"
              className="text-xs font-semibold text-gray-700 mb-1"
            >
              Max Revenue
            </label>
            <input
              type="number"
              name="maxRevenue"
              onChange={handleChange}
              value={filters.maxRevenue || ""}
              className="p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          {/* Min Net Income Filter */}
          <div className="flex flex-col">
            <label
              htmlFor="minNetIncome"
              className="text-xs font-semibold text-gray-700 mb-1"
            >
              Min Net Income
            </label>
            <input
              type="number"
              name="minNetIncome"
              onChange={handleChange}
              value={filters.minNetIncome || ""}
              className="p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>

          {/* Max Net Income Filter */}
          <div className="flex flex-col">
            <label
              htmlFor="maxNetIncome"
              className="text-xs font-semibold text-gray-700 mb-1"
            >
              Max Net Income
            </label>
            <input
              type="number"
              name="maxNetIncome"
              onChange={handleChange}
              value={filters.maxNetIncome || ""}
              className="p-2 text-xs border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterForm;
