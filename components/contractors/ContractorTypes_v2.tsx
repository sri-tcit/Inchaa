const mainTypes = [
  {
    title: "General Contractors",
    description: "End-to-end project delivery — structural works, MEP, finishing, and handover.",
  },
  {
    title: "MEP Contractors",
    description: "Electrical, plumbing, AC, fire systems, and low-current works.",
  },
  {
    title: "Renovation Contractors",
    description: "Villa and apartment renovations, bathroom & kitchen remodelling, extensions.",
  },
];

const specialistTrades = [
  "Concrete & structural",
  "Block works",
  "Plastering",
  "Painting",
  "Flooring & tiling",
  "Marble & granite",
  "False ceilings",
  "Gypsum & décor",
  "Aluminium & glass",
  "Doors & joinery",
  "Carpentry",
  "Waterproofing",
  "Stone cladding",
  "Landscaping",
  "Demolition",
  "Kitchen cabinets",
  "Wardrobes",
  "Main gates",
  "Car shades",
  "CCTV & control",
];

export function ContractorTypes_v2() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight mb-10">
          Types of Contractors on Inchaa
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

          {/* Left: main types */}
          <div className="divide-y divide-[#E5E7EB]">
            {mainTypes.map((type, i) => (
              <div key={type.title} className="flex items-start gap-5 py-5">
                <span className="text-[13px] font-bold text-yellow tabular-nums pt-0.5 w-5 flex-shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-navy text-sm font-bold leading-snug">{type.title}</h3>
                  <p className="mt-1 text-mid-grey text-sm leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: specialist trades as compact tags */}
          <div className="lg:border-l lg:border-[#E5E7EB] lg:pl-10">
            <p className="text-[11px] font-bold text-mid-grey uppercase tracking-widest mb-4">
              Specialist Trades
            </p>
            <div className="flex flex-wrap gap-2">
              {specialistTrades.map((trade) => (
                <span
                  key={trade}
                  className="text-[12px] text-navy font-medium bg-[#F4F4F4] px-3 py-1.5 rounded-full"
                >
                  {trade}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
