import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { AboutSection } from "@/components/AboutSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <HowItWorks />
      <AboutSection />
      <ProjectShowcase />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
