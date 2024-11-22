"use client";
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
  console.log(data);
  return (
    // <div className="text-primary">jkjk</div>
    <div
      className={` hover:border-l-4 hover:border-teal-500 h-32 border-l-4 border-white w-full max-w-6xl flex items-center justify-between bg-white shadow-md rounded-md p-4 border-teal-500 mb-3`}
      //
    >
      <div className="flex items-center">
        <Image
          src={data.logo}
          alt="Photosnap Logo"
          className="w-12 h-12 rounded-full object-cover mr-4"
          width={48}
          height={48}
        />
      </div>

      <div className="flex-1 ml-4">
        <div className="inline-flex items-center mb-1">
          <p className="text-primary font-bold mr-4">{data.company} </p>
          <div className="flex items-center space-x-2 mt-1">
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
        <h2 className="font-bold text-lg text-gray-900 mb-1">
          {data.position}
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
          <p className="mr-2">{data.postedAt}</p>
          <span className="block  w-1 h-1 bg-gray-500 rounded-full"></span>
          <p className="!ml-3 !mr-2">{data.contract}</p>
          <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
          <p className="!ml-3">{data.location}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        {data.role && (
          <span className="text-white font-semibold bg-desaturated-dark-cyan py-1 px-3 rounded-[5px] text-sm">
            {data.role}
          </span>
        )}

        {data.level && (
          <span className="text-white font-semibold bg-desaturated-dark-cyan py-1 px-3 rounded-[5px] text-sm">
            {data.level}
          </span>
        )}
        {data.languages.length &&
          data.languages.map((lang) => {
            return (
              <span
                key={lang}
                className="text-white font-semibold bg-desaturated-dark-cyan py-1 px-3 rounded-[5px] text-sm"
              >
                {lang}
              </span>
            );
          })}
        {data.tools.length &&
          data.tools.map((tool) => {
            return (
              <span
                key={tool}
                className="text-white font-semibold bg-desaturated-dark-cyan py-1 px-3 rounded-[5px] text-sm"
              >
                {tool}
              </span>
            );
          })}
      </div>
    </div>
  );
};
