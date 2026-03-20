import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContractorHero } from "@/components/contractors/ContractorHero";
import { ContractorTypes } from "@/components/contractors/ContractorTypes";
import { ContractorHowItWorks } from "@/components/contractors/ContractorHowItWorks";
import { ContractorWhyChoose } from "@/components/contractors/ContractorWhyChoose";
import { ContractorFAQ } from "@/components/contractors/ContractorFAQ";
import { ContractorCrossLinks } from "@/components/contractors/ContractorCrossLinks";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

export const metadata: Metadata = {
  title: "Find Trusted Contractors in the UAE | Inchaa",
  description:
    "Connect with verified general contractors, MEP contractors, renovation contractors, and 30+ specialist trades across Abu Dhabi, Dubai, and Sharjah.",
  openGraph: {
    title: "Find Trusted Contractors in the UAE | Inchaa",
    description:
      "Connect with verified general contractors, MEP contractors, renovation contractors, and 30+ specialist trades across the UAE.",
    url: "https://inchaa.com/contractors/",
    type: "website",
  },
};

function ContractorCTA() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Ready to find the right contractor?
        </h2>
        <p className="mt-3 text-mid-grey text-sm max-w-md mx-auto">
          Post your project for free and start receiving quotes from verified contractors in the UAE.
        </p>
        <PostProjectButton
          campaign="contractors_lp"
          size="sm"
          className="mt-8"
        />
      </div>
    </section>
  );
}

export default function ContractorsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContractorHero />
      <ContractorTypes />
      <ContractorHowItWorks />
      <ContractorWhyChoose />
      <ContractorFAQ />
      <ContractorCrossLinks />
      <ContractorCTA />
      <Footer />
    </main>
  );
}
