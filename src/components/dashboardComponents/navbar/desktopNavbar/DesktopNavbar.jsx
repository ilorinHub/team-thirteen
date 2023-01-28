import * as React from "react";
import {
  Search,
  StyledButton,
  SearchIconWrapper,
  StyledInputBase,
} from "../Navbar.styled";
import Icon from "../assets/img/icon.svg";
import Image from "next/image";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  ArrowDropDown,
  Notifications,
  Schedule,
  School,
} from "@mui/icons-material";
import { AppBar } from "@mui/material";

export const DesktopNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ background: "#1D2939", color: "white", boxShadow: 0 }}
      >
        <Toolbar>
          <Image
            src={Icon}
            alt="icon"
            style={{ marginRight: "20px" }}
            height={48}
            width={48}
          />
          <StyledButton
            variant="contained"
            endIcon={<ArrowDropDown />}
            style={{ marginRight: "50px", color: "white" }}
          >
            Create Project
          </StyledButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search ProjeX"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" sx={{ color: "#98A2B3" }}>
              <School />
              {/* use this to attach badge */}
              {/* <Badge badgeContent={4} color="error"> 
                <School />
              </Badge> */}
            </IconButton>
            <IconButton size="large" sx={{ color: "#98A2B3" }}>
              <Schedule />
            </IconButton>

            <IconButton size="large" sx={{ color: "#98A2B3" }}>
              <Notifications />
              <Box
                sx={{
                  textAlign: "left",
                }}
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography
                  noWrap
                  component="div"
                  color="inherit"
                  sx={{
                    marginLeft: "10px",
                    color: "white",
                    fontSize: "16",
                    fontWeight: "500",
                    padding: "4px",
                    color: "#98A2B3",
                  }}
                >
                  Activity
                </Typography>
              </Box>
            </IconButton>

            <Box
              sx={{
                textAlign: "left",
              }}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                noWrap
                component="div"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{
                  marginLeft: "10px",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "16",
                  fontWeight: "400",
                  background: "#7F56D9",
                  padding: "4px",
                }}
              >
                YP
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
