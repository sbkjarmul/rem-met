import ContactSection from "@/components/contact-section";
import FalconSpecificationSection from "./components/falcon-specification-section";
import FalconHeroSection from "./components/falcon-hero-section";
import FalconDetailsSection from "./components/falcon-details-section";
import ColorsSection from "@/components/colors-section";

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
