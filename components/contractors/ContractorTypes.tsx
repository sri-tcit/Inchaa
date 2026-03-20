"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const mainTypes = [
  {
    title: "General Contractors",
    description:
      "End-to-end project delivery. A single contractor who manages your entire build from foundation to handover — structural works, MEP, finishing, and external works. Ideal for new villa construction, full renovations, and large residential projects in the UAE.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "MEP Contractors",
    description:
      "Mechanical, electrical, and plumbing specialists. Electrical installation, plumbing and drainage, AC and HVAC systems, fire fighting and fire alarm systems, and low-current works including CCTV, access control, and building management systems.",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Renovation Contractors",
    description:
      "Villa renovation, apartment renovation, bathroom and kitchen remodelling, extensions, and upgrades. Find contractors who specialise in transforming existing properties across the UAE.",
    img: "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=600&h=400&fit=crop&q=85",
  },
];

const specialistTrades = [
  "Concrete and structural works",
  "Block works",
  "Plastering",
  "Painting (internal and external)",
  "Flooring, tiling, marble, and granite",
  "False ceilings, gypsum, and décor",
  "Aluminium and glass",
  "Doors, joinery, and carpentry",
  "Waterproofing and thermal insulation",
  "External stone cladding",
  "Landscaping and hardscaping",
  "Demolition and earth works",
  "Kitchen cabinets and wardrobes",
  "Main gates, handrails, and car shades",
  "Camera, monitoring, and control systems",
];

export function ContractorTypes() {
  const [showTrades, setShowTrades] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          What Types of Contractors<br className="hidden md:block" /> Can You Find on Inchaa?
        </h2>

        {/* Editorial numbered rows */}
        <div className="border-t border-[#E5E7EB]">
          {mainTypes.map((type, i) => (
            <div
              key={type.title}
              className="group grid grid-cols-[56px_1fr] md:grid-cols-[56px_1fr_260px] gap-x-6 gap-y-3 items-center py-7 border-b border-[#E5E7EB]"
            >
              {/* Number */}
              <span className="text-[32px] font-bold text-yellow leading-none self-start pt-0.5">
                0{i + 1}
              </span>

              {/* Text */}
              <div>
                <h3 className="text-navy text-lg md:text-xl font-bold leading-snug">
                  {type.title}
                </h3>
                <p className="mt-2 text-mid-grey text-sm leading-relaxed max-w-xl">
                  {type.description}
                </p>
              </div>

              {/* Image — desktop only, fades in on row hover */}
              <div className="hidden md:block relative h-[140px] overflow-hidden rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={type.img}
                  alt={type.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Specialist trades */}
        <div className="mt-8 border border-[#E5E7EB] rounded-lg overflow-hidden">
          <button
            onClick={() => setShowTrades(!showTrades)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#FAFAFA] transition-colors duration-150"
          >
            <div>
              <p className="text-navy text-base font-bold">Specialist Trade Contractors</p>
              <p className="mt-0.5 text-mid-grey text-sm">30+ categories available</p>
            </div>
            {showTrades ? (
              <ChevronUp className="w-4 h-4 text-mid-grey flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-mid-grey flex-shrink-0" />
            )}
          </button>

          {showTrades && (
            <div className="px-6 pb-6 border-t border-[#E5E7EB]">
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
                {specialistTrades.map((trade) => (
                  <li
                    key={trade}
                    className="flex items-center gap-2.5 py-2.5 border-b border-[#F4F4F4] text-sm text-mid-grey"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow flex-shrink-0" />
                    {trade}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
