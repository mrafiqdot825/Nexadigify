import { useState } from "react";
import type { Route } from "./+types/work";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Client Case Studies & Verified Results — NexaDigify",
    },
    {
      name: "description",
      content:
        "Verified architectural case studies spanning Tier-1 Fintech, Health Systems, Global Freight, and Sovereign Cloud.",
    },
  ];
}

export default function WorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Fintech", "Healthcare", "Logistics", "Defense"];

  const caseStudies = [
    {
      id: "vanguard",
      client: "Vanguard Institutional Services",
      tag: "VANGUARD-CORP",
      industry: "Fintech",
      icon: "account_balance",
      headline: "18 Million Daily Trades Migrated with Zero Transaction Drift",
      challenge:
        "A legacy clearing monolith built over 15 years was causing database lock contention and unpredictable p99 latency spikes during market-open volatility.",
      solution:
        "Engineered an event-driven CQRS architecture utilizing Apache Kafka with tiered storage, distributed PostgreSQL, and Cilium eBPF mesh routing.",
      metrics: [
        { label: "Daily Transactions", value: "18.4M" },
        { label: "p99 Latency Reduction", value: "-42.8ms" },
        { label: "OPEX Reductions", value: "$42M/yr" },
        { label: "Scheduled Downtime", value: "0.00s" },
      ],
      quote:
        "“The senior principal engineers from NexaDigify solved memory contention bottlenecks in our core clearing pipeline that two other consulting firms declared impossible.”",
      quoteAuthor: "VP of Enterprise Infrastructure",
    },
    {
      id: "apex",
      client: "Apex Global Payments Network",
      tag: "APEX GLOBAL PAY",
      industry: "Fintech",
      icon: "swap_horiz",
      headline: "45,000 TPS Cross-Continental Transaction Settlement Engine",
      challenge:
        "Interchange bottlenecks and cross-border settlement delays risked compliance penalties and customer timeouts during international payment peak volumes.",
      solution:
        "Rebuilt transaction backbone with active-active Raft consensus, automated hardware TLS 1.3 offloading, and sub-second distributed verification ledgers.",
      metrics: [
        { label: "Peak Capacity", value: "45,000 TPS" },
        { label: "Uptime SLA", value: "99.999%" },
        { label: "Settlement Speed", value: "< 240ms" },
        { label: "Cutover Time", value: "9 Months" },
      ],
      quote:
        "“NexaDigify rebuilt our transaction backbone in under 9 months without a single second of scheduled downtime. Their architectural discipline is peerless.”",
      quoteAuthor: "Chief Technology Officer",
    },
    {
      id: "aethel",
      client: "Aethel Health Consortium",
      tag: "AETHEL HEALTH",
      industry: "Healthcare",
      icon: "local_hospital",
      headline:
        "Sub-Second Clinical Records Federation Across 120 Hospital Nodes",
      challenge:
        "Fragmented EHR systems across 120 hospitals were unable to federate patient records during emergency admissions while maintaining strict HIPAA and FHIR mandates.",
      solution:
        "Designed sovereign multi-region Kubernetes clusters running automated zero-trust mTLS 1.3 encryption and real-time streaming clinical data pipelines.",
      metrics: [
        { label: "Record Federation", value: "< 850ms" },
        { label: "Connected Nodes", value: "120 Facilities" },
        { label: "Compliance Score", value: "100% HIPAA/FHIR" },
        { label: "Security Breaches", value: "0 Incident" },
      ],
      quote:
        "“Deploying multi-region sovereign microservices while remaining 100% compliant with HIPAA and FHIR standards transformed our clinical delivery speed.”",
      quoteAuthor: "Chief Systems Architect",
    },
    {
      id: "orbital",
      client: "Orbital Global Logistics",
      tag: "ORBITAL FREIGHT",
      industry: "Logistics",
      icon: "flight_takeoff",
      headline: "1.4 Billion Daily Telemetry Events for Cross-Ocean Freight",
      challenge:
        "Vessels, planes, and container hubs experienced intermittent connectivity, resulting in out-of-order state updates and customs clearance logouts.",
      solution:
        "Deployed local edge nodes with monotonic Raft replication, syncing seamlessly to centralized multi-region cloud clusters upon network reconnect.",
      metrics: [
        { label: "Telemetry Events", value: "1.4B / day" },
        { label: "Bandwidth Efficiency", value: "+380%" },
        { label: "Global Route Coverage", value: "40 Maritime Hubs" },
        { label: "Data Loss Rate", value: "0.000%" },
      ],
      quote:
        "“Our global supply chain now tracks container telemetry with microsecond precision even in low-connectivity maritime conditions.”",
      quoteAuthor: "Director of Systems Engineering",
    },
  ];

  const filteredStudies =
    selectedIndustry === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-container selection:text-white">
      <Header onOpenConsultation={() => setIsModalOpen(true)} />

      <main className="w-full pt-20 bg-surface flex-1">
        {/* Page Hero */}
        <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-2xl border-b border-outline-variant/30">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-pattern" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-8 h-[2px] bg-secondary"></span>
              <span className="font-label-nav text-label-nav text-secondary font-semibold uppercase tracking-wide">
                Institutional Validation
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight max-w-4xl">
              Proven Architectural Modernization at Global Scale
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              Explore concrete engineering case studies detailing how we
              decouple legacy monoliths, eliminate infrastructure bottlenecks,
              and deliver zero-downtime cutovers for enterprise leaders.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {industries.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedIndustry === ind
                      ? "bg-primary-container text-on-primary shadow-sm"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`}
                >
                  {ind === "All" ? "All Industry Deployments" : ind}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="w-full py-space-3xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
            {filteredStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-[0_12px_32px_rgba(3,8,104,0.06)] overflow-hidden"
              >
                {/* Header Banner */}
                <div className="bg-surface-container-low px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      {cs.icon}
                    </span>
                    <span className="font-bold text-primary text-sm font-mono tracking-wide">
                      {cs.tag}
                    </span>
                    <span className="text-xs text-outline font-semibold">
                      • {cs.client}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-surface-container text-primary-container text-xs font-semibold rounded font-mono">
                    VERIFIED PRODUCTION DEPLOYMENT
                  </span>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="font-headline-lg text-primary-container font-bold mb-6">
                    {cs.headline}
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                    <div className="lg:col-span-6 space-y-4">
                      <div>
                        <h3 className="font-subhead-md text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                          The Challenge
                        </h3>
                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-subhead-md text-secondary font-bold text-xs uppercase tracking-wider mb-1">
                          NexaDigify Engineering Architecture
                        </h3>
                        <p className="font-body-md text-on-surface leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                      {cs.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col justify-center"
                        >
                          <span className="font-display-hero text-2xl sm:text-3xl font-extrabold text-primary-container font-mono">
                            {m.value}
                          </span>
                          <span className="font-caption text-outline font-semibold mt-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote Banner */}
                  <div className="p-4 sm:p-6 bg-surface-container-low rounded-lg border-l-4 border-secondary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="font-body-md italic text-primary leading-relaxed">
                      {cs.quote}
                    </p>
                    <span className="text-xs font-semibold text-outline whitespace-nowrap">
                      — {cs.quoteAuthor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Pre-footer */}
        <section className="w-full bg-primary-container text-on-primary py-space-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-lg font-bold mb-2">
                Achieve Zero-Downtime Migration for Your Stack
              </h2>
              <p className="text-surface-container-high text-sm max-w-xl">
                Speak directly with our senior principal engineers who execute
                these transformations.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-secondary via-secondary-container to-[#02B4FC] text-on-primary rounded font-label-action font-bold shadow-lg hover:opacity-95 transition-all cursor-pointer"
            >
              Consult Our Architects
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
