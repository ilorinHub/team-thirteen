import * as React from "react";
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from "next/router";
import { DesktopNavbar } from "./desktopNavbar/DesktopNavbar";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
import Box from "@mui/material/Box";

export const Navbar = () => {
  const firebase = useFirebase();
  const router = useRouter();

  const handleSignOut = () => {
    firebase?.auth()?.signOut();
    router.push("/login");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <DesktopNavbar signOut={handleSignOut} />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileNavbar signOut={handleSignOut} />
      </Box>
    </Box>
  );
};
