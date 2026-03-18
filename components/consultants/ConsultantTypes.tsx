const consultantTypes = [
  {
    title: "Quantity Surveyors (QS)",
    description:
      "Cost estimation, bill of quantities preparation, tender evaluation, cost control, and final account settlement. A QS ensures you know exactly what your project should cost before construction begins – and that you do not overpay once it is underway. Essential for any project above AED 500,000.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=260&fit=crop",
  },
  {
    title: "Project Management Consultants (PMC)",
    description:
      "End-to-end project coordination – from pre-construction planning through to handover. A PMC manages your timeline, budget, contractor coordination, and quality control so you do not have to. Ideal for homeowners who want professional oversight without managing contractors directly.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop",
  },
  {
    title: "Design Consultants",
    description:
      "Architectural design, interior design, and landscape design. From villa concept design to detailed construction drawings, a design consultant translates your vision into buildable plans. Inchaa's structured intake captures your property type, style preference, layout, and area.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=260&fit=crop",
  },
  {
    title: "Supervision Consultants",
    description:
      "Construction supervision and quality assurance. An independent supervision consultant visits your site, inspects work quality, verifies compliance with approved drawings, and reports directly to you. This is your insurance policy against poor workmanship.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop",
  },
];

export function ConsultantTypes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight mb-12">
          What Types of Consultants Can You Find on Inchaa?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {consultantTypes.map((type) => (
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
