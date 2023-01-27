import styled from "styled-components";
import { Button, InputBase } from "@mui/material";

export const StyledButton = styled(Button)`
  border-radius: 4px;
  text-transform: none;
`;
export const Search = styled.div`
  position: relative;
  color: #98a2b3;
  border-radius: 6px;
  background-color: white;
  "&:hover": {
    background-color: white;
    color: "#101828";
  }
  width: "100%";
  [theme.breakpoints.up("sm")]: {
    marginright: 10px;
    width: auto;
  }
`;

export const SearchIconWrapper = styled.div`
  padding-top: 5px;
  padding-left: 10px;
  height: 100%;
  position: absolute;
  pointerevents: none;
  display: flex;
  alignitems: center;
  justifycontent: center;
  color: #d0d5dd;
`;

export const StyledInputBase = styled(InputBase)`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 40px;
  font-size: 14px;
  width:100%
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
     transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
`;
