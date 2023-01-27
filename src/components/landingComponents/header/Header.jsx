import { useState, React } from "react";
import { useRouter } from "next/router";
import { StyledWrapper, StyledButton } from "./Header.styled";
import Ellipse from "./assets/img/ellipse.svg";
import Image from "next/image";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import Fade from "@mui/material/Fade";

export const Header = () => {
  const [language, setLanguage] = useState("English");
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledWrapper>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Image alt="" src={Ellipse} width={32} height={32} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            textAlign: "right",
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          Features
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            textAlign: "left",
          }}
        >
          <Button
            aria-controls="language-menu"
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
            className="header-text"
          >
            {language}
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => setLanguage("English")}>English</MenuItem>
            <MenuItem onClick={() => setLanguage("French")}>French</MenuItem>
            <MenuItem onClick={() => setLanguage("Arabic")}>Arabic</MenuItem>
          </Menu>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: "right",
          }}
        >
          <StyledButton onClick={() => router.push('/dashboard')} variant="contained" endIcon={<KeyboardArrowRight />}>
            App
          </StyledButton>
        </Grid>
      </Grid>
    </StyledWrapper>
  );
};
