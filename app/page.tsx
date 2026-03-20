import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Hero4 as Hero } from "@/components/home/Hero4";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyInchaa } from "@/components/home/WhyInchaa";
import { VideoSection } from "@/components/home/VideoSection";
import { ProfessionalCTA } from "@/components/shared/ProfessionalCTA";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <WhyInchaa />
      <VideoSection />
      <ProfessionalCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
