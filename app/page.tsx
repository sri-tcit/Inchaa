"use client";

import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "./homepage-export/components/Hero";
import { VideoSection } from "./homepage-export/components/VideoSection";
import { JourneySteps } from "./homepage-export/components/JourneySteps";
import { AllInOneGrid } from "./homepage-export/components/AllInOneGrid";
import { CustomerFeatures } from "./homepage-export/components/CustomerFeatures";
import { ProviderCTA } from "./homepage-export/components/ProviderCTA";
import { ProviderFeatures } from "./homepage-export/components/ProviderFeatures";
import { HelpSection } from "./homepage-export/components/HelpSection";
import { FinalDownloadCTA } from "./homepage-export/components/FinalDownloadCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] overflow-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <div id="how-it-works">
        <JourneySteps />
      </div>
      <div id="features">
        <AllInOneGrid />
      </div>
      <div id="why-inchaa">
        <CustomerFeatures />
      </div>
      <ProviderCTA />
      <ProviderFeatures />
      <div id="support">
        <HelpSection />
      </div>
      <FinalDownloadCTA />
      <Footer />
    </main>
  );
}
