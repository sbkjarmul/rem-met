import Script from "next/script";

import ContactSection from "@/components/contact-section";
import DesignCadWhatYouGetSection from "./components/design-cad-what-you-get-section";
import DesignCadWhySection from "./components/design-cad-why-section";
import DesignCadSupportSection from "./components/design-cad-support-section";
import DesignCadDescriptionSection from "./components/design-cad-description-section";
import DesignCadDocumentationSection from "./components/design-cad-documentation-section";
import DesignCadHeroSection from "./components/design-cad-hero-section";
import { designCadServiceSchema } from "./seo/schemas";

export { metadata } from "./seo/metadata";

const DesignCadServicePage = () => {
  return (
    <>
      <Script
        id="designCad-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: designCadServiceSchema }}
      />

      <DesignCadHeroSection />
      <DesignCadDescriptionSection />
      <DesignCadDocumentationSection />
      <DesignCadSupportSection />
      <DesignCadWhySection />
      <DesignCadWhatYouGetSection />

      <ContactSection />
    </>
  );
};

export default DesignCadServicePage;
