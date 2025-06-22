import { HeroSection } from "@/components/hero-section";
import { AboutUsSection } from "@/components/about-us-section";

export default function Home() {
  return (
    <div className="w-screen">
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}
