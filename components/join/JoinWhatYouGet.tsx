import { JoinButton } from "./JoinButton";

const benefits = [
  {
    title: "Inbound project leads",
    description:
      "Homeowners post projects with detailed requirements: property type, location, area, scope of work, and budget. You receive notifications for projects that match your services and location. No more cold calling or begging for referrals.",
  },
  {
    title: "Professional profile",
    description:
      "Your Inchaa profile showcases your trade license, business credentials, past project experience, and client ratings. It is your digital storefront – visible to every homeowner and developer searching for your services.",
  },
  {
    title: "You choose",
    description:
      "You are never obligated to quote on every lead. Review the project details, assess the fit, and submit a quotation only when the project matches your capacity and expertise.",
  },
  {
    title: "One dashboard",
    description:
      "Manage all your project inquiries, submitted quotations, and client communication from one place. No more scattered WhatsApp threads.",
  },
  {
    title: "Complimentary access during launch",
    description:
      "Creating your profile, completing verification, and receiving project inquiries is currently free during our launch phase. Early professionals benefit from full access as the platform grows.",
  },
];

export function JoinWhatYouGet() {
  return (
    <section className="bg-bg-base py-16 md:py-24 border-t border-ui-border">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        <h2 className="text-text-heading text-3xl md:text-[40px] font-bold leading-tight mb-12">
          What You Get on Inchaa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-bg-section border border-ui-border rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-yellow/10 flex items-center justify-center shrink-0">
                <span className="text-yellow text-sm font-bold">{i + 1}</span>
              </div>
              <h3 className="text-text-heading text-base font-semibold">{benefit.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <JoinButton size="sm" />
        </div>
      </div>
    </section>
  );
}
