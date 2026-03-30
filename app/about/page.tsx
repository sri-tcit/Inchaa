"use client";

import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_BG =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&h=900&fit=crop&q=85";

export default function AboutPage() {
  const { t } = useLanguage();
  const p = t.aboutPage;

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
        </div>
      </section>

      {/* ── Section 1: The Problem ─────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
              {p.problemTitle}
            </h2>
            <div className="space-y-5 text-mid-grey text-base leading-relaxed">
              {p.problemParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="text-navy font-semibold">{p.problemBold}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: What Inchaa Is ──────────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
              {p.whatTitle}
            </h2>
            <div className="space-y-5 text-mid-grey text-base leading-relaxed">
              {p.whatParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="pt-2">
                <PostProjectButton campaign="about_homeowners">
                  {t.common.postProjectFree}
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
            {p.whoTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {p.whoWeServe.map((item) => (
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
            {p.differenceTitle}
          </h2>

          <div className="border-t border-[#E5E7EB]">
            {p.differentiators.map((item, i) => (
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
