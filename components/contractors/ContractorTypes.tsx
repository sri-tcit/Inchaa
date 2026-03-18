"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const mainTypes = [
  {
    title: "General Contractors",
    description:
      "End-to-end project delivery. A single contractor who manages your entire build from foundation to handover — structural works, MEP, finishing, and external works. Ideal for new villa construction, full renovations, and large residential projects in the UAE.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop",
  },
  {
    title: "MEP Contractors",
    description:
      "Mechanical, electrical, and plumbing specialists. Electrical installation, plumbing and drainage, AC and HVAC systems, fire fighting and fire alarm systems, and low-current works including CCTV, access control, and building management systems.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=260&fit=crop",
  },
  {
    title: "Renovation Contractors",
    description:
      "Villa renovation, apartment renovation, bathroom and kitchen remodelling, extensions, and upgrades. Find contractors who specialise in transforming existing properties across the UAE.",
    img: "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=400&h=260&fit=crop",
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight mb-12">
          What Types of Contractors Can You Find on Inchaa?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mainTypes.map((type) => (
            <div
              key={type.title}
              className="border border-[#E5E7EB] rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={type.img}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-navy text-base font-bold">{type.title}</h3>
                <p className="mt-2 text-mid-grey text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialist trades */}
        <div className="mt-8 border border-[#E5E7EB] rounded-lg p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-charcoal text-base font-semibold">
                Specialist Trade Contractors
              </h3>
              <p className="mt-1 text-mid-grey text-sm">30+ categories available</p>
            </div>
            <button
              onClick={() => setShowTrades(!showTrades)}
              className="flex items-center gap-1 text-sm font-medium text-navy hover:text-charcoal transition-colors duration-150"
            >
              {showTrades ? "Hide" : "View all"}
              {showTrades ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {showTrades && (
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
              {specialistTrades.map((trade) => (
                <li key={trade} className="text-sm text-charcoal py-1 border-b border-[#F0F0F0]">
                  {trade}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
