import GeckoHeroSection from "./components/gecko-hero-section";
import GeckoDetailsSection from "./components/gecko-details-section";
import GeckoVersionsSection from "./components/gecko-versions-section";
import ColorsSection from "@/components/colors-section";
import ContactSection from "@/components/contact-section";
import GeckoSpecificationSection from "./components/gecko-specification-section";
import { Metadata } from "next";
import pl from "@/locales/pl";

export const metadata: Metadata = {
  title: pl["gecko.metadata.title"],
  description: pl["gecko.metadata.description"],
};

export default function GeckoPage() {
  return (
    <div>
      <GeckoHeroSection />
      <GeckoDetailsSection />
      <GeckoVersionsSection />
      <GeckoSpecificationSection />
      <ColorsSection />
      <ContactSection variant="product" />
    </div>
  );
}
