import Script from "next/script";

import GeckoHeroSection from "./components/gecko-hero-section";
import GeckoDetailsSection from "./components/gecko-details-section";
import GeckoVersionsSection from "./components/gecko-versions-section";
import ColorsSection from "@/components/colors-section";
import ContactSection from "@/components/contact-section";
import GeckoSpecificationSection from "./components/gecko-specification-section";
import { breadcrumbSchema, productSchema } from "./seo/schemas";

export { metadata } from "./seo/metadata";

export default function GeckoPage() {
  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: productSchema }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      <GeckoHeroSection />
      <GeckoDetailsSection />
      <GeckoVersionsSection />
      <GeckoSpecificationSection />
      <ColorsSection />
      <ContactSection variant="product" />
    </>
  );
}
