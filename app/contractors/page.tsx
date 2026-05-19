import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { ContractorHero } from "@/components/contractors/ContractorHero";
import { ContractorTypes_v5 as ContractorTypes } from "@/components/contractors/ContractorTypes_v5";
import { ContractorHowItWorks_v5 as ContractorHowItWorks } from "@/components/contractors/ContractorHowItWorks_v5";
import { ContractorWhyChoose } from "@/components/contractors/ContractorWhyChoose";
import { ContractorFAQ } from "@/components/contractors/ContractorFAQ";
import { ContractorCrossLinks } from "@/components/contractors/ContractorCrossLinks";
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
      <Footer />
    </main>
  );
}
