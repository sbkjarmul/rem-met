import ContactSection from "@/components/contact-section";
import RhinoSpecificationSection from "./components/rhino-specification-section";
import RhinoHeroSection from "./components/rhino-hero-section";

export default function RhinoPage() {
  return (
    <div>
      <RhinoHeroSection />
      <RhinoSpecificationSection />
      <ContactSection variant="product" />
    </div>
  );
}
