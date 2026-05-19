const mainTypes = [
  {
    title: "Structural Engineers",
    description: "Foundations, columns, beams, slabs, and load-bearing design. Essential for new builds and structural modifications.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "MEP Engineers",
    description: "HVAC design, electrical distribution, plumbing layouts, fire systems, and BMS for residential and commercial projects.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Civil Engineers",
    description: "Site works, earthworks, drainage, and external infrastructure — everything outside the building envelope.",
    img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Supervision Engineers",
    description: "On-site quality control ensuring work matches approved drawings, specs, and local regulations.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&q=85",
  },
  {
    title: "Geotechnical Engineers",
    description: "Soil testing and foundation recommendations. A regulatory requirement for most new builds in Dubai and Abu Dhabi.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop&q=85",
  },
];

function Card({ type, height }: { type: typeof mainTypes[0]; height: number }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{ height }}
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
  );
}

export function EngineerTypes_v5() {
  return (
    <section className="bg-bg-base py-14 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight mb-8">
          Types of Engineers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {mainTypes.slice(0, 3).map((type) => (
            <Card key={type.title} type={type} height={300} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mainTypes.slice(3).map((type) => (
            <Card key={type.title} type={type} height={240} />
          ))}
        </div>

      </div>
    </section>
  );
}
