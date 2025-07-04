import Script from "next/script";
import StandardsDescriptionSection from "./components/standards-description-section";
import StandardsHeroSection from "./components/standards-hero-section";
import StandardsIso13857Section from "./components/standards-iso-13857-section";
import StandardsIso14120Section from "./components/standards-iso-14120-section";
import StandardsIso13857422Section from "./components/standards-iso-13857-422-section";
import ContactSection from "@/components/contact-section";
import { standardsSchema } from "./seo/schemas";
import { breadcrumbsSchema } from "./seo/schemas";

export { metadata } from "./seo/metadata";

const StandardsPage = () => {
  return (
    <>
      <Script
        id="standards-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: standardsSchema }}
      />
      <Script
        id="breadcrumbs-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: breadcrumbsSchema }}
      />

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
