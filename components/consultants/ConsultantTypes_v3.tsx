const mainTypes = [
  {
    title: "Quantity Surveyors",
    description:
      "Cost estimation, bill of quantities, tender evaluation, and cost control. Know exactly what your project should cost before a single brick is laid.",
  },
  {
    title: "Project Management Consultants",
    description:
      "End-to-end coordination — planning, timeline, budget, contractor management, and handover. So you don't have to.",
  },
  {
    title: "Design Consultants",
    description:
      "Architectural, interior, and landscape design. From concept to construction drawings — your vision made buildable.",
  },
  {
    title: "Supervision Consultants",
    description:
      "Independent site inspection and quality assurance. Verify work quality, check compliance, and report directly to you.",
  },
];

const specialistServices = [
  "Feasibility studies", "Master planning", "BIM modelling", "Contract administration",
  "Value engineering", "Scheduling & planning", "Permit coordination", "MEP design",
  "Structural design", "Geotechnical studies", "Environmental assessment", "Interior design",
  "Landscape design", "Fit-out design", "Snagging & handover", "Due diligence",
];

export function ConsultantTypes_v3() {
  return (
    <section className="bg-white py-14 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-2xl md:text-[30px] font-bold mb-8">
          Types of Consultants
        </h2>

        {/* 4 clean cards — 2×2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainTypes.map((type) => (
            <div key={type.title} className="border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-3">
              <div className="w-6 h-[2.5px] bg-yellow" />
              <h3 className="text-navy text-sm font-bold leading-snug">{type.title}</h3>
              <p className="text-mid-grey text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Specialist services — clean inline list */}
        <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
          <p className="text-[11px] font-bold text-mid-grey uppercase tracking-widest mb-3">
            Specialist Services
          </p>
          <p className="text-sm text-mid-grey leading-relaxed">
            {specialistServices.join(" · ")}
          </p>
        </div>

      </div>
    </section>
  );
}
