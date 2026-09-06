import { useState } from "react";

export function ClientStrip() {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  const clients = [
    {
      id: "vanguard",
      name: "VANGUARD-CORP",
      icon: "account_balance",
      stats: "18M daily trades migrated to zero-loss event stream",
    },
    {
      id: "aethel",
      name: "AETHEL HEALTH",
      icon: "local_hospital",
      stats: "HIPAA & FHIR sub-second clinical records federation",
    },
    {
      id: "apex",
      name: "APEX GLOBAL PAY",
      icon: "swap_horiz",
      stats: "45,000 TPS payment gateway with 99.999% SLA",
    },
    {
      id: "orbital",
      name: "ORBITAL FREIGHT",
      icon: "flight_takeoff",
      stats: "Cross-oceanic supply chain eBPF mesh orchestration",
    },
  ];

  return (
    <section
      id="work"
      className="w-full bg-surface-container-low py-space-xl border-y border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/4">
            <span className="font-caption text-caption text-outline uppercase tracking-wider font-semibold block">
              Institutional Scale
            </span>
            <p className="font-subhead-md text-subhead-md text-primary-container font-bold">
              Trusted in critical-path infrastructure
            </p>
          </div>

          <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center w-full">
            {clients.map((c) => (
              <div
                key={c.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredClient(c.id)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <div className="flex items-center gap-2 text-on-surface-variant font-bold text-base sm:text-lg tracking-tight group-hover:text-primary-container transition-colors py-2 px-3 rounded-lg group-hover:bg-surface-container-high/60">
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:scale-110">
                    {c.icon}
                  </span>
                  <span>{c.name}</span>
                </div>

                {/* Interactive Tooltip Card */}
                {hoveredClient === c.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 bg-primary-container text-on-primary text-xs rounded-lg shadow-xl border border-secondary/20 z-30 pointer-events-none animate-fadeIn text-center">
                    <p className="font-semibold text-tertiary-fixed-dim text-[11px] mb-0.5">
                      VERIFIED DEPLOYMENT
                    </p>
                    <p className="leading-snug text-surface-container-high">
                      {c.stats}
                    </p>
                    <div className="w-2 h-2 bg-primary-container rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
