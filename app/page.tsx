"use client";

import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
// import { VideoSection } from "@/components/VideoSection";
import { JourneySteps } from "@/components/JourneySteps";
import { AllInOneGrid } from "@/components/AllInOneGrid";
import { CustomerCTA } from "@/components/CustomerCTA";
import { CustomerFeatures } from "@/components/CustomerFeatures";
import { ProviderCTA } from "@/components/ProviderCTA";
import { ProviderFeatures } from "@/components/ProviderFeatures";
// import { Testimonials } from "@/components/Testimonials";
import { HelpSection } from "@/components/HelpSection";
import { FinalDownloadCTA } from "@/components/FinalDownloadCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inchaa – Construction Marketplace for Customers & Service Providers</title>
        <meta 
          name="description" 
          content="Inchaa is a construction marketplace that helps customers request quotes, compare verified contractors, and manage projects with trusted service providers." 
        />
        <meta property="og:title" content="Inchaa – Construction Marketplace for Customers & Service Providers" />
        <meta 
          property="og:description" 
          content="Discover and compare verified contractors, engineers, and service providers. Send RFQs, review quotes, and manage your construction projects in one place with Inchaa." 
        />
        <meta property="og:url" content="https://inchaa.com/" />
        <meta property="og:site_name" content="Inchaa" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inchaa – Construction Marketplace for Customers & Service Providers" />
        <meta 
          name="twitter:description" 
          content="Request quotes, compare offers, and work with trusted construction professionals using the Inchaa marketplace." 
        />
      </Head>
      <main className="min-h-screen bg-[#F8F9FB] overflow-hidden">
      <Navbar />
      <Hero />
      {/* <VideoSection /> */}
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
        {/* <Testimonials /> */}
      <div id="support">
        <HelpSection />
      </div>
      <FinalDownloadCTA />
      <Footer />
    </main>
    </>
  );
}
