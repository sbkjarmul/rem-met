import StandardsDescriptionSection from "./components/standards-description-section";
import StandardsHeroSection from "./components/standards-hero-section";
import StandardsIso13857Section from "./components/standards-iso-13857-section";
import StandardsIso14120Section from "./components/standards-iso-14120-section";
import StandardsIso13857422Section from "./components/standards-iso-13857-422-section";
import ContactSection from "@/components/contact-section";

const StandardsPage = () => {
  return (
    <>
      <StandardsHeroSection />
      <StandardsDescriptionSection />
      <StandardsIso14120Section />
      <StandardsIso13857Section />
      <StandardsIso13857422Section />
      <ContactSection />
    </>
  );
};

export default StandardsPage;
