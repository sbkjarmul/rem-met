import ContactSection from "@/components/contact-section";
import RhinoSpecificationSection from "./components/rhino-specification-section";

export default function RhinoPage() {
  return (
    <div>
      <RhinoSpecificationSection />
      <ContactSection variant="product" />
    </div>
  );
}
