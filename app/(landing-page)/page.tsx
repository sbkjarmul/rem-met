import { HeroSection } from "@/components/hero-section";
import { AboutUsSection } from "@/components/about-us-section";
import { QualitySection } from "@/components/quality-section";
import { FullSupportSection } from "@/components/full-support-section";

export default function Home() {
  return (
    <div className="w-screen">
      <HeroSection />
      <AboutUsSection />
      <QualitySection />
      <FullSupportSection />
    </div>
  );
}
