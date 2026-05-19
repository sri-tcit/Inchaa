"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { JoinButton } from "./JoinButton";

const faqs = [
  {
    q: "Is it free to join Inchaa?",
    a: "Yes. Professionals can create a profile, complete verification, and receive project inquiries at no cost during our launch period. We believe in transparent pricing, and any future subscription plans will be clearly communicated in advance.",
  },
  {
    q: "What documents do I need to join?",
    a: "You will need a valid UAE trade license, business registration or commercial license, and information about your past project experience. Our team reviews these before activating your profile.",
  },
  {
    q: "Can I choose which projects to quote on?",
    a: "Yes. You receive project notifications based on your services and location. You review the details and decide whether to submit a quotation. There is no obligation to quote on every project.",
  },
  {
    q: "Which areas can I receive leads from?",
    a: "You can set your service area to Abu Dhabi, Dubai, Sharjah, or any combination. You only receive inquiries from the areas you select.",
  },
  {
    q: "How quickly will I start receiving project leads?",
    a: "Once your credentials are reviewed and your profile is activated, you begin receiving project inquiries immediately based on your services and location. The volume depends on current demand in your area and trade category.",
  },
];

export function JoinFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg-section py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          <div>
            <h2 className="text-text-heading text-2xl md:text-[30px] font-bold leading-tight">
              Common Questions
            </h2>
            <p className="mt-3 text-text-muted text-sm leading-relaxed">
              Everything you need to know about joining Inchaa as a professional.
            </p>
            <div className="mt-6">
              <JoinButton size="sm" />
            </div>
          </div>

          <div className="border-t border-ui-border">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-ui-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between py-4 text-left gap-4"
                >
                  <span className="text-text-body text-sm font-medium">{faq.q}</span>
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                  ) : (
                    <Plus className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                  )}
                </button>
                {openIndex === i && (
                  <p className="pb-4 text-text-muted text-sm leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
