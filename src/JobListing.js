import { Box, Grid, Pagination, Paper } from "@mui/material";
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
    <>
      <Grid item xs={12} sm={9}>
        <Grid item container spacing={2}>
          {jobs
            .slice(page * jobsPerPage - jobsPerPage, page * jobsPerPage)
            .map((job, index) => (
              <JobCard key={job.id} job={job} />
            ))}
        </Grid>
        <Grid item mb={10}>
          <Box
            style={{
              justifyContent: "center",
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              defaultPage={1}
              onChange={(e, page) => setPage(page)}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default JobListing;
