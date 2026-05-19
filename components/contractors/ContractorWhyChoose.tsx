import { Activity, CheckCircle, AlignLeft, Home, Crosshair } from "lucide-react";
import { PostProjectButton } from "@/components/shared/PostProjectModal";

const features = [
  {
    icon: Activity,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    title: "Competing quotes",
    description: "Get 3–5 detailed proposals per project. Compare pricing, scope, and credentials side by side.",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    title: "Verified contractors",
    description: "Trade licence, credentials, and past work reviewed before they can receive any inquiry.",
  },
  {
    icon: AlignLeft,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    title: "One dashboard",
    description: "Quotes, documents, messages, and project tracking — all in one place.",
  },
  {
    icon: Home,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    title: "Built for construction",
    description: "Purpose-built for villas, MEP, renovation, fit-outs, and 30+ specialist trades.",
  },
  {
    icon: Crosshair,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    title: "Free for homeowners",
    description: "Post projects, receive quotes, and compare contractors at zero cost.",
  },
];

export function ContractorWhyChoose() {
  return (
    <section className="bg-bg-section-2 py-16 md:py-20 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[42px] font-bold leading-tight">
          Why homeowners choose Inchaa
        </h2>
        <p className="mt-3 text-text-muted text-base leading-relaxed">
          Everything you need to hire the right contractor — without the guesswork.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-bg-card rounded-2xl p-6 border border-ui-border">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.iconBg}`}>
                <f.icon className={`w-5 h-5 ${f.iconColor}`} />
              </div>
              <h3 className="mt-5 text-text-heading text-lg font-bold leading-snug">{f.title}</h3>
              <p className="mt-2 text-text-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}

          {/* CTA cell */}
          <PostProjectButton
            campaign="contractors_lp_why"
            variant="unstyled"
            className="bg-bg-card rounded-2xl p-6 border border-ui-border flex items-center justify-center text-yellow font-semibold text-base hover:bg-bg-section transition-colors duration-150 cursor-pointer"
          >
            Post your project →
          </PostProjectButton>
        </div>

      </div>
    </section>
  );
}
