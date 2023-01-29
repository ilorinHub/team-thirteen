import React from "react";
import {
  StyledSetupProfileFormWrapper,
  StyledSetupProfileWrapper,
} from "./SetupProfile.styled";
import GoogleButton from 'react-google-button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

function SetupProfile({
  signInWithGoogle,
  signedIn,
  displayName,
  handleContinue,
  fromLogin,
}) {
  return (
    <StyledSetupProfileWrapper>
      <div className='content'>
        <h2>
          {signedIn
            ? 'Welcome to ProjeX'
            : `${fromLogin ? 'Sign in to continue' : 'Set up your profile'}`}
        </h2>

        <StyledSetupProfileFormWrapper>
          <form>
            {signedIn && (
              <>
                <label htmlFor='profile'>Name</label>
                <OutlinedInput
                  fullWidth
                  name='profile'
                  value={displayName}
                  disabled
                />
              </>
            )}
            {!signedIn ? (
              <GoogleButton
                onClick={(event) => {
                  event.preventDefault();
                  signInWithGoogle();
                }}
                type='light'
                style={{
                  boxShadow: 'none',
                  fontFamily: 'Open Sans',
                  width: 'unset',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '12px',
                  cursor: 'pointer',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.02)',
                }}
              />
            ) : (
              <Box sx={{ margin: '36px auto', maxWidth: '300px' }}>
                <Button
                  fullWidth
                  disableElevation
                  variant='contained'
                  sx={{ color: '#fff' }}
                  onClick={(event) => {
                    event.preventDefault();
                    handleContinue();
                  }}
                >
                  Continue
                </Button>
              </Box>
            )}
          </form>
          {!signedIn && (
            <p className='rem'>
              By clicking the “Sign in with Google” button, you agree to our{' '}
              <Link href='#'>Terms of Service </Link>
              and <Link href='#'>Privacy Policy</Link>.
            </p>
          )}
        </StyledSetupProfileFormWrapper>
      </div>
    </StyledSetupProfileWrapper>
  );
}

export default SetupProfile;
