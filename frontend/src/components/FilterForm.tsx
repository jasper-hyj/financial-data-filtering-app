import React, { useState } from "react";

interface FilterProps {
  filters: {
    startDate: string;
    endDate: string;
    minRevenue: number;
    maxRevenue: number;
    minNetIncome: number;
    maxNetIncome: number;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      startDate: string;
      endDate: string;
      minRevenue: number;
      maxRevenue: number;
      minNetIncome: number;
      maxNetIncome: number;
    }>
  >;
}


const FilterForm: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters({ ...localFilters, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(localFilters); // Ensure this matches the expected type
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={localFilters.startDate}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={localFilters.endDate}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="minRevenue" className="block text-sm font-medium text-gray-700">
          Min Revenue
        </label>
        <input
          type="number"
          id="minRevenue"
          name="minRevenue"
          value={localFilters.minRevenue}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="maxRevenue" className="block text-sm font-medium text-gray-700">
          Max Revenue
        </label>
        <input
          type="number"
          id="maxRevenue"
          name="maxRevenue"
          value={localFilters.maxRevenue}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="minNetIncome" className="block text-sm font-medium text-gray-700">
          Min Net Income
        </label>
        <input
          type="number"
          id="minNetIncome"
          name="minNetIncome"
          value={localFilters.minNetIncome}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="maxNetIncome" className="block text-sm font-medium text-gray-700">
          Max Net Income
        </label>
        <input
          type="number"
          id="maxNetIncome"
          name="maxNetIncome"
          value={localFilters.maxNetIncome}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default FilterForm;
