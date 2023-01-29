import * as React from "react";
import Icon from "../assets/img/icon.svg";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useSelector } from 'react-redux';
import {
  ArrowDropDown,
  Notifications,
  Schedule,
  School,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/icons-material';
import {
  Search,
  StyledButton,
  SearchIconWrapper,
  StyledInputBase,
} from '../Navbar.styled';

export const MobileNavbar = ({ signOut, handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = useSelector((state) => state?.firebaseReducer?.auth);
  const { displayName, photoURL, email } = auth;
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{displayName}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{email}</MenuItem>
      <MenuItem onClick={signOut}>Sign out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search ProjeX'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </MenuItem>
      <MenuItem>
        <StyledButton
          variant='contained'
          endIcon={<ArrowDropDown />}
          style={{ marginRight: '50px', color: 'white' }}
        >
          Create Project
        </StyledButton>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' sx={{ color: '#98A2B3' }}>
          <School />
          {/* use this to attach badge */}
          {/* <Badge badgeContent={4} color="error"> 
                <School />
              </Badge> */}
        </IconButton>
        <p>Projects</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' sx={{ color: '#98A2B3' }}>
          <Schedule />
        </IconButton>
        <p>Tasks</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' sx={{ color: '#98A2B3' }}>
          <Notifications />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ background: '#1D2939', color: 'white' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              textAlign: 'center',
            }}
            display='flex'
            justifyContent='center'
            flexDirection='column'
          >
            <label>
              <Image
                src={Icon}
                alt='icon'
                sx={{ mr: 1 }}
                height={48}
                width={48}
              />
            </label>
          </Box>

          <Box
            sx={{
              textAlign: 'left',
            }}
            display='flex'
            justifyContent='center'
            flexDirection='column'
          >
            {photoURL ? (
              <Image
                style={{ borderRadius: '50%' }}
                src={photoURL}
                width={40}
                height={40}
                alt='user avatar'
                onClick={handleProfileMenuOpen}
              />
            ) : (
              <Typography
                noWrap
                component='div'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'
                sx={{
                  marginLeft: '10px',
                  color: 'white',
                  borderRadius: '50%',
                  fontSize: '16',
                  fontWeight: '400',
                  background: '#7F56D9',
                  padding: '4px',
                }}
              >
                {auth?.uid
                  ? displayName?.replace(/ .*/, '')?.[0] +
                    displayName?.replace(/.* /, '')?.[0]
                  : null}
              </Typography>
            )}
          </Box>
          <Box>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
