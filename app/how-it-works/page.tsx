"use client";

import { useState } from "react";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { JoinButton } from "@/components/join/JoinButton";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_BG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&h=900&fit=crop&q=85";

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();
  const p = t.howItWorksPage;

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
            {p.heroH1}
          </h1>
          <p className="mt-4 text-white/60 text-base leading-relaxed max-w-xl">
            {p.heroBody}
          </p>
        </div>
      </section>

      {/* ── Section 1: For Homeowners ──────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
            {p.homeownersTitle}
          </h2>

          <div className="border-t border-[#E5E7EB]">
            {p.homeownerSteps.map((step) => (
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
            <PostProjectButton campaign="how-it-works_homeowners">
              {p.postFirstProject}
            </PostProjectButton>
          </div>
        </div>
      </section>

      {/* ── Section 2: For Professionals ───────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
            {p.professionalsTitle}
          </h2>

          <div className="border-t border-[#E5E7EB]">
            {p.professionalSteps.map((step) => (
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
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <JoinButton>{t.common.joinAsPro}</JoinButton>
          </div>
        </div>
      </section>

      {/* ── Section 3: What Makes Inchaa Different ─────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
            {p.differenceTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-[#E5E7EB] rounded-lg p-7">
              <p className="text-mid-grey text-xs font-bold uppercase tracking-widest mb-4">
                {p.withoutLabel}
              </p>
              <ul className="space-y-3 text-mid-grey text-base leading-relaxed">
                {p.withoutItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#D1D5DB] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#E5E7EB] rounded-lg p-7 bg-[#FAFAFA]">
              <p className="text-yellow text-xs font-bold uppercase tracking-widest mb-4">
                {p.withLabel}
              </p>
              <ul className="space-y-3 text-navy text-base leading-relaxed">
                {p.withItems.map((item) => (
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
                {p.faqTitle}
              </h2>
              <Link
                href="/faqs"
                className="mt-4 inline-block text-sm text-mid-grey hover:text-navy transition-colors duration-150 underline underline-offset-2"
              >
                {p.seeAllFaqs}
              </Link>
            </div>
            <div>
              {p.faqs.map((faq, i) => (
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
