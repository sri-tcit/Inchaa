"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PostProjectButton } from "@/components/shared/PostProjectModal";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&h=900&fit=crop&q=85";

const homeownerFaqs = [
  {
    q: "What is Inchaa?",
    a: "Inchaa is the UAE's trusted construction marketplace. We connect homeowners with licensed contractors, engineers, and consultants across Abu Dhabi, Dubai, and Sharjah. Post your project, receive multiple quotes, compare side by side, and hire with confidence – all from one platform.",
  },
  {
    q: "Is Inchaa free for homeowners?",
    a: "Yes. Posting a project, receiving quotes, and comparing professionals is completely free. You pay nothing to use Inchaa – financial agreements are made directly between you and the professional you choose to hire.",
  },
  {
    q: "How does Inchaa work?",
    a: "Post your project with details like property type, location, area, and budget. Licensed professionals in your area receive your request and respond with detailed quotes or proposals. You compare them side by side – pricing, credentials, past work – and choose the best match. Everything is managed from one dashboard.",
  },
  {
    q: "What types of projects can I post on Inchaa?",
    a: "Villa construction, apartment fit-out, renovation, MEP works (electrical, plumbing, AC, fire fighting), structural and concrete works, false ceilings, flooring, tiling, painting, waterproofing, aluminium and glass, doors and joinery, landscaping, demolition, and 30+ other specialist trade categories.",
  },
  {
    q: "Which areas in the UAE does Inchaa cover?",
    a: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah. We are expanding across the UAE.",
  },
  {
    q: "How does Inchaa review contractors before listing them?",
    a: "Every professional on Inchaa is reviewed for a valid UAE trade license, business credentials, and past project experience before being listed. Only professionals who pass this review can receive project inquiries on the platform.",
  },
  {
    q: "How many quotes will I receive?",
    a: "The number depends on your project type and availability of professionals in your area. Our goal is to provide multiple competing proposals so you can make an informed decision based on facts, not guesswork.",
  },
  {
    q: "Can I compare quotes side by side?",
    a: "Yes. The Inchaa dashboard lets you view and compare multiple quotations in one place – pricing, scope of work, credentials, and ratings.",
  },
  {
    q: "Does Inchaa handle payments?",
    a: "No. Financial agreements are made directly between you and the professional. Inchaa focuses on connecting you with the right people, helping you compare options, and giving you a dashboard to manage the process.",
  },
  {
    q: "How is Inchaa different from finding contractors on WhatsApp?",
    a: "With word of mouth, you rely on a single recommendation and hope for the best. With Inchaa, every professional is reviewed before listing. You receive multiple competing quotes instead of depending on one referral. And everything is documented in one place – no scattered WhatsApp messages, no lost paperwork, no guesswork.",
  },
  {
    q: "Can I post a project for engineering or consulting work?",
    a: "Yes. Inchaa connects you with structural engineers, MEP engineers, civil engineers, project management consultants, quantity surveyors, and design consultants.",
  },
  {
    q: "What if I am not satisfied with any of the quotes?",
    a: "You are under no obligation to accept any quote. If none of the proposals meet your expectations, you can decline them all. Inchaa is free – you only move forward when you find the right match.",
  },
  {
    q: "Is my personal information shared with all contractors?",
    a: "No. Your project details are shared with relevant professionals who match your requirements. Your personal contact information is only shared when you choose to engage with a specific professional.",
  },
  {
    q: "How long does it take to receive quotes?",
    a: "Response times vary by project type and location. For most projects, you can expect to start receiving quotes within a few days of posting.",
  },
  {
    q: "Does Inchaa cover villa construction and new builds, not just renovation?",
    a: "Yes. Inchaa covers the full spectrum – from new villa construction and full fit-outs to renovation, remodelling, and specialist trade work.",
  },
];

const developerFaqs = [
  {
    q: "How can developers and main contractors use Inchaa to find subcontractors?",
    a: "Developers and main contractors can post project requirements on Inchaa and receive quotes from specialist subcontractors across 30+ trade categories. Whether you need MEP, structural, finishing, or external works subcontractors, Inchaa gives you access to licensed professionals who respond with detailed quotations.",
  },
  {
    q: "Can I post multiple projects simultaneously?",
    a: "Yes. You can post and manage multiple projects from one account. Each project receives its own set of quotes, and you can track all of them through the Inchaa dashboard.",
  },
  {
    q: "What types of subcontractors are available?",
    a: "Inchaa covers all major construction trades – concrete, block works, electrical, plumbing, AC/HVAC, fire fighting, plastering, painting, flooring, false ceilings, gypsum, aluminium and glass, doors and joinery, waterproofing, thermal insulation, external stone works, earth works, demolition, and more.",
  },
  {
    q: "Does Inchaa cover commercial and industrial projects?",
    a: "Yes. Inchaa supports residential, commercial, industrial, and mixed-use projects. You can specify your property type when posting a project.",
  },
  {
    q: "Can I use Inchaa for large-scale villa developments?",
    a: "Yes. Developers building multiple units can use Inchaa to source subcontractors for each trade package. Post separate requirements for each scope of work and receive competing quotes from specialists.",
  },
  {
    q: "How does the quotation process work for subcontractor procurement?",
    a: "Post your project with the scope of work, location, area, and specific requirements. Relevant subcontractors receive your request and submit detailed quotations. You compare proposals, review credentials and past work, and select the best fit.",
  },
  {
    q: "Can I compare subcontractor quotes across multiple trades?",
    a: "Yes. Post separate requirements for each trade (electrical, plumbing, painting, flooring, etc.) and compare quotes within each trade independently. Full visibility across your project's subcontractor costs.",
  },
  {
    q: "Is Inchaa suitable for MEP, structural, and finishing subcontractor sourcing?",
    a: "Yes. Inchaa has professionals across MEP trades (electrical, plumbing, AC, fire fighting), structural trades (concrete, block works), and finishing trades (flooring, painting, gypsum, joinery, aluminium). Each category is listed separately so you can target exactly the trade you need.",
  },
  {
    q: "Can my project team manage multiple requests from one account?",
    a: "Yes. All project postings and received quotations are accessible from one dashboard. Your team can manage, compare, and track quotations across all active projects in one place.",
  },
];

const professionalFaqs = [
  {
    q: "How do I join Inchaa as a contractor, engineer, or consultant?",
    a: "Visit our join page, create your profile, and submit your business credentials for review. Once approved, you start receiving project inquiries from homeowners and developers in your selected service areas.",
  },
  {
    q: "Is it free to join?",
    a: "Yes. During our launch phase, professionals receive full access to the Inchaa platform at no charge. As the platform scales, a monthly subscription will apply for continued access to project inquiries. Early adopters will benefit from preferential pricing. Any changes will be communicated well in advance.",
  },
  {
    q: "Does Inchaa take a commission on projects?",
    a: "No. Inchaa does not charge commission on awarded projects. Professionals keep 100% of the contract value agreed with their client.",
  },
  {
    q: "How and when do I get paid?",
    a: "Payments are agreed directly between you and the client. Inchaa does not hold or process project funds.",
  },
  {
    q: "What documents do I need?",
    a: "A valid UAE trade license, company credentials, and details of your past project experience. Our team reviews all submissions to ensure quality and compliance before activating your profile.",
  },
  {
    q: "How does Inchaa send me project leads?",
    a: "When a homeowner or developer posts a project that matches your services and selected locations, you'll receive a notification with the project details. You can then review the scope and decide whether to submit a quotation.",
  },
  {
    q: "Can I choose which projects to quote on?",
    a: "Absolutely. You are under no obligation to quote on every inquiry. Submit quotations only for projects that align with your expertise, availability, and business priorities.",
  },
  {
    q: "How does the review and rating system work?",
    a: "Once a project is completed, homeowners and engineers involved in the project can leave ratings and written reviews based on their experience. All reviews are linked to verified projects and displayed on your profile, helping you build credibility, strengthen your reputation, and win more work.",
  },
  {
    q: "Is Inchaa only for licensed professionals?",
    a: "Yes. Only licensed and verified professionals are approved on the Inchaa platform to maintain quality standards.",
  },
  {
    q: "What areas can I receive leads from?",
    a: "You can set your service area to Abu Dhabi, Dubai, Sharjah, or a combination. You only receive inquiries from the areas you select.",
  },
  {
    q: "Can I list multiple services on my profile?",
    a: "Yes. If your business covers multiple trades or services, you can list all of them. This increases the range of project inquiries you are eligible to receive.",
  },
];

function FAQSection({ faqs, label }: { faqs: { q: string; a: string }[]; label: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      <p className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em] mb-1">{label}</p>
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
          <p className="text-yellow text-[11px] font-bold uppercase tracking-[0.14em] mb-3">Help centre</p>
          <h1 className="text-white text-[40px] md:text-[58px] font-bold leading-[1.06] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/60 text-base leading-relaxed max-w-xl">
            Everything you need to know about finding and hiring construction professionals on
            Inchaa – whether you are a homeowner, developer, or construction professional.
          </p>
        </div>
      </section>

      {/* ── For Homeowners ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-[3px] bg-yellow" />
                <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">Homeowners</span>
              </div>
              <h2 className="text-navy text-2xl md:text-[30px] font-bold leading-tight">
                For Homeowners
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                Building, renovating, or maintaining a property in the UAE.
              </p>
              <div className="mt-6">
                <PostProjectButton
                  campaign="faqs_homeowners"
                  className="inline-flex items-center bg-yellow text-white text-sm font-bold px-5 py-3 rounded-lg hover:brightness-95 transition-all duration-150"
                >
                  Post Your Project Free
                </PostProjectButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              <FAQSection faqs={homeownerFaqs} label="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── For Developers ─────────────────────────────────────── */}
      <section className="bg-[#F8F8F8] py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-[3px] bg-yellow" />
                <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">Developers</span>
              </div>
              <h2 className="text-navy text-2xl md:text-[30px] font-bold leading-tight">
                For Developers & Main Contractors
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                Sourcing subcontractors and managing procurement across multiple trades.
              </p>
              <div className="mt-6">
                <PostProjectButton
                  campaign="faqs_homeowners"
                  className="inline-flex items-center bg-yellow text-white text-sm font-bold px-5 py-3 rounded-lg hover:brightness-95 transition-all duration-150"
                >
                  Post Your Project Free
                </PostProjectButton>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              <FAQSection faqs={developerFaqs} label="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── For Professionals ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-[3px] bg-yellow" />
                <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">Professionals</span>
              </div>
              <h2 className="text-navy text-2xl md:text-[30px] font-bold leading-tight">
                For Contractors, Engineers & Consultants
              </h2>
              <p className="mt-3 text-mid-grey text-sm leading-relaxed">
                Growing your business and receiving qualified project leads.
              </p>
              <div className="mt-6">
                <Link
                  href="http://inchaa-staging-fe.s3-website.me-central-1.amazonaws.com/service-provider"
                  className="inline-flex items-center bg-navy text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-[#252c42] transition-colors duration-150"
                >
                  Join as a Professional
                </Link>
              </div>
            </div>
            <div className="border-t border-[#E5E7EB]">
              <FAQSection faqs={professionalFaqs} label="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
