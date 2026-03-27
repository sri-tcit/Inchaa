"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to use Inchaa to find a contractor?",
    a: "Nothing. Inchaa is completely free for homeowners. You post your project, receive quotes, and compare contractors at no cost. Financial agreements are made directly between you and the contractor you hire.",
  },
  {
    q: "How does Inchaa review contractors before listing them?",
    a: "Every contractor on Inchaa is reviewed for a valid UAE trade license, business credentials, and past project experience. Only contractors who pass this review can receive project inquiries on the platform.",
  },
  {
    q: "Can I post a project for a specific trade, like electrical or plumbing?",
    a: "Yes. You can post a project for any of our 30+ trade categories. Specify the exact scope of work you need and only contractors who specialise in that trade will respond.",
  },
  {
    q: "What is the difference between hiring a main contractor and a sub-contractor on Inchaa?",
    a: "A main contractor manages your entire project from start to finish — they coordinate all trades and deliver a completed build. A sub-contractor handles a specific scope of work, like electrical, plumbing, or tiling. Inchaa supports both — choose based on your project needs.",
  },
  {
    q: "Which areas does Inchaa cover?",
    a: "Inchaa currently serves Abu Dhabi, Dubai, and Sharjah. We are expanding across the UAE.",
  },
  {
    q: "How many quotes will I receive for my project?",
    a: "The number of quotes depends on your project type and the availability of contractors in your area. Our goal is to deliver multiple competing proposals so you can compare and choose with confidence.",
  },
  {
    q: "Can I use Inchaa for new villa construction, not just renovation?",
    a: "Yes. Inchaa covers the full spectrum — from new villa construction and shell-and-core fit-outs to renovation, remodelling, and specialist trade work.",
  },
  {
    q: "How long does it take to receive quotes after posting a project?",
    a: "Response times vary by project type and location. For most projects, you can expect to start receiving quotes within 1–2 days of posting.",
  },
];

export function ContractorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg-section py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
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
