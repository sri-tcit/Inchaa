"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does a quantity surveyor do and do I need one?",
    a: "A quantity surveyor (QS) estimates project costs, prepares bills of quantities, evaluates contractor tenders, and controls costs throughout construction. If your project budget exceeds AED 500,000, a QS can save you significantly more than their fee by identifying overpriced items and ensuring fair pricing.",
  },
  {
    q: "How much does a project management consultant cost in the UAE?",
    a: "PMC fees in the UAE typically range from 3% to 8% of total project cost, depending on scope and complexity. For a villa project worth AED 2 million, expect PMC fees of AED 60,000 to AED 160,000. Post your project on Inchaa to compare proposals and find the right fit.",
  },
  {
    q: "Can I find an interior design consultant on Inchaa?",
    a: "Yes. Inchaa connects you with design consultants for villa design, apartment design, commercial interiors, and landscape design. Post your design requirements – including property type, style preference, layout, and area – and receive structured proposals from professionals.",
  },
  {
    q: "Is it free to find a consultant on Inchaa?",
    a: "Yes. Posting your project, receiving proposals, and comparing consultants costs nothing for homeowners.",
  },
];

export function ConsultantFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-light-grey py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-navy text-2xl md:text-3xl font-bold">
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
