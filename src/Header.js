import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import LOGO from "./Assets/logo.png";
import { useTheme } from "@emotion/react";

// -------- Color Palette --------
export const MENU_FONT_COLOR = "#303030";

// All Shades ranging from dark to lowest
export const FIRST_SHADE = "#90CF8E";
export const SECOND_SHADE = "#A7DCA5";
export const THIRD_SHADE = "#C6EDC3";
export const FOURTH_SHADE = "#DAF2D7";
export const FIFTH_SHADE = "#E4FDE1";
// ------------------------------

export const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const menus = [
    { name: "Jobs", url: "/" },
    { name: isSmallScreen ? "Applied" : "Applied Jobs", url: "/applied-jobs" },
    { name: "Bookmarks", url: "/bookmarks" },
  ];

  return (
    <Box
      display={"flex"}
      mt={"2%"}
      p={2}
      px={10}
      mx={1.6}
      borderRadius={6.8}
      flexDirection={isSmallScreen ? "column" : "row"}
      alignItems={"center"}
      sx={{
        backgroundColor: THIRD_SHADE,
      }}
    >
      {/* Left Side */}
      <Box
        width={"100%"}
        justifyContent={"left"}
        display={"flex"}
        gap={"5%"}
        alignItems="center"
        sx={{
          placeContent: isSmallScreen && "center",
        }}
      >
        <img
          src={LOGO}
          alt="go-careers-logo"
          height={40}
          style={{
            transform: "rotate(90deg)",
          }}
        />
        <Box fontSize={22} fontWeight={700} letterSpacing={0.2}>
          GoCareers
        </Box>
      </Box>
      {/* Right Side */}
      <Box
        color={MENU_FONT_COLOR}
        width={"100%"}
        display={"flex"}
        gap={"10%"}
        justifyContent={"right"}
      >
        {menus.map((menu) => (
          <Box
            key={menu.name}
            sx={{ cursor: "pointer" }}
            fontSize={13}
            onClick={() => (window.location.href = menu.url)}
          >
            {menu.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
