const consultantTypes = [
  {
    title: "Quantity Surveyors (QS)",
    description:
      "Cost estimation, bill of quantities preparation, tender evaluation, cost control, and final account settlement. A QS ensures you know exactly what your project should cost before construction begins – and that you do not overpay once it is underway. Essential for any project above AED 500,000.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Project Management Consultants (PMC)",
    description:
      "End-to-end project coordination – from pre-construction planning through to handover. A PMC manages your timeline, budget, contractor coordination, and quality control so you do not have to.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Design Consultants",
    description:
      "Architectural design, interior design, and landscape design. From villa concept design to detailed construction drawings, a design consultant translates your vision into buildable plans.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=85",
  },
  {
    title: "Supervision Consultants",
    description:
      "Construction supervision and quality assurance. An independent supervision consultant visits your site, inspects work quality, verifies compliance with approved drawings, and reports directly to you.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=85",
  },
];

export function ConsultantTypes() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-3xl md:text-[40px] font-bold leading-tight mb-12">
          What Types of Consultants<br className="hidden md:block" /> Can You Find on Inchaa?
        </h2>

        {/* Editorial numbered rows */}
        <div className="border-t border-[#E5E7EB]">
          {consultantTypes.map((type, i) => (
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
