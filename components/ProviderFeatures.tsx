"use client";

import { FeatureHighlight } from "@/components/FeatureHighlight";
import { JoinButton } from "@/components/join/JoinButton";

export function ProviderFeatures() {
  return (
    <>
      {/* Section header */}
      <section className="bg-[#F8F8F8] border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-mid-grey mb-4">For Service Providers</p>
            <h2 className="text-navy text-3xl md:text-[48px] font-bold leading-tight tracking-tight">
              Get discovered. Win more projects. Work smarter.
            </h2>
            <p className="mt-5 text-mid-grey text-lg leading-relaxed max-w-2xl">
              Inchaa connects your business with customers who are actively looking for verified contractors, engineers, and consultants across the UAE.
            </p>
            <div className="mt-8">
              <JoinButton size="md">Join as a professional</JoinButton>
            </div>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="bg-white border-t border-[#E5E7EB] py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <FeatureHighlight
            imageSide="right"
            gradient="from-blue-tint/60 to-light-grey"
            title="What service providers can do"
            description="Join a platform built for construction professionals. Create your verified profile, receive structured project leads, and grow your business without the noise."
            pointsTitle="What you can do"
            points={[
              "Get listed and discovered by customers actively searching for services",
              "Receive clear project requirements and quotation requests",
              "Submit quotations professionally and track responses",
              "Manage projects, status updates, and customer communication from one portal",
            ]}
            imagePath="/assets/analysis-laptop.webp"
          />
        </div>
      </section>
    </>
  );
}
