"use client";
import { useJobContext } from "@/context/jobContext";
import { JobCard } from "../JobCard/Jobcard";

export const Joblist = () => {
  const { jobList } = useJobContext();
  //   console.log(jobList);
  return (
    <div className="w-full flex items-center flex-col flex-grow p-5 box-border overflow-auto">
      {jobList.map((job) => {
        return <JobCard data={job} key={job.id} />;
      })}
    </div>
  );
};
