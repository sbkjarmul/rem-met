import Script from "next/script";

import ContactSection from "@/components/contact-section";
import CleaningDescriptionSection from "./components/cleaning-description-section";
import CleaningProcessSection from "./components/cleaning-process-section";
import CleaningHeroSection from "./components/cleaning-hero-section";
import { cleaningServiceSchema } from "../czyszczenie/seo/schemas";

export { metadata } from "../projektowanie-cad/seo/metadata";

const CleaningServicePage = () => {
  return (
    <>
      <Script
        id="designCad-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: cleaningServiceSchema }}
      />

      <CleaningHeroSection />
      <CleaningDescriptionSection />
      <CleaningProcessSection />

      <ContactSection />
    </>
  );
};

export default CleaningServicePage;
