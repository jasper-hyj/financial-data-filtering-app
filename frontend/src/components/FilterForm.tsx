import React from "react";

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={filters.startDate}
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
          value={filters.endDate}
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
          value={filters.minRevenue}
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
          value={filters.maxRevenue}
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
          value={filters.minNetIncome}
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
          value={filters.maxNetIncome}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
    </form>
  );
};

export default FilterForm;
