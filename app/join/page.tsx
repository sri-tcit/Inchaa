import type { Metadata } from "next";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { JoinHero } from "@/components/join/JoinHero";
import { JoinPageNew } from "@/components/join/JoinPageNew";

export const metadata: Metadata = {
  title: "Join as a Professional | Inchaa – UAE Construction Marketplace",
  description:
    "Grow your construction business with Inchaa. Create your professional profile as a contractor, engineer, or consultant and receive inbound project leads from homeowners and developers across the UAE.",
  openGraph: {
    title: "Join as a Professional | Inchaa",
    description:
      "Turn your expertise into a steady stream of projects. Join Inchaa as a contractor, engineer, or consultant operating in the UAE.",
    url: "https://inchaa.com/join/",
    type: "website",
  },
};

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JoinHero />
      <JoinPageNew />
      <Footer />
    </main>
  );
}
