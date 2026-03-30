import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { ContractorHero } from "@/components/contractors/ContractorHeroAnimation";
import { ContractorsPageNew } from "@/components/contractors/ContractorsPageNew";

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
      <ContractorsPageNew />
      <Footer />
    </main>
  );
}
