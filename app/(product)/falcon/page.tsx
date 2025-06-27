import ContactSection from "@/components/contact-section";
import FalconSpecificationSection from "./components/falcon-specification-section";

export default function FalconPage() {
  return (
    <div>
      <FalconSpecificationSection />
      <ContactSection variant="product" />
    </div>
  );
}
