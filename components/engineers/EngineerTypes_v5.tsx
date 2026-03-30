import Link from "next/link";
import { Cable, ClipboardCheck, DraftingCompass, Layers, MapPinned } from "lucide-react";

const mainTypes = [
  {
    slug: "structural-engineers",
    title: "Structural engineers",
    description:
      "Foundations, columns, beams, slabs, and load-bearing design — for new builds and structural modifications.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=900&fit=crop&q=85",
    icon: DraftingCompass,
    featured: true as const,
  },
  {
    slug: "mep-engineers",
    title: "MEP engineers",
    description: "HVAC, electrical distribution, plumbing, fire systems, and BMS for homes and commercial space.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&q=85",
    icon: Cable,
    featured: false as const,
  },
  {
    slug: "civil-engineers",
    title: "Civil engineers",
    description: "Site works, grading, drainage, and external infrastructure outside the building envelope.",
    img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=900&h=600&fit=crop&q=85",
    icon: MapPinned,
    featured: false as const,
  },
  {
    slug: "supervision-engineers",
    title: "Supervision engineers",
    description: "On-site quality control so execution matches approved drawings, specs, and regulations.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop&q=85",
    icon: ClipboardCheck,
    featured: false as const,
  },
  {
    slug: "geotechnical-engineers",
    title: "Geotechnical engineers",
    description: "Soil investigation and foundation recommendations — often required before structural design in the UAE.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&h=600&fit=crop&q=85",
    icon: Layers,
    featured: false as const,
  },
] as const;

function TypeCard({
  slug,
  title,
  description,
  img,
  icon: Icon,
  featured,
}: (typeof mainTypes)[number]) {
  return (
    <Link
      href={`/engineers/types/${slug}/`}
      className={`group relative block min-h-[200px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-navy shadow-sm outline-none ring-navy transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 lg:h-full lg:min-h-0 ${
        featured ? "min-h-[280px]" : ""
      }`}
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
        <h3
          className={`font-bold leading-snug text-white ${featured ? "text-xl md:text-2xl" : "text-lg"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-white/75 ${featured ? "max-w-md text-sm md:text-base" : "text-sm"}`}
        >
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow" aria-hidden />
    </Link>
  );
}

export function EngineerTypes_v5() {
  const [featured, ...rest] = mainTypes;
  return (
    <section className="border-t border-[#E5E7EB] bg-light-grey/30 py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-mid-grey">Disciplines</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-navy md:text-[40px]">
            Engineer types on Inchaa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mid-grey md:text-lg">
            From structure and MEP to site works and soil reports — post your scope once and compare proposals from
            verified engineers across the UAE.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 lg:min-h-[520px] lg:flex-row lg:gap-4">
          <div className="lg:min-h-0 lg:w-[min(52%,520px)] lg:flex-shrink-0 lg:flex lg:flex-col">
            <TypeCard {...featured} />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
            {rest.map((type) => (
              <TypeCard key={type.slug} {...type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
