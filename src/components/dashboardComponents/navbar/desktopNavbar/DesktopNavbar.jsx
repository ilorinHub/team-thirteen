import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import {
  Search,
  StyledButton,
  SearchIconWrapper,
  StyledInputBase,
} from '../Navbar.styled';
import Icon from '../assets/img/icon.svg';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  ArrowDropDown,
  Notifications,
  Schedule,
  School,
} from '@mui/icons-material';
import { AppBar } from '@mui/material';

export const DesktopNavbar = ({ signOut }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = useSelector((state) => state?.firebaseReducer?.auth);
  const { displayName, photoURL, email } = auth;
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
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
      sx={{ marginTop: '40px' }}
    >
      <Card sx={{ maxWidth: 345, marginBottom: '-10px' }}>
        <CardMedia
          sx={{
            height: 80,
            width: 80,
            margin: 'auto',
            marginTop: '20px',
            borderRadius: '50%',
            border: '1px solid #1D2939',
          }}
          image={photoURL}
          title='user avatar'
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant='h6' component='div'>
            {displayName}
          </Typography>
          <Typography
            gutterBottom
            variant='body2'
            color='GrayText'
            component='div'
          >
            {email}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={signOut} color='error' size='small'>
            Sign out
          </Button>
        </CardActions>
      </Card>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ background: '#1D2939', color: 'white' }}>
        <Toolbar>
          <Image
            src={Icon}
            alt='icon'
            style={{ marginRight: '20px' }}
            height={48}
            width={48}
          />
          <StyledButton
            variant='contained'
            endIcon={<ArrowDropDown />}
            style={{ marginRight: '50px', color: 'white' }}
          >
            Create Project
          </StyledButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search ProjeX'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' sx={{ color: '#98A2B3' }}>
              <School />
              {/* use this to attach badge */}
              {/* <Badge badgeContent={4} color="error"> 
                <School />
              </Badge> */}
            </IconButton>
            <IconButton size='large' sx={{ color: '#98A2B3' }}>
              <Schedule />
            </IconButton>

            <IconButton size='large' sx={{ color: '#98A2B3' }}>
              <Notifications />
              <Box
                sx={{
                  textAlign: 'left',
                }}
                display='flex'
                justifyContent='center'
                flexDirection='column'
              >
                <Typography
                  noWrap
                  component='div'
                  color='inherit'
                  sx={{
                    marginLeft: '10px',
                    color: 'white',
                    fontSize: '16',
                    fontWeight: '500',
                    padding: '4px',
                    color: '#98A2B3',
                  }}
                >
                  Activity
                </Typography>
              </Box>
            </IconButton>

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
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
