"use client";

import { useState } from "react";
import { Navbar2 as Navbar } from "@/components/layout/Navbar2";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { JoinButton } from "@/components/join/JoinButton";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_BG =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&h=900&fit=crop&q=85";

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      <div>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[#E5E7EB]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-start justify-between py-4 text-left gap-4"
            >
              <span className="text-navy text-sm font-medium">{faq.q}</span>
              {openIndex === i ? (
                <Minus className="w-4 h-4 text-mid-grey shrink-0 mt-0.5" />
              ) : (
                <Plus className="w-4 h-4 text-mid-grey shrink-0 mt-0.5" />
              )}
            </button>
            {openIndex === i && (
              <p className="pb-4 text-mid-grey text-sm leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const { t } = useLanguage();

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
          <h1 className="text-white text-[40px] md:text-[58px] font-bold leading-[1.06] tracking-tight">
            {t.faqsPage.heroH1}
          </h1>
          <p className="mt-4 text-white/60 text-base leading-relaxed max-w-xl">
            {t.faqsPage.heroBody}
          </p>
        </div>
      </section>

      {/* ── For Homeowners ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <h2 className="text-navy text-2xl md:text-[30px] font-bold leading-tight">
                {t.faqsPage.homeownersTitle}
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                {t.faqsPage.homeownersBody}
              </p>
              <div className="mt-6">
                <PostProjectButton campaign="faqs_homeowners" size="sm">
                  {t.common.postProjectFree}
                </PostProjectButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              <FAQSection faqs={t.faqsPage.homeownerFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── For Developers ─────────────────────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <h2 className="text-navy text-2xl md:text-[30px] font-bold leading-tight">
                {t.faqsPage.developersTitle}
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                {t.faqsPage.developersBody}
              </p>
              <div className="mt-6">
                <PostProjectButton campaign="faqs_developers" size="sm">
                  {t.common.postProjectFree}
                </PostProjectButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              <FAQSection faqs={t.faqsPage.developerFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── For Professionals ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <h2 className="text-navy text-2xl md:text-[30px] font-bold leading-tight">
                {t.faqsPage.professionalsTitle}
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                {t.faqsPage.professionalsBody}
              </p>
              <div className="mt-6">
                <JoinButton size="sm">{t.common.joinAsPro}</JoinButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              <FAQSection faqs={t.faqsPage.professionalFaqs} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
