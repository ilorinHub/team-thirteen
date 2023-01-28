import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Projects } from "./projects/Projects";

export const Home = () => {
  return (
    <Box sx={{ color: "black", marginTop: "50px" }}>
      <Grid container>
        <Grid item sm={12} lg={4} md={4}>
          <Projects />
        </Grid>
        <Grid item sm={12} lg={3} md={3}>
          My Active Tasks
        </Grid>
        <Grid item sm={12} lg={5} md={5}>
          My Activity Feed
        </Grid>
      </Grid>
    </Box>
  );
};
