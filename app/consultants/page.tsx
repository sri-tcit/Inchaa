import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { ConsultantHero } from "@/components/consultants/ConsultantHeroAnimation";
import { ConsultantTypes_v5 } from "@/components/consultants/ConsultantTypes_v5";
import { ConsultantHowItWorks_v3 as ConsultantHowItWorks } from "@/components/consultants/ConsultantHowItWorks_v3";
import { ConsultantWhenToHire } from "@/components/consultants/ConsultantWhenToHire";
import { ConsultantFAQ } from "@/components/consultants/ConsultantFAQ";
import { ConsultantCrossLinks } from "@/components/consultants/ConsultantCrossLinks";
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
      <ConsultantTypes_v5 />
      <ConsultantHowItWorks />
      <ConsultantWhenToHire />
      <ConsultantFAQ />
      <ConsultantCrossLinks />
      <Footer />
    </main>
  );
}
