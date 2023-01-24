import { Box } from "@mui/material";
import { StyledWrapper } from "./Hero.styled";
import BGImage from "./assets/img/bg.png";

export const Hero = () => {
  return (
    <Box
      sx={{
        background: `url(${BGImage.src}) center / cover`,
      }}
    >
      <StyledWrapper>
        <div className="hero_content">
          <p>Project Monitoring App</p>

          <h1>The ultimate project tracking tool.</h1>
        </div>
      </StyledWrapper>
    </Box>
  );
};
