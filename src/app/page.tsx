import { DownloadSection } from "@/components/sections/DownloadSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LiveStatsSection } from "@/components/sections/LiveStatsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveStatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <FaqSection />
      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <DownloadSection />
      </div>
    </>
  );
}
