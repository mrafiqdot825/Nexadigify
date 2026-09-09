import {
  Link,
  type LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
} from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseStudySection } from "@/components/CaseStudySection";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/CTASection";
import { IndustryTag } from "@/components/IndustryTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { getCaseStudy, portfolio, type CaseStudy } from "@/data/portfolio";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }
  const study = getCaseStudy(slug);
  if (!study) {
    throw new Response("Case Study Not Found", { status: 404 });
  }
  return { studySlug: study.slug };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const study = data ? getCaseStudy(data.studySlug) : undefined;
  if (!study) {
    return [{ title: "Case Study Not Found — Nexadigify" }];
  }
  return [
    { title: `${study.title} — Nexadigify` },
    { name: "description", content: study.description },
  ];
};

export default function PortfolioDetail() {
  const { studySlug } = useLoaderData<typeof loader>();
  const study = getCaseStudy(studySlug)!;

  const relatedProjects = portfolio
    .filter((p) => p.slug !== study.slug)
    .sort((a, b) => {
      const aMatch =
        a.category === study.category || a.industry === study.industry ? 1 : 0;
      const bMatch =
        b.category === study.category || b.industry === study.industry ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <AnimatedBackground variant="section" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#004696] transition-transform duration-200 hover:-translate-x-0.5"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <ScrollReveal delay={0.05} className="mt-8">
            <IndustryTag label={study.category} />
            <h1 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b1f33]">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#526575]">
              {study.description}
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.15}
            className="mt-10 grid grid-cols-2 gap-6 rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-6 sm:grid-cols-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#718391]">
                Client
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0b1f33]">
                {study.client}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#718391]">
                Industry
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0b1f33]">
                {study.industry}
              </p>
            </div>
            {study.results.slice(0, 2).map((r) => (
              <div key={r.label}>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#718391]">
                  {r.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1e8eab]">
                  {r.metric}
                </p>
              </div>
            ))}
          </ScrollReveal>

          {/* Featured Architecture & Blueprint Image */}
          {study.image && (
            <ScrollReveal
              delay={0.2}
              className="mt-10 overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-[#070912] shadow-[0_24px_54px_rgba(0,70,150,0.14)]"
            >
              <img
                src={study.image}
                alt={`${study.title} Architecture Blueprint`}
                className="h-auto w-full object-cover max-h-[460px]"
                loading="lazy"
              />
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="relative bg-white py-4">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <CaseStudySection eyebrow="The Problem" title="Challenge">
            <p>{study.challenge}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Our Method" title="Approach">
            <ul className="space-y-3">
              {study.approach.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e8eab]" />{" "}
                  {a}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection eyebrow="What We Built" title="Solution">
            <p>{study.solution}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Stack" title="Technology">
            <div className="flex flex-wrap gap-3">
              {study.technology.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-[rgba(0,70,150,0.14)] bg-[#f7fafc] px-4 py-2 text-sm font-semibold text-[#004696]"
                >
                  {t}
                </span>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection eyebrow="The Outcome" title="Results">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {study.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-[20px] border border-[rgba(0,70,150,0.1)] bg-[#f7fafc] p-6 text-center"
                >
                  <p className="text-3xl font-extrabold text-gradient-brand">
                    {r.metric}
                  </p>
                  <p className="mt-1 text-sm text-[#526575]">{r.label}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection eyebrow="Visual Gallery" title="Project Visuals">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {study.gallery.map((g, i) => (
                <div
                  key={g}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(0,70,150,0.1)] bg-[#070912]"
                >
                  <img
                    src={study.image}
                    alt={`${study.title} ${g}`}
                    className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070912] via-[#070912]/80 to-transparent p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white capitalize">
                      {g} Blueprint
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="relative bg-[#f7fafc] py-20 sm:py-24 border-t border-[rgba(0,70,150,0.08)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1e8eab]">
                More Case Studies
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b1f33] sm:text-4xl">
                Related <span className="text-gradient-brand">projects.</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#004696] hover:text-[#1e8eab] transition-colors"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p, i) => (
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
        title="Ready for results"
        highlight="like this?"
        description="Let's talk about what an intelligent system could look like for your business."
      />
    </>
  );
}
