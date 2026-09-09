import type { MetaFunction } from "react-router";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionCard } from "@/components/SolutionCard";
import { CTASection } from "@/components/CTASection";
import { solutions } from "@/data/solutions";

export const meta: MetaFunction = () => [
  { title: "Solutions — Nexadigify" },
  {
    name: "description",
    content:
      "Explore Nexadigify’s AI automation, custom AI, agentic AI, data analytics, and web development solutions.",
  },
];

export default function SolutionsIndex() {
  return (
    <>
      <Hero
        compact
        eyebrow="Solutions"
        titleLines={[
          ["Solutions built"],
          [{ text: "to move business.", highlight: true }],
        ]}
        description="Five disciplines, one connected team — from automation and agents to data and full-stack software."
        secondaryTo="/portfolio"
        secondaryLabel="View Our Work"
      />

      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore"
            title="Everything we"
            highlight="build."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <SolutionCard
                key={s.slug}
                slug={s.slug}
                title={s.title}
                description={s.shortDescription}
                icon={s.icon}
                svgIllustration={s.svgIllustration}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where"
        highlight="to start?"
        description="Tell us about your business and we'll recommend the right solution for your goals."
      />
    </>
  );
}
