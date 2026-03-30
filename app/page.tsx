"use client";

import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { JourneySteps } from "@/components/JourneySteps";
import { AllInOneGrid } from "@/components/AllInOneGrid";
import { CustomerFeatures } from "@/components/CustomerFeatures";
import { ProviderFeatures } from "@/components/ProviderFeatures";
import { Testimonials } from "@/components/Testimonials";
import { HelpSection } from "@/components/HelpSection";
import { FinalDownloadCTA } from "@/components/FinalDownloadCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
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
      <ProviderFeatures />
      <Testimonials />
      <div id="support">
        <HelpSection />
      </div>
      <FinalDownloadCTA />
      <Footer />
    </main>
  );
}
