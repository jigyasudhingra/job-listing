import { Box, Button } from "@mui/material";
import React from "react";
import LOGO from "./Assets/logo.png";

export const Header = () => {
  const menus = [
    { name: "Jobs", url: "/" },
    { name: "Applied Jobs", url: "/applied-jobs" },
    { name: "Bookmarks", url: "/bookmarks" },
  ];

  // -------- Color Palette --------
  const MENU_FONT_COLOR = "#303030";

  // All Shades ranging from dark to lowest
  const first = "#90CF8E";
  const second = "#A7DCA5";
  const third = "#C6EDC3";
  const fourth = "#DAF2D7";
  const fifth = "#E4FDE1";
  // ------------------------------

  return (
    <Box
      display={"flex"}
      mt={"2%"}
      p={2.4}
      px={10}
      borderRadius={20}
      alignItems={"center"}
      sx={{
        backgroundColor: third,
      }}
    >
      {/* Left Side */}
      <Box
        width={"100%"}
        justifyContent={"left"}
        display={"flex"}
        gap={"5%"}
        alignItems="center"
      >
        <img
          src={LOGO}
          alt="go-careers-logo"
          height={40}
          style={{
            transform: "rotate(90deg)",
          }}
        />
        <Box fontSize={22} fontWeight={700} letterSpacing={0.4}>
          Go Careers
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
            sx={{ cursor: "pointer" }}
            onClick={() => (window.location.href = menu.url)}
          >
            {menu.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
