import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FIFTH_SHADE, FIRST_SHADE, SECOND_SHADE } from "./Header";
import BOOKMARK from "./Assets/bookmark.png";
import LOCATION_PIN from "./Assets/location-pin.webp";
import DOLLAR from "./Assets/dollar.png";

export const JobCard = ({ job }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        style={{
          padding: 16,
          textAlign: "center",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            backgroundColor: FIFTH_SHADE,
            borderRadius: 10,
          }}
          p={3}
        >
          {/* Company */}
          <Box display={"flex"} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 100,
                  padding: "3%",
                  width: "8%",
                }}
                display={"flex"}
                justifyContent={"space-around"}
                textAlign={"center"}
                alignItems={"center"}
              >
                <img src={job.Logo} alt={job.id} width={"100%"} />
              </Box>
              <Box ml={"8%"} color="#6D6D6D" alignContent={"center"}>
                {job.Company}
              </Box>
            </Box>
            <Box>
              <img
                style={{ cursor: "pointer" }}
                src={BOOKMARK}
                alt={job.id}
                width={11}
              />
            </Box>
          </Box>

          {/* Position */}
          <Box textAlign={"left"}>
            <Typography
              sx={{
                widht: "100%",
                fontSize: 15,
                fontWeight: 600,
                marginTop: 1,
              }}
            >
              {job.Position}
            </Typography>
          </Box>

          {/* Location & Salary */}
          <Box>
            <Box
              mt={1.5}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              alignContent={"center"}
            >
              <Box>
                <img src={LOCATION_PIN} alt={job.id} width={8} />
              </Box>
              <Box>{job.Location}</Box>
            </Box>
            <Box
              mt={1}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              alignContent={"center"}
            >
              <Box>
                <img src={DOLLAR} alt={job.id} width={7} />
              </Box>
              <Box>{job.Salary} LPA</Box>
            </Box>
          </Box>

          {/* Button */}
          <Box mt={2}>
            <button
              style={{
                borderRadius: 20,
                // letterSpacing: 0.4,
                fontFamily: "Poppins",
                fontSize: 12,
                backgroundColor: SECOND_SHADE,
                border: "none",
                padding: "10px 18px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
