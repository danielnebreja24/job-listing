import { useJobContext } from "@/context/jobContext";
import { FilterListingItem } from "./FilterListingItem";

export const FilterListing = () => {
  const { filters, clearAllFilters, updateFilters } = useJobContext();

  return (
    <div className="w-full px-5 pt-4 pb-3 max-w-6xl bg-white border-l-4 border-white shadow-md rounded-[5px] flex items-center">
      <div className="flex-1 h-full flex items-center flex flex-wrap">
        {filters.map((filter) => (
          <FilterListingItem key={filter} filter={filter} />
        ))}
      </div>

      <div
        onClick={clearAllFilters}
        className="w-[50px] cursor-pointer text-sm text-primary font-bold underline"
      >
        Clear
      </div>
    </div>
  );
};
