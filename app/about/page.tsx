import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&h=900&fit=crop&q=85";

const whoWeServe = [
  {
    audience: "Homeowners",
    description:
      "Building, renovating, or maintaining residential properties. Post your project and receive competing quotes from licensed professionals without relying on a single referral.",
    cta: "Post your project free",
    ctaType: "post" as const,
  },
  {
    audience: "Developers & Main Contractors",
    description:
      "Sourcing subcontractors across MEP, structural, finishing, and external trades. Post requirements for each trade package, compare quotes, and manage procurement from one platform.",
    cta: "Post your project free",
    ctaType: "post" as const,
  },
  {
    audience: "Contractors, Engineers & Consultants",
    description:
      "Looking to grow your business, receive qualified project leads, and build your professional reputation. Join Inchaa, get reviewed, and start receiving inquiries.",
    cta: "Join as a professional",
    ctaType: "join" as const,
  },
];

const differentiators = [
  {
    title: "Trusted professionals",
    description:
      "Every contractor, engineer, and consultant is reviewed for valid trade licenses, credentials, and past project experience before being listed.",
  },
  {
    title: "Multiple competing quotes",
    description:
      "Stop relying on one recommendation. Receive multiple proposals and choose based on facts.",
  },
  {
    title: "One dashboard",
    description:
      "Quotations, documents, communication, and project tracking in one place.",
  },
  {
    title: "Built for construction",
    description:
      "Not a home services app. Purpose-built for villa builds, fit-outs, MEP works, structural engineering, and 30+ specialist trades.",
  },
  {
    title: "Free for homeowners and developers",
    description:
      "Posting projects, receiving quotes, and comparing professionals costs nothing.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] flex items-end overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(28,33,54,0.95))" }}
        />
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 md:px-6 pb-14 pt-40">
          <h1 className="text-white text-[40px] md:text-[58px] font-bold leading-[1.06] tracking-tight max-w-2xl">
            About Inchaa
          </h1>
        </div>
      </section>

      {/* ── Section 1: The Problem ─────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
            The Problem We Set Out to Solve
            </h2>
            <div className="space-y-5 text-mid-grey text-base leading-relaxed">
              <p>
                Construction in the UAE is an AED 189 billion industry growing at over 6% annually.
                Roads, towers, villas, and communities are being built at a pace that few countries
                in the world can match.
              </p>
              <p>
                Yet finding a reliable contractor, engineer, or consultant still depends on WhatsApp
                referrals, word of mouth, and hope.
              </p>
              <p>
                A homeowner building a villa in Abu Dhabi calls a friend, gets one name, negotiates
                blind, and hopes the job gets done right. A developer sourcing subcontractors for a
                residential project in Dubai chases quotes through phone calls, spreadsheets, and
                scattered messages. There is no transparency in pricing, no easy way to compare
                credentials, and no single place to manage the process.
              </p>
              <p>
                In a country that builds world-class infrastructure, the way people hire construction
                professionals has not kept up.
              </p>
              <p className="text-navy font-semibold">Inchaa was built to change that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: What Inchaa Is ──────────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
            What Inchaa Is
            </h2>
            <div className="space-y-5 text-mid-grey text-base leading-relaxed">
              <p>
                Inchaa is the UAE's leading construction marketplace. We connect homeowners with
                trusted contractors, engineers, and consultants across all emirates.
              </p>
              <p>
                Post your project and receive multiple competitive quotes from verified professionals.
                Compare proposals side by side — pricing, scope, and qualifications — then hire with
                confidence. Track and manage everything from one centralised dashboard.
              </p>
              <p>
                Whether you are renovating a kitchen, building a villa from the ground up, or
                sourcing subcontractors for a 50-unit development, Inchaa gives you a smarter, more
                transparent way to find and hire construction professionals.
              </p>
              <div className="pt-2">
                <PostProjectButton
                  campaign="about_homeowners"
                  className=""
                >
                  Post Your Project Free
                </PostProjectButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Who We Serve ────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          Who We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whoWeServe.map((item) => (
              <div
                key={item.audience}
                className="border border-[#E5E7EB] rounded-lg p-7 flex flex-col"
              >
                <h3 className="text-navy text-lg font-bold leading-snug">{item.audience}</h3>
                <p className="mt-3 text-mid-grey text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-6">
                  {item.ctaType === "post" ? (
                    <PostProjectButton
                      campaign="about_homeowners"
                      className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:underline transition-all duration-150"
                    >
                      {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </PostProjectButton>
                  ) : (
                    <Link
                      href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
                      className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:underline transition-all duration-150"
                    >
                      {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: What Makes Inchaa Different ─────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          What Makes Inchaa Different
          </h2>

          <div className="border-t border-[#E5E7EB]">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-[48px_1fr] gap-6 py-6 border-b border-[#E5E7EB]"
              >
                <span className="text-[28px] font-bold text-yellow leading-none pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-navy text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-mid-grey text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
