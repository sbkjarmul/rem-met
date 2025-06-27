import ContactSection from "@/components/contact-section";
import FalconSpecificationSection from "./components/falcon-specification-section";
import FalconHeroSection from "./components/falcon-hero-section";

export default function FalconPage() {
  return (
    <div>
      <FalconHeroSection />
      <FalconSpecificationSection />
      <ContactSection variant="product" />
    </div>
  );
}
