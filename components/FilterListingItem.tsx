"use client";
import { useJobContext } from "@/context/jobContext";

export const FilterListingItem = ({ filter }: { filter: string }) => {
  const { updateFilters } = useJobContext();

  return (
    <div
      key={filter}
      className="mb-2 bg-light-grayish-cyan-filter-tablets flex rounded-[4px] overflow-hidden mr-4"
    >
      <span className="text-primary font-semibold py-1 px-3 sm:px-2 md:px-3">
        {filter}
      </span>
      <button
        aria-label={`Remove filter ${filter}`}
        className="filter-delete-icon bg-desaturated-dark-cyan px-1 flex items-center justify-center"
        onClick={() => updateFilters(filter)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
