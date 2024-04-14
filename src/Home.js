import React, { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { Header } from "./Header";
import JobListing from "./JobListing";
import { generateJobs } from "./helpers";
import { Box } from "@mui/material";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Get the jobs
  useEffect(() => {
    const tempJobs = generateJobs();
    setJobs(tempJobs);
    setFilteredJobs(tempJobs);
  }, []);

  return (
    <Box>
      {/* <Filters jobs={jobs} setFilteredJobs={setFilteredJobs} />
      <JobListing filteredJobs={filteredJobs} /> */}
    </Box>
  );
};

export default Home;
