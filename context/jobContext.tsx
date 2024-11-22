"use client";
import { createContext, useContext, useEffect, useState } from "react";

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

interface JobContextProps {
  jobList: JobListingProps[] | [];
}

const JobContext = createContext<JobContextProps | undefined>(undefined);

interface JobProviderProps {
  children: React.ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobList, setJobList] = useState<JobListingProps[] | []>([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      setJobList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <JobContext.Provider value={{ jobList }}>{children}</JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }

  return context;
};
