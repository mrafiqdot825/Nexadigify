import { useState } from "react";

export function AboutSection() {
  const [activeTenet, setActiveTenet] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const tenets = [
    {
      num: "01",
      title: "Zero-Debt Architecture",
      desc: "Every system we construct utilizes decoupled, modular boundaries. We architect for future maintainability, ensuring that software iterations scale independently of underlying compute providers.",
      metric: "Modular SLA guarantee",
    },
    {
      num: "02",
      title: "Empirical Benchmarks",
      desc: "We reject vanity velocity metrics. Transformation progress is evaluated against hard telemetry: p99 latency reduction, egress bandwidth efficiency, automated recovery speeds, and tangible cloud unit economics.",
      metric: "Deterministic hard telemetry",
    },
    {
      num: "03",
      title: "Sovereign Security",
      desc: "Data sovereignty is non-negotiable. We integrate zero-trust cryptographic verification into the foundational runtime, isolating your high-value enterprise payloads from external dependencies.",
      metric: "Cryptographic runtime isolation",
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-surface-container-lowest py-space-3xl border-t border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-[2px] bg-secondary"></span>
              <span className="font-label-nav text-label-nav text-secondary font-semibold uppercase tracking-wide">
                The Operating Model
              </span>
            </div>

            <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight">
              The Engineering Standard: No Consulting Fluff.
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Most transformation initiatives stall because traditional
              consulting firms deploy junior generalists armed with slide decks.
              NexaDigify operates under an uncompromising principle: senior
              principal engineers embedded directly within your executive
              engineering teams.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We write production code from week one. We diagnose bottlenecks at
              the kernel, compiler, and distributed topology layers. The result
              is total structural certainty and accelerated delivery without
              bureaucratic drag.
            </p>

            {/* Key Stats Inset */}
            <div className="grid grid-cols-2 gap-6 pt-4 mt-2 bg-surface-container-low p-6 rounded-lg border border-outline-variant/20">
              <div>
                <span className="font-headline-md text-headline-md text-primary-container font-bold block">
                  100%
                </span>
                <span className="font-caption text-caption text-outline font-semibold">
                  Principal Staff Engineers
                </span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md text-primary-container font-bold block">
                  Day 30
                </span>
                <span className="font-caption text-caption text-outline font-semibold">
                  Empirical Milestone Delivery
                </span>
              </div>
            </div>

            {/* Interactive Model Comparison Switcher */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowComparison(!showComparison)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {showComparison ? "unfold_less" : "tune"}
                </span>
                <span>
                  {showComparison
                    ? "Hide Delivery Model Comparison"
                    : "Compare: Traditional Consulting vs NexaDigify Standard"}
                </span>
              </button>

              {showComparison && (
                <div className="mt-3 p-4 bg-surface-container rounded-lg border border-outline-variant/30 text-xs space-y-2 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-4 pb-2 border-b border-surface-container-high font-semibold">
                    <span className="text-outline">Traditional Advisory</span>
                    <span className="text-secondary font-bold">
                      NexaDigify Principal Model
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-on-surface-variant">
                    <span>PowerPoint architecture slides</span>
                    <span className="text-primary font-medium">
                      Production code &amp; IaC in Week 1
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-on-surface-variant">
                    <span>Junior onshore / offshore billable hours</span>
                    <span className="text-primary font-medium">
                      100% Principal Systems Architects
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-on-surface-variant">
                    <span>Theoretical milestones &amp; change orders</span>
                    <span className="text-primary font-medium">
                      Verifiable p99 latency SLAs
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 3 Core Tenets (Hairline Dividers, No generic cards) */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-2">
            {tenets.map((t, idx) => (
              <div
                key={t.num}
                className={`pb-8 mb-8 border-b border-outline-variant/20 last:border-b-0 last:mb-0 transition-all rounded-lg p-3 ${
                  activeTenet === idx
                    ? "bg-surface-container-low"
                    : "bg-surface-container-lowest"
                }`}
                onMouseEnter={() => setActiveTenet(idx)}
                onMouseLeave={() => setActiveTenet(null)}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-headline-md text-headline-md text-secondary font-bold font-mono">
                    {t.num}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container font-bold tracking-tight">
                    {t.title}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant pl-10 leading-relaxed">
                  {t.desc}
                </p>
                {activeTenet === idx && (
                  <div className="mt-3 pl-10 flex items-center gap-2 text-xs font-semibold text-secondary animate-fadeIn">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                    <span>Standard Metric: {t.metric}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
