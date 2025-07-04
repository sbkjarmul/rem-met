import { Metadata } from "next";

import ContactSection from "@/components/contact-section";
import FalconSpecificationSection from "./components/falcon-specification-section";
import FalconHeroSection from "./components/falcon-hero-section";
import FalconDetailsSection from "./components/falcon-details-section";
import ColorsSection from "@/components/colors-section";
import pl from "@/locales/pl";

export const metadata: Metadata = {
  title: pl["falcon.metadata.title"],
  description: pl["falcon.metadata.description"],
};

export default function FalconPage() {
  return (
    <div>
      <FalconHeroSection />
      <FalconDetailsSection />
      <FalconSpecificationSection />
      <ColorsSection />
      <ContactSection variant="product" />
    </div>
  );
}
