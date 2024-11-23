"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FilterListing } from "./FilterListing";
import { useJobContext } from "@/context/jobContext";

export const Header = () => {
  const { filters, isMobile } = useJobContext();

  return (
    <div className="main-header-div relative w-full h-64 bg-desaturated-dark-cyan">
      <img
        src={
          isMobile
            ? "/images/bg-header-mobile.svg"
            : "/images/bg-header-desktop.svg"
        }
        alt="Header background"
        className="w-full h-full object-cover"
      />

      {filters.length ? (
        <div
          className={`z-10 absolute w-full header-filter-div${
            isMobile && filters.length > 3 ? "-mobile" : ""
          } flex justify-center px-5`}
        >
          <FilterListing />
        </div>
      ) : null}
    </div>
  );
};
