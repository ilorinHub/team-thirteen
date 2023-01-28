import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";
import { ProjectCard } from "../projectCard/ProjectCard";

export const ActiveTasks = () => {
  const [showing, setShowing] = useState("unfinished");

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
          My Active Tasks
        </p>
        <p style={{ marginTop: "12px" }}>
          <label style={{ fontSize: 16, fontWeight: 400, marginRight: "16px" }}>
            Showing:{" "}
          </label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={showing}
            label="Showing"
            onChange={(e) => {
              setShowing(e.target.value);
            }}
            sx={{ height: 32, width: 160, fontSize: "14px" }}
          >
            <MenuItem value={"unfinished"}>Started Only</MenuItem>
            <MenuItem value={"finished"}>Pending Only</MenuItem>
            <MenuItem value={"everything"}>Everything</MenuItem>
          </Select>
        </p>
        <p style={{ marginTop: "30px", fontWeight: 400, fontSize: "14px" }}>
          Ready for Development 2
        </p>
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Box>
  );
};
