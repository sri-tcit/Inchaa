"use client";

import { FeatureHighlight } from "@/components/FeatureHighlight";

export function CustomerFeatures() {
    return (
        <section className="container bg-white mx-auto p-6 md:p-[40px] rounded-[20px] flex flex-col items-center gap-8 md:gap-[60px]">
            <FeatureHighlight
                imageSide="left"
                gradient="from-pink-100/50 to-purple-100/50"
                title="Find Verified Professionals"
                description="Discover trusted contractors, and consultants — all verified before being listed. Inchaa helps you find the right professionals based on real ratings and services offered."
                pointsTitle="What you can do"
                points={[
                    "Browse verified service providers by category",
                    "View ratings, reviews, and past performance",
                    "Filter by location, availability, and services",
                    "Shortlist professionals with confidence",
                    "Avoid unverified or unreliable providers"
                ]}
                imagePath="/assets/professional.webp"
            />

            <FeatureHighlight
                imageSide="right"
                gradient="from-blue-100/50 to-cyan-100/50"
                title="Request & Compare Quotations"
                description="Create a project, share your requirements, and request multiple quotations at once. Compare offers clearly before making the best decision."
                pointsTitle="What you can do"
                points={[
                    "Create projects with documents and instructions",
                    "Request quotes from multiple providers",
                    "Compare pricing, scope, and timelines side by side",
                    "Ask questions before accepting a quotation",
                    "Choose the best value, not just the lowest price"
                ]}
                imagePath="/assets/request-compare.webp"
            />

            <FeatureHighlight
                imageSide="left"
                gradient="from-orange-100/50 to-amber-100/50"
                title="Manage Project Documentation"
                description="Track every project from quotation to completion without scattered messages or paperwork. Inchaa keeps everything organized and accessible."
                pointsTitle="What you can do"
                points={[
                    "Track project status and progress updates",
                    "View all quotations and decisions in one dashboard",
                    "Access documents, notes, and communications",
                    "Keep full visibility across all your properties"
                ]}
                imagePath="/assets/managing-project.webp"
            />
        </section>
    );
}
