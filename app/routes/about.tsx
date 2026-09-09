import type { MetaFunction } from "react-router";
import { Target, Lightbulb, Compass, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  ScrollReveal,
  ScrollRevealStagger,
  ScrollRevealItem,
} from "@/components/ScrollReveal";
import { BackgroundParticles } from "@/components/BackgroundParticles";

export const meta: MetaFunction = () => [
  { title: "About — Nexadigify" },
  {
    name: "description",
    content:
      "Learn who Nexadigify is, how we think, and why enterprise clients choose us to build their intelligent systems.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start by learning your business, your data, and the real problem behind the request.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We architect a solution that fits your constraints, not a generic template.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We engineer production-grade systems, tested and documented from day one.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "We launch carefully, with monitoring and rollback plans in place.",
  },
  {
    step: "05",
    title: "Optimize",
    description: "We keep refining performance and value long after launch.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Target,
    title: "Outcome Focused",
    description:
      "We measure success in business impact, not lines of code shipped.",
  },
  {
    icon: Lightbulb,
    title: "Deep Technical Craft",
    description:
      "Every system is engineered by senior practitioners, not templated out.",
  },
  {
    icon: Compass,
    title: "Clear Communication",
    description: "You always know what we’re building, why, and what’s next.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description: "We build relationships that outlast a single project.",
  },
];

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Nexadigify"
        titleLines={[
          ["We build the"],
          [{ text: "intelligence layer.", highlight: true }],
        ]}
        description="Nexadigify is a technology partner for companies who want AI and automation embedded into how they actually operate — not a slide deck."
        secondaryTo="/careers"
        secondaryLabel="Join Our Team"
      />

      {/* Who We Are */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <BackgroundParticles count={10} className="opacity-60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Who We Are"
            title="A team built around"
            highlight="intelligent systems."
            align="center"
            className="mx-auto"
          />
          <ScrollReveal
            delay={0.1}
            className="mt-8 text-center text-lg leading-relaxed text-[#526575]"
          >
            We are engineers, data scientists, and product designers who believe
            the next generation of software is defined by how intelligently it
            operates — not just how it looks. We partner with enterprise teams
            to design and build systems that automate operations, transform data
            into insight, and create measurable business value.
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-[#f7fafc] py-20 sm:py-28">
        <AnimatedBackground variant="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <SectionHeader
              eyebrow="Our Philosophy"
              title="Intelligence should feel"
              highlight="invisible."
              description="The best AI systems don't announce themselves — they simply make the work faster, the decisions clearer, and the outcomes better. That's the standard we build to."
            />
            <SectionHeader
              eyebrow="How We Think"
              title="Software is a means,"
              highlight="not the end."
              description="We never build technology for its own sake. Every system starts from a business outcome and works backward into the right architecture, models, and interface."
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Approach"
            title="How a project"
            highlight="comes to life."
          />
          <ScrollRevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a) => (
              <ScrollRevealItem key={a.step}>
                <div className="h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.35)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]">
                  <span className="text-3xl font-extrabold text-[rgba(0,70,150,0.16)]">
                    {a.step}
                  </span>
                  <h3 className="mt-4 mb-2 font-bold text-[#0b1f33]">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#526575]">
                    {a.description}
                  </p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="relative bg-[#f3f8fa] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Clients Choose Us"
            title="What sets us"
            highlight="apart."
            align="center"
            className="mx-auto"
          />
          <ScrollRevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <ScrollRevealItem key={w.title}>
                <div className="h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f8fa] text-[#004696]">
                    <w.icon size={22} />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold text-[#0b1f33]">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#526575]">
                    {w.description}
                  </p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      <CTASection title="Let's build" highlight="something intelligent." />
    </>
  );
}
