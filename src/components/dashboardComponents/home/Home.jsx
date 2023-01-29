import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Projects } from "./projects/Projects";
import { ActiveTasks } from "./activeTasks/ActiveTasks";
import { ActivityFeeds } from "./activityFeeds/ActivityFeeds";

export const Home = () => {
  return (
    <Box sx={{ color: "black" }}>
      <Grid container>
        <Grid item sm={12} lg={4} md={4}>
          <Projects />
        </Grid>
        <Grid item sm={12} lg={4} md={4}>
          <ActiveTasks />
        </Grid>
        <Grid item sm={12} lg={4} md={4}>
          <ActivityFeeds />
        </Grid>
      </Grid>
    </Box>
  );
};
