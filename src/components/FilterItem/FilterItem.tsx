import { ChangeHandler, FormSubmitHandler } from "@/types";
import React from "react";
type TFilter = {
  handleSubmit: FormSubmitHandler;
  handleChange: ChangeHandler;
  filters: { [key: string]: string | number | boolean | undefined };
  handleReset: () => void;
};
const FilterItem = ({
  handleSubmit,
  handleChange,
  filters,
  handleReset,
}: TFilter) => {
  return (
    <div className="flex flex-col p-4   gap-2 w-2/3 ">
      <h3 className="text-2xl">Filter pets</h3>
      <div className="  bg-gray-100  ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Size:
                  <input
                    type="text"
                    name="size"
                    value={filters.size as string}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter pet type"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender:
                  <input
                    type="text"
                    name="gender"
                    value={filters.gender as string}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter bread "
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Special needs:
                  <input
                    type="text"
                    name="specialNeeds"
                    value={filters.specialNeeds as string}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter age"
                  />
                </label>
              </div>

              <div className="flex justify-end space-x-4 mt-5 items-center ">
                <button
                  type="submit"
                  className="px-8 py-1 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Filter
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-1 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
