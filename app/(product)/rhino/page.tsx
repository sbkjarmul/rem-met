import ContactSection from "@/components/contact-section";
import RhinoSpecificationSection from "./components/rhino-specification-section";
import RhinoHeroSection from "./components/rhino-hero-section";
import RhinoDetailsSection from "./components/rhino-details-section";
import RhinoVersionsSection from "./components/rhino-versions.section";
import { Metadata } from "next";
import pl from "@/locales/pl";

export const metadata: Metadata = {
  title: pl["rhino.metadata.title"],
  description: pl["rhino.metadata.description"],
};

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
