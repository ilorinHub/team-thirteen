import { StyledWrapper } from "./LandingLayout.styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Hero } from "../../components/landingComponents/hero/Hero";
import { Cards } from "../../components/landingComponents/cards/Cards";
import FeaturesGrid from "../../components/landingComponents/featuresGrid/FeaturesGrid";

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

      <section>
        <FeaturesGrid />
      </section>
    </StyledWrapper>
  );
}
