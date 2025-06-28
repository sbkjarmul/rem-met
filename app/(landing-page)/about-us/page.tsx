import ContactSection from "@/components/contact-section";
import AboutUsDescriptionSection from "./components/about-us-description-section";
import AboutUsEcologySection from "./components/about-us-ecology-section";
import AboutUsHeroSection from "./components/about-us-hero-section";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHeroSection />
      <AboutUsDescriptionSection />
      <AboutUsEcologySection />
      <ContactSection />
    </>
  );
};

export default AboutUsPage;
