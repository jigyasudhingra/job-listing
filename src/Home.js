import React, { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { Header } from "./Header";
import JobListing from "./JobListing";
import { generateJobs } from "./helpers";
import { Box, Grid, Paper } from "@mui/material";

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
      {/* <JobListing filteredJobs={filteredJobs} /> */}
      <div style={{ flexGrow: 1, marginTop: 15 }}>
        <Grid container spacing={2} padding={0}>
          {/* Filters */}
          <Grid item xs={12} sm={3} padding={0}>
            <Paper
              style={{
                padding: 16,
                textAlign: "center",
                color: "black",
                boxShadow: "none",
                margin: 0,
              }}
            >
              <Filters jobs={jobs} setFilteredJobs={setFilteredJobs} />
            </Paper>
          </Grid>
          {/* Listing */}
          <JobListing filteredJobs={filteredJobs} />
        </Grid>
      </div>
    </Box>
  );
};

export default Home;
