import { StyledWrapper } from "./LandingLayout.styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <StyledWrapper>
      {/* Header */}
      CONTENT
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button color="secondary" variant="contained">
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      {/* Footer */}
    </StyledWrapper>
  );
}
