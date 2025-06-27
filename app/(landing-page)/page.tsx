import HeroSection from "@/components/hero-section";
import AboutUsSection from "@/components/about-us-section";
import QualitySection from "@/components/quality-section";
import FullSupportSection from "@/components/full-support-section";
import OurProductsSection from "@/components/our-products-section/our-products-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="w-screen">
      <HeroSection />
      <AboutUsSection />
      <QualitySection />
      <FullSupportSection />
      <OurProductsSection />
      <ContactSection variant="default" />
    </div>
  );
}
