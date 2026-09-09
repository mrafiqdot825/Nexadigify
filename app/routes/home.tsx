import type { MetaFunction } from "react-router";
import {
  BrainCircuit,
  Bot,
  BarChart3,
  Code2,
  Workflow,
  Sparkles,
  Layers,
  Rocket,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { CapabilityPill } from "@/components/CapabilityPill";
import { CTASection } from "@/components/CTASection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedGlobe } from "@/components/AnimatedGlobe";
import { ScrollReveal } from "@/components/ScrollReveal";

export const meta: MetaFunction = () => [
  { title: "Nexadigify — AI & Intelligent Technology" },
  {
    name: "description",
    content:
      "We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value.",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Custom AI Development",
    description:
      "Purpose-built AI models engineered around your specific business problem.",
    icon: BrainCircuit,
    svgSrc: "/Images/ai-powered-applications.svg",
    to: "/solutions/custom-ai",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Intelligent automation that eliminates repetitive operational work end-to-end.",
    icon: Workflow,
    svgSrc: "/Images/ai-automation.svg",
    to: "/solutions/ai-automation",
  },
  {
    number: "03",
    title: "Agentic AI Systems",
    description:
      "Autonomous agents that reason, decide, and execute multi-step work.",
    icon: Bot,
    svgSrc: "/Images/agentic-ai.svg",
    to: "/solutions/agentic-ai",
  },
  {
    number: "04",
    title: "Data & Analytics",
    description:
      "Turn fragmented data into a single, decision-ready source of truth.",
    icon: BarChart3,
    svgSrc: "/Images/data-analytics.svg",
    to: "/solutions/data-analytics",
  },
  {
    number: "05",
    title: "Full-Stack Development",
    description: "Scalable web and mobile products engineered for growth.",
    icon: Code2,
    svgSrc: "/Images/full-stack-development.svg",
    to: "/solutions/web-app-development",
  },
  {
    number: "06",
    title: "AI-Powered Applications",
    description:
      "Products with intelligence built into the architecture, not bolted on.",
    icon: Sparkles,
    svgSrc: "/Images/ai-powered-applications.svg",
    to: "/solutions/custom-ai",
  },
];

const CAPABILITIES = [
  "AI Automation",
  "Machine Learning",
  "AI Agents",
  "LLM Integration",
  "Computer Vision",
  "Data Pipelines",
  "Predictive Analytics",
  "LangChain",
  "Generative AI",
  "Intelligent Workflows",
];

const WHY_US = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "From infrastructure to interface, we engineer every layer of your product ourselves.",
    icon: Layers,
    svgSrc: "/Images/full-stack-development.svg",
  },
  {
    number: "02",
    title: "AI At The Core",
    description:
      "Intelligence isn’t a feature we add later — it’s architected in from the very first line of code.",
    icon: BrainCircuit,
    svgSrc: "/Images/ai-at-the-core.svg",
  },
  {
    number: "03",
    title: "Growth Ready",
    description:
      "Every system we build is designed to scale with your business, not against it.",
    icon: Rocket,
    svgSrc: "/Images/growth-ready.svg",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="AI & Intelligent Systems"
        titleLines={[
          ["From Data"],
          [
            { text: "To", highlight: false },
            { text: "Intelligence.", highlight: true },
          ],
        ]}
        description="We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value."
      />

      {/* What We Do */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Six disciplines,"
            highlight="one intelligent system."
            description="We combine AI, data, and software engineering into a single team that ships end-to-end — not a patchwork of specialists."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* AI First */}
      <section className="relative overflow-hidden bg-[#f7fafc] py-24 sm:py-32">
        <AnimatedBackground variant="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Our Philosophy"
            title="Intelligence isn't an add-on."
            highlight="It's the architecture."
            description="Every system we ship is designed with intelligence as a first-class citizen — not a feature bolted on after launch."
            className="mx-auto"
          />
          <ScrollReveal
            delay={0.1}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {CAPABILITIES.map((c) => (
              <CapabilityPill key={c} label={c} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Why Us"
            title="Built For"
            highlight="The Future."
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY_US.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="relative overflow-hidden bg-[#0b1f33]/[0.02] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <SectionHeader
            eyebrow="Global Reach"
            title="Deployed across"
            highlight="every time zone."
            description="Our systems run for clients across industries and continents — built once, engineered to operate reliably anywhere in the world."
          />
          <ScrollReveal delay={0.15}>
            <AnimatedGlobe />
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to build"
        highlight="something intelligent?"
        description="Tell us about your goals — we'll show you exactly how AI and automation can move your business forward."
      />
    </>
  );
}
