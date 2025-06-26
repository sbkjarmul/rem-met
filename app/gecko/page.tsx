import GeckoHeroSection from "./components/gecko-hero-section";
import GeckoDetailsSection from "./components/gecko-details-section";
import GeckoVersionsSection from "./components/gecko-versions-section";

export default function GeckoPage() {
  return (
    <div>
      <GeckoHeroSection />
      <GeckoDetailsSection />
      <GeckoVersionsSection />
    </div>
  );
}
