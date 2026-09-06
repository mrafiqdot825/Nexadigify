import { useState } from "react";

export function MetricsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "“NexaDigify rebuilt our transaction backbone in under 9 months without a single second of scheduled downtime. Their architectural discipline is peerless.”",
      author: "Chief Technology Officer",
      company: "Apex Global Payments Network",
    },
    {
      quote:
        "“The senior principal engineers from NexaDigify solved memory contention bottlenecks in our core clearing pipeline that two other consulting firms declared impossible.”",
      author: "VP of Enterprise Infrastructure",
      company: "Vanguard Institutional Services",
    },
    {
      quote:
        "“Deploying multi-region sovereign microservices while remaining 100% compliant with HIPAA and FHIR standards transformed our clinical delivery speed.”",
      author: "Chief Systems Architect",
      company: "Aethel Health Consortium",
    },
  ];

  return (
    <section
      id="insights"
      className="w-full bg-primary-container text-on-primary py-space-3xl relative overflow-hidden"
    >
      {/* Atmospheric subtle cyan glow vector in bottom corner */}
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-secondary-container opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-secondary opacity-15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Overline Header */}
        <div className="flex items-center gap-3 mb-space-xl">
          <span className="inline-block w-8 h-[2px] bg-tertiary-fixed-dim"></span>
          <span className="font-label-nav text-label-nav text-tertiary-fixed-dim font-semibold uppercase tracking-wider">
            Empirical Engineering Impact
          </span>
        </div>

        {/* 4-Column Balanced Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-space-3xl">
          <div className="flex flex-col gap-2 p-6 bg-surface-container-lowest/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tertiary-fixed-dim/40 transition-all group">
            <span className="font-display-hero text-display-hero text-on-primary font-extrabold tracking-tight group-hover:text-tertiary-fixed-dim transition-colors">
              99.999%
            </span>
            <span className="font-subhead-md text-subhead-md text-tertiary-fixed-dim font-semibold">
              Core System Uptime
            </span>
            <p className="font-caption text-caption text-surface-container-high leading-relaxed mt-1">
              Achieved consistently across 40+ complex enterprise core stack
              migrations.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-surface-container-lowest/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tertiary-fixed-dim/40 transition-all group">
            <span className="font-display-hero text-display-hero text-on-primary font-extrabold tracking-tight group-hover:text-tertiary-fixed-dim transition-colors">
              $420M+
            </span>
            <span className="font-subhead-md text-subhead-md text-tertiary-fixed-dim font-semibold">
              Infrastructure Savings
            </span>
            <p className="font-caption text-caption text-surface-container-high leading-relaxed mt-1">
              Verified cumulative OPEX reductions through intelligent compute
              right-sizing.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-surface-container-lowest/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tertiary-fixed-dim/40 transition-all group">
            <span className="font-display-hero text-display-hero text-on-primary font-extrabold tracking-tight group-hover:text-tertiary-fixed-dim transition-colors">
              3.8x
            </span>
            <span className="font-subhead-md text-subhead-md text-tertiary-fixed-dim font-semibold">
              Release Velocity
            </span>
            <p className="font-caption text-caption text-surface-container-high leading-relaxed mt-1">
              Accelerated CI/CD lead times from commit to sovereign production
              deployment.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-surface-container-lowest/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tertiary-fixed-dim/40 transition-all group">
            <span className="font-display-hero text-display-hero text-on-primary font-extrabold tracking-tight group-hover:text-tertiary-fixed-dim transition-colors">
              0 Breach
            </span>
            <span className="font-subhead-md text-subhead-md text-tertiary-fixed-dim font-semibold">
              Zero Downtime Security
            </span>
            <p className="font-caption text-caption text-surface-container-high leading-relaxed mt-1">
              Flawless execution during live cross-continental cloud cutovers.
            </p>
          </div>
        </div>

        {/* Supporting Client Quote / Testimonial Box */}
        <div className="bg-surface-container-lowest/10 p-6 sm:p-8 lg:p-10 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-white/10 backdrop-blur-sm relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-caption text-caption text-tertiary-fixed-dim block uppercase tracking-wider font-semibold">
                Enterprise Validation
              </span>
              <div className="flex items-center gap-1.5 ml-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Show quote ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeTestimonial === idx
                        ? "w-6 bg-[#02B4FC]"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="font-headline-md text-headline-md text-on-primary font-medium italic leading-relaxed min-h-[72px]">
              {testimonials[activeTestimonial].quote}
            </p>
          </div>

          <div className="flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-white/15 md:pl-8">
            <div className="font-subhead-md text-subhead-md text-on-primary font-bold">
              {testimonials[activeTestimonial].author}
            </div>
            <div className="font-caption text-caption text-surface-container-high">
              {testimonials[activeTestimonial].company}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
