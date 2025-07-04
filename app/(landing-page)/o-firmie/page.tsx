import Script from "next/script";

import ContactSection from "@/components/contact-section";
import AboutUsDescriptionSection from "./components/about-us-description-section";
import AboutUsEcologySection from "./components/about-us-ecology-section";
import AboutUsHeroSection from "./components/about-us-hero-section";
import { aboutSchema } from "./seo/schemas";

export { metadata } from "./seo/metadata";

const AboutUsPage = () => {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: aboutSchema }}
      />

      <AboutUsHeroSection />
      <AboutUsDescriptionSection />
      <AboutUsEcologySection />
      <ContactSection />
    </>
  );
};

export default AboutUsPage;
