import {
  Link,
  type LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
} from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CapabilityPill } from "@/components/CapabilityPill";
import { CTASection } from "@/components/CTASection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  ScrollReveal,
  ScrollRevealStagger,
  ScrollRevealItem,
} from "@/components/ScrollReveal";
import { getSolution, solutions, type Solution } from "@/data/solutions";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }
  const solution = getSolution(slug);
  if (!solution) {
    throw new Response("Solution Not Found", { status: 404 });
  }
  return { solutionSlug: solution.slug };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const solution = data ? getSolution(data.solutionSlug) : undefined;
  if (!solution) {
    return [{ title: "Solution Not Found — Nexadigify" }];
  }
  return [
    { title: `${solution.title} — Nexadigify` },
    { name: "description", content: solution.heroSub },
  ];
};

export default function SolutionDetail() {
  const { solutionSlug } = useLoaderData<typeof loader>();
  const solution = getSolution(solutionSlug)!;
  const Icon = solution.icon;
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <Hero
        compact
        eyebrow={solution.navTitle}
        titleLines={[
          [solution.heroHeadline.split(" ").slice(0, -2).join(" ")],
          [
            {
              text: solution.heroHeadline.split(" ").slice(-2).join(" "),
              highlight: true,
            },
          ],
        ]}
        description={solution.heroSub}
      />

      {/* Capabilities */}
      <section className="relative bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="What this"
            highlight="includes."
          />
          <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            {solution.capabilities.map((c) => (
              <CapabilityPill key={c} label={c} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* System Architecture Visualization */}
      <section className="relative overflow-hidden bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="overflow-hidden rounded-[28px] border border-[rgba(0,70,150,0.12)] bg-[#070912] shadow-[0_24px_54px_rgba(0,70,150,0.14)]">
            <img
              src={solution.svgIllustration}
              alt={`${solution.title} Architecture Blueprint`}
              className="h-auto w-full object-cover max-h-[480px]"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-[#f7fafc] py-20 sm:py-28">
        <AnimatedBackground variant="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="How we"
            highlight="get there."
          />
          <ScrollRevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solution.process.map((p) => (
              <ScrollRevealItem key={p.step}>
                <div className="h-full rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-7">
                  <span className="text-4xl font-extrabold text-[rgba(0,70,150,0.15)]">
                    {p.step}
                  </span>
                  <h3 className="mt-4 mb-2 text-lg font-bold text-[#0b1f33]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#526575]">
                    {p.description}
                  </p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <SectionHeader
              eyebrow="Benefits"
              title="Why it"
              highlight="matters."
            />
            <ScrollRevealStagger className="space-y-6">
              {solution.benefits.map((b) => (
                <ScrollRevealItem key={b.title}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-[#1e8eab]"
                    />
                    <div>
                      <h3 className="font-bold text-[#0b1f33]">{b.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#526575]">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </ScrollRevealStagger>
          </div>
        </div>
      </section>

      {/* Use Cases + Stack */}
      <section className="relative bg-[#f3f8fa] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004696] to-[#1e8eab] text-white">
              <Icon size={26} />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-[#0b1f33]">
              Use Cases
            </h3>
            <ul className="mt-5 space-y-3">
              {solution.useCases.map((u) => (
                <li key={u} className="flex items-center gap-3 text-[#526575]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1e8eab]" /> {u}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="text-2xl font-bold text-[#0b1f33]">
              Technology Stack
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {solution.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-[rgba(0,70,150,0.14)] bg-white px-4 py-2 text-sm font-semibold text-[#004696]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore More"
            title="Related"
            highlight="solutions."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => {
              const RIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="group rounded-[20px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]"
                >
                  <RIcon size={22} className="text-[#004696]" />
                  <h4 className="mt-4 font-bold text-[#0b1f33]">
                    {s.navTitle}
                  </h4>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1e8eab]">
                    Learn more{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's bring"
        highlight={`${solution.navTitle.toLowerCase()} to your business.`}
        description="Tell us about your goals and we'll map out exactly how this solution fits your operations."
      />
    </>
  );
}
