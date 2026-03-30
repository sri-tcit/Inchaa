import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { ConsultantHero } from "@/components/consultants/ConsultantHeroAnimation";
import { ConsultantsPageNew } from "@/components/consultants/ConsultantsPageNew";

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

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ConsultantHero />
      <ConsultantsPageNew />
      <Footer />
    </main>
  );
}
