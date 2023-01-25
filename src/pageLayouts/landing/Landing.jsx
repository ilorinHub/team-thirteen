import { StyledWrapper } from "./LandingLayout.styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Hero } from "../../components/landingComponents/hero/Hero";
import { Cards } from "../../components/landingComponents/cards/Cards";
import { Footer } from "../../components/landingComponents/footer/Footer";
import { Header } from "../../components/landingComponents/header/Header";

export default function Landing() {
  return (
    <StyledWrapper>
      <section>
        <Header />
      </section>{" "}
      <section>
        <Hero />
      </section>
      <section>
        <Cards />
      </section>
      <section>
        <Footer />
      </section>
    </StyledWrapper>
  );
}
