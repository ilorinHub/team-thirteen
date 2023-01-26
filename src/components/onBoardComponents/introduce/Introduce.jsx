import { useState } from "react";
import { Box, Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import {
  StyledIntroduceFormWrapper,
  StyledIntroduceWrapper,
} from "./Introduce.styled";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Education", "Civil Engineer", "Doctor", "Lawyer"];

function Introduce() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <StyledIntroduceWrapper>
      <div className="content">
        <h2>Tell us about yourself</h2>

        <StyledIntroduceFormWrapper>
          <p className="intro">
            This information will help us tailor your ProjeX experience.
          </p>

          <form>
            <label htmlFor="workspace">What best describes your role?</label>
            <Select
              fullWidth
              //   multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              //   renderValue={(selected) => {
              //     if (selected.length === 0) {
              //       return <em>Construction</em>;
              //     }

              //     return selected.join(", ");
              //   }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Construction</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>

            <Box sx={{ margin: "24px auto", maxWidth: "300px" }}>
              <Button
                fullWidth
                disableElevation
                variant="contained"
                sx={{ color: "#fff" }}
              >
                Continue
              </Button>
            </Box>
          </form>
        </StyledIntroduceFormWrapper>
      </div>
    </StyledIntroduceWrapper>
  );
}

export default Introduce;
