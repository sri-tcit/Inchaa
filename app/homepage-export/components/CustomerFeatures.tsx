"use client";

import { FeatureHighlight } from "./FeatureHighlight";
import { useLanguage } from "@/context/LanguageContext";

export function CustomerFeatures() {
    const { t } = useLanguage();
    const [b1, b2, b3] = t.homePage.customerFeatures.blocks;

    return (
        <section className="container bg-white mx-auto p-6 md:p-[40px] rounded-[20px] flex flex-col items-center gap-8 md:gap-[60px]">
            <FeatureHighlight
                imageSide="left"
                gradient="from-blue-tint to-light-grey"
                title={b1.title}
                description={b1.description}
                pointsTitle={b1.pointsTitle}
                points={b1.points}
                imagePath="/assets/professional.webp"
            />

            <FeatureHighlight
                imageSide="right"
                gradient="from-light-grey to-blue-tint"
                title={b2.title}
                description={b2.description}
                pointsTitle={b2.pointsTitle}
                points={b2.points}
                imagePath="/assets/request-compare.webp"
            />

            <FeatureHighlight
                imageSide="left"
                gradient="from-blue-tint/80 to-light-grey"
                title={b3.title}
                description={b3.description}
                pointsTitle={b3.pointsTitle}
                points={b3.points}
                imagePath="/assets/managing-project.webp"
            />
        </section>
    );
}
