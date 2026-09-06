import { useState } from "react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ClientStrip } from "../components/ClientStrip";
import { ServicesSection } from "../components/ServicesSection";
import { MetricsSection } from "../components/MetricsSection";
import { AboutSection } from "../components/AboutSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { ConsultationModal } from "../components/ConsultationModal";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "NexaDigify — Transforming Legacy Core Systems into Intelligent Digital Architecture",
    },
    {
      name: "description",
      content:
        "We partner with enterprise leaders to re-architect technology stacks, modernize legacy infrastructure, and scale cloud intelligence with zero operational friction.",
    },
    {
      name: "keywords",
      content:
        "enterprise architecture, legacy modernization, core decoupling, distributed cloud, eBPF, kubernetes, AI orchestration, zero trust",
    },
  ];
}

export default function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-container selection:text-white">
      {/* Sticky Header with Navigation & Quick Actions */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Areas */}
      <main className="w-full pt-20 bg-surface flex-1">
        {/* Section 1: Hero with Live Telemetry */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* Section 2: Institutional Client Strip */}
        <div className="relative">
          <ClientStrip />
          <div className="bg-surface-container-low pb-6 text-center border-b border-outline-variant/30">
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors group"
            >
              <span>
                Explore verified deployment case studies across global
                institutions
              </span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Section 3: Transformation Matrix (Services Overview & Interactive Blueprint) */}
        <div className="relative">
          <ServicesSection onOpenConsultation={handleOpenConsultation} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-4 mb-12 flex justify-end">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-label-action text-secondary font-bold hover:text-primary transition-colors text-sm group"
            >
              <span>
                Explore all 4 enterprise capabilities &amp; deployment
                specifications
              </span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Section 4: Empirical Metrics Band */}
        <MetricsSection />

        {/* Section 5: The Operating Model (About Overview) */}
        <div className="relative">
          <AboutSection />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-4 mb-12 flex justify-end">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-label-action text-secondary font-bold hover:text-primary transition-colors text-sm group"
            >
              <span>
                Read more about our senior principal engineering practice
              </span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Section 6: Featured Architecture Insights Preview */}
        <section className="w-full py-space-2xl bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 text-secondary font-mono text-xs font-semibold mb-2">
                  <span>SYSTEMS RESEARCH</span>
                  <span>•</span>
                  <span>TECHNICAL DISPATCHES</span>
                </div>
                <h2 className="font-headline-xl text-primary-container font-bold tracking-tight">
                  Architecture Papers &amp; Systems Insights
                </h2>
              </div>
              <Link
                to="/insights"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-primary transition-colors group"
              >
                <span>Browse all technical publications</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/insights"
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-outline mb-3 font-mono">
                    <span className="text-secondary font-bold">
                      CORE DECOUPLING
                    </span>
                    <span>12 min</span>
                  </div>
                  <h3 className="font-headline-md text-primary-container font-bold text-base mb-2 group-hover:text-secondary transition-colors">
                    Decoupling COBOL/AS400 Mainframes Without Transaction
                    Interruption
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    Monotonic log tailing, bidirectional shadow replication, and
                    canary cutover strategies for banking cores.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-xs font-semibold text-secondary">
                  <span>Read Paper</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </div>
              </Link>

              <Link
                to="/insights"
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-outline mb-3 font-mono">
                    <span className="text-secondary font-bold">
                      ENTERPRISE AI
                    </span>
                    <span>15 min</span>
                  </div>
                  <h3 className="font-headline-md text-primary-container font-bold text-base mb-2 group-hover:text-secondary transition-colors">
                    Deterministic LLM Orchestration in Regulated Banking
                    Topologies
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    Air-gapped semantic cache layers and deterministic
                    guardrails guaranteeing sub-50ms inference.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-xs font-semibold text-secondary">
                  <span>Read Paper</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </div>
              </Link>

              <Link
                to="/insights"
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 hover:border-secondary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-outline mb-3 font-mono">
                    <span className="text-secondary font-bold">
                      DISTRIBUTED SYSTEMS
                    </span>
                    <span>9 min</span>
                  </div>
                  <h3 className="font-headline-md text-primary-container font-bold text-base mb-2 group-hover:text-secondary transition-colors">
                    eBPF vs Envoy Sidecars: Benchmarking Zero-Trust Microsecond
                    Latencies
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    Empirical benchmarks evaluating packet overhead, CPU
                    throttling, and memory footprint across 10,000 pods.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-1 text-xs font-semibold text-secondary">
                  <span>Read Paper</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: Closing Call To Action Band */}
        <CtaSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
