import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { services } = homeEn;

export function ServicesGrid() {
  return (
    <section id="services" className="bg-light-grey py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-charcoal text-2xl md:text-3xl font-bold text-center mb-10">
          {services.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.items.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-lg overflow-hidden border border-[#E5E7EB] bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-150"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-charcoal text-base font-semibold">{s.title}</h3>
                  <ArrowRight className="w-4 h-4 text-mid-grey group-hover:text-charcoal transition-colors duration-150" />
                </div>
                <p className="mt-1.5 text-mid-grey text-sm leading-relaxed">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
