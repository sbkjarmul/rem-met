import Script from "next/script";

import ContactSection from "@/components/contact-section";
import Design3dWhatYouGetSection from "./components/design-3d-what-you-get-section";
import Design3dWhySection from "./components/design-3d-why-section";
import Design3dSupportSection from "./components/design-3d-support-section";
import Design3dDescriptionSection from "./components/design-3d-description-section";
import Design3dDocumentationSection from "./components/design-3d-documentation-section";
import Design3dHeroSection from "./components/design-3d-hero-section";
import { design3dServiceSchema } from "../projektowanie-3d/seo/schemas";

export { metadata } from "../czyszczenie/seo/metadata";

const Design3dServicePage = () => {
  return (
    <>
      <Script
        id="design3d-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: design3dServiceSchema }}
      />

      <Design3dHeroSection />
      <Design3dDescriptionSection />
      <Design3dDocumentationSection />
      <Design3dSupportSection />
      <Design3dWhySection />
      <Design3dWhatYouGetSection />

      <ContactSection />
    </>
  );
};

export default Design3dServicePage;
