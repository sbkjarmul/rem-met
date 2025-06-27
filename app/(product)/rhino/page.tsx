import ContactSection from "@/components/contact-section";
import RhinoSpecificationSection from "./components/rhino-specification-section";
import RhinoHeroSection from "./components/rhino-hero-section";
import RhinoDetailsSection from "./components/rhino-details-section";
import RhinoVersionsSection from "./components/rhino-versions.section";

export default function RhinoPage() {
  return (
    <div>
      <RhinoHeroSection />
      <RhinoDetailsSection />
      <RhinoVersionsSection />
      <RhinoSpecificationSection />
      <ContactSection variant="product" />
    </div>
  );
}
