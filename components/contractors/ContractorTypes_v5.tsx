const mainTypes = [
  {
    title: "General Contractors",
    description: "Single point of responsibility for your entire build — structure, MEP, finishing, and handover.",
    img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "MEP Contractors",
    description: "Electrical, plumbing, AC, HVAC, fire systems, and low-current works.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Renovation Contractors",
    description: "Villa and apartment renovations, kitchen & bathroom remodelling, extensions and upgrades.",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=600&fit=crop&q=85",
  },
];

export function ContractorTypes_v5() {
  return (
    <section className="bg-bg-base py-14 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight mb-8">
          Types of Contractors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {mainTypes.map((type) => (
            <div
              key={type.title}
              className="relative rounded-xl overflow-hidden"
              style={{ height: "340px" }}
            >
              <img
                src={type.img}
                alt={type.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)" }}
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
