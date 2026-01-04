import Script from "next/script";

import ContactSection from "@/components/contact-section";
import WeldingDescriptionSection from "./components/welding-description-section";
import WeldingWhatSection from "./components/welding-what-section";
import WeldingHeroSection from "./components/welding-hero-section";
import { weldingServiceSchema } from "../spawanie/seo/schemas";

export { metadata } from "./seo/metadata";

const WeldingServicePage = () => {
  return (
    <>
      <Script
        id="designCad-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: weldingServiceSchema }}
      />

      <WeldingHeroSection />
      <WeldingDescriptionSection />
      <WeldingWhatSection />
      {/* <WeldingFencesSection /> */}
      {/* <WeldingShelvesSection /> */}

      <ContactSection />
    </>
  );
};

export default WeldingServicePage;
