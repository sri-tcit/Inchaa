import { Navbar } from "@/components/layout/Navbar";
import { Hero3 as Hero } from "@/components/home/Hero3";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyInchaa } from "@/components/home/WhyInchaa";
import { ProfessionalCTA } from "@/components/shared/ProfessionalCTA";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <WhyInchaa />
      <ProfessionalCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
