import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { EngineerHero } from "@/components/engineers/EngineerHeroAnimation";
import { EngineersPageNew } from "@/components/engineers/EngineersPageNew";

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
      <EngineersPageNew />
      <Footer />
    </main>
  );
}
