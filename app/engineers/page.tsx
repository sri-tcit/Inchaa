import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { EngineerHero } from "@/components/engineers/EngineerHero";
import { EngineerTypes_v5 } from "@/components/engineers/EngineerTypes_v5";
import { EngineerHowItWorks_v3 as EngineerHowItWorks } from "@/components/engineers/EngineerHowItWorks_v3";
import { EngineerWhyMatters } from "@/components/engineers/EngineerWhyMatters";
import { EngineerFAQ } from "@/components/engineers/EngineerFAQ";
import { EngineerCrossLinks } from "@/components/engineers/EngineerCrossLinks";
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

export default function EngineersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EngineerHero />
      <EngineerTypes_v5 />
      <EngineerHowItWorks />
      <EngineerWhyMatters />
      <EngineerFAQ />
      <EngineerCrossLinks />
      <Footer />
    </main>
  );
}
