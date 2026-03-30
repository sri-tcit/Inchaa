"use client";

import { useState } from "react";

const mainTypes = [
  {
    title: "General Contractors",
    description:
      "Single point of responsibility for your entire build — structure, MEP, finishing, and handover. Ideal for new villa construction, full renovations, and large residential projects.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=85",
  },
  {
    title: "MEP Contractors",
    description:
      "Electrical installation, plumbing and drainage, AC and HVAC, fire systems, and low-current works including CCTV, access control, and building management systems.",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=500&fit=crop&q=85",
  },
  {
    title: "Renovation Contractors",
    description:
      "Villa and apartment renovations, bathroom and kitchen remodelling, extensions, and property upgrades across the UAE.",
    img: "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=800&h=500&fit=crop&q=85",
  },
];

const specialistTrades = [
  "Concrete & structural", "Block works", "Plastering", "Painting",
  "Flooring & tiling", "Marble & granite", "False ceilings", "Gypsum & décor",
  "Aluminium & glass", "Doors & joinery", "Waterproofing", "Stone cladding",
  "Landscaping", "Demolition", "Kitchen cabinets", "Wardrobes", "Car shades", "CCTV & control",
];

export function ContractorTypes_v4() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-2xl md:text-[30px] font-bold mb-10">
          Types of Contractors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-0 border border-[#E5E7EB] rounded-xl overflow-hidden">

          {/* Left: tab list */}
          <div className="divide-y divide-[#E5E7EB]">
            {mainTypes.map((type, i) => (
              <button
                key={type.title}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-150 ${
                  active === i ? "bg-[#F8F8F8]" : "hover:bg-[#FAFAFA]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[11px] font-bold tabular-nums transition-colors duration-150 ${
                    active === i ? "text-yellow" : "text-mid-grey"
                  }`}>
                    0{i + 1}
                  </span>
                  <span className={`text-sm font-bold transition-colors duration-150 ${
                    active === i ? "text-navy" : "text-[#6B7280]"
                  }`}>
                    {type.title}
                  </span>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity duration-150 ${
                  active === i ? "bg-yellow opacity-100" : "opacity-0"
                }`} />
              </button>
            ))}

            {/* Specialist trades tab */}
            <div className="px-6 py-5">
              <p className="text-[11px] font-bold text-mid-grey uppercase tracking-widest mb-3">
                Specialist Trades
              </p>
              <p className="text-xs text-mid-grey leading-relaxed">
                {specialistTrades.join(" · ")}
              </p>
            </div>
          </div>

          {/* Right: active description + image */}
          <div className="border-t md:border-t-0 md:border-l border-[#E5E7EB] flex flex-col">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                key={active}
                src={mainTypes[active].img}
                alt={mainTypes[active].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-navy text-sm font-bold mb-2">{mainTypes[active].title}</h3>
              <p className="text-mid-grey text-sm leading-relaxed">{mainTypes[active].description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
