import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JoinHero } from "@/components/join/JoinHero";
import { JoinWhatYouGet } from "@/components/join/JoinWhatYouGet";
import { JoinWhoCanJoin } from "@/components/join/JoinWhoCanJoin";
import { JoinHowToJoin } from "@/components/join/JoinHowToJoin";
import { JoinFAQ } from "@/components/join/JoinFAQ";
import { JoinFinalCTA } from "@/components/join/JoinFinalCTA";

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
      <JoinWhatYouGet />
      <JoinWhoCanJoin />
      <JoinHowToJoin />
      <JoinFAQ />
      <JoinFinalCTA />
      <Footer />
    </main>
  );
}
