import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeEn } from "@/content/home/en";

const { services } = homeEn;

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="text-navy text-2xl md:text-[32px] font-bold leading-tight">
            {services.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.items.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group block border border-[#E5E7EB] rounded-lg overflow-hidden bg-white"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-150" />
              </div>
              <div className="p-6 border-t border-[#E5E7EB]">
                <div className="flex items-center justify-between">
                  <h3 className="text-navy text-base font-bold">{s.title}</h3>
                  <ArrowRight className="w-4 h-4 text-mid-grey group-hover:text-navy transition-colors duration-150" />
                </div>
                <p className="mt-2 text-mid-grey text-sm leading-relaxed">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
