import type { MetaFunction } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { jobOpenings } from "@/data/careers";

export const meta: MetaFunction = () => [
  { title: "Careers — Nexadigify" },
  {
    name: "description",
    content:
      "Join Nexadigify and help build intelligent AI systems for enterprise clients. Explore open roles and apply today.",
  },
];

export default function Careers() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <Hero
        compact
        eyebrow="Careers"
        titleLines={[
          ["Build What"],
          [{ text: "Comes Next.", highlight: true }],
        ]}
        description="Join a team of engineers, data scientists, and designers building the intelligent systems enterprise companies run on."
        primaryTo="#openings"
        primaryLabel="View Openings"
        secondaryTo="/about"
        secondaryLabel="About Us"
      />

      <section id="openings" className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open Positions"
            title="Current"
            highlight="openings."
          />
          <div className="mt-12 space-y-4">
            {jobOpenings.map((job) => {
              const isOpen = expanded === job.id;
              return (
                <ScrollReveal key={job.id}>
                  <div className="overflow-hidden rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white transition-colors duration-300 hover:border-[rgba(30,142,171,0.35)]">
                    <button
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setExpanded(isOpen ? null : job.id)}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <h3 className="text-lg font-bold text-[#0b1f33]">
                          {job.title}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs font-medium text-[#718391]">
                          <span className="inline-flex items-center gap-1">
                            <Briefcase size={13} /> {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={13} /> {job.location}
                          </span>
                          <span className="rounded-full bg-[#f3f8fa] px-2.5 py-0.5 text-[#1e8eab]">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#004696] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1] as const,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[rgba(0,70,150,0.08)] px-6 py-6">
                            <p className="text-[15px] leading-relaxed text-[#526575]">
                              {job.description}
                            </p>
                            <div className="mt-5 grid gap-6 sm:grid-cols-2">
                              <div>
                                <h4 className="mb-2 text-sm font-bold text-[#0b1f33]">
                                  Responsibilities
                                </h4>
                                <ul className="space-y-2 text-sm text-[#526575]">
                                  {job.responsibilities.map((r) => (
                                    <li key={r} className="flex gap-2">
                                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1e8eab]" />{" "}
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="mb-2 text-sm font-bold text-[#0b1f33]">
                                  Requirements
                                </h4>
                                <ul className="space-y-2 text-sm text-[#526575]">
                                  {job.requirements.map((r) => (
                                    <li key={r} className="flex gap-2">
                                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1e8eab]" />{" "}
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <a
                              href="#apply"
                              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#004696] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e8eab]"
                            >
                              Apply for this role
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="apply" className="relative bg-[#f7fafc] py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Apply"
            title="Tell us about"
            highlight="yourself."
            align="center"
            className="mx-auto"
          />
          <ScrollReveal delay={0.1} className="mt-10">
            <ContactForm variant="careers" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
