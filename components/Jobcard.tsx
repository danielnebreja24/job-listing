"use client";
import { useJobContext } from "@/context/jobContext";
import Image from "next/image";
import { useState } from "react";

interface JobListingProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export const JobCard = ({ data }: { data: JobListingProps }) => {
  const { updateFilters } = useJobContext();
  return (
    <div className="mt-7 sm:mt-0 relative sm:static hover:border-l-4 hover:border-teal-500 border-l-4 border-white w-full max-w-6xl flex flex-col sm:flex-row items-start sm:items-center bg-white shadow-md rounded-md p-4 border-box border-teal-500 mb-3">
      <div className="absolute -top-6 left-4 sm:top-auto sm:left-auto sm:static flex items-center mb-3 sm:mb-0">
        <Image
          src={data.logo}
          alt="Photosnap Logo"
          className="w-12 h-12 rounded-full object-cover mr-2 sm:mr-4"
          width={48}
          height={48}
        />
      </div>

      <div className="flex-1">
        <div className="inline-flex mt-3 sm:mt-0 items-center mb-1">
          <p className="text-md md:text-lg sm:text-sm text-primary font-bold mr-4">
            {data.company}
          </p>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            {data.new && (
              <span className="text-white text-xs font-semibold bg-desaturated-dark-cyan py-1 px-2 rounded-full uppercase">
                New!
              </span>
            )}
            {data.featured && (
              <span className="text-white text-xs font-semibold bg-gray-800 py-1 px-2 rounded-full uppercase">
                Featured
              </span>
            )}
          </div>
        </div>
        <h2 className="job-position-div text-md md:text-lg sm:text-sm font-bold text-gray-900 mb-1">
          {data.position}
        </h2>
        <div className="flex flex-row items-center text-xs md:text-sm text-gray-500 mt-1 space-y-0 space-x-2">
          <p>{data.postedAt}</p>
          <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
          <p>{data.contract}</p>
          <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
          <p>{data.location}</p>
        </div>
      </div>

      <div className="role-overview-div flex flex-wrap gap-3 sm:gap-2 md:gap-3 mt-4 justify-start sm:justify-end text-sm sm:text-xs md:text-sm">
        {data.role && (
          <span
            onClick={() => updateFilters(data.role)}
            className="cursor-pointer bg-light-grayish-cyan-filter-tablets text-primary font-semibold py-1 px-3 sm:px-2 md:px-3 rounded-[5px]"
          >
            {data.role}
          </span>
        )}
        {data.level && (
          <span
            onClick={() => updateFilters(data.level)}
            className="cursor-pointer text-primary font-semibold bg-light-grayish-cyan-filter-tablets py-1 px-3 sm:px-2 md:px-3 rounded-[5px]"
          >
            {data.level}
          </span>
        )}
        {data.languages.map((lang) => (
          <span
            key={lang}
            onClick={() => updateFilters(lang)}
            className="cursor-pointer text-primary font-semibold bg-light-grayish-cyan-filter-tablets py-1 px-3 sm:px-2 md:px-3 rounded-[5px]"
          >
            {lang}
          </span>
        ))}
        {data.tools.map((tool) => (
          <span
            key={tool}
            onClick={() => updateFilters(tool)}
            className="cursor-pointer text-primary font-semibold bg-light-grayish-cyan-filter-tablets py-1 px-3 sm:px-2 md:px-3 rounded-[5px]"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};
