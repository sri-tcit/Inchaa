const mainTypes = [
  {
    title: "General Contractors",
    description:
      "Single point of responsibility for your entire build — structure, MEP, finishing, and handover.",
  },
  {
    title: "MEP Contractors",
    description:
      "Electrical, plumbing, AC, HVAC, fire systems, and low-current works like CCTV and access control.",
  },
  {
    title: "Renovation Contractors",
    description:
      "Villa and apartment renovations, bathroom and kitchen remodelling, extensions, and property upgrades.",
  },
];

const specialistTrades = [
  "Concrete & structural", "Block works", "Plastering", "Painting",
  "Flooring & tiling", "Marble & granite", "False ceilings", "Gypsum & décor",
  "Aluminium & glass", "Doors & joinery", "Waterproofing", "Stone cladding",
  "Landscaping", "Demolition", "Kitchen cabinets", "Wardrobes", "Car shades", "CCTV & control",
];

export function ContractorTypes_v3() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-2xl md:text-[30px] font-bold mb-8">
          Types of Contractors
        </h2>

        {/* 3 clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mainTypes.map((type) => (
            <div key={type.title} className="border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-3">
              <div className="w-6 h-[2.5px] bg-yellow" />
              <h3 className="text-navy text-sm font-bold leading-snug">{type.title}</h3>
              <p className="text-mid-grey text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Specialist trades — clean inline list */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
          <p className="text-[11px] font-bold text-mid-grey uppercase tracking-widest mb-3">
            Specialist Trades
          </p>
          <p className="text-sm text-mid-grey leading-relaxed">
            {specialistTrades.join(" · ")}
          </p>
        </div>

      </div>
    </section>
  );
}
