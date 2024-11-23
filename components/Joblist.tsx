"use client";
import { useJobContext } from "@/context/jobContext";
import { JobCard } from "./Jobcard";

export const Joblist = () => {
  const { filteredJobList, filters, isMobile } = useJobContext();

  return (
    <div
      className={`${
        filters.length ? (isMobile ? "pt-90" : "pt-60") : ""
      } relative w-full flex items-center flex-col flex-grow p-5 box-border overflow-auto`}
    >
      {filteredJobList.map((job) => {
        return <JobCard data={job} key={job.id} />;
      })}
    </div>
  );
};
