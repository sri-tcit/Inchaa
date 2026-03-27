const mainTypes = [
  {
    title: "Quantity Surveyors",
    description: "Cost estimation, bill of quantities, tender evaluation, and cost control. Know exactly what your project should cost before a single brick is laid.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Project Management Consultants",
    description: "End-to-end coordination — planning, timeline, budget, contractor management, and handover. So you don't have to.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Design Consultants",
    description: "Architectural, interior, and landscape design. From concept to construction drawings — your vision made buildable.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Supervision Consultants",
    description: "Independent site inspection and quality assurance. Verify work quality, check compliance, and report directly to you.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&q=85",
  },
];

export function ConsultantTypes_v5() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight mb-8">
          Types of Consultants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mainTypes.map((type) => (
            <div
              key={type.title}
              className="relative rounded-xl overflow-hidden"
              style={{ height: "280px" }}
            >
              <img src={type.img} alt={type.title} className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-base leading-snug">{type.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mt-2">{type.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
