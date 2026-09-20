import { useState } from "react";
import type { MetaFunction } from "react-router";
import {
  MapPin,
  Clock,
  ChevronDown,
  Sparkles,
  Zap,
  Globe2,
  HeartHandshake,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  ScrollReveal,
  ScrollRevealStagger,
  ScrollRevealItem,
} from "@/components/ScrollReveal";
import { jobOpenings } from "@/data/careers";

export const meta: MetaFunction = () => [
  { title: "Careers — Nexadigify" },
  {
    name: "description",
    content:
      "Join Nexadigify and help build production-grade intelligent systems, autonomous agents, and enterprise AI platforms.",
  },
];

const PERKS = [
  {
    icon: Sparkles,
    title: "AI-First Culture",
    description:
      "Work with cutting-edge foundation models, modern agentic frameworks, and state-of-the-art tools every single day.",
  },
  {
    icon: Globe2,
    title: "Flexible Remote / Hybrid",
    description:
      "Work from wherever you do your best work with flexible scheduling and asynchronous collaboration.",
  },
  {
    icon: Zap,
    title: "High-Impact Engineering",
    description:
      "Ship systems that directly solve mission-critical operational challenges for real enterprise clients.",
  },
  {
    icon: HeartHandshake,
    title: "Growth & Learning",
    description:
      "Generous conference, learning, and hardware stipends to support your continuous growth.",
  },
];

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const departments = [
    "All",
    ...Array.from(new Set(jobOpenings.map((j) => j.department))),
  ];

  const filteredJobs =
    selectedDept === "All"
      ? jobOpenings
      : jobOpenings.filter((j) => j.department === selectedDept);

  return (
    <>
      <Hero
        compact
        eyebrow="Careers"
        titleLines={[
          ["Build the future of"],
          [{ text: "intelligence.", highlight: true }],
        ]}
        description="We're a team of engineers, data scientists, and designers passionate about engineering systems that genuinely think and deliver value."
        primaryLabel="View Open Roles"
        primaryTo="#openings"
        secondaryLabel="Why Join Us"
        secondaryTo="#why-us"
      />

      {/* Perks / Why Join */}
      <section
        id="why-us"
        className="relative bg-white py-14 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Why Nexadigify"
            title="Engineered for people who"
            highlight="love building."
            className="mx-auto"
          />
          <ScrollRevealStagger className="mt-10 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <ScrollRevealItem key={p.title}>
                <div className="h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.35)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f8fa] text-[#004696]">
                    <p.icon size={22} />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold text-[#0b1f33]">
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

      {/* Job Openings */}
      <section
        id="openings"
        className="relative overflow-hidden bg-[#f7fafc] py-14 sm:py-20 lg:py-28"
      >
        <AnimatedBackground variant="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open Roles"
            title="Find your"
            highlight="next mission."
            description="Explore our current open positions. Don't see an exact match? Apply below through our general talent network."
          />

          {/* Department Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedDept === dept
                    ? "bg-[#004696] text-white shadow-sm"
                    : "border border-[rgba(0,70,150,0.16)] bg-white text-[#526575] hover:bg-[#f3f8fa] hover:text-[#004696]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="mt-8 sm:mt-10 space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className="overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white transition-all duration-300 hover:border-[rgba(30,142,171,0.35)] hover:shadow-md"
                >
                  <div
                    onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                    className="flex cursor-pointer flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-7 select-none"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="rounded-full bg-[#f3f8fa] px-3 py-1 text-xs font-semibold text-[#004696]">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-[#718391]">
                          <MapPin size={12} /> {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-[#718391]">
                          <Clock size={12} /> {job.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0b1f33]">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#526575]">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href="#apply"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-[#004696] px-5 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#1e8eab]"
                      >
                        Apply
                      </a>
                      <button
                        aria-label="Toggle details"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#004696]"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-[rgba(0,70,150,0.08)] bg-[#fcfdfe] p-5 sm:p-7">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-[#004696]">
                            Responsibilities
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm text-[#526575]">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e8eab]" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-[#004696]">
                            Requirements
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm text-[#526575]">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#004696]" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="relative bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Apply Now"
            title="Join the"
            highlight="team."
            description="Submit your application directly or tell us about your skills — we review all submissions with care."
            className="mx-auto"
          />
          <div className="mt-10 sm:mt-12">
            <ContactForm variant="careers" />
          </div>
        </div>
      </section>
    </>
  );
}
