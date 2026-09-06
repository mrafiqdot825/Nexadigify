import { useState } from "react";
import type { Route } from "./+types/contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Schedule Architectural Review — NexaDigify",
    },
    {
      name: "description",
      content:
        "Directly engage senior principal systems directors to evaluate stack bottlenecks, plan legacy cutovers, and design sovereign distributed architectures.",
    },
  ];
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    cloudProvider: "AWS & Hybrid Sovereign",
    reviewFormat: "45-Minute Virtual Whiteboard",
    scope: ["Core Decoupling"],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const scopes = [
    "Core Decoupling",
    "Distributed Cloud Topologies",
    "Enterprise AI Pipelines",
    "DevSecOps & Zero Trust",
    "High-Throughput Streaming",
    "Air-Gapped Sovereign Hosting",
  ];

  const toggleScope = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      scope: prev.scope.includes(item)
        ? prev.scope.filter((s) => s !== item)
        : [...prev.scope, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 850);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-container selection:text-white">
      <Header />

      <main className="w-full pt-20 bg-surface flex-1">
        {/* Page Hero */}
        <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-2xl border-b border-outline-variant/30">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-pattern" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-8 h-[2px] bg-secondary"></span>
              <span className="font-label-nav text-label-nav text-secondary font-semibold uppercase tracking-wide">
                Direct Principal Engagement
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-primary-container tracking-tight max-w-4xl">
              Schedule Architectural Review
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              Engage directly with our senior systems directors to evaluate core
              bottlenecks, unblock complex architectural deadlocks, and
              formulate concrete zero-downtime roadmaps.
            </p>
          </div>
        </section>

        {/* Contact Form & Global Office Hubs */}
        <section className="w-full py-space-3xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Column (7 cols) */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-10 rounded-xl border border-outline-variant/40 shadow-[0_12px_32px_rgba(3,8,104,0.06)]">
                {isSuccess ? (
                  <div className="py-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-secondary-container/15 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-secondary text-[36px]">
                        verified
                      </span>
                    </div>
                    <span className="font-caption text-secondary uppercase tracking-widest font-bold mb-2">
                      Review Dispatched Successfully
                    </span>
                    <h2 className="font-headline-lg text-primary-container font-bold mb-3">
                      Session Reference: #NX-ARCH-9904
                    </h2>
                    <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-8">
                      Thank you,{" "}
                      <span className="font-semibold text-primary">
                        {formData.name}
                      </span>
                      . A Senior Principal Systems Director has received your
                      specifications for {formData.company}. We will dispatch a
                      calendar invitation within 4 business hours.
                    </p>

                    <div className="w-full bg-surface-container-low p-5 rounded-lg text-left text-xs space-y-2.5 mb-8 border border-outline-variant/30">
                      <div className="flex justify-between">
                        <span className="text-outline">Assigned Lead:</span>
                        <span className="font-semibold text-primary">
                          Dr. Ronald Vance, Principal Architect
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-outline">
                          Direct Dispatch Channel:
                        </span>
                        <span className="font-semibold text-secondary">
                          enterprise@nexadigify.com
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-outline">Selected Format:</span>
                        <span className="font-semibold text-primary">
                          {formData.reviewFormat}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="font-label-action text-on-primary bg-primary-container hover:bg-secondary px-8 py-3.5 rounded-lg transition-colors"
                    >
                      Submit Another Architecture Request
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="font-headline-md text-primary-container font-bold mb-2">
                      Request Technical Whiteboard Session
                    </h2>
                    <p className="text-xs text-on-surface-variant mb-6">
                      All submissions are routed straight to principal
                      engineers. Zero sales representatives or junior account
                      handlers.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Alex Morgan"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                          />
                        </div>
                        <div>
                          <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                            Enterprise Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="alex.morgan@enterprise.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                            Company / Organization *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Global Financial Corp"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                          />
                        </div>
                        <div>
                          <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                            Direct Phone (Optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                            Target Deployment Cloud
                          </label>
                          <select
                            value={formData.cloudProvider}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                cloudProvider: e.target.value,
                              })
                            }
                            className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                          >
                            <option value="AWS & Hybrid Sovereign">
                              AWS & Hybrid Sovereign
                            </option>
                            <option value="Google Cloud (GCP)">
                              Google Cloud (GCP)
                            </option>
                            <option value="Microsoft Azure">
                              Microsoft Azure
                            </option>
                            <option value="On-Premise Air-Gapped">
                              On-Premise Air-Gapped
                            </option>
                            <option value="Multi-Cloud / Other">
                              Multi-Cloud / Heterogeneous
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                            Preferred Review Format
                          </label>
                          <select
                            value={formData.reviewFormat}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                reviewFormat: e.target.value,
                              })
                            }
                            className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                          >
                            <option value="45-Minute Virtual Whiteboard">
                              45-Minute Virtual Whiteboard
                            </option>
                            <option value="On-Site Architecture Intensive">
                              On-Site Architecture Intensive
                            </option>
                            <option value="Asynchronous Codebase Audit">
                              Asynchronous Codebase Audit
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-label-nav text-xs text-on-surface-variant mb-2 font-semibold">
                          Modernization Focus Areas
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {scopes.map((scope) => {
                            const isSelected = formData.scope.includes(scope);
                            return (
                              <button
                                type="button"
                                key={scope}
                                onClick={() => toggleScope(scope)}
                                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all border cursor-pointer ${
                                  isSelected
                                    ? "bg-secondary/10 text-secondary border-secondary shadow-xs"
                                    : "bg-surface-container-low text-on-surface-variant border-transparent hover:border-outline-variant"
                                }`}
                              >
                                {isSelected && "✓ "}
                                {scope}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                          Current Bottleneck / Stack Context
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Briefly describe your current architecture (e.g. monolithic core, COBOL/AS400, database lock contention, p99 latency spikes, compliance mandates)..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full p-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 font-label-action text-label-action text-on-primary bg-gradient-to-r from-primary-container via-secondary to-[#02B4FC] hover:opacity-95 py-4 rounded-lg shadow-[0_4px_16px_rgba(12,94,235,0.25)] transition-all cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Dispatching to Systems Director...</span>
                          </>
                        ) : (
                          <>
                            <span>Initialize Architectural Review</span>
                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Right Column: Direct Info & Hubs (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Principal SLA Banner */}
                <div className="p-6 bg-primary-container text-on-primary rounded-xl shadow-md border border-secondary/20">
                  <span className="font-caption text-tertiary-fixed-dim uppercase font-bold tracking-wider block mb-1 font-mono">
                    DISPATCH SLA GUARANTEE
                  </span>
                  <h3 className="font-headline-md font-bold mb-2">
                    Direct Principal Access in &lt; 4 Hours
                  </h3>
                  <p className="font-body-md text-surface-container-high text-xs leading-relaxed">
                    When your team requests an architectural review, you engage
                    directly with a Senior Principal Systems Director who has
                    executed zero-downtime cuts at global scale.
                  </p>
                </div>

                {/* Direct Principal Lines */}
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-4 text-sm">
                  <h3 className="font-bold text-primary font-headline-md text-base">
                    Direct Communication Lines
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">
                        email
                      </span>
                      <div>
                        <span className="text-outline text-xs block">
                          Architecture Inquiries:
                        </span>
                        <a
                          href="mailto:enterprise@nexadigify.com"
                          className="font-semibold text-primary hover:underline"
                        >
                          enterprise@nexadigify.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">
                        security
                      </span>
                      <div>
                        <span className="text-outline text-xs block">
                          Zero-Trust Security Practice:
                        </span>
                        <a
                          href="mailto:security@nexadigify.com"
                          className="font-semibold text-primary hover:underline"
                        >
                          security@nexadigify.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">
                        phone_in_talk
                      </span>
                      <div>
                        <span className="text-outline text-xs block">
                          Enterprise Hotline:
                        </span>
                        <span className="font-semibold text-primary font-mono">
                          +1 (800) 840-NEXA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Engineering Nodes */}
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-3 text-sm">
                  <h3 className="font-bold text-primary font-headline-md text-base">
                    Global Engineering Topologies
                  </h3>
                  <div className="space-y-2 text-xs text-on-surface-variant font-mono">
                    <div className="flex justify-between py-1 border-b border-surface-container-high">
                      <span>New York Prime (HQ)</span>
                      <span className="text-secondary font-semibold">
                        Americas Control Plane
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-surface-container-high">
                      <span>London Ingress Hub</span>
                      <span className="text-secondary font-semibold">
                        EMEA Edge Mesh
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-surface-container-high">
                      <span>Zurich Sovereign Vault</span>
                      <span className="text-secondary font-semibold">
                        Air-Gapped FinTech
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Singapore Node</span>
                      <span className="text-secondary font-semibold">
                        APAC Anycast Cluster
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
