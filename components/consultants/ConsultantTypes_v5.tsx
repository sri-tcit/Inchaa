import Link from "next/link";
import { Calculator, ClipboardCheck, FolderKanban, Palette } from "lucide-react";

const mainTypes = [
  {
    slug: "quantity-surveyors",
    title: "Quantity surveyors",
    description:
      "Cost plans, bills of quantities, tender analysis, and cost control from first budget through delivery.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop&q=85",
    icon: Calculator,
  },
  {
    slug: "project-management-consultants",
    title: "Project management consultants",
    description: "Programme, budget, and interfaces — coordinating design teams and contractors on your behalf.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&q=85",
    icon: FolderKanban,
  },
  {
    slug: "design-consultants",
    title: "Design consultants",
    description: "Architecture, interiors, and landscape — from concept to coordinated construction drawings.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop&q=85",
    icon: Palette,
  },
  {
    slug: "supervision-consultants",
    title: "Supervision consultants",
    description: "Independent site inspection and quality assurance — reporting to you, not the contractor.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&q=85",
    icon: ClipboardCheck,
  },
] as const;

function TypeCard({ type }: { type: (typeof mainTypes)[number] }) {
  const { slug, title, description, img, icon: Icon } = type;
  return (
    <Link
      href={`/consultants/types/${slug}/`}
      className="group relative block h-full min-h-[220px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-navy shadow-sm outline-none ring-navy transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 md:min-h-[240px] lg:min-h-0"
    >
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/20" aria-hidden />
      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="text-lg font-bold leading-snug text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow" aria-hidden />
    </Link>
  );
}

export function ConsultantTypes_v5() {
  return (
    <section className="border-t border-[#E5E7EB] bg-light-grey/30 py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-mid-grey">Disciplines</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-navy md:text-[40px]">
            Consultant types on Inchaa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mid-grey md:text-lg">
            Cost, design, delivery, and independent supervision — post your scope once and compare proposals from
            verified consultants across the UAE.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:min-h-[460px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
          {mainTypes.map((type) => (
            <TypeCard key={type.slug} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
}
