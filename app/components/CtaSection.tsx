interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export function CtaSection({ onOpenConsultation }: CtaSectionProps) {
  return (
    <section
      id="contact"
      className="w-full bg-surface-container-low relative py-space-3xl overflow-hidden"
    >
      {/* Diagonal Brand Accent Ribbon across the top edge */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-secondary to-on-tertiary-container" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-surface-container-lowest p-8 lg:p-16 rounded-lg shadow-[0_16px_36px_rgba(3,8,104,0.06)] flex flex-col lg:flex-row items-center justify-between gap-10 border border-outline-variant/30">
          <div className="max-w-2xl">
            <span className="font-caption text-caption text-secondary uppercase tracking-wider font-semibold block mb-3">
              Accelerate Deployment
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary-container font-bold tracking-tight mb-4">
              Ready to accelerate your technological transformation?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Schedule an intensive architectural whiteboard session with our
              senior systems directors. We evaluate your core dependencies and
              present a concrete modernization roadmap.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full lg:w-auto inline-flex items-center justify-center font-label-action text-label-action text-on-primary bg-primary-container hover:bg-secondary px-8 py-4 rounded-[4px] shadow-[0_4px_16px_rgba(3,8,104,0.2)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Schedule Architectural Review
            </button>

            <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
              <span>Direct Principal Line:</span>
              <a
                className="text-secondary font-semibold hover:underline"
                href="mailto:enterprise@nexadigify.com"
              >
                enterprise@nexadigify.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
