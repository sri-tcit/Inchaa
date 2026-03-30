"use client";

import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "./components/Hero";
import { VideoSection } from "./components/VideoSection";
import { JourneySteps } from "./components/JourneySteps";
import { AllInOneGrid } from "./components/AllInOneGrid";
import { CustomerFeatures } from "./components/CustomerFeatures";
import { ProviderCTA } from "./components/ProviderCTA";
import { ProviderFeatures } from "./components/ProviderFeatures";
import { HelpSection } from "./components/HelpSection";
import { FinalDownloadCTA } from "./components/FinalDownloadCTA";

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
