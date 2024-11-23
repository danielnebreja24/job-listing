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
  filteredJobList: JobListingProps[] | [];
  filters: string[];
  isMobile: boolean;
  setFilters: (filters: string[]) => void;
  updateFilters: (filter: string) => void;
  clearAllFilters: () => void;
}

const JobContext = createContext<JobContextProps | undefined>(undefined);

interface JobProviderProps {
  children: React.ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [jobList, setJobList] = useState<JobListingProps[] | []>([]);
  const [filteredJobList, setFilteredJobList] = useState<
    JobListingProps[] | []
  >([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    setFilteredJobList(
      jobList.filter((job) => {
        const tags = [job.role, job.level, ...job.languages, ...job.tools];
        return filters.every((filter) => tags.includes(filter));
      })
    );
  }, [filters, jobList]);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      setJobList(data);
      setFilteredJobList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFilters = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters((prevState) => [...prevState, filter]);
    } else {
      setFilters((prevState) => prevState.filter((item) => item !== filter));
    }
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <JobContext.Provider
      value={{
        jobList,
        filteredJobList,
        filters,
        isMobile,
        setFilters,
        updateFilters,
        clearAllFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }

  return context;
};
