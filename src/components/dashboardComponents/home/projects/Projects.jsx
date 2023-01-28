import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Card, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Event, Message } from "@mui/icons-material";
import Image from "next/image";
import User1 from "../assets/img/user1.svg";
import User2 from "../assets/img/user2.svg";
import User3 from "../assets/img/user3.svg";
import Messages from "../assets/img/messages.svg";
import Files from "../assets/img/files.svg";

export const Projects = () => {
  const [showing, setShowing] = useState("unfinished");

  return (
    <Box sx={{ background: "white", padding: "20px" }}>
      <p style={{ fontWeight: 500, fontSize: 20, color: "#101828" }}>
        My Projects
      </p>
      <p style={{ marginTop: "12px" }}>
        <label style={{ fontSize: 16, fontWeight: 400 }}>Showing: </label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={showing}
          label="Showing"
          onChange={(e) => {
            setShowing(e.target.value);
          }}
          sx={{ height: 32, fontSize: "14px" }}
        >
          <MenuItem value={"unfinished"}>Unfinished Only</MenuItem>
          <MenuItem value={"finished"}>Finished Only</MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
        </Select>
      </p>
      <p style={{ marginTop: "30px", fontWeight: 400, fontSize: "14px" }}>
        Ready for Development 2
      </p>

      <Card sx={{ padding: "10px", marginTop: "18px" }}>
        <Box sx={{ display: "block", marginTop: "12px", marginBottom: "30px" }}>
          <label
            style={{
              background: "rgba(223, 168, 116, 0.2)",
              color: "#D58D49",
              padding: "6px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Low
          </label>
          <Box sx={{ display: "flex", float: "right" }}>
            <label
              style={{ fontSize: "16px", fontWeight: 800, color: "#0D062D" }}
            >
              ...
            </label>
          </Box>
        </Box>
        <Box>
          {" "}
          <p style={{ color: "#1D2939", fontSize: "16px", fontWeight: "500" }}>
            Ilorin Hub Construction
          </p>
        </Box>
        <Box>
          <p
            style={{
              fontWeight: "400",
              fontSize: "12px",
              color: "#787486",
              marginTop: "5px",
            }}
          >
            MEP - Mechanical, electrical and plumbing
          </p>
        </Box>
        <Box sx={{ display: "block", marginTop: "24px", marginBottom: "24px" }}>
          <Box
            sx={{
              border: 1,
              borderRadius: "20px",
              borderColor: "#D0D5DD",
              display: "inline-flex",
              padding: "10px",
              marginRight: "24px",
            }}
          >
            <Event sx={{ width: 12, height: 12, marginRight: "10px" }} />
            <lable style={{ fontSize: "10px", fontWeight: 500 }}>Feb 20</lable>
          </Box>
          <Box
            sx={{
              border: 1,
              borderRadius: "20px",
              borderColor: "#D0D5DD",
              display: "inline-flex",
              padding: "10px",
            }}
          >
            <label
              style={{
                borderRadius: "50%",
                background: "#6941C6",
                width: "12px",
                height: "12px",
                display: "inline",
                marginRight: "8px",
              }}
            />
            <lable style={{ fontSize: "10px", fontWeight: 500 }}>
              Engineering
            </lable>
          </Box>
        </Box>

        <Box
          flexGrow={1}
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box flexGrow={3} style={{ marginRight: "50px", display: "inline" }}>
            <Box
              flexGrow={1}
              sx={{
                display: "relative",
                alignItems: "center",
              }}
            >
              <Image
                src={User3}
                style={{
                  position: "absolute",
                  marginTop: "-14px",
                  marginLeft: "40px",
                }}
                alt="icon"
              />
              <Image
                style={{
                  position: "absolute",
                  marginLeft: "20px",
                  marginTop: "-14px",
                }}
                src={User2}
                alt="icon"
              />
              <Image
                src={User1}
                style={{ position: "absolute", marginTop: "-14px" }}
                alt="icon"
              />
            </Box>
          </Box>
          <Box
            flexGrow={4}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <Image src={Messages} height={15} width={18} alt="icon" />
            <label
              style={{ fontSize: "10px", fontWeight: "500", color: "#787486" }}
            >
              12 Comments
            </label>
          </Box>

          <Box
            flexGrow={3}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <Image src={Files} height={15} width={18} alt="icon" />
            <label
              style={{ fontSize: "10px", fontWeight: "500", color: "#787486" }}
            >
              0 files
            </label>
          </Box>
        </Box>
      </Card>

      <Card sx={{ padding: "10px", marginTop: "18px" }}>
        <Box sx={{ display: "block", marginTop: "12px", marginBottom: "30px" }}>
          <label
            style={{
              background: "rgba(223, 168, 116, 0.2)",
              color: "#D58D49",
              padding: "6px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Low
          </label>
          <Box sx={{ display: "flex", float: "right" }}>
            <label
              style={{ fontSize: "16px", fontWeight: 800, color: "#0D062D" }}
            >
              ...
            </label>
          </Box>
        </Box>
        <Box>
          {" "}
          <p style={{ color: "#1D2939", fontSize: "16px", fontWeight: "500" }}>
            Ilorin Hub Construction
          </p>
        </Box>
        <Box>
          <p
            style={{
              fontWeight: "400",
              fontSize: "12px",
              color: "#787486",
              marginTop: "5px",
            }}
          >
            MEP - Mechanical, electrical and plumbing
          </p>
        </Box>
        <Box sx={{ display: "block", marginTop: "24px", marginBottom: "24px" }}>
          <Box
            sx={{
              border: 1,
              borderRadius: "20px",
              borderColor: "#D0D5DD",
              display: "inline-flex",
              padding: "10px",
              marginRight: "24px",
            }}
          >
            <Event sx={{ width: 12, height: 12, marginRight: "10px" }} />
            <lable style={{ fontSize: "10px", fontWeight: 500 }}>Feb 20</lable>
          </Box>
          <Box
            sx={{
              border: 1,
              borderRadius: "20px",
              borderColor: "#D0D5DD",
              display: "inline-flex",
              padding: "10px",
            }}
          >
            <label
              style={{
                borderRadius: "50%",
                background: "#6941C6",
                width: "12px",
                height: "12px",
                display: "inline",
                marginRight: "8px",
              }}
            />
            <lable style={{ fontSize: "10px", fontWeight: 500 }}>
              Engineering
            </lable>
          </Box>
        </Box>

        <Box
          flexGrow={1}
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box flexGrow={3} style={{ marginRight: "50px", display: "inline" }}>
            <Box
              flexGrow={1}
              sx={{
                display: "relative",
                alignItems: "center",
              }}
            >
              <Image
                src={User3}
                style={{
                  position: "absolute",
                  marginTop: "-14px",
                  marginLeft: "40px",
                }}
                alt="icon"
              />
              <Image
                style={{
                  position: "absolute",
                  marginLeft: "20px",
                  marginTop: "-14px",
                }}
                src={User2}
                alt="icon"
              />
              <Image
                src={User1}
                style={{ position: "absolute", marginTop: "-14px" }}
                alt="icon"
              />
            </Box>
          </Box>
          <Box
            flexGrow={4}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <Image src={Messages} height={15} width={18} alt="icon" />
            <label
              style={{ fontSize: "10px", fontWeight: "500", color: "#787486" }}
            >
              12 Comments
            </label>
          </Box>

          <Box
            flexGrow={3}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <Image src={Files} height={15} width={18} alt="icon" />
            <label
              style={{ fontSize: "10px", fontWeight: "500", color: "#787486" }}
            >
              0 files
            </label>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
