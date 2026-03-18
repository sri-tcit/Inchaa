const engineerTypes = [
  {
    title: "Structural Engineers",
    description:
      "Design and analysis of load-bearing structures – foundations, columns, beams, slabs, retaining walls. Essential for new villa construction, building extensions, structural modifications, and ensuring compliance with UAE building codes.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "MEP Engineers",
    description:
      "Mechanical, electrical, and plumbing design and supervision. HVAC system design, electrical distribution, plumbing layouts, fire fighting systems, and low-current systems (CCTV, access control, BMS). Critical for both residential villas and commercial developments.",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Civil Engineers",
    description:
      "Site works, earthworks, road and infrastructure design, drainage, and external works. Civil engineers handle everything outside the building envelope – from ground preparation to external utilities and access roads.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Supervision Engineers",
    description:
      "On-site supervision and quality control during construction. A supervision engineer ensures the work matches approved drawings, meets technical specifications, and complies with local regulations.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Geotechnical Engineers",
    description:
      "Soil testing, ground investigation, and foundation recommendations. Before any new build in the UAE, a geotechnical report determines what type of foundation your structure needs. A regulatory requirement for most projects in Abu Dhabi and Dubai.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=85",
  },
];

export function EngineerTypes() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        {/* Overline */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="block w-5 h-[3px] bg-yellow" />
          <span className="text-[11px] font-bold text-mid-grey uppercase tracking-[0.14em]">
            Engineer types
          </span>
        </div>

        <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          What Types of Engineers<br className="hidden md:block" /> Can You Find on Inchaa?
        </h2>

        {/* Editorial numbered rows */}
        <div className="border-t border-[#E5E7EB]">
          {engineerTypes.map((type, i) => (
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

      </div>
    </section>
  );
}
