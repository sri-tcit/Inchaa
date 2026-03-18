import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EngineerHero } from "@/components/engineers/EngineerHero";
import { EngineerTypes } from "@/components/engineers/EngineerTypes";
import { EngineerHowItWorks } from "@/components/engineers/EngineerHowItWorks";
import { EngineerWhyMatters } from "@/components/engineers/EngineerWhyMatters";
import { EngineerFAQ } from "@/components/engineers/EngineerFAQ";
import { EngineerCrossLinks } from "@/components/engineers/EngineerCrossLinks";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export const metadata: Metadata = {
  title: "Find Trusted Engineers in the UAE | Inchaa",
  description:
    "Connect with verified structural engineers, MEP engineers, civil engineers, supervision engineers, and geotechnical engineers across Abu Dhabi, Dubai, and Sharjah.",
  openGraph: {
    title: "Find Trusted Engineers in the UAE | Inchaa",
    description:
      "Connect with verified structural engineers, MEP engineers, civil engineers, and supervision engineers across the UAE.",
    url: "https://inchaa.com/engineers/",
    type: "website",
  },
};

function EngineerCTA() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Ready to find the right engineer?
        </h2>
        <p className="mt-3 text-mid-grey text-sm max-w-md mx-auto">
          Post your project for free and start receiving proposals from verified engineering
          professionals in the UAE.
        </p>
        <PostProjectButton
          campaign="engineers_lp"
          className="mt-8 inline-flex items-center bg-yellow text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
        />
      </div>
    </section>
  );
}

export default function EngineersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EngineerHero />
      <EngineerTypes />
      <EngineerHowItWorks />
      <EngineerWhyMatters />
      <EngineerFAQ />
      <EngineerCrossLinks />
      <EngineerCTA />
      <Footer />
    </main>
  );
}
