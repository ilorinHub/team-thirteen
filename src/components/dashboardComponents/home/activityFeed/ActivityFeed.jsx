import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import { Event } from "@mui/icons-material";
import Image from "next/image";
import User1 from "../assets/img/user1.svg";
import User2 from "../assets/img/user2.svg";
import User3 from "../assets/img/user3.svg";
import Messages from "../assets/img/messages.svg";
import Files from "../assets/img/files.svg";

export const ActivityFeed = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "24px",
        marginLeft: 0,
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          noWrap
          component="div"
          aria-label="account of current user"
          color="inherit"
          sx={{
            color: "white",
            borderRadius: "50%",
            fontSize: "12",
            fontWeight: "400",
            background: "#7F56D9",
            padding: "4px",
            marginRight: "14px",
          }}
        >
          YP
        </Typography>
      </Box>
      <label style={{ color: "#1D2939", fontSize: "12px", fontWeight: "500" }}>
        nenyeuba&nbsp;
      </label>
      <label style={{ color: "#667085", fontSize: "12px", fontWeight: "400" }}>
        assigned you a task
      </label>
      <Typography
        sx={{
          color: "#039855",
          textDecoration: "underline",
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        &nbsp;view
      </Typography>
    </Box>
  );
};
