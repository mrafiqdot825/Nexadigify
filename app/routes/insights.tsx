import { useState } from "react";
import type { Route } from "./+types/insights";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Technical Papers & Architecture Insights — NexaDigify",
    },
    {
      name: "description",
      content:
        "Read peer-reviewed architectural papers and engineering analyses on mainframe decoupling, eBPF networking, deterministic AI, and distributed consensus.",
    },
  ];
}

export default function InsightsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  const categories = [
    "All",
    "Distributed Systems",
    "Core Decoupling",
    "Enterprise AI",
    "DevSecOps",
  ];

  const papers = [
    {
      id: 1,
      title:
        "Decoupling COBOL/AS400 Mainframes Without Transaction Interruption",
      authors: "Marcus Sterling & Dr. Ronald Vance",
      category: "Core Decoupling",
      readTime: "12 min read",
      date: "September 2025",
      badge: "SYSTEMS SPEC",
      abstract:
        "A deep architectural analysis of monotonic transactional log tailing, bidirectional shadow replication, and canary cutover strategies for high-frequency banking cores.",
      keyTakeaways: [
        "Eliminating strangler fig rollback deadlock using dual-sync write buffers.",
        "Benchmarking WAL throughput against AS400 journal receivers at 25,000 IOPS.",
        "Guaranteed atomic transactions across heterogeneous SQL and event buses.",
      ],
    },
    {
      id: 2,
      title: "Deterministic LLM Orchestration in Regulated Banking Topologies",
      authors: "Dr. Aisha Patel",
      category: "Enterprise AI",
      readTime: "15 min read",
      date: "August 2025",
      badge: "RESEARCH PAPER",
      abstract:
        "Designing air-gapped semantic cache layers and deterministic guardrail verifiers to isolate proprietary data while guaranteeing sub-50ms inference for financial intelligence.",
      keyTakeaways: [
        "Semantic deduplication reducing repeated LLM API expenditure by 64%.",
        "Deterministic AST validation before generated SQL queries execute on production replicas.",
        "Air-gapped vector persistence with zero telemetry transmission outside sovereign cloud boundaries.",
      ],
    },
    {
      id: 3,
      title:
        "eBPF vs Envoy Sidecars: Benchmarking Zero-Trust Microsecond Latencies",
      authors: "Elena Rostova",
      category: "Distributed Systems",
      readTime: "9 min read",
      date: "July 2025",
      badge: "BENCHMARK STUDY",
      abstract:
        "Empirical benchmarks evaluating packet overhead, CPU throttling, and memory footprint when running Cilium eBPF mesh versus traditional sidecar proxies across 10,000 Kubernetes pods.",
      keyTakeaways: [
        "Sidecarless eBPF socket layer proxying achieves 58% lower p99 latency than userspace Envoy.",
        "Elimination of 2 TCP context switches per inter-pod hop.",
        "Cryptographic mTLS 1.3 hardware offloading benchmarks on modern AWS and GCP nodes.",
      ],
    },
    {
      id: 4,
      title:
        "Surviving Multi-Region Cloud Outages with Active-Active Raft Clusters",
      authors: "Dr. Ronald Vance",
      category: "Distributed Systems",
      readTime: "14 min read",
      date: "June 2025",
      badge: "WHITE PAPER",
      abstract:
        "Operational patterns for geo-distributed quorum consensus, WAN latency mitigation, and automated partition recovery without human failover intervention.",
      keyTakeaways: [
        "Tuning Raft election timeouts for cross-oceanic WAN round-trips without false quorums.",
        "Leader leasing models that avoid stale reads under network partition splits.",
        "Zero-data-loss validation during simulated whole-region AWS availability zone collapse.",
      ],
    },
    {
      id: 5,
      title:
        "Binary-Level PR Gating: Eliminating Memory Leaks Before Compilation",
      authors: "NexaDigify Security Practice",
      category: "DevSecOps",
      readTime: "8 min read",
      date: "May 2025",
      badge: "PRACTICE GUIDE",
      abstract:
        "Integrating address sanitizers, continuous fuzzing, and cryptographic software bills of materials (SBOM) into high-velocity production pipelines.",
      keyTakeaways: [
        "Automated pull-request rejection for critical concurrency race conditions.",
        "Continuous compliance ledgering providing instant SOC2 and ISO 27001 audit evidence.",
        "Zero developer friction: CI pipeline overhead capped at under 180 seconds.",
      ],
    },
  ];

  const filteredPapers =
    selectedCategory === "All"
      ? papers
      : papers.filter((p) => p.category === selectedCategory);

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
                Research &amp; Engineering Dispatches
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight max-w-4xl">
              Enterprise Architecture Papers &amp; Systems Research
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              Technical deep dives authored by our principal systems architects.
              Unfiltered analyses of distributed consensus, kernel networking,
              deterministic AI, and legacy decoupling.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary-container text-on-primary shadow-sm"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`}
                >
                  {cat === "All" ? "All Research Disciplines" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Papers List */}
        <section className="w-full py-space-3xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant/40 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-surface-container text-secondary text-xs font-bold rounded font-mono">
                      {paper.badge}
                    </span>
                    <span className="text-xs text-outline font-semibold">
                      {paper.category}
                    </span>
                    <span className="text-xs text-outline">
                      • {paper.readTime}
                    </span>
                  </div>
                  <span className="text-xs text-outline font-mono">
                    {paper.date}
                  </span>
                </div>

                <h2 className="font-headline-lg text-primary-container font-bold mb-3 group-hover:text-secondary transition-colors">
                  {paper.title}
                </h2>

                <p className="text-xs font-semibold text-outline mb-4">
                  By {paper.authors}
                </p>

                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  {paper.abstract}
                </p>

                {/* Key takeaways toggle */}
                <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/20 mb-6">
                  <span className="font-caption text-secondary uppercase font-bold tracking-wider block mb-2 font-mono">
                    EXECUTIVE ARCHITECTURE HIGHLIGHTS
                  </span>
                  <ul className="space-y-1.5 text-xs text-on-surface">
                    {paper.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <button
                    type="button"
                    onClick={() => setSelectedPaper(paper.id)}
                    className="font-label-action text-secondary font-bold hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Read Executive Summary</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-semibold text-outline hover:text-primary flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>
                    Request Complete PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Paper Detail Modal */}
        {selectedPaper !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm">
            <div className="bg-surface-container-lowest max-w-2xl w-full rounded-xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 max-h-[85vh] overflow-y-auto">
              {(() => {
                const p = papers.find((item) => item.id === selectedPaper);
                if (!p) return null;
                return (
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold text-secondary uppercase font-mono">
                          {p.badge} • {p.category}
                        </span>
                        <h3 className="font-headline-lg text-primary-container font-bold mt-1">
                          {p.title}
                        </h3>
                        <p className="text-xs text-outline mt-1">
                          By {p.authors} ({p.date})
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedPaper(null)}
                        className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-outline hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          close
                        </span>
                      </button>
                    </div>

                    <div className="space-y-4 text-sm text-on-surface-variant my-6">
                      <p className="leading-relaxed">{p.abstract}</p>
                      <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30 space-y-2">
                        <strong className="text-primary text-xs uppercase block font-mono">
                          Core Methodological Findings
                        </strong>
                        {p.keyTakeaways.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-on-surface"
                          >
                            <span className="text-secondary font-bold">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed text-outline">
                        This whitepaper is part of the NexaDigify Systems
                        Architecture series. For full source code, benchmark
                        suites, and reproduction topologies, engage with our
                        principal engineering team.
                      </p>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-surface-container-high">
                      <button
                        type="button"
                        onClick={() => setSelectedPaper(null)}
                        className="font-label-action text-on-surface-variant px-4 py-2 text-xs"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPaper(null);
                          setIsModalOpen(true);
                        }}
                        className="font-label-action text-on-primary bg-primary-container hover:bg-secondary px-5 py-2.5 rounded text-xs transition-colors"
                      >
                        Discuss Architecture with Authors
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Pre-footer */}
        <section className="w-full bg-primary-container text-on-primary py-space-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-lg font-bold mb-2">
                Have a Complex Stack Deadlock?
              </h2>
              <p className="text-surface-container-high text-sm max-w-xl">
                Our principal research directors conduct architecture audits and
                benchmarking studies.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-secondary via-secondary-container to-[#02B4FC] text-on-primary rounded font-label-action font-bold shadow-lg hover:opacity-95 transition-all cursor-pointer"
            >
              Consult Research Authors
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
