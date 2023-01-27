import React from "react";
import {
  StyledWelcomeFormWrapper,
  StyledWelcomeWrapper,
} from "./Welcome.styled";
import OutlinedInput from "@mui/material/OutlinedInput";

function Welcome() {
  return (
    <StyledWelcomeWrapper>
      <div className="welcome_content">
        <h2>Welcome to ProjectX!</h2>

        <StyledWelcomeFormWrapper>
          <p className="intro">
            Lets get started by creating your ProjeX workspace
          </p>
          <form>
            <label htmlFor="workspace">Workspace Name</label>
            <OutlinedInput
              fullWidth
              name="workspace"
              placeholder="ex. Company, Team, Project, etc."
            />
          </form>
          <p className="rem">You can always change this later in settings.</p>
        </StyledWelcomeFormWrapper>
      </div>
    </StyledWelcomeWrapper>
  );
}

export default Welcome;
