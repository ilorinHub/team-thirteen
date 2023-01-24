import { StyledWrapper } from "./LandingLayout.styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Hero } from "../../components/landingComponents/hero/Hero";
import { Cards } from "../../components/landingComponents/cards/Cards";

export default function Landing() {
  return (
    <StyledWrapper>
      {/* Header */}
      <section>
        <Hero />
      </section>

      <section>
        <Cards />
      </section>
    </StyledWrapper>
  );
}
