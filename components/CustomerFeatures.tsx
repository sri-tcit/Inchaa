"use client";

import Link from "next/link";
import { FeatureHighlight } from "@/components/FeatureHighlight";

const APP_URL = "https://inchaa.com/app?utm_source=website&utm_medium=cta&utm_campaign=homepage_customers";

export function CustomerFeatures() {
  return (
    <>
      {/* Section header */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-4">For Customers</p>
            <h2 className="text-navy text-3xl md:text-[48px] font-bold leading-tight tracking-tight">
              Plan smarter. Compare better. Build with confidence.
            </h2>
            <p className="mt-5 text-mid-grey text-lg leading-relaxed max-w-2xl">
              The Inchaa customer app removes guesswork from construction decisions. Find the right professionals, track quotations, and manage project details in one flow.
            </p>
            <div className="mt-8">
              <Link
                href={APP_URL}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-yellow text-white text-sm font-bold hover:brightness-95 transition-all duration-150"
              >
                Get the app
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <FeatureHighlight
            imageSide="left"
            gradient="from-blue-tint/60 to-light-grey"
            title="Find Verified Professionals"
            description="Discover trusted contractors, engineers, and consultants — all verified before being listed. Find the right professionals based on real ratings and services offered."
            pointsTitle="What you can do"
            points={[
              "Browse verified service providers by category",
              "View ratings, reviews, and past performance",
              "Filter by location, availability, and services",
              "Shortlist professionals with confidence",
              "Avoid unverified or unreliable providers",
            ]}
            imagePath="/assets/professional.webp"
          />
        </div>
      </section>

      {/* Feature 2 */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <FeatureHighlight
            imageSide="right"
            gradient="from-light-grey to-blue-tint/50"
            title="Request & Compare Quotations"
            description="Create a project, share your requirements, and request multiple quotations at once. Compare offers clearly before making the best decision."
            pointsTitle="What you can do"
            points={[
              "Create projects with documents and instructions",
              "Request quotes from multiple providers",
              "Compare pricing, scope, and timelines side by side",
              "Ask questions before accepting a quotation",
              "Choose the best value, not just the lowest price",
            ]}
            imagePath="/assets/request-compare.webp"
          />
        </div>
      </section>

      {/* Feature 3 */}
      <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <FeatureHighlight
            imageSide="left"
            gradient="from-orange-light/30 to-light-grey"
            title="Manage Project Documentation"
            description="Track every project from quotation to completion without scattered messages or paperwork. Inchaa keeps everything organized and accessible."
            pointsTitle="What you can do"
            points={[
              "Track project status and progress updates",
              "View all quotations and decisions in one dashboard",
              "Access documents, notes, and communications",
              "Keep full visibility across all your properties",
            ]}
            imagePath="/assets/managing-project.webp"
          />
        </div>
      </section>
    </>
  );
}
