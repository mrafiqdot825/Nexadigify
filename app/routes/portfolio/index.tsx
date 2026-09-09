import type { MetaFunction } from "react-router";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { portfolio } from "@/data/portfolio";

export const meta: MetaFunction = () => [
  { title: "Portfolio — Nexadigify" },
  {
    name: "description",
    content:
      "Explore case studies of AI systems, automation platforms, and data products Nexadigify has built for enterprise clients.",
  },
];

export default function PortfolioIndex() {
  return (
    <>
      <Hero
        compact
        eyebrow="Portfolio"
        titleLines={[
          ["Work that"],
          [{ text: "moves the needle.", highlight: true }],
        ]}
        description="A selection of AI systems, automation platforms, and data products we've engineered for enterprise clients."
        primaryTo="/contact"
        secondaryTo="/solutions"
      />

      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            title="Selected"
            highlight="projects."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <PortfolioCard
                key={p.slug}
                slug={p.slug}
                category={p.category}
                title={p.title}
                description={p.description}
                image={p.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want results"
        highlight="like these?"
        description="Let's talk about what an intelligent system could look like for your business."
      />
    </>
  );
}
