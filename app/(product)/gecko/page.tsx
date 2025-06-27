import GeckoHeroSection from "./components/gecko-hero-section";
import GeckoDetailsSection from "./components/gecko-details-section";
import GeckoVersionsSection from "./components/gecko-versions-section";
import ColorsSection from "@/components/colors-section";
import ContactSection from "@/components/contact-section";
import SpecificationSection from "@/components/specification/specification-section";
import GeckoSpecificationSection from "./components/gecko-specification-section";

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
