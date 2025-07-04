import { Metadata } from "next";

import ContactSection from "@/components/contact-section";
import FalconSpecificationSection from "./components/falcon-specification-section";
import FalconHeroSection from "./components/falcon-hero-section";
import FalconDetailsSection from "./components/falcon-details-section";
import ColorsSection from "@/components/colors-section";
import pl from "@/locales/pl";
import Script from "next/script";
import { breadcrumbSchema, productSchema } from "./seo/schemas";

export { metadata } from "./seo/metadata";

export default function FalconPage() {
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

      <FalconHeroSection />
      <FalconDetailsSection />
      <FalconSpecificationSection />
      <ColorsSection />
      <ContactSection variant="product" />
    </>
  );
}
