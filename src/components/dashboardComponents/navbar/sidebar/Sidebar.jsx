import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Fab } from "@mui/material";
import { SidebarMenu } from "../sidebarMenu/SidebarMenu";

const drawerWidth = 240;
export const Sidebar = (props) => {
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "#f4f5f7" }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#f4f5f7",
            },
          }}
        >
          <Toolbar />

          <SidebarMenu />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              marginTop: "64px",
              paddingBottom: "64px",
              background: "#f4f5f7",
              marginRight: "500px",
              border: "none",
            },
          }}
          open
        >
          <Fab
            style={{
              position: "absolute",
              right: "0",
              top: "10px",
            }}
            sx={{ width: 42, height: 42, boxShadow: 0 }}
          >
            <ArrowBackIosNew />
          </Fab>
          <Box
            sx={{
              marginRight: "20px",
              borderRight: 1,
              borderColor: "#DBDBDB",
              paddingTop: "24px",
              background: "#f4f5f7",
            }}
          >
            <SidebarMenu />
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          border: "none",
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          background: "#f4f5f7",
        }}
      >
        {props.mainContent}
      </Box>
    </Box>
  );
};
