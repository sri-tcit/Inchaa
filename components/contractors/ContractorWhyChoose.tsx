import { Activity, CheckCircle, AlignLeft, Home, Crosshair } from "lucide-react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const features = [
  {
    icon: Activity,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "Competing quotes",
    description: "Get 3–5 detailed proposals per project. Compare pricing, scope, and credentials side by side.",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    title: "Verified contractors",
    description: "Trade licence, credentials, and past work reviewed before they can receive any inquiry.",
  },
  {
    icon: AlignLeft,
    iconBg: "bg-[#F5EFE0]",
    iconColor: "text-[#A0845C]",
    title: "One dashboard",
    description: "Quotes, documents, messages, and project tracking — all in one place.",
  },
  {
    icon: Home,
    iconBg: "bg-red-100",
    iconColor: "text-red-400",
    title: "Built for construction",
    description: "Purpose-built for villas, MEP, renovation, fit-outs, and 30+ specialist trades.",
  },
  {
    icon: Crosshair,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-400",
    title: "Free for homeowners",
    description: "Post projects, receive quotes, and compare contractors at zero cost.",
  },
];

export function ContractorWhyChoose() {
  return (
    <section className="bg-[#F4F4F2] py-16 md:py-20 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-navy text-3xl md:text-[42px] font-bold leading-tight">
          Why homeowners choose Inchaa
        </h2>
        <p className="mt-3 text-mid-grey text-base leading-relaxed">
          Everything you need to hire the right contractor — without the guesswork.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.iconBg}`}>
                <f.icon className={`w-5 h-5 ${f.iconColor}`} />
              </div>
              <h3 className="mt-5 text-navy text-lg font-bold leading-snug">{f.title}</h3>
              <p className="mt-2 text-mid-grey text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}

          {/* CTA cell */}
          <PostProjectButton
            campaign="contractors_lp_why"
            variant="unstyled"
            className="bg-white rounded-2xl p-6 border border-[#E5E7EB] flex items-center justify-center text-yellow font-semibold text-base hover:bg-[#F4F4F2] transition-colors duration-150 cursor-pointer"
          >
            Post your project →
          </PostProjectButton>
        </div>

      </div>
    </section>
  );
}
