import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";

const JobListing = ({ filteredJobs }) => {
  const jobs = filteredJobs;
  const [page, setPage] = useState(1);
  const jobsPerPage = 10;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Take to the 1st page if new filter jobs are coming
  useEffect(() => {
    if (filteredJobs.length > 1) setPage(1);
  }, [filteredJobs]);

  return (
    <div>
      {/* Pagination & Job Listing */}
      <div>
        {/* Jobs Listing */}
        {jobs
          .slice(page * jobsPerPage - jobsPerPage, page * jobsPerPage)
          .map((job, index) => (
            <JobCard
              key={job.Position + job.Type + job.Company + job.Experience}
              job={job}
            />
          ))}
      </div>
      <div>
        <Pagination
          count={totalPages}
          page={page}
          defaultPage={1}
          onChange={(e, page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default JobListing;
