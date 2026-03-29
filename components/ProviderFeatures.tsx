"use client";

import { FeatureHighlight } from "@/components/FeatureHighlight";

export function ProviderFeatures() {
    return (
        <section className="container bg-white mx-auto p-6 md:p-10 rounded-2xl border border-[#E5E7EB] flex flex-col items-center gap-8 md:gap-14">
            <FeatureHighlight
                imageSide="right"
                gradient="from-blue-tint/60 to-light-grey"
                title="What service providers can do"
                description="Discover trusted contractors, and consultants — all verified before being listed. Inchaa helps you find the right professionals based on real ratings and services offered."
                pointsTitle="What you can do"
                points={[
                    "Get listed and discovered by customers actively searching for services",
                    "Receive clear project requirements and quotation requests",
                    "Submit quotations professionally and track responses",
                    "Manage projects, status updates, and customer communication from one portal",
                ]}
                imagePath="/assets/analysis-laptop.webp"
            />
        </section>
    );
}
