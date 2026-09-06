import { useState, useEffect } from "react";
import { Link } from "react-router";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [latency, setLatency] = useState(-42.8);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<
    "telemetry" | "cluster" | "stream"
  >("telemetry");
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  const [liveStreamLogs, setLiveStreamLogs] = useState<string[]>([
    "RAFT_LEADER_HEARTBEAT: acked 5/5 nodes",
    "DUAL_SYNC_WAL: 42,800 tx/sec committed",
    "K8S_EBPF_MESH: zero packet drop across 10k pods",
    "ZERO_DOWNTIME_HEALTH: 100% nominal (Tier-4 SLA)",
  ]);

  // Subtle real-time jitter to evoke live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Number((prev + delta).toFixed(1));
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Live stream log ticker
  useEffect(() => {
    const logPool = [
      "RAFT_LEADER_HEARTBEAT: acked 5/5 nodes (0.12ms)",
      "DUAL_SYNC_WAL: 45,200 tx/sec committed to Spanner",
      "K8S_EBPF_MESH: Cilium bypass latency 42μs",
      "EDGE_INGRESS: HTTP/3 QUIC connection pool active",
      "CANARY_ROUTING: Phase 3 traffic weight nominal",
      "SECURITY_VAULT: Ephemeral mTLS certificates refreshed",
    ];

    const streamInterval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      setLiveStreamLogs((prev) => [randomLog, ...prev.slice(0, 3)]);
    }, 3200);

    return () => clearInterval(streamInterval);
  }, []);

  const sparklineData = [
    { label: "00:00", val: 1.12 },
    { label: "04:00", val: 1.24 },
    { label: "08:00", val: 1.38 },
    { label: "12:00", val: 1.45 },
    { label: "16:00", val: 1.41 },
    { label: "20:00", val: 1.48 },
  ];

  const deploymentBadges = [
    {
      id: "fintech",
      name: "Tier-1 Global Fintech",
      metric: "18M daily trades • 99.999% SLA",
    },
    {
      id: "health",
      name: "Integrated Health Systems",
      metric: "120 facilities • HIPAA/FHIR sub-sec",
    },
    {
      id: "logistics",
      name: "Global Freight Logistics",
      metric: "1.4B events/day • 40 maritime hubs",
    },
    {
      id: "defense",
      name: "Federal Cloud Defense",
      metric: "Air-gapped sovereign crypto mesh",
    },
  ];

  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden pb-space-3xl pt-space-xl lg:pt-space-2xl border-b border-outline-variant/30">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-pattern" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#02B4FC]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter-desktop items-center">
          {/* Left Column (60% / 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-space-lg">
            {/* High-Tech Overline Pill */}
            <div className="inline-flex items-center gap-3 w-fit px-3.5 py-1.5 rounded-full bg-surface-container border border-secondary/20 shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02B4FC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-label-nav text-xs font-bold text-secondary tracking-wide uppercase">
                Enterprise Systems Architecture
              </span>
              <span className="text-outline/40">•</span>
              <span className="font-caption text-xs font-semibold text-on-surface-variant">
                Zero-Downtime Migration
              </span>
            </div>

            {/* Main Headline with Kinetic Color Gradient */}
            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight">
              Transforming Legacy Core Systems into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-secondary to-[#02B4FC]">
                Intelligent Digital Architecture
              </span>
            </h1>

            {/* Subhead */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              We partner with enterprise leaders to re-architect technology
              stacks, modernize legacy infrastructure, and scale cloud
              intelligence with zero operational friction.
            </p>

            {/* Interactive Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center gap-2 font-label-action text-label-action text-on-primary bg-gradient-to-r from-primary-container via-secondary to-on-tertiary-container hover:opacity-95 px-8 py-4 rounded-[4px] shadow-[0_4px_20px_rgba(39,107,247,0.32)] hover:shadow-[0_6px_24px_rgba(39,107,247,0.45)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Consult Our Architects</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 font-label-action text-label-action text-primary-container bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/50 px-7 py-4 rounded-[4px] transition-all hover:border-secondary/40 shadow-xs"
              >
                <span>Explore Client Results</span>
                <span className="px-1.5 py-0.5 rounded bg-surface text-secondary text-[11px] font-mono font-bold">
                  40+ Deployments
                </span>
              </Link>
            </div>

            {/* Trust Bar with Interactive Tooltips */}
            <div className="pt-4 mt-2 border-t border-outline-variant/30">
              <span className="font-caption text-caption text-outline uppercase tracking-wider block mb-3 font-semibold">
                Selected Transformation Deployments
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {deploymentBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredBadge(badge.id)}
                    onMouseLeave={() => setHoveredBadge(null)}
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/30 hover:border-secondary/40 transition-all font-subhead-md text-xs font-semibold text-primary-container group-hover:text-secondary group-hover:bg-surface-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      <span>{badge.name}</span>
                    </div>

                    {/* Interactive Metric Popover on Badge Hover */}
                    {hoveredBadge === badge.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2.5 bg-primary-container text-on-primary text-xs rounded-lg shadow-xl border border-secondary/20 z-30 pointer-events-none animate-fadeIn text-center">
                        <span className="font-caption text-[#02B4FC] uppercase font-bold tracking-wider text-[10px] block">
                          VERIFIED BENCHMARK
                        </span>
                        <p className="mt-0.5 text-surface-container-high font-mono text-[11px]">
                          {badge.metric}
                        </p>
                        <div className="w-2 h-2 bg-primary-container rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Command Deck HUD (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4">
            {/* Background Architectural Angled Frame Plate */}
            <div className="absolute w-[330px] sm:w-[360px] h-[480px] bg-surface-container-low rounded-xl transform -rotate-6 translate-x-4 shadow-[0_20px_40px_rgba(3,8,104,0.08)] border border-outline-variant/40 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-36 h-36 bg-surface-container-high transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-4 left-6 text-xs text-outline/60 font-mono">
                ARCH // COCKPIT-SYS-v4.8
              </div>
            </div>

            {/* Primary Command Deck Card */}
            <div className="relative w-full max-w-[390px] bg-surface-container-lowest p-6 sm:p-7 rounded-xl shadow-[0_24px_50px_rgba(3,8,104,0.14)] z-10 border border-outline-variant/50 backdrop-blur-md">
              {/* Dynamic Diagonal Vector Ribbons */}
              <div className="absolute -top-6 -right-10 w-72 h-3 bg-gradient-to-r from-primary-container via-secondary-container to-[#02B4FC] transform rotate-[-28deg] shadow-[0_0_24px_rgba(2,180,252,0.65)] pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-10 w-72 h-2.5 bg-gradient-to-r from-secondary to-tertiary-fixed-dim transform rotate-[-28deg] pointer-events-none"></div>

              {/* Console Top Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/30">
                <div>
                  <span className="font-caption text-caption text-outline block uppercase tracking-wider font-semibold text-[11px]">
                    Active Pipeline
                  </span>
                  <span className="font-headline-md text-headline-md text-primary-container font-bold text-lg">
                    NEXA-CORE v4.8
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-lowest text-secondary text-xs font-semibold rounded shadow-2xs font-mono border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#02B4FC] animate-ping"></span>
                  <span>LIVE DUAL-SYNC</span>
                </div>
              </div>

              {/* Interactive Console Tabs */}
              <div className="flex items-center bg-surface-container-low p-1 rounded-lg mb-4 border border-outline-variant/20 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("telemetry")}
                  className={`flex-1 py-1.5 rounded text-center transition-all cursor-pointer ${
                    activeTab === "telemetry"
                      ? "bg-surface-container-lowest text-secondary shadow-xs font-bold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Telemetry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cluster")}
                  className={`flex-1 py-1.5 rounded text-center transition-all cursor-pointer ${
                    activeTab === "cluster"
                      ? "bg-surface-container-lowest text-secondary shadow-xs font-bold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Topology
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("stream")}
                  className={`flex-1 py-1.5 rounded text-center transition-all cursor-pointer ${
                    activeTab === "stream"
                      ? "bg-surface-container-lowest text-secondary shadow-xs font-bold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Raft Stream
                </button>
              </div>

              {/* Tab 1: Telemetry View */}
              {activeTab === "telemetry" && (
                <div className="space-y-3 animate-fadeIn">
                  {/* Decoupling & Latency Metric Card */}
                  <div className="p-3.5 bg-surface-container rounded-lg flex items-center justify-between border border-outline-variant/30 hover:border-secondary/40 transition-all">
                    <div>
                      <span className="font-caption text-caption text-on-surface-variant block font-medium">
                        Legacy Monolith Decoupling
                      </span>
                      <span className="font-headline-md text-headline-md text-primary-container font-bold text-xl">
                        98.4%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-caption text-caption text-secondary font-semibold">
                        Core Latency
                      </span>
                      <span className="font-subhead-md text-subhead-md text-primary-container font-bold block font-mono">
                        {latency}ms
                      </span>
                    </div>
                  </div>

                  {/* Realtime Processing Volume with Interactive Sparkline */}
                  <div className="p-3.5 bg-surface-container-low rounded-lg flex items-center justify-between border border-outline-variant/30">
                    <div>
                      <span className="font-caption text-caption text-on-surface-variant block font-medium">
                        Realtime Throughput
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-headline-md text-headline-md text-primary-container font-bold text-xl">
                          1.48B
                        </span>
                        <span className="font-caption text-caption text-outline">
                          records/day
                        </span>
                      </div>
                    </div>

                    {/* Gradient Sparkline SVG */}
                    <div className="relative">
                      <svg
                        className="w-28 h-11 text-secondary-container"
                        fill="none"
                        viewBox="0 0 100 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="heroSparklineGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0C5EEB"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#02B4FC"
                              stopOpacity="0.0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 32L18 28L36 34L54 18L72 22L90 6L100 12"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M0 32L18 28L36 34L54 18L72 22L90 6L100 12V40H0V32Z"
                          fill="url(#heroSparklineGrad)"
                        />
                        {/* Interactive Data Points */}
                        {sparklineData.map((d, i) => {
                          const x = (i / (sparklineData.length - 1)) * 100;
                          const y = 36 - (d.val - 1.0) * 50;
                          return (
                            <circle
                              key={i}
                              cx={x}
                              cy={y}
                              r={activeTooltipIndex === i ? 4 : 2.5}
                              className="fill-secondary hover:fill-[#02B4FC] cursor-pointer transition-all"
                              onMouseEnter={() => setActiveTooltipIndex(i)}
                              onMouseLeave={() => setActiveTooltipIndex(null)}
                            />
                          );
                        })}
                      </svg>
                      {activeTooltipIndex !== null && (
                        <div className="absolute -top-7 right-0 bg-primary-container text-on-primary text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap z-20 font-mono">
                          {sparklineData[activeTooltipIndex].label}:{" "}
                          {sparklineData[activeTooltipIndex].val}B/day
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tier-4 Zero Downtime Guarantee Box */}
                  <div className="p-3.5 bg-primary-container text-on-primary rounded-lg flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary-fixed-dim text-[22px]">
                        verified_user
                      </span>
                      <div>
                        <span className="font-caption text-caption text-surface-container-high block text-[11px]">
                          Zero-Downtime Migration
                        </span>
                        <span className="font-subhead-md text-subhead-md text-on-primary font-bold text-sm">
                          Tier-4 Multi-Cloud SLA
                        </span>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
                  </div>
                </div>
              )}

              {/* Tab 2: Topology View */}
              {activeTab === "cluster" && (
                <div className="p-3.5 bg-surface-container rounded-lg space-y-2.5 animate-fadeIn border border-outline-variant/30 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-surface-container-high">
                    <span className="font-bold text-primary">
                      Multi-Region Quorum
                    </span>
                    <span className="text-secondary font-mono font-bold">
                      5/5 Nodes Healthy
                    </span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px] text-on-surface-variant">
                    <div className="flex justify-between p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20">
                      <span className="text-primary font-semibold">
                        us-east-1a (Leader)
                      </span>
                      <span className="text-secondary font-bold">
                        RAFT 100% (0.1ms)
                      </span>
                    </div>
                    <div className="flex justify-between p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20">
                      <span className="text-primary font-semibold">
                        us-east-1b (Follower)
                      </span>
                      <span className="text-primary font-bold">SYNC 0.2ms</span>
                    </div>
                    <div className="flex justify-between p-1.5 rounded bg-surface-container-lowest border border-outline-variant/20">
                      <span className="text-primary font-semibold">
                        eu-west-1a (Edge Mesh)
                      </span>
                      <span className="text-primary font-bold">
                        WAN SYNC 18.2ms
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Raft Log Stream View */}
              {activeTab === "stream" && (
                <div className="p-3 bg-surface-container-high/60 rounded-lg space-y-1.5 animate-fadeIn border border-outline-variant/30 font-mono text-[10px] text-on-surface">
                  <div className="flex justify-between text-outline text-[9px] uppercase pb-1 border-b border-surface-container">
                    <span>Live WAL Commit Stream</span>
                    <span className="text-secondary font-bold animate-pulse">
                      STREAMING
                    </span>
                  </div>
                  {liveStreamLogs.map((log, idx) => (
                    <div key={idx} className="truncate text-on-surface-variant">
                      <span className="text-secondary font-bold">&gt;</span>{" "}
                      {log}
                    </div>
                  ))}
                </div>
              )}

              {/* Architectural Status Footer */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-outline border-t border-outline-variant/30 font-mono">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Cluster: US-EAST-PRIME
                </span>
                <span className="font-semibold text-secondary-container text-[11px]">
                  Consensus: RAFT-ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
