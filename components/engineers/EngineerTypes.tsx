const engineerTypes = [
  {
    title: "Structural Engineers",
    description:
      "Design and analysis of load-bearing structures – foundations, columns, beams, slabs, retaining walls. Essential for new villa construction, building extensions, structural modifications, and ensuring compliance with UAE building codes. If your project involves any change to a building's structure, you need a structural engineer.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop",
  },
  {
    title: "MEP Engineers",
    description:
      "Mechanical, electrical, and plumbing design and supervision. HVAC system design, electrical distribution, plumbing layouts, fire fighting systems, and low-current systems (CCTV, access control, BMS). MEP engineering is critical for both residential villas and commercial developments.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=260&fit=crop",
  },
  {
    title: "Civil Engineers",
    description:
      "Site works, earthworks, road and infrastructure design, drainage, and external works. Civil engineers handle everything that happens outside the building envelope – from ground preparation to external utilities and access roads.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=260&fit=crop",
  },
  {
    title: "Supervision Engineers",
    description:
      "On-site supervision and quality control during construction. A supervision engineer ensures the work being done matches the approved drawings, meets technical specifications, and complies with local regulations. Essential for any project where you are not managing the contractor directly.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop",
  },
  {
    title: "Geotechnical Engineers",
    description:
      "Soil testing, ground investigation, and foundation recommendations. Before any new build in the UAE, a geotechnical report determines what type of foundation your structure needs. This is a regulatory requirement for most projects in Abu Dhabi and Dubai.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=260&fit=crop",
  },
];

export function EngineerTypes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight mb-12">
          What Types of Engineers Can You Find on Inchaa?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {engineerTypes.map((type) => (
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
      </div>
    </section>
  );
}
