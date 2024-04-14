import React from "react";

export const JobCard = ({ job }) => {
  return (
    <div style={{ border: "1px solid black", margin: 5, padding: 5 }}>
      {job.Position}
    </div>
  );
};
