import Link from "next/link";
import { Building2, Cable, Home } from "lucide-react";
import { getSpecialistSlug } from "@/content/type-guides/contractors";

const primaryTypes = [
  {
    slug: "general-contractors",
    title: "General contractors",
    description:
      "Single contract for structure, MEP coordination, finishes, and handover — ideal for new builds and major projects.",
    img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=1200&h=900&fit=crop&q=85",
    icon: Building2,
    span: "featured" as const,
  },
  {
    slug: "mep-contractors",
    title: "MEP contractors",
    description:
      "Electrical, plumbing, drainage, AC, fire, and low-current — installed and commissioned to spec.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&q=85",
    icon: Cable,
    span: "default" as const,
  },
  {
    slug: "renovation-fit-out",
    title: "Renovation & fit-out",
    description:
      "Villas and apartments — kitchens, bathrooms, upgrades, and full remodelling without managing ten different crews.",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=600&fit=crop&q=85",
    icon: Home,
    span: "default" as const,
  },
];

const specialistTrades = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Painting",
  "Tiling",
  "Waterproofing",
  "False ceiling",
  "Aluminium & glass",
  "Flooring",
  "Carpentry",
  "Masonry",
  "Landscaping",
  "Swimming pool",
  "Fire safety",
  "Smart home",
  "Demolition",
];

function TypeCard({
  slug,
  title,
  description,
  img,
  icon: Icon,
  span,
}: (typeof primaryTypes)[number]) {
  const isFeatured = span === "featured";
  return (
    <Link
      href={`/contractors/types/${slug}/`}
      className={`group relative block overflow-hidden rounded-2xl border border-[#E5E7EB] bg-navy shadow-sm outline-none ring-navy transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isFeatured ? "min-h-[280px] lg:row-span-2 lg:min-h-0" : "min-h-[200px] lg:min-h-0"
      }`}
    >
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/20"
        aria-hidden
      />
      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3
          className={`font-bold leading-snug text-white ${isFeatured ? "text-xl md:text-2xl" : "text-lg"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-white/75 ${isFeatured ? "text-sm md:text-base max-w-md" : "text-sm"}`}
        >
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow" aria-hidden />
    </Link>
  );
}

export function ContractorTypes_v5() {
  const [general, ...rest] = primaryTypes;
  return (
    <section className="border-t border-[#E5E7EB] bg-light-grey/30 py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-mid-grey">
            Who you can hire
          </p>
          <h2 className="mt-2 text-navy text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
            Contractor types on Inchaa
          </h2>
          <p className="mt-4 text-mid-grey text-base leading-relaxed md:text-lg">
            Whether you need a full build partner or a focused trade, post your scope once and compare verified
            contractors across the UAE.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:auto-rows-fr lg:min-h-[500px]">
          <TypeCard {...general} />
          {rest.map((type) => (
            <TypeCard key={type.title} {...type} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
            <div>
              <h3 className="text-navy text-xl font-bold leading-tight md:text-2xl">Specialist trades</h3>
              <p className="mt-2 max-w-xl text-mid-grey text-sm leading-relaxed md:text-base">
                Inchaa also covers dozens of licensed trades. Your project details help us surface the right specialists
                — no more guessing who does waterproofing vs. tiling.
              </p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-yellow">30+ categories</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {specialistTrades.map((label) => (
              <Link
                key={label}
                href={`/contractors/types/${getSpecialistSlug(label)}/`}
                className="rounded-full border border-[#E5E7EB] bg-light-grey/40 px-3.5 py-1.5 text-sm text-charcoal transition-colors hover:border-navy/25 hover:bg-white hover:text-navy"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
