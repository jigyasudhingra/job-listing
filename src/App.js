import { useEffect, useState } from "react";
import "./App.css";
import { generateJobs } from "./helpers";
import JobListing from "./JobListing";
import { Filters } from "./Filters";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Get the jobs
  useEffect(() => {
    const tempJobs = generateJobs();
    setJobs(tempJobs);
    setFilteredJobs(tempJobs);
  }, []);

  return (
    <div className="App">
      <Filters jobs={jobs} setFilteredJobs={setFilteredJobs} />
      <JobListing filteredJobs={filteredJobs} />
    </div>
  );
};

export default App;
