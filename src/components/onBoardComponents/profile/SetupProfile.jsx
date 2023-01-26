import React from "react";
import {
  StyledSetupProfileFormWrapper,
  StyledSetupProfileWrapper,
} from "./SetupProfile.styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box, Button } from "@mui/material";
import Link from "next/link";
function SetupProfile() {
  return (
    <StyledSetupProfileWrapper>
      <div className="content">
        <h2>Set up your profile</h2>

        <StyledSetupProfileFormWrapper>
          <form>
            <label htmlFor="profile">Name</label>
            <OutlinedInput
              fullWidth
              name="profile"
              placeholder="Yewande Palmer"
            />

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
          <p className="rem">
            By clicking the “Continue” button, you agree to our{" "}
            <Link href="#">Terms of Service </Link>
            and <Link href="#">Privacy Policy</Link>.
          </p>
        </StyledSetupProfileFormWrapper>
      </div>
    </StyledSetupProfileWrapper>
  );
}

export default SetupProfile;
