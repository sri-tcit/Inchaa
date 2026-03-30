"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Plus, Minus } from "lucide-react";
import { JoinButton } from "@/components/join/JoinButton";
import { useLanguage } from "@/context/LanguageContext";
import type { FeatureShowcaseData } from "@/lib/translations";

/* ─── FAQ item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between py-5 text-left gap-4"
      >
        <span className="text-navy text-sm font-semibold leading-snug">{q}</span>
        {open ? (
          <Minus className="w-4 h-4 text-mid-grey shrink-0 mt-0.5" />
        ) : (
          <Plus className="w-4 h-4 text-mid-grey shrink-0 mt-0.5" />
        )}
      </button>
      {open && <p className="pb-5 text-mid-grey text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

/* ─── Accordion item ─── */
function AccordionItem({ title, body, defaultOpen = false }: { title: string; body: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-navy text-base font-semibold leading-snug">{title}</span>
        {open ? (
          <Minus className="w-4 h-4 text-mid-grey shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-mid-grey shrink-0 group-hover:text-navy transition-colors" />
        )}
      </button>
      {open && <p className="pb-5 text-mid-grey text-sm leading-relaxed">{body}</p>}
    </div>
  );
}

/* ─── Feature Showcase ─── */
function FeatureShowcase({
  data,
  image,
  imageRight = false,
}: {
  data: FeatureShowcaseData;
  image: string;
  imageRight?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${imageRight ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={image} alt="" className="w-full h-[420px] lg:h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-4 md:-right-6 bg-white rounded-2xl shadow-lg border border-[#E5E7EB] px-5 py-4 max-w-[200px]">
              <p className="text-navy text-xs font-semibold uppercase tracking-wide mb-1">{t.common.inchaa}</p>
              <p className="text-navy text-sm font-bold leading-snug">{data.eyebrow.split(" & ")[0]} {t.common.doneRight}</p>
            </div>
          </div>
          <div className={imageRight ? "lg:order-1" : ""}>
            <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{data.eyebrow}</p>
            <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight tracking-tight">{data.headline}</h2>
            <p className="mt-4 text-mid-grey text-base leading-relaxed mb-8">{data.body}</p>
            <div className="border-t border-[#E5E7EB]">
              {data.features.map((f, i) => (
                <AccordionItem key={f.title} title={f.title} body={f.body} defaultOpen={i === 0} />
              ))}
            </div>
            <div className="mt-8">
              <JoinButton size="md">{t.common.joinAsPro}</JoinButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Dashboard Video ─── */
function DashboardVideo() {
  const [playing, setPlaying] = useState(false);
  const { t } = useLanguage();
  return (
    <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.common.thePlatform}</p>
          <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight tracking-tight">{t.common.seePlatform}</h2>
          <p className="mt-4 text-mid-grey text-base leading-relaxed max-w-xl mx-auto">
            {t.join.videoDesc}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-navy aspect-video">
          {playing ? (
            <video className="w-full h-full object-cover" autoPlay controls playsInline src="/assets/videos/dashboard-demo.mp4" />
          ) : (
            <>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&q=85"
                alt="Inchaa dashboard preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button
                  onClick={() => setPlaying(true)}
                  className="flex items-center gap-3 bg-white text-navy text-sm font-bold px-7 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  <span className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-navy border-b-[7px] border-b-transparent ml-1" />
                  {t.common.watchDemo}
                </button>
                <p className="text-white/60 text-xs">{t.common.walkthrough}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export function JoinPageNew() {
  const { t } = useLanguage();

  const CATEGORY_HREFS = ["/contractors/", "/engineers/", "/consultants/"];

  return (
    <>
      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-[#E5E7EB] py-12">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            {t.join.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center py-6 md:py-0 px-8">
                <span className="text-navy text-5xl font-black tracking-tight">{s.value}</span>
                <span className="mt-2 text-mid-grey text-base font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SHOWCASE 1 ── */}
      <FeatureShowcase
        data={t.join.feature1}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=700&fit=crop&q=85"
      />

      {/* ── FEATURE SHOWCASE 2 ── */}
      <FeatureShowcase
        data={t.join.feature2}
        image="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&h=700&fit=crop&q=85"
        imageRight
      />

      {/* ── DASHBOARD VIDEO ── */}
      <DashboardVideo />

      {/* ── HOW TO JOIN ── */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.join.gettingStarted}</p>
              <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight tracking-tight">{t.join.howToJoin}</h2>
              <p className="mt-4 text-mid-grey text-base leading-relaxed">{t.join.hiwIntro}</p>
              <div className="mt-8">
                <JoinButton size="md">{t.common.joinAsPro}</JoinButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              {t.join.steps.map((step) => (
                <div key={step.num} className="grid grid-cols-[56px_1fr] gap-5 py-8 border-b border-[#E5E7EB]">
                  <span className="text-[42px] font-black text-[#E0E0DE] leading-none select-none">{step.num}</span>
                  <div className="pt-1">
                    <h3 className="text-navy text-lg font-bold leading-snug">{step.title}</h3>
                    <p className="mt-2 text-mid-grey text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ── */}
      <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.join.openTo}</p>
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight tracking-tight mb-10">
            {t.join.whoCanJoin}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.join.categories.map((cat, i) => (
              <div
                key={cat.title}
                className="group overflow-hidden rounded-2xl border border-[#E5E7EB] hover:border-navy hover:shadow-md transition-all duration-200"
              >
                <div className="overflow-hidden">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=600&h=400&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
                    ][i]}
                    alt=""
                    className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-navy text-base font-bold leading-snug">{cat.title}</h3>
                  <p className="mt-1.5 text-mid-grey text-xs leading-relaxed">{cat.desc}</p>
                  <a
                    href={CATEGORY_HREFS[i]}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-mid-grey group-hover:gap-2 transition-all"
                  >
                    {t.common.learnMore} <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.common.support}</p>
              <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight tracking-tight">
                {t.join.faqTitle}
              </h2>
              <p className="mt-4 text-mid-grey text-sm leading-relaxed">{t.join.faqBody}</p>
              <div className="mt-6">
                <JoinButton size="sm">{t.common.joinAsPro}</JoinButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              {t.join.faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{t.join.ctaEyebrow}</p>
          <h2 className="text-white text-3xl md:text-[48px] font-bold leading-tight tracking-tight max-w-2xl mx-auto">
            {t.join.ctaHeadline}
          </h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            {t.join.ctaBody}
          </p>
          <div className="mt-10">
            <JoinButton size="lg">{t.common.joinAsPro}</JoinButton>
          </div>
        </div>
      </section>
    </>
  );
}
