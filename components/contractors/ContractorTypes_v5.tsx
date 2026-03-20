"use client";

import { useState } from "react";

const mainTypes = [
  {
    num: "01",
    title: "General Contractors",
    description: "Single point of responsibility for your entire build — structure, MEP, finishing, and handover.",
    img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=900&h=600&fit=crop&q=85",
  },
  {
    num: "02",
    title: "MEP Contractors",
    description: "Electrical, plumbing, AC, HVAC, fire systems, and low-current works.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&q=85",
  },
  {
    num: "03",
    title: "Renovation Contractors",
    description: "Villa and apartment renovations, kitchen & bathroom remodelling, extensions and upgrades.",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=600&fit=crop&q=85",
  },
];

const specialistTrades = [
  "Concrete & structural", "Block works", "Plastering", "Painting", "Flooring & tiling",
  "Marble & granite", "False ceilings", "Aluminium & glass", "Doors & joinery",
  "Waterproofing", "Stone cladding", "Landscaping", "Demolition", "Kitchen cabinets",
  "Wardrobes", "Car shades", "CCTV & control",
];

export function ContractorTypes_v5() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-2xl md:text-[30px] font-bold mb-8">
          Types of Contractors
        </h2>

        {/* Cinematic stacked panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {mainTypes.map((type, i) => (
            <div
              key={type.title}
              className="relative rounded-xl overflow-hidden cursor-default"
              style={{ height: "340px" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Photo */}
              <img
                src={type.img}
                alt={type.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay — darkens more on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)",
                  opacity: hovered === i ? 1 : 0.85,
                }}
              />

              {/* Number — top left */}
              <span className="absolute top-5 left-5 text-[11px] font-bold text-white/50 tracking-widest">
                {type.num}
              </span>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-base leading-snug">{type.title}</h3>
                <p
                  className="text-white/70 text-sm leading-relaxed mt-2 transition-all duration-300"
                  style={{
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  {type.description}
                </p>
              </div>

              {/* Yellow bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow transition-opacity duration-300"
                style={{ opacity: hovered === i ? 1 : 0 }}
              />
            </div>
          ))}
        </div>

        {/* Specialist trades */}
        {/* <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-wrap gap-x-4 gap-y-1.5 items-center">
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-widest flex-shrink-0">
            Specialist Trades:
          </span>
          {specialistTrades.map((trade, i) => (
            <span key={trade} className="text-sm text-mid-grey">
              {trade}{i < specialistTrades.length - 1 && <span className="text-yellow ml-4">·</span>}
            </span>
          ))}
        </div> */}

      </div>
    </section>
  );
}
