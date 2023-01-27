import React from "react";
import {
  StyledWelcomeFormWrapper,
  StyledWelcomeWrapper,
} from "./Welcome.styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box, Button } from '@mui/material';

function Welcome({ name, value, onChange, handleContinue, signedIn }) {
  return (
    <StyledWelcomeWrapper>
      <div className='welcome_content'>
        <h2>Welcome to ProjectX!</h2>

        <StyledWelcomeFormWrapper>
          <p className='intro'>
            Lets get started by creating your ProjeX workspace
          </p>
          <form>
            <label htmlFor={name}>Workspace Name</label>
            <OutlinedInput
              fullWidth
              name={name}
              value={value}
              onChange={onChange}
              placeholder='ex. Company, Team, Project, etc.'
            />
          </form>
          <p className='rem'>You can always change this later in settings.</p>
          <Button
            fullWidth
            disableElevation
            variant='contained'
            sx={{ color: '#fff' }}
            onClick={handleContinue}
          >
            {signedIn ? 'Continue' : 'Sign Up'}
          </Button>
        </StyledWelcomeFormWrapper>
      </div>
    </StyledWelcomeWrapper>
  );
}

export default Welcome;
