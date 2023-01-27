import { StyledWrapper } from "./LandingLayout.styled";
import { Hero } from "../../components/landingComponents/hero/Hero";
import { Cards } from "../../components/landingComponents/cards/Cards";
import { Footer } from "../../components/landingComponents/footer/Footer";
import { Header } from "../../components/landingComponents/header/Header";
import FeaturesGrid from "../../components/landingComponents/featuresGrid/FeaturesGrid";

export default function Landing() {
  return (
    <StyledWrapper>
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <Cards />
      </section>
      <section>
        <FeaturesGrid />
      </section>
      <Footer />
    </StyledWrapper>
  );
}
