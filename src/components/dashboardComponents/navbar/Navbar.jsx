import * as React from "react";
import { DesktopNavbar } from "./desktopNavbar/DesktopNavbar";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
import Box from "@mui/material/Box";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <DesktopNavbar />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileNavbar />
      </Box>
    </Box>
  );
};
