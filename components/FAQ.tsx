"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I post a project?",
    a: "Sign up, describe your project requirements, set your budget, and publish. Verified professionals in your area will send you proposals.",
  },
  {
    q: "Are professionals verified?",
    a: "Every professional on Inchaa goes through an identity and credential verification process before they can submit proposals.",
  },
  {
    q: "What types of projects are supported?",
    a: "Inchaa supports residential, commercial, and industrial construction projects — from small renovations to large-scale builds.",
  },
  {
    q: "How does pricing work?",
    a: "Posting a project is free. Professionals submit proposals with their pricing. You compare and choose the best fit for your budget.",
  },
  {
    q: "Can I communicate with professionals before hiring?",
    a: "Yes. Once you receive proposals, you can message professionals directly through the platform to discuss project details.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-navy text-2xl md:text-3xl font-bold">Common Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E5E7EB]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-charcoal text-sm font-medium pr-4">{faq.q}</span>
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-mid-grey shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-mid-grey shrink-0" />
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
