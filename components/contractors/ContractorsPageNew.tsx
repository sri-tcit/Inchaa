"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Plus, Minus } from "lucide-react";
import { ContractorCrossLinks } from "@/components/contractors/ContractorCrossLinks";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import { getSpecialistSlug } from "@/content/type-guides/contractors";
import { useLanguage } from "@/context/LanguageContext";
import type { FeatureShowcaseData } from "@/lib/translations";

/* English slugs for URL generation (slugs must remain English) */
const SPECIALIST_TRADE_SLUGS = [
  "Electrical", "Plumbing", "HVAC", "Painting", "Tiling",
  "Waterproofing", "False ceiling", "Aluminium & glass", "Flooring",
  "Carpentry", "Masonry", "Landscaping", "Swimming pool",
  "Fire safety", "Smart home", "Demolition",
];

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
  campaign,
}: {
  data: FeatureShowcaseData;
  image: string;
  imageRight?: boolean;
  campaign: string;
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
              <PostProjectButton campaign={campaign} size="md">
                {t.common.postProjectFree}
              </PostProjectButton>
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
            {t.contractors.videoDesc}
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
export function ContractorsPageNew() {
  const { t } = useLanguage();

  const feature1 = t.contractors.feature1;
  const feature2 = t.contractors.feature2;
  const steps = t.contractors.steps;
  const faqs = t.contractors.faqs;
  const story = t.contractors.story;

  const CONTRACTOR_TYPES = [
    { slug: "general-contractors", img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=600&h=400&fit=crop&q=80" },
    { slug: "mep-contractors", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80" },
    { slug: "renovation-fit-out", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&q=80" },
  ];

  return (
    <>
      {/* ── FEATURE SHOWCASE 1 ── */}
      <FeatureShowcase
        data={feature1}
        image="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=900&h=700&fit=crop&q=85"
        campaign="contractors_feature"
      />

      {/* ── FEATURE SHOWCASE 2 ── */}
      <FeatureShowcase
        data={feature2}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=700&fit=crop&q=85"
        imageRight
        campaign="contractors_feature"
      />

      {/* ── DASHBOARD VIDEO ── */}
      <DashboardVideo />

      {/* ── SUCCESS STORY ── */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-4">{t.common.clientStory}</p>
              <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight tracking-tight">
                {story.quote}
              </h2>
              <p className="mt-5 text-mid-grey text-base leading-relaxed">{story.body}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center text-navy font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="text-navy text-sm font-semibold">{story.name}</p>
                  <p className="text-mid-grey text-xs">{story.detail}</p>
                </div>
              </div>
              <div className="mt-8">
                <PostProjectButton campaign="contractors_story" size="md">
                  {t.common.postProjectFree}
                </PostProjectButton>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=640&fit=crop&q=85"
                alt="Renovation project in progress"
                className="w-full h-[420px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.common.theProcess}</p>
              <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight tracking-tight">{t.common.howItWorks}</h2>
              <p className="mt-4 text-mid-grey text-base leading-relaxed">{t.contractors.hiwIntro}</p>
              <div className="mt-8">
                <PostProjectButton campaign="contractors_hiw" size="md">
                  {t.common.postProjectFree}
                </PostProjectButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              {steps.map((step) => (
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

      {/* ── CONTRACTOR TYPE LINKS ── */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.contractors.whoCanHire}</p>
          <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight tracking-tight mb-10">
            {t.contractors.typesHeadline}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.contractors.types.map((type, i) => (
              <Link
                key={type.title}
                href={`/contractors/types/${CONTRACTOR_TYPES[i]?.slug ?? ""}/`}
                className="group overflow-hidden rounded-2xl border border-[#E5E7EB] hover:border-navy hover:shadow-md transition-all duration-200"
              >
                <div className="overflow-hidden">
                  <img src={CONTRACTOR_TYPES[i]?.img ?? ""} alt="" className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-navy text-base font-bold leading-snug">{type.title}</h3>
                  <p className="mt-1.5 text-mid-grey text-xs leading-relaxed">{type.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-mid-grey group-hover:gap-2 transition-all">
                    {t.common.explore} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Specialist trades */}
          <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <h3 className="text-navy text-xl font-bold leading-tight md:text-2xl">{t.contractors.specialistTitle}</h3>
                <p className="mt-2 max-w-xl text-mid-grey text-sm leading-relaxed">{t.contractors.specialistBody}</p>
              </div>
              <p className="shrink-0 text-sm font-semibold text-yellow">{t.contractors.specialistCount}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.contractors.specialistTrades.map((label, i) => (
                <Link
                  key={label}
                  href={`/contractors/types/${getSpecialistSlug(SPECIALIST_TRADE_SLUGS[i] ?? label)}/`}
                  className="rounded-full border border-[#E5E7EB] bg-light-grey/40 px-3.5 py-1.5 text-sm text-charcoal transition-colors hover:border-navy/25 hover:bg-white hover:text-navy"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-24">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-3">{t.common.support}</p>
              <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight tracking-tight">
                {t.common.faqTitle}
              </h2>
            </div>
            <div className="border-t border-[#E5E7EB]">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContractorCrossLinks />
    </>
  );
}
