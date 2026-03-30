"use client";

import { FeatureHighlight } from "./FeatureHighlight";
import { useLanguage } from "@/context/LanguageContext";

export function ProviderFeatures() {
    const { t } = useLanguage();
    const p = t.homePage.providerFeatures;

    return (
        <section className="container bg-white mx-auto p-6 md:p-[40px] rounded-[20px] flex flex-col items-center gap-8 md:gap-[60px]">
            <FeatureHighlight
                imageSide="right"
                gradient="from-blue-tint to-light-grey"
                title={p.title}
                description={p.description}
                pointsTitle={p.pointsTitle}
                points={p.points}
                imagePath="/assets/analysis-laptop.webp"
            />
        </section>
    );
}
