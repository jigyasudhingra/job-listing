import { Box } from "@mui/material";
import React from "react";

export const JobCard = ({ job }) => {
  return (
    <Box m={1} p={1} borderRadius={2.5} border={"1px solid black"}>
      {job.Position}
    </Box>
  );
};
