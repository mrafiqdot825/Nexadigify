import { useState, useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    cloudProvider: "AWS & Hybrid",
    scope: ["Core Decoupling"],
    timeline: "Immediate (< 60 days)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scopes = [
    "Core Decoupling",
    "Distributed Cloud Topologies",
    "Enterprise AI Pipelines",
    "DevSecOps & Zero Trust",
    "High-Throughput Streaming",
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
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/60 backdrop-blur-md transition-all animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-[0_24px_50px_rgba(3,8,104,0.25)] border border-outline-variant/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary-container via-secondary-container to-[#02B4FC]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-secondary-container/10 border border-secondary-container/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-[36px]">
                verified
              </span>
            </div>
            <span className="font-caption text-secondary uppercase tracking-widest font-bold mb-2">
              Architecture Review Scheduled
            </span>
            <h3 className="font-headline-lg text-primary-container font-bold mb-3">
              Session Confirmed: Ref #NX-ARCH-8492
            </h3>
            <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-8">
              Thank you,{" "}
              <span className="font-semibold text-primary">
                {formData.name}
              </span>
              . A Senior Principal Systems Director from our Enterprise
              Engineering Practice will review your modernization scope (
              {formData.company}) and send a calendar invitation within 4
              business hours.
            </p>

            <div className="w-full bg-surface-container-low p-4 rounded-lg text-left text-xs space-y-2 mb-8 border border-outline-variant/30">
              <div className="flex justify-between">
                <span className="text-outline">Assigned Lead:</span>
                <span className="font-semibold text-primary">
                  Dr. Ronald Vance, Principal Architect
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Direct Dispatch:</span>
                <span className="font-semibold text-secondary">
                  enterprise@nexadigify.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Review Format:</span>
                <span className="font-semibold text-primary">
                  Interactive 45-Min Systems Whiteboard
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="font-label-action text-on-primary bg-primary-container hover:bg-secondary px-8 py-3 rounded-lg transition-colors shadow-sm"
            >
              Return to Architecture Portal
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-6 h-[2px] bg-secondary"></span>
                <span className="font-caption text-secondary uppercase tracking-wider font-semibold">
                  Principal Advisory Engagement
                </span>
              </div>
              <h2 className="font-headline-lg text-primary-container font-bold tracking-tight">
                Schedule Architectural Review
              </h2>
              <p className="font-body-md text-on-surface-variant mt-1 text-sm leading-relaxed">
                Direct engagement with our senior systems directors to diagnose
                bottlenecks, eliminate technical deadlocks, and formulate
                zero-downtime cutover roadmaps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Chen"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-nav text-xs text-on-surface-variant mb-1 font-semibold">
                    Enterprise Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="s.chen@enterprise.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
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
                    placeholder="e.g., Global Financial Holdings"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                  />
                </div>
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
                    className="w-full h-11 px-3.5 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                  >
                    <option value="AWS & Hybrid">AWS & Hybrid Sovereign</option>
                    <option value="Google Cloud (GCP)">
                      Google Cloud (GCP)
                    </option>
                    <option value="Microsoft Azure">Microsoft Azure</option>
                    <option value="Multi-Cloud / On-Premise">
                      Multi-Cloud / On-Premise Air-Gapped
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-nav text-xs text-on-surface-variant mb-2 font-semibold">
                  Modernization Focus Areas (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {scopes.map((scope) => {
                    const isSelected = formData.scope.includes(scope);
                    return (
                      <button
                        type="button"
                        key={scope}
                        onClick={() => toggleScope(scope)}
                        className={`px-3 py-1.5 rounded text-xs font-semibold transition-all border ${
                          isSelected
                            ? "bg-secondary/10 text-secondary border-secondary shadow-sm"
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
                  Current Architecture Bottleneck / Context
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your current stack (e.g. monolithic core, latency constraints, high database contention, compliance requirements)..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 rounded bg-surface border border-outline-variant/70 text-on-surface text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-outline-variant/30 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-label-action text-on-surface-variant hover:text-primary px-4 py-2 text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 font-label-action text-label-action text-on-primary bg-gradient-to-r from-primary-container via-secondary to-[#02B4FC] hover:opacity-95 px-6 py-3 rounded-lg shadow-[0_2px_10px_rgba(12,94,235,0.25)] transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Dispatching Request...
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
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
