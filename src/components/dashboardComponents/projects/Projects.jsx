import React from "react";
import {
  StyledContainer,
  StyledFilterOptions,
  StyledGroupAndView,
  StyledHeader,
  StyledTopOptions,
} from "./Projects.styled";
import TopItem from "./topItem/TopItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { FilterData } from "./data/data";
import DataTable from "./table/DataTable";

function Projects() {
  const [currView, setCurrView] = React.useState("list");

  return (
    <StyledContainer>
      <StyledHeader>Projects</StyledHeader>
      <StyledTopOptions>
        <div style={{ paddingTop: "5px" }}>
          <p className="label_title">FILTER</p>
          <Box>
            <TextField
              size="small"
              InputProps={{
                style: { fontSize: "16px" },
                placeholder: "Filter Projects by name",
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>
        </div>

        <StyledFilterOptions>
          {FilterData?.mid.map((item, index) => (
            <TopItem
              key={index}
              label={item.label}
              icon={item.icon}
              options={item.options}
            />
          ))}
        </StyledFilterOptions>

        <StyledGroupAndView>
          <Box>
            <TopItem label="Group" />
          </Box>
          <Box>
            <p className="label_title">VIEW</p>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="list"
                sx={{
                  borderRadius: "4px",
                  backgroundColor: currView === "list" ? "#D1FADF" : "none",
                }}
                onClick={() => setCurrView("list")}
              >
                <FormatListBulletedOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="grid"
                sx={{
                  borderRadius: "4px",
                  backgroundColor: currView === "grid" ? "#D1FADF" : "none",
                }}
                onClick={() => setCurrView("grid")}
              >
                <AppsOutlinedIcon />
              </IconButton>
            </Stack>
          </Box>
        </StyledGroupAndView>
      </StyledTopOptions>

      <DataTable />
    </StyledContainer>
  );
}

export default Projects;
