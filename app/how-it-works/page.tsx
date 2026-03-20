"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&h=900&fit=crop&q=85";

const homeownerSteps = [
  {
    num: "01",
    title: "Post Your Project",
    subtitle: "2 minutes",
    description:
      "Tell us what you need. Select your property type – villa, apartment, commercial, industrial, majlis, or mosque. Choose your emirate. Describe the scope of work, set your budget, and add photos or drawings if available. Your project is live in minutes.",
  },
  {
    num: "02",
    title: "Receive Quotes from Professionals",
    subtitle: "",
    description:
      "Contractors, engineers, or consultants who match your project requirements and location receive your request and respond with detailed quotations or proposals. Every professional on Inchaa has been reviewed for a valid UAE trade license, business credentials, and past project experience.",
  },
  {
    num: "03",
    title: "Compare Side by Side",
    subtitle: "",
    description:
      "Review multiple proposals in one dashboard. Compare pricing, scope of work, credentials, past projects, and ratings. No more calling five contractors and tracking responses in a spreadsheet or WhatsApp group.",
  },
  {
    num: "04",
    title: "Hire with Confidence",
    subtitle: "",
    description:
      "Choose the professional that best fits your project requirements and budget. Manage communication, documents, and project tracking from the Inchaa dashboard. Everything in one place.",
  },
];

const professionalSteps = [
  {
    num: "01",
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your business – services offered, areas covered, credentials, and past projects.",
  },
  {
    num: "02",
    title: "Get Reviewed",
    description:
      "Submit your UAE trade license and business credentials. Our team reviews your documentation before activating your profile on the platform.",
  },
  {
    num: "03",
    title: "Receive Project Leads",
    description:
      "When a homeowner or developer posts a project that matches your services and location, you receive a notification with full project details.",
  },
  {
    num: "04",
    title: "Quote and Win",
    description:
      "Review the project requirements, decide if it is a fit, and submit your quotation or proposal. The client reviews your submission alongside other professionals and selects the best match.",
  },
];

const faqs = [
  {
    q: "Is Inchaa free for homeowners?",
    a: "Yes. Inchaa is absolutely free for homeowners.",
  },
  {
    q: "Is Inchaa free for developers and main contractors?",
    a: "Yes. There is no fee to post projects, receive quotes, and compare professionals.",
  },
  {
    q: "How does Inchaa review professionals before listing them?",
    a: "Every contractor, engineer, and consultant is reviewed for a valid UAE trade license, business credentials, and past project experience before being listed. Only professionals who pass this review can receive project inquiries.",
  },
  {
    q: "Does Inchaa handle payments?",
    a: "No. Financial agreements are made directly between you and the professional you hire. Inchaa focuses on helping you find, compare, and connect with the right professionals.",
  },
  {
    q: "Which areas in the UAE does Inchaa cover?",
    a: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah, with plans to expand across the UAE and wider GCC region in the future.",
  },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            How Inchaa Works
          </h1>
          <p className="mt-4 text-white/60 text-base leading-relaxed max-w-xl">
            Finding and hiring construction professionals in the UAE should not require luck.
            Inchaa replaces the WhatsApp referral chain with a structured, transparent process.
          </p>
        </div>
      </section>

      {/* ── Section 1: For Homeowners ──────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
            Post a project. Hire with confidence.
          </h2>

          <div className="border-t border-[#E5E7EB]">
            {homeownerSteps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[64px_1fr] gap-6 py-8 border-b border-[#E5E7EB]"
              >
                <span className="text-[36px] font-bold text-yellow leading-none pt-0.5">
                  {step.num}
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-navy text-xl font-bold">{step.title}</h3>
                    {step.subtitle && (
                      <span className="text-mid-grey text-xs font-medium">{step.subtitle}</span>
                    )}
                  </div>
                  <p className="mt-2 text-mid-grey text-base leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PostProjectButton
              campaign="how-it-works_homeowners"
              className=""
            >
              Post Your First Project Free
            </PostProjectButton>
          </div>
        </div>
      </section>

      {/* ── Section 2: For Professionals ───────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
            Join, get verified, and win work.
          </h2>

          <div className="border-t border-[#E5E7EB]">
            {professionalSteps.map((step) => (
              <div
                key={step.num}
                className="grid grid-cols-[64px_1fr] gap-6 py-8 border-b border-[#E5E7EB]"
              >
                <span className="text-[36px] font-bold text-yellow leading-none pt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-navy text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-mid-grey text-base leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
              className="inline-flex items-center bg-navy text-white text-sm font-bold px-7 py-3.5 rounded-lg hover:bg-[#252c42] transition-colors duration-150"
            >
              Join as a Professional
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: What Makes Inchaa Different ─────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
            Same project. Completely different experience.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-[#E5E7EB] rounded-lg p-7">
              <p className="text-mid-grey text-xs font-bold uppercase tracking-widest mb-4">
                Without Inchaa
              </p>
              <ul className="space-y-3 text-mid-grey text-base leading-relaxed">
                {[
                  "One WhatsApp referral, no way to compare",
                  "No transparency in pricing or credentials",
                  "Scattered messages, lost paperwork",
                  "If it doesn't work out, start from scratch",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D1D5DB] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#E5E7EB] rounded-lg p-7 bg-[#FAFAFA]">
              <p className="text-yellow text-xs font-bold uppercase tracking-widest mb-4">
                With Inchaa
              </p>
              <ul className="space-y-3 text-navy text-base leading-relaxed">
                {[
                  "Multiple competing proposals from verified professionals",
                  "Compare pricing, credentials, and past work side by side",
                  "Quotes, documents, and communication in one dashboard",
                  "Every professional reviewed before they can receive inquiries",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-yellow flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: FAQs ────────────────────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
                Frequently Asked Questions
              </h2>
              <Link
                href="/faqs"
                className="mt-4 inline-block text-sm text-mid-grey hover:text-navy transition-colors duration-150 underline underline-offset-2"
              >
                See all FAQs →
              </Link>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#E5E7EB]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between py-4 text-left gap-4"
                  >
                    <span className="text-navy text-sm font-medium">{faq.q}</span>
                    {openFaq === i ? (
                      <Minus className="w-4 h-4 text-mid-grey shrink-0 mt-0.5" />
                    ) : (
                      <Plus className="w-4 h-4 text-mid-grey shrink-0 mt-0.5" />
                    )}
                  </button>
                  {openFaq === i && (
                    <p className="pb-4 text-mid-grey text-sm leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
