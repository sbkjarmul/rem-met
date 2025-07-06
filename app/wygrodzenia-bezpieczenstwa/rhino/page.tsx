import Script from "next/script";

import ContactSection from "@/components/contact-section";
import RhinoSpecificationSection from "./components/rhino-specification-section";
import RhinoHeroSection from "./components/rhino-hero-section";
import RhinoDetailsSection from "./components/rhino-details-section";
import RhinoVersionsSection from "./components/rhino-versions.section";
import { breadcrumbSchema, productSchema } from "./seo/schemas";
import ColorsSection from "@/components/colors-section";

export { metadata } from "./seo/metadata";

export default function RhinoPage() {
  return (
    <div>
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
      <RhinoHeroSection />
      <RhinoDetailsSection />
      <RhinoVersionsSection />
      <RhinoSpecificationSection />
      <ColorsSection />
      <ContactSection variant="product" />
    </div>
  );
}
