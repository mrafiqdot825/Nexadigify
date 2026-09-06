import { useState } from "react";
import type { Route } from "./+types/about";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "About NexaDigify — The Engineering Standard: No Consulting Fluff",
    },
    {
      name: "description",
      content:
        "Learn about NexaDigify's operating model: 100% senior principal engineers embedded directly into executive engineering teams to write production code from week one.",
    },
  ];
}

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders = [
    {
      name: "Dr. Ronald Vance",
      role: "Principal Systems Director",
      bio: "20+ years designing fault-tolerant distributed consensus algorithms, previously leading transaction clearing infrastructure for global exchanges.",
      expertise: "Raft Consensus • Distributed Ledgers • Kernel Topologies",
    },
    {
      name: "Elena Rostova",
      role: "VP of Cloud & eBPF Networking",
      bio: "Pioneer in kernel-level container networking with Cilium and Envoy; engineered high-throughput low-latency mesh backbones for Tier-1 telcos.",
      expertise: "eBPF • Service Mesh • mTLS 1.3 Cryptography",
    },
    {
      name: "Marcus Sterling",
      role: "Director of Core Modernization",
      bio: "Veteran of 30+ mainframe strangler migrations across COBOL, AS400, and legacy Java monoliths with zero seconds of unplanned downtime.",
      expertise: "Event Sourcing • Strangler Fig Pattern • CQRS",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of AI Systems & Vector Memory",
      bio: "Specializes in deterministic LLM orchestration, sub-50ms warm vector recall pipelines, and private air-gapped enterprise intelligence vaults.",
      expertise: "Vector Databases • Guardrails • Model Optimization",
    },
  ];

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
                The Operating Model
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight max-w-4xl">
              The Engineering Standard: No Consulting Fluff.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              We eliminate traditional consulting bureaucracy. NexaDigify
              operates under an uncompromising principle: senior principal
              engineers embedded directly within your executive engineering
              teams to write production code from week one.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30">
                <span className="font-display-hero text-3xl font-extrabold text-primary-container block font-mono">
                  100%
                </span>
                <span className="font-caption text-outline font-semibold">
                  Principal Staff Engineers
                </span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30">
                <span className="font-display-hero text-3xl font-extrabold text-primary-container block font-mono">
                  Day 30
                </span>
                <span className="font-caption text-outline font-semibold">
                  Empirical Milestone Delivery
                </span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30">
                <span className="font-display-hero text-3xl font-extrabold text-primary-container block font-mono">
                  0
                </span>
                <span className="font-caption text-outline font-semibold">
                  Junior Generalists Deployed
                </span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30">
                <span className="font-display-hero text-3xl font-extrabold text-primary-container block font-mono">
                  &lt; 4 hr
                </span>
                <span className="font-caption text-outline font-semibold">
                  Architect Dispatch SLA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Tenets Deep Dive */}
        <section className="w-full py-space-3xl border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <span className="font-caption text-secondary uppercase font-bold tracking-wider block mb-2 font-mono">
                ARCHITECTURAL DISCIPLINE
              </span>
              <h2 className="font-headline-xl text-primary-container font-bold">
                The 3 Unyielding Core Tenets
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between">
                <div className="w-8 h-1 bg-secondary mb-6"></div>
                <div>
                  <span className="font-headline-md text-secondary font-bold font-mono block mb-2">
                    01
                  </span>
                  <h3 className="font-headline-md text-primary-container font-bold mb-3">
                    Zero-Debt Architecture
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Every system we construct utilizes decoupled, modular
                    boundaries. We architect for future maintainability,
                    ensuring that software iterations scale independently of
                    underlying compute providers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-mono text-secondary">
                  Rule: Strict anti-corruption layers
                </div>
              </div>

              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between">
                <div className="w-8 h-1 bg-secondary mb-6"></div>
                <div>
                  <span className="font-headline-md text-secondary font-bold font-mono block mb-2">
                    02
                  </span>
                  <h3 className="font-headline-md text-primary-container font-bold mb-3">
                    Empirical Benchmarks
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    We reject vanity velocity metrics and slide deck progress.
                    Transformation success is evaluated against hard telemetry:
                    p99 latency reductions, egress bandwidth efficiencies, and
                    tangible cloud unit economics.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-mono text-secondary">
                  Rule: Verifiable SLA measurements
                </div>
              </div>

              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 relative overflow-hidden flex flex-col justify-between">
                <div className="w-8 h-1 bg-secondary mb-6"></div>
                <div>
                  <span className="font-headline-md text-secondary font-bold font-mono block mb-2">
                    03
                  </span>
                  <h3 className="font-headline-md text-primary-container font-bold mb-3">
                    Sovereign Security
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Data sovereignty is non-negotiable. We integrate zero-trust
                    cryptographic verification into the foundational runtime,
                    isolating your high-value enterprise payloads from external
                    dependencies and telemetry leakage.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-mono text-secondary">
                  Rule: mTLS 1.3 &amp; Air-Gapped Vaults
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix: Traditional Consulting vs NexaDigify */}
        <section className="w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <span className="font-caption text-secondary uppercase font-bold tracking-wider block mb-2 font-mono">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="font-headline-xl text-primary-container font-bold">
                Why Enterprises Switch to NexaDigify
              </h2>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-surface-container p-4 font-bold text-sm border-b border-outline-variant/30">
                <div className="md:col-span-4 text-on-surface">
                  Capability Dimension
                </div>
                <div className="md:col-span-4 text-outline">
                  Traditional Management Advisory
                </div>
                <div className="md:col-span-4 text-secondary">
                  NexaDigify Principal Practice
                </div>
              </div>

              <div className="divide-y divide-outline-variant/20 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 p-5 gap-2 items-center">
                  <div className="md:col-span-4 font-semibold text-primary">
                    Team Composition
                  </div>
                  <div className="md:col-span-4 text-outline">
                    1 partner + 8 junior generalist analysts
                  </div>
                  <div className="md:col-span-4 font-semibold text-secondary">
                    100% Principal Systems Architects
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-5 gap-2 items-center bg-surface-container-low/40">
                  <div className="md:col-span-4 font-semibold text-primary">
                    Initial Deliverable
                  </div>
                  <div className="md:col-span-4 text-outline">
                    120-page strategic PowerPoint slide deck
                  </div>
                  <div className="md:col-span-4 font-semibold text-secondary">
                    Production code &amp; IaC deployed Week 1
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-5 gap-2 items-center">
                  <div className="md:col-span-4 font-semibold text-primary">
                    Success Measurement
                  </div>
                  <div className="md:col-span-4 text-outline">
                    Billable hours &amp; theoretical change orders
                  </div>
                  <div className="md:col-span-4 font-semibold text-secondary">
                    p99 latency, zero-downtime cutovers
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 p-5 gap-2 items-center bg-surface-container-low/40">
                  <div className="md:col-span-4 font-semibold text-primary">
                    Strangler Cutover Risk
                  </div>
                  <div className="md:col-span-4 text-outline">
                    High — multi-year multi-vendor handoffs
                  </div>
                  <div className="md:col-span-4 font-semibold text-secondary">
                    Zero — automated bidirectional sync
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="w-full py-space-3xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <span className="font-caption text-secondary uppercase font-bold tracking-wider block mb-2 font-mono">
                ENGINEERING LEADERSHIP
              </span>
              <h2 className="font-headline-xl text-primary-container font-bold">
                Principal Architects Behind the Systems
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((lead) => (
                <div
                  key={lead.name}
                  className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/40 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline-md text-primary font-bold text-lg">
                        {lead.name}
                      </h3>
                      <span className="font-caption text-secondary font-semibold">
                        {lead.role}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline">
                      badge
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-4 leading-relaxed">
                    {lead.bio}
                  </p>
                  <div className="p-3 bg-surface-container-low rounded border border-outline-variant/20 text-xs font-mono text-outline">
                    {lead.expertise}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Pre-footer */}
        <section className="w-full bg-primary-container text-on-primary py-space-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-lg font-bold mb-2">
                Work Directly with Our Principal Staff
              </h2>
              <p className="text-surface-container-high text-sm max-w-xl">
                Ready to cut through the consulting noise? Schedule a technical
                whiteboard session today.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-secondary via-secondary-container to-[#02B4FC] text-on-primary rounded font-label-action font-bold shadow-lg hover:opacity-95 transition-all cursor-pointer"
            >
              Schedule Whiteboard Session
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
