"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { JourneySteps } from "@/components/JourneySteps";
import { AllInOneGrid } from "@/components/AllInOneGrid";
import { CustomerCTA } from "@/components/CustomerCTA";
import { CustomerFeatures } from "@/components/CustomerFeatures";
import { ProviderCTA } from "@/components/ProviderCTA";
import { ProviderFeatures } from "@/components/ProviderFeatures";
import { Testimonials } from "@/components/Testimonials";
import { HelpSection } from "@/components/HelpSection";
import { FinalDownloadCTA } from "@/components/FinalDownloadCTA";
import { Footer } from "@/components/Footer";

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
        <CustomerCTA />
      </div>
      <CustomerFeatures />
      <ProviderCTA />
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
