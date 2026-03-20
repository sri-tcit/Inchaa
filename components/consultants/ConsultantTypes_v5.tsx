"use client";

import { useState } from "react";

const mainTypes = [
  {
    num: "01",
    title: "Quantity Surveyors",
    description: "Cost estimation, bill of quantities, tender evaluation, and cost control. Know exactly what your project should cost before a single brick is laid.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=85",
  },
  {
    num: "02",
    title: "Project Management Consultants",
    description: "End-to-end coordination — planning, timeline, budget, contractor management, and handover. So you don't have to.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&q=85",
  },
  {
    num: "03",
    title: "Design Consultants",
    description: "Architectural, interior, and landscape design. From concept to construction drawings — your vision made buildable.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&q=85",
  },
  {
    num: "04",
    title: "Supervision Consultants",
    description: "Independent site inspection and quality assurance. Verify work quality, check compliance, and report directly to you.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&q=85",
  },
];

export function ConsultantTypes_v5() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-2xl md:text-[30px] font-bold mb-8">
          Types of Consultants
        </h2>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mainTypes.map((type, i) => (
            <div
              key={type.title}
              className="relative rounded-xl overflow-hidden cursor-default"
              style={{ height: "280px" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={type.img} alt={type.title} className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                  opacity: hovered === i ? 1 : 0.85,
                }}
              />
              <span className="absolute top-5 left-5 text-[11px] font-bold text-white/50 tracking-widest">{type.num}</span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-base leading-snug">{type.title}</h3>
                <p
                  className="text-white/70 text-sm leading-relaxed mt-2 transition-all duration-300"
                  style={{ opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateY(0)" : "translateY(6px)" }}
                >
                  {type.description}
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow transition-opacity duration-300"
                style={{ opacity: hovered === i ? 1 : 0 }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
