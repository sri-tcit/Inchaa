"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need a structural engineer to build or renovate a villa in the UAE?",
    a: "Yes. In Abu Dhabi, Dubai, and Sharjah, municipality regulations require approved structural drawings signed by a licensed engineer before any construction permit is issued. Even for renovation projects that involve structural modifications (removing walls, adding floors, extensions), a structural engineer's assessment and approval are required.",
  },
  {
    q: "What is the difference between a structural engineer and a civil engineer?",
    a: "A structural engineer designs the building's load-bearing framework – foundations, columns, beams, and slabs. A civil engineer handles site works, earthworks, drainage, roads, and external infrastructure. For a new villa build, you may need both.",
  },
  {
    q: "How much does a structural engineer cost in the UAE?",
    a: "Engineering fees vary based on project scope, complexity, and location. Structural design for a standard villa typically ranges from AED 15,000 to AED 50,000 depending on the size and number of floors. Post your project on Inchaa to receive multiple proposals and compare pricing.",
  },
  {
    q: "Can I find MEP engineers on Inchaa for commercial projects?",
    a: "Yes. Inchaa connects you with MEP engineers for both residential and commercial projects, including HVAC design, electrical distribution, plumbing, fire fighting systems, and low-current works.",
  },
  {
    q: "Is it free to find an engineer on Inchaa?",
    a: "Yes. Posting your project, receiving proposals, and comparing engineers is completely free for homeowners and developers.",
  },
];

export function EngineerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">FAQs</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between py-4 text-left gap-4"
                >
                  <span className="text-charcoal text-sm font-medium">{faq.q}</span>
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
      </div>
    </section>
  );
}
