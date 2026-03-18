import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultantHero } from "@/components/consultants/ConsultantHero";
import { ConsultantTypes } from "@/components/consultants/ConsultantTypes";
import { ConsultantHowItWorks } from "@/components/consultants/ConsultantHowItWorks";
import { ConsultantWhenToHire } from "@/components/consultants/ConsultantWhenToHire";
import { ConsultantFAQ } from "@/components/consultants/ConsultantFAQ";
import { ConsultantCrossLinks } from "@/components/consultants/ConsultantCrossLinks";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export const metadata: Metadata = {
  title: "Find Trusted Construction Consultants in the UAE | Inchaa",
  description:
    "Connect with verified quantity surveyors, project management consultants, design consultants, and supervision consultants across Abu Dhabi, Dubai, and Sharjah.",
  openGraph: {
    title: "Find Trusted Construction Consultants in the UAE | Inchaa",
    description:
      "Connect with verified quantity surveyors, project management consultants, design consultants, and supervision consultants across the UAE.",
    url: "https://inchaa.com/consultants/",
    type: "website",
  },
};

function ConsultantCTA() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Ready to find the right consultant?
        </h2>
        <p className="mt-3 text-mid-grey text-sm max-w-md mx-auto">
          Post your project for free and start receiving proposals from verified consultants
          in the UAE.
        </p>
        <PostProjectButton
          campaign="consultants_lp"
          className="mt-8 inline-flex items-center bg-yellow text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:brightness-95 transition-all duration-150"
        />
      </div>
    </section>
  );
}

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ConsultantHero />
      <ConsultantTypes />
      <ConsultantHowItWorks />
      <ConsultantWhenToHire />
      <ConsultantFAQ />
      <ConsultantCrossLinks />
      <ConsultantCTA />
      <Footer />
    </main>
  );
}
