import { useState } from "react";
import type { Route } from "./+types/services";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Capabilities & Enterprise Architecture — NexaDigify",
    },
    {
      name: "description",
      content:
        "Comprehensive architectural capabilities spanning distributed cloud topologies, enterprise AI pipelines, mainframe core decoupling, and cyber-resilient DevSecOps.",
    },
  ];
}

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>("mesh");
  const [activeCutoverStep, setActiveCutoverStep] = useState<number>(2);
  const [showSpecsModal, setShowSpecsModal] = useState<boolean>(false);

  const nodeDetails: Record<
    string,
    { title: string; protocol: string; status: string; throughput: string }
  > = {
    edge: {
      title: "Edge Ingress Gateway",
      protocol: "BGP Anycast / HTTP/3 QUIC",
      status: "Healthy • 48 Global PoPs",
      throughput: "1.8M req/sec",
    },
    mesh: {
      title: "Istio/Cilium eBPF Service Mesh",
      protocol: "mTLS 1.3 Strict / Envoy Sidecarless",
      status: "Active • Raft Consensus Quorum",
      throughput: "420,000 internal RPCs/sec",
    },
    storage: {
      title: "Distributed Transaction Ledger",
      protocol: "Spanner / ScyllaDB Multi-Region",
      status: "Synchronous Commit • ACID",
      throughput: "85,000 IOPS",
    },
    r1: {
      title: "Read Replica Node 1 (US-West)",
      protocol: "WAL Streaming Replication",
      status: "Lag: 0.12ms",
      throughput: "24,000 qps",
    },
    r2: {
      title: "Read Replica Node 2 (EU-Central)",
      protocol: "Cross-Continental WAN Sync",
      status: "Lag: 14.8ms",
      throughput: "19,500 qps",
    },
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-container selection:text-white">
      <Header onOpenConsultation={() => setIsModalOpen(true)} />

      <main className="w-full pt-20 bg-surface flex-1">
        {/* Page Hero Header */}
        <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-2xl border-b border-outline-variant/30">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-pattern" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-8 h-[2px] bg-secondary"></span>
              <span className="font-label-nav text-label-nav text-secondary font-semibold uppercase tracking-wide">
                Transformation Matrix
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight max-w-4xl">
              Strategic Capabilities Built for Systemic Scale
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              We dismantle complex architectural deadlocks with deep structural
              design, replacing legacy technical debt with resilient,
              high-throughput sovereign infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="font-label-action text-on-primary bg-primary-container hover:bg-secondary px-8 py-3.5 rounded-[4px] shadow-[0_4px_16px_rgba(3,8,104,0.2)] transition-colors cursor-pointer"
              >
                Schedule Architecture Review
              </button>
              <button
                type="button"
                onClick={() => setShowSpecsModal(true)}
                className="font-label-action text-primary-container bg-surface-container-low hover:bg-surface-container-high px-8 py-3.5 rounded-[4px] transition-colors cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  terminal
                </span>
                <span>System Specifications</span>
              </button>
            </div>
          </div>
        </section>

        {/* 01: Cloud & Distributed Topologies */}
        <section className="w-full py-space-3xl border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-secondary font-mono text-xs font-semibold mb-2">
                  <span>CAPABILITY REF: 01-SYS</span>
                  <span>•</span>
                  <span>TIER-4 RESILIENCE</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight mb-4">
                  Cloud &amp; Distributed Systems Architecture
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mb-6 leading-relaxed">
                  Design and execution of fault-tolerant distributed networks
                  spanning multi-region cloud topologies. We eliminate single
                  points of failure while maintaining sub-millisecond data
                  synchronization.
                </p>
                <div className="space-y-4 text-sm text-on-surface-variant">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-primary block">
                        Multi-Region Active-Active Mesh:
                      </strong>
                      Distributed data consensus using Raft algorithms to
                      survive whole-region cloud outages without data drift.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-primary block">
                        eBPF-Accelerated Networking:
                      </strong>
                      Bypass traditional kernel networking overhead with Cilium,
                      achieving sub-50μs packet handling across thousands of
                      pods.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-primary block">
                        Sovereign Cloud Topologies:
                      </strong>
                      Air-gapped data segregation complying strictly with GDPR,
                      HIPAA, and regional defense standards.
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Blueprint */}
              <div className="lg:col-span-6 bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                <div className="flex justify-between items-center pb-3 mb-4 border-b border-surface-container-high">
                  <span className="font-bold text-primary text-sm">
                    Interactive Ingress Routing
                  </span>
                  <span className="text-xs text-secondary font-mono">
                    LIVE RAFT ENGINE
                  </span>
                </div>
                {/* SVG Blueprint */}
                <div className="bg-surface-container-lowest p-4 rounded-lg overflow-x-auto">
                  <svg
                    className="w-full min-w-[420px] h-32 text-primary-container"
                    fill="none"
                    viewBox="0 0 500 120"
                  >
                    <path
                      d="M70 60 H180 M240 60 H340 M400 30 V90 M340 60 L400 30 M340 60 L400 90"
                      stroke="#CBD5E1"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    />
                    <path
                      d="M180 60 L240 60"
                      stroke="#0C5EEB"
                      strokeWidth="3"
                    />
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("edge")}
                    >
                      <rect
                        fill={selectedNode === "edge" ? "#0C5EEB" : "#030868"}
                        height="40"
                        rx="4"
                        width="50"
                        x="20"
                        y="40"
                      />
                      <text
                        fill="#FFFFFF"
                        fontFamily="Plus Jakarta Sans"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="middle"
                        x="45"
                        y="64"
                      >
                        EDGE
                      </text>
                    </g>
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("mesh")}
                    >
                      <rect
                        fill={selectedNode === "mesh" ? "#02B4FC" : "#276bf7"}
                        height="56"
                        rx="4"
                        width="60"
                        x="180"
                        y="32"
                      />
                      <text
                        fill={selectedNode === "mesh" ? "#030868" : "#FFFFFF"}
                        fontFamily="Plus Jakarta Sans"
                        fontSize="11"
                        fontWeight="bold"
                        textAnchor="middle"
                        x="210"
                        y="58"
                      >
                        MESH
                      </text>
                      <text
                        fill={selectedNode === "mesh" ? "#030868" : "#C8E6FF"}
                        fontFamily="Inter"
                        fontSize="9"
                        textAnchor="middle"
                        x="210"
                        y="74"
                      >
                        K8S
                      </text>
                    </g>
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("storage")}
                    >
                      <rect
                        fill={
                          selectedNode === "storage" ? "#C8E6FF" : "#EAEDFF"
                        }
                        height="40"
                        rx="4"
                        width="60"
                        x="340"
                        y="40"
                        stroke={selectedNode === "storage" ? "#0C5EEB" : "none"}
                        strokeWidth="2"
                      />
                      <text
                        fill="#030868"
                        fontFamily="Plus Jakarta Sans"
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                        x="370"
                        y="64"
                      >
                        STORAGE
                      </text>
                    </g>
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("r1")}
                    >
                      <circle
                        cx="430"
                        cy="30"
                        fill={selectedNode === "r1" ? "#02B4FC" : "#EAEDFF"}
                        r="14"
                      />
                      <text
                        fill="#030868"
                        fontFamily="Inter"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                        x="430"
                        y="34"
                      >
                        R1
                      </text>
                    </g>
                    <g
                      className="cursor-pointer"
                      onClick={() => setSelectedNode("r2")}
                    >
                      <circle
                        cx="430"
                        cy="90"
                        fill={selectedNode === "r2" ? "#02B4FC" : "#EAEDFF"}
                        r="14"
                      />
                      <text
                        fill="#030868"
                        fontFamily="Inter"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                        x="430"
                        y="94"
                      >
                        R2
                      </text>
                    </g>
                  </svg>
                </div>
                {/* Node Inspector Output */}
                <div className="mt-3 p-3 bg-surface-container rounded border border-outline-variant/30 text-xs">
                  <div className="flex justify-between font-semibold text-primary">
                    <span>{nodeDetails[selectedNode]?.title}</span>
                    <span className="text-secondary">
                      {nodeDetails[selectedNode]?.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-outline text-[11px] mt-1">
                    <span>Protocol: {nodeDetails[selectedNode]?.protocol}</span>
                    <span className="font-mono">
                      {nodeDetails[selectedNode]?.throughput}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02: Enterprise AI & Autonomous Workflows */}
        <section className="w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30">
                    <span className="font-caption text-outline uppercase block">
                      Data Ingestion
                    </span>
                    <span className="font-display-hero text-2xl lg:text-3xl font-extrabold text-primary-container block mt-1">
                      2.4 TB/hr
                    </span>
                    <span className="text-xs text-secondary font-medium">
                      Continuous vectorization
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30">
                    <span className="font-caption text-outline uppercase block">
                      Inference Latency
                    </span>
                    <span className="font-display-hero text-2xl lg:text-3xl font-extrabold text-primary-container block mt-1">
                      &lt; 48ms
                    </span>
                    <span className="text-xs text-secondary font-medium">
                      Warm vector recall
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/30 col-span-2">
                    <span className="font-caption text-outline uppercase block">
                      Guardrail Enforcement
                    </span>
                    <div className="flex justify-between items-baseline mt-1">
                      <span className="font-headline-md text-primary-container font-bold">
                        100% Deterministic
                      </span>
                      <span className="text-xs text-secondary font-mono">
                        AIR-GAPPED VAULT
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      Zero data leakage to external model providers. Vectorized
                      embeddings sit within your sovereign cloud perimeter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="flex items-center gap-2 text-secondary font-mono text-xs font-semibold mb-2">
                  <span>CAPABILITY REF: 02-INTEL</span>
                  <span>•</span>
                  <span>SUB-50MS AGENTIC MESH</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight mb-4">
                  Enterprise AI &amp; Autonomous Workflows
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mb-6 leading-relaxed">
                  Custom LLM orchestration, agentic operational pipelines, and
                  secure vectorized memory spaces connected directly to
                  corporate datasets without security compromises.
                </p>
                <div className="space-y-3 text-sm text-on-surface-variant">
                  <p>
                    • <strong>Semantic Cache Layer:</strong> Deduplicate up to
                    64% of repeated LLM calls, reducing compute expenditure
                    while yielding single-digit millisecond latency.
                  </p>
                  <p>
                    • <strong>Agentic Tool Gating:</strong> Real-time
                    deterministic validation verifying SQL generation, payment
                    dispatches, and policy checks before runtime execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03: Legacy Modernization & Core Decoupling */}
        <section className="w-full py-space-3xl border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-secondary font-mono text-xs font-semibold mb-2">
                  <span>CAPABILITY REF: 03-MOD</span>
                  <span>•</span>
                  <span>ZERO STRANGLER RISK</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight mb-4">
                  Legacy Modernization &amp; Core Decoupling
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface mb-6 leading-relaxed">
                  Systematic extraction of COBOL, AS400, and monolithic Java
                  mainframes into modular event-driven micro-architectures
                  without scheduled downtime or transactional risk.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  We use shadow synchronization and bidirectional replication to
                  guarantee zero data loss before cutting over customer traffic.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="font-label-action text-secondary font-bold hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>Inspect Decoupling Framework Details</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* Interactive Cutover Simulator */}
              <div className="lg:col-span-6 bg-surface-container-low p-6 sm:p-8 rounded-xl border border-outline-variant/30">
                <h3 className="font-headline-md text-primary font-bold mb-4">
                  Live Cutover Phasing Simulator
                </h3>
                <div className="space-y-4">
                  <div
                    onClick={() => setActiveCutoverStep(1)}
                    className={`p-4 rounded-lg cursor-pointer transition-all border ${
                      activeCutoverStep === 1
                        ? "bg-surface-container-lowest border-secondary shadow-sm"
                        : "bg-surface-container border-transparent hover:border-outline-variant"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-primary">
                        Stage 1: Mainframe Shadowing
                      </span>
                      <span className="text-xs text-secondary font-mono font-semibold">
                        COMPLETE
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Real-time transactional log tailing with asynchronous
                      event replay to validation cluster.
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveCutoverStep(2)}
                    className={`p-4 rounded-lg cursor-pointer transition-all border ${
                      activeCutoverStep === 2
                        ? "bg-surface-container-lowest border-secondary shadow-sm"
                        : "bg-surface-container border-transparent hover:border-outline-variant"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-primary">
                        Stage 2: Dynamic Traffic Cutover
                      </span>
                      <span className="text-xs text-secondary-container font-mono font-semibold">
                        ACTIVE 75%
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Canary weighted routing across 18 enterprise service
                      groups with automated rollback thresholds.
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveCutoverStep(3)}
                    className={`p-4 rounded-lg cursor-pointer transition-all border ${
                      activeCutoverStep === 3
                        ? "bg-surface-container-lowest border-secondary shadow-sm"
                        : "bg-surface-container border-transparent hover:border-outline-variant"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-primary">
                        Stage 3: Full Decoupled Autonomy
                      </span>
                      <span className="text-xs text-outline font-mono">
                        READY
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Mainframe decommission, persistent event sourcing, and
                      independent microservice lifecycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04: DevSecOps & Zero Trust */}
        <section className="w-full py-space-3xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 text-secondary font-mono text-xs font-semibold mb-2">
                <span>CAPABILITY REF: 04-SEC</span>
                <span>•</span>
                <span>CONTINUOUS ASSURANCE</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight">
                Cyber Resilient Operations &amp; DevSecOps
              </h2>
              <p className="font-body-lg text-on-surface-variant mt-2">
                Continuous compliance baked into binary compilation. Automated
                vulnerability shielding, ephemeral credential vaults, and
                immutable audit ledgers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-[32px] mb-3">
                  lock_open_right
                </span>
                <h3 className="font-headline-md text-primary font-bold text-lg mb-2">
                  Zero-Trust Perimeter
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Every inter-service communication requires mutual
                  cryptographic TLS 1.3 verification with short-lived
                  SPIFFE/SPIRE x509 certificates.
                </p>
              </div>

              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-[32px] mb-3">
                  verified
                </span>
                <h3 className="font-headline-md text-primary font-bold text-lg mb-2">
                  Automated PR Gating
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Static analysis and memory sanitizer checks run directly in
                  CI, preventing buffer vulnerabilities or concurrency race
                  conditions from reaching main.
                </p>
              </div>

              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-[32px] mb-3">
                  policy
                </span>
                <h3 className="font-headline-md text-primary font-bold text-lg mb-2">
                  SOC2 / ISO Telemetry
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Automated evidence collection streaming into tamper-proof
                  write-once storage, eliminating manual audit prep overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Pre-footer */}
        <section className="w-full bg-primary-container text-on-primary py-space-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-lg font-bold mb-2">
                Assess Your Systems Architecture
              </h2>
              <p className="text-surface-container-high text-sm max-w-xl">
                Our principal systems architects conduct in-depth architectural
                reviews to identify bottlenecks and design your migration
                roadmap.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-secondary via-secondary-container to-[#02B4FC] text-on-primary rounded font-label-action font-bold shadow-lg hover:opacity-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Request Architecture Whiteboard
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* System Specs Modal */}
      {showSpecsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm">
          <div className="bg-surface-container-lowest max-w-xl w-full rounded-xl p-6 shadow-2xl border border-outline-variant/40">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  terminal
                </span>
                <h3 className="font-headline-md text-primary-container font-bold text-lg">
                  System Architecture Specifications
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSpecsModal(false)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-outline hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs font-mono">
              <div className="p-3 bg-surface-container-low rounded border border-outline-variant/20 space-y-1">
                <p className="text-secondary font-semibold">
                  // DISTRIBUTED RUNTIME TOPOLOGY
                </p>
                <p className="text-on-surface">
                  Orchestration: Kubernetes 1.31 + Cilium CNI (eBPF)
                </p>
                <p className="text-on-surface">
                  Ingress: Envoy Proxy with Hardware TLS 1.3 Offload
                </p>
                <p className="text-on-surface">
                  Consensus Engine: HashiCorp Raft / etcd multi-AZ cluster
                </p>
              </div>
              <div className="p-3 bg-surface-container-low rounded border border-outline-variant/20 space-y-1">
                <p className="text-secondary font-semibold">
                  // DATA BACKBONE &amp; PERSISTENCE
                </p>
                <p className="text-on-surface">
                  Throughput: Apache Kafka with Tiered Storage
                </p>
                <p className="text-on-surface">
                  State Store: ScyllaDB Enterprise + PostgreSQL Distributed
                </p>
                <p className="text-on-surface">
                  p99 Latency: 1.2ms intra-region, 18.5ms global WAN
                </p>
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowSpecsModal(false)}
                className="font-label-action text-on-primary bg-primary-container hover:bg-secondary px-5 py-2 rounded text-xs transition-colors"
              >
                Close Spec Sheet
              </button>
            </div>
          </div>
        </div>
      )}

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
