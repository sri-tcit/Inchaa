import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Contractors",
    href: "/contractors/",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    description: "General contractors, MEP, renovation, and 30+ specialist trades for every project type.",
  },
  {
    title: "Consultants",
    href: "/consultants/",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    description: "Project management, quantity surveyors, and design consultants across the UAE.",
  },
  {
    title: "Engineers",
    href: "/engineers/",
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    description: "Structural, civil, MEP, and specialist engineers for residential and commercial projects.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-light-grey py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <h2 className="text-charcoal text-2xl md:text-3xl font-bold text-center mb-10">
          Find The Right Professional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative rounded-lg overflow-hidden border border-[#E5E7EB] bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.src}
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
