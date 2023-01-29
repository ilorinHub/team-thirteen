import Image from "next/image";
import React from "react";
import {
  StyledApps,
  StyledPara,
  StyledTable,
  StyledTableCol,
  StyledTableHeader,
  StyledTableWrapper,
} from "./DataTable.styled";
import AppsSvg from "../assets/svg/apps.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SqFootSvg from "../assets/svg/square_foot.svg";
import StartSvg from "../assets/svg/event_available.svg";
import EndSvg from "../assets/svg/event_upcoming.svg";
import MilestoneSvg from "../assets/svg/bar_chart.svg";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DataTable() {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>
              <StyledApps>
                <Image src={AppsSvg.src} alt=" " width={20} height={20} />
                <IconButton aria-label="more" style={{ padding: "0px" }}>
                  <ArrowDropDownIcon />
                </IconButton>
              </StyledApps>
            </StyledTableHeader>
            <StyledTableHeader>ID</StyledTableHeader>
            <StyledTableHeader>Name</StyledTableHeader>
            <StyledTableHeader>Issues</StyledTableHeader>
            <StyledTableHeader>Points</StyledTableHeader>
            <StyledTableHeader>Docs</StyledTableHeader>
            <StyledTableHeader>Teams</StyledTableHeader>
            <StyledTableHeader>Owner</StyledTableHeader>
            <StyledTableHeader>Status</StyledTableHeader>
            <StyledTableHeader>Progress</StyledTableHeader>
            <StyledTableHeader>Start</StyledTableHeader>
            <StyledTableHeader>End</StyledTableHeader>
            <StyledTableHeader>Milestone</StyledTableHeader>
          </tr>
        </thead>

        <tbody>
          <tr className="content">
            <StyledTableCol>
              <StyledApps>
                <Image src={AppsSvg.src} alt=" " width={20} height={20} />
              </StyledApps>
            </StyledTableCol>
            <StyledTableCol>01</StyledTableCol>
            <StyledTableCol>illorinHub</StyledTableCol>
            <StyledTableCol>4</StyledTableCol>
            <StyledTableCol>12</StyledTableCol>
            <StyledTableCol>10</StyledTableCol>
            <StyledTableCol>
              <Stack direction="row" spacing={1}>
                <Chip
                  size="small"
                  icon={
                    <Image src={SqFootSvg.src} alt="" width={8} height={8} />
                  }
                  label="Eng"
                  sx={{ fontSize: "12px", color: "#344054" }}
                />
              </Stack>
            </StyledTableCol>

            <StyledTableCol>
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  width: 24,
                  height: 24,
                  fontSize: "12px",
                }}
              >
                OP
              </Avatar>
            </StyledTableCol>
            <StyledTableCol>
              <CheckCircleIcon color="primary" sx={{ fontSize: "20px" }} />
            </StyledTableCol>

            <StyledTableCol>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" {...{ value: 20 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <StyledPara>{`20%`}</StyledPara>
                </Box>
              </Box>
            </StyledTableCol>
            <StyledTableCol>
              <StyledApps>
                <Image src={StartSvg.src} alt=" " width={20} height={20} />
              </StyledApps>
            </StyledTableCol>
            <StyledTableCol>
              <StyledApps>
                <Image src={EndSvg.src} alt=" " width={20} height={20} />
              </StyledApps>
            </StyledTableCol>
            <StyledTableCol>
              <StyledApps>
                <Image src={MilestoneSvg.src} alt=" " width={20} height={20} />
                <StyledPara>Completed foundation work</StyledPara>
              </StyledApps>
            </StyledTableCol>
          </tr>
          <tr className="content">
            <StyledTableCol>
              <StyledApps>
                <Image src={AppsSvg.src} alt=" " width={20} height={20} />
              </StyledApps>
            </StyledTableCol>
            <StyledTableCol>02</StyledTableCol>
            <StyledTableCol>E-Goverment Hackathon</StyledTableCol>
            <StyledTableCol>4</StyledTableCol>
            <StyledTableCol>12</StyledTableCol>
            <StyledTableCol>10</StyledTableCol>
            <StyledTableCol>
              <Stack direction="row" spacing={1}>
                <Chip
                  size="small"
                  icon={
                    <Image src={SqFootSvg.src} alt="" width={8} height={8} />
                  }
                  label="Eng"
                  sx={{ fontSize: "12px", color: "#344054" }}
                />
              </Stack>
            </StyledTableCol>

            <StyledTableCol>
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  width: 24,
                  height: 24,
                  fontSize: "12px",
                }}
              >
                OP
              </Avatar>
            </StyledTableCol>
            <StyledTableCol>
              <CheckCircleIcon color="primary" sx={{ fontSize: "20px" }} />
            </StyledTableCol>

            <StyledTableCol>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" {...{ value: 20 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <StyledPara>{`20%`}</StyledPara>
                </Box>
              </Box>
            </StyledTableCol>
            <StyledTableCol>
              <StyledApps>
                <Image src={StartSvg.src} alt=" " width={20} height={20} />
              </StyledApps>
            </StyledTableCol>
            <StyledTableCol>
              <StyledApps>
                <Image src={EndSvg.src} alt=" " width={20} height={20} />
              </StyledApps>
            </StyledTableCol>
            <StyledTableCol>
              <StyledApps>
                <Image src={MilestoneSvg.src} alt=" " width={20} height={20} />
                <StyledPara>Completed foundation work</StyledPara>
              </StyledApps>
            </StyledTableCol>
          </tr>
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}

export default DataTable;
