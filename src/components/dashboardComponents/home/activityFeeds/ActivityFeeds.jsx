import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";
import { ProjectCard } from "../projectCard/ProjectCard";
import { ActivityFeed } from "../activityFeed/ActivityFeed";

export const ActivityFeeds = () => {
  return (
    <Box sx={{ padding: "10px", margin: 0 }}>
      <Box
        sx={{
          background: "white",
          display: "block",
          padding: "20px",
        }}
      >
        <p style={{ fontWeight: 500, fontSize: 20, color: "#101828" }}>
          My Activity Feed
        </p>
        <ActivityFeed />
        <ActivityFeed />
        <ActivityFeed />
        <ActivityFeed />
        <ActivityFeed />
        <ActivityFeed />
        <ActivityFeed />
      </Box>
    </Box>
  );
};
