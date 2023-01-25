import { StyledWrapper } from "./LandingLayout.styled";
import { Hero } from "../../components/landingComponents/hero/Hero";
import { Cards } from "../../components/landingComponents/cards/Cards";
import { Footer } from "../../components/landingComponents/footer/Footer";
import { Header } from "../../components/landingComponents/header/Header";
import FeaturesGrid from "../../components/landingComponents/featuresGrid/FeaturesGrid";

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
        <FeaturesGrid />
      </section>
      <section>
        <Footer />
      </section>
    </StyledWrapper>
  );
}
