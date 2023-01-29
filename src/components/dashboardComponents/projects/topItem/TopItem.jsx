import { Select } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import React from "react";
import { StyledWrapper } from "./TopItem.styled";

function TopItem({ label, icon, options }) {
  const [choosen, setChoosen] = React.useState(options[0]?.value);

  const handleChange = (event) => {
    setChoosen(event.target.value);
  };

  return (
    <StyledWrapper>
      <p className="heading">
        {icon ? (
          <span className="icon">
            <Image src={icon} alt=" " width={20} height={20} />
          </span>
        ) : null}
        {label?.toUpperCase()}
      </p>
      <div className="select_drop">
        <FormControl sx={{ minWidth: 70 }}>
          <Select
            size="small"
            value={choosen}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {options.map((op, i) => (
              <MenuItem key={i} value={op.value}>
                {op.option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </StyledWrapper>
  );
}

TopItem.defaultProps = {
  options: [
    { option: "all", value: "all" },
    { option: "mee", value: "mee" },
  ],
};

export default TopItem;
