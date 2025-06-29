import StandardsDescriptionSection from "./components/standards-description-section";
import StandardsHeroSection from "./components/standards-hero-section";
import StandardsIso14120Section from "./components/standards-iso-14120-section";

const StandardsPage = () => {
  return (
    <>
      <StandardsHeroSection />
      <StandardsDescriptionSection />
      <StandardsIso14120Section />
    </>
  );
};

export default StandardsPage;
