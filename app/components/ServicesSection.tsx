import { useState } from "react";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [selectedNode, setSelectedNode] = useState<string>("mesh");
  const [activeCutoverStep, setActiveCutoverStep] = useState<number>(2);
  const [showSystemSpecsModal, setShowSystemSpecsModal] =
    useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

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

  const techTags = [
    "Kubernetes",
    "Multi-Region Terraform",
    "eBPF Networking",
    "Apache Kafka",
    "AWS & GCP Sovereign",
  ];

  return (
    <section
      id="services"
      className="w-full bg-surface-container-lowest py-space-3xl relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-space-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-8 h-[2px] bg-secondary"></span>
            <span className="font-label-nav text-label-nav text-secondary font-semibold uppercase tracking-wide">
              Transformation Matrix
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight mb-4">
            Strategic Capabilities Built for Systemic Scale
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            We dismantle complex architectural deadlocks with deep structural
            design, replacing technical debt with resilient high-throughput
            infrastructure.
          </p>
        </div>

        {/* Asymmetric Composition (Anchor 60% / Stacked Modules 40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Anchor Module (7 cols - Dominant spotlight) */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 lg:p-10 rounded-lg flex flex-col justify-between relative overflow-hidden border border-outline-variant/30 shadow-xs">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest text-primary-container text-xs font-semibold rounded shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary-container"></span>{" "}
                  ARCHITECTURAL ANCHOR
                </span>
                <span className="font-caption text-caption text-outline font-mono">
                  CAPABILITY REF: 01-SYS
                </span>
              </div>

              <h3 className="font-headline-lg text-headline-lg text-primary-container font-bold tracking-tight mb-4">
                Cloud &amp; Distributed Systems Architecture
              </h3>

              <p className="font-body-md text-body-md text-on-surface max-w-xl mb-8 leading-relaxed">
                Design and execution of fault-tolerant distributed networks
                spanning multi-region cloud topologies. We eliminate single
                points of failure while maintaining sub-millisecond data
                synchronization.
              </p>

              {/* Architectural Blueprint Mock Graphic with Real-Time Interactivity */}
              <div className="bg-surface-container-lowest p-6 rounded-lg mb-8 border border-outline-variant/40 shadow-sm">
                <div className="flex flex-wrap items-center justify-between text-xs text-outline mb-4 pb-2 border-b border-surface-container-high">
                  <span className="font-semibold text-primary">
                    DISTRIBUTED INGRESS ROUTING
                  </span>
                  <span className="text-secondary font-semibold font-mono">
                    SYNCHRONOUS RAFT
                  </span>
                </div>

                {/* Blueprint Network Diagram SVG */}
                <div className="relative overflow-x-auto py-2">
                  <svg
                    className="w-full min-w-[440px] h-32 text-primary-container"
                    fill="none"
                    viewBox="0 0 500 120"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Connectors */}
                    <path
                      d="M70 60 H180 M240 60 H340 M400 30 V90 M340 60 L400 30 M340 60 L400 90"
                      stroke="#CBD5E1"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M180 60 L240 60"
                      stroke="#0C5EEB"
                      strokeWidth="3"
                    ></path>

                    {/* Ingress Node */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-105"
                      onClick={() => setSelectedNode("edge")}
                    >
                      <rect
                        fill={selectedNode === "edge" ? "#0C5EEB" : "#030868"}
                        height="40"
                        rx="4"
                        width="50"
                        x="20"
                        y="40"
                      ></rect>
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

                    {/* Service Mesh Core */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-105"
                      onClick={() => setSelectedNode("mesh")}
                    >
                      <rect
                        fill={selectedNode === "mesh" ? "#02B4FC" : "#276bf7"}
                        height="56"
                        rx="4"
                        width="60"
                        x="180"
                        y="32"
                      ></rect>
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
                        K8S CLUSTER
                      </text>
                    </g>

                    {/* DB Layer Nodes */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-105"
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
                      ></rect>
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

                    {/* Replicas */}
                    <g
                      className="cursor-pointer transition-transform hover:scale-110"
                      onClick={() => setSelectedNode("r1")}
                    >
                      <circle
                        cx="430"
                        cy="30"
                        fill={selectedNode === "r1" ? "#02B4FC" : "#EAEDFF"}
                        r="14"
                        stroke={selectedNode === "r1" ? "#030868" : "none"}
                        strokeWidth="2"
                      ></circle>
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
                      className="cursor-pointer transition-transform hover:scale-110"
                      onClick={() => setSelectedNode("r2")}
                    >
                      <circle
                        cx="430"
                        cy="90"
                        fill={selectedNode === "r2" ? "#02B4FC" : "#EAEDFF"}
                        r="14"
                        stroke={selectedNode === "r2" ? "#030868" : "none"}
                        strokeWidth="2"
                      ></circle>
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

                {/* Node Status Inspector */}
                {selectedNode && nodeDetails[selectedNode] && (
                  <div className="mt-4 p-3 bg-surface-container rounded border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-semibold text-primary-container">
                        {nodeDetails[selectedNode].title}
                      </span>
                      <span className="text-outline block text-[11px]">
                        Protocol: {nodeDetails[selectedNode].protocol}
                      </span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-secondary font-semibold block">
                        {nodeDetails[selectedNode].status}
                      </span>
                      <span className="text-outline font-mono text-[11px]">
                        {nodeDetails[selectedNode].throughput}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Tags with Interactive Filter Toggle */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? null : tag)
                    }
                    className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer transition-all ${
                      selectedTag === tag
                        ? "bg-secondary text-on-secondary shadow-xs scale-105"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant/20">
              <button
                type="button"
                onClick={() => setShowSystemSpecsModal(true)}
                className="font-label-action text-label-action text-secondary font-bold hover:text-primary-container transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>View System Specs</span>
                <span className="material-symbols-outlined text-[18px]">
                  terminal
                </span>
              </button>
              <span className="font-caption text-caption text-outline font-mono">
                Mean Deploy Time: &lt; 14 mins
              </span>
            </div>
          </div>

          {/* Stacked Side Modules (5 cols - 2 vertically distinct components) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Module A: Enterprise AI & Autonomous Workflows */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-lg shadow-[0_10px_30px_rgba(3,8,104,0.06)] relative overflow-hidden border border-outline-variant/30 transition-all hover:shadow-md">
              <div className="w-10 h-1 bg-secondary mb-6"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-caption text-caption text-secondary font-semibold font-mono">
                  CAPABILITY REF: 02-INTEL
                </span>
                <span className="px-2 py-0.5 bg-surface-container text-secondary-container text-xs font-bold rounded">
                  SUB-50MS
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary-container font-bold tracking-tight mb-3">
                Enterprise AI &amp; Autonomous Workflows
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Custom LLM orchestration, agentic operational pipelines, and
                secure vectorized memory spaces connected securely to sovereign
                corporate datasets.
              </p>

              <div className="p-4 bg-surface-container-low rounded-lg mb-6 flex items-center justify-between border border-outline-variant/20">
                <div>
                  <span className="font-caption text-caption text-outline block">
                    Data Ingestion Rate
                  </span>
                  <span className="font-subhead-md text-subhead-md text-primary-container font-bold font-mono">
                    2.4 TB / Hour
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-caption text-caption text-outline block">
                    Guardrail Enforcement
                  </span>
                  <span className="font-subhead-md text-subhead-md text-secondary font-bold font-mono">
                    100% Deterministic
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="font-label-action text-label-action text-primary-container font-semibold hover:text-secondary transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Review AI Pipeline Architecture</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </button>
            </div>

            {/* Module B: Legacy Modernization & Core Decoupling */}
            <div className="bg-surface-container-low p-6 sm:p-8 rounded-lg relative overflow-hidden border border-outline-variant/30">
              {/* Diagonal corner notch accent referencing brand bracket */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary-container transform rotate-45 pointer-events-none"></div>

              <div className="flex items-center justify-between mb-3">
                <span className="font-caption text-caption text-outline font-semibold font-mono">
                  CAPABILITY REF: 03-MOD
                </span>
                <span className="text-xs text-primary-container font-bold bg-surface-container px-2 py-0.5 rounded">
                  ZERO STRANGLER RISK
                </span>
              </div>

              <h4 className="font-headline-md text-headline-md text-primary-container font-bold tracking-tight mb-3">
                Legacy Modernization &amp; Core Decoupling
              </h4>

              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Systematic extraction of COBOL, AS400, and monolithic Java
                mainframes into modular event-driven micro-architectures without
                transactional pauses.
              </p>

              {/* Interactive Milestones Progress Tracker */}
              <div className="space-y-3 mb-6">
                <div
                  className={`p-2 rounded cursor-pointer transition-all ${
                    activeCutoverStep === 1
                      ? "bg-surface-container-lowest border border-secondary/30"
                      : ""
                  }`}
                  onClick={() => setActiveCutoverStep(1)}
                >
                  <div className="flex justify-between text-xs font-semibold mb-1 text-on-surface">
                    <span>Mainframe Shadowing Stage</span>
                    <span className="text-secondary">Complete (100%)</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded overflow-hidden">
                    <div className="w-full h-full bg-secondary rounded"></div>
                  </div>
                </div>

                <div
                  className={`p-2 rounded cursor-pointer transition-all ${
                    activeCutoverStep === 2
                      ? "bg-surface-container-lowest border border-secondary/30"
                      : ""
                  }`}
                  onClick={() => setActiveCutoverStep(2)}
                >
                  <div className="flex justify-between text-xs font-semibold mb-1 text-on-surface">
                    <span>Dynamic Traffic Cutover</span>
                    <span className="text-primary-container">
                      Phase 3 (Active 75%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded overflow-hidden">
                    <div className="w-3/4 h-full bg-secondary-container rounded animate-pulse"></div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="font-label-action text-label-action text-primary-container font-semibold hover:text-secondary transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Inspect Decoupling Framework</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Span Card Below (Cyber Resilient Operations) */}
        <div className="mt-8 bg-surface-container-low p-6 sm:p-8 lg:p-10 rounded-lg border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-caption text-caption text-secondary font-semibold block mb-2 font-mono">
                CAPABILITY REF: 04-SEC
              </span>
              <h3 className="font-headline-md text-headline-md text-primary-container font-bold tracking-tight mb-3">
                Cyber Resilient Operations &amp; DevSecOps
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Continuous compliance baked into binary compilation. Automated
                vulnerability shielding, ephemeral credential vaults, and
                immutable audit ledgers.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/20 hover:border-secondary/30 transition-all">
                <span className="font-caption text-caption text-outline block">
                  Static Binary Analysis
                </span>
                <span className="font-headline-md text-headline-md text-primary-container font-bold mt-1 block">
                  0 Critical
                </span>
                <span className="font-caption text-caption text-secondary font-medium">
                  Automated PR Gating
                </span>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/20 hover:border-secondary/30 transition-all">
                <span className="font-caption text-caption text-outline block">
                  Zero-Trust Radius
                </span>
                <span className="font-headline-md text-headline-md text-primary-container font-bold mt-1 block">
                  Per-Workload
                </span>
                <span className="font-caption text-caption text-secondary font-medium">
                  mTLS 1.3 Strict
                </span>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant/20 hover:border-secondary/30 transition-all">
                <span className="font-caption text-caption text-outline block">
                  Audit Compliance
                </span>
                <span className="font-headline-md text-headline-md text-primary-container font-bold mt-1 block">
                  SOC2 / ISO
                </span>
                <span className="font-caption text-caption text-secondary font-medium">
                  Continuous Telemetry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Specs Interactive Modal */}
      {showSystemSpecsModal && (
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
                onClick={() => setShowSystemSpecsModal(false)}
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
                onClick={() => setShowSystemSpecsModal(false)}
                className="font-label-action text-on-primary bg-primary-container hover:bg-secondary px-5 py-2 rounded text-xs transition-colors"
              >
                Close Spec Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
