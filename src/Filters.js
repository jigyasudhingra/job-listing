import React, { useRef, useState } from "react";
import {
  categorieOptions,
  experienceOptions,
  locationOptions,
  positionOptions,
  typeOptions,
} from "./helpers";
import { Box, Button } from "@mui/material";
import { FOURTH_SHADE, SECOND_SHADE, THIRD_SHADE } from "./Header";

export const Filters = ({ jobs, setFilteredJobs }) => {
  const [filters, setFilters] = useState({
    Position: [],
    Experience: [],
    Type: [],
    Category: [],
    Location: [],
    Company: [],
  });
  const selectedOptionsRef = useRef({
    Position: {},
    Experience: {},
    Type: {},
    Category: {},
    Location: {},
    Company: {},
  });

  // Filtering the jobs
  const handleFilter = (filters) => {
    const filtered = jobs.filter((job) => {
      return (
        (filters.Position.length === 0 ||
          filters.Position.includes(job.Position)) &&
        (filters.Experience.length === 0 ||
          filters.Experience.includes(job.Experience)) &&
        (filters.Category.length === 0 ||
          filters.Category.includes(job.Category)) &&
        (filters.Type.length === 0 || filters.Type.includes(job.Type)) &&
        (filters.Location.length === 0 ||
          filters.Location.includes(job.Location)) &&
        (filters.Company.length === 0 || filters.Company.includes(job.Company))
      );
    });
    setFilteredJobs(filtered);
  };

  // Type of Filters
  const typeOfOptions = [
    { array: positionOptions, name: "Position" },
    { array: experienceOptions, name: "Experience" },
    { array: typeOptions, name: "Type" },
    { array: categorieOptions, name: "Category" },
    { array: locationOptions, name: "Location" },
  ];

  // Conver option name's string into key
  const makeOptionKey = (option) => {
    return typeof option === "string" ? option.split(" ").join("-") : option;
  };

  const handleSelectOption = (name, option) => {
    // If already exist in filterOptions, then we have to remove
    if (selectedOptionsRef.current[name][makeOptionKey(option)]) {
      selectedOptionsRef.current[name][makeOptionKey(option)] = false;

      const tempFilters = filters;
      tempFilters[name] = tempFilters[name].filter((i) => i !== option);
      setFilters({ ...tempFilters });
    } else {
      selectedOptionsRef.current[name][makeOptionKey(option)] = true;

      const tempFilters = filters;
      tempFilters[name].push(option);
      setFilters({ ...tempFilters });
    }
  };

  return (
    <Box backgroundColor={THIRD_SHADE} borderRadius={5} p={4}>
      {typeOfOptions.map((optionType) => {
        return (
          <Box
            key={optionType.name}
            style={{
              textAlign: "left",
            }}
          >
            <Box style={{ color: "#6D6D6D", marginBottom: 8, fontWeight: 500 }}>
              {optionType.name}
            </Box>
            {optionType.array.map((option) => (
              <Box
                key={option}
                style={{
                  marginBottom: 5,
                  cursor: "pointer",
                  color: selectedOptionsRef.current[optionType.name][
                    makeOptionKey(option)
                  ]
                    ? "red"
                    : "black",
                }}
                onClick={() => handleSelectOption(optionType.name, option)}
              >
                {option}
              </Box>
            ))}
            <br />
          </Box>
        );
      })}
      <button
        onClick={() => handleFilter(filters)}
        style={{
          borderRadius: 20,
          // letterSpacing: 0.4,
          backgroundColor: SECOND_SHADE,
          border: "none",
          padding: "12px 20px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        Filter
      </button>
    </Box>
  );
};
