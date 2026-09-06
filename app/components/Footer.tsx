import { useState } from "react";
import { Link } from "react-router";

export function Footer() {
  const [showStatusModal, setShowStatusModal] = useState(false);

  return (
    <footer className="w-full bg-primary-container text-on-primary mt-space-3xl relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-3xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-xl pb-space-2xl border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary">
                NexaDigify
              </span>
            </Link>
            <p className="font-body-md text-body-md text-surface-container-high max-w-sm leading-relaxed">
              Engineering digital resilience and velocity for modern enterprise.
            </p>

            {/* Interactive Operational Status Indicator */}
            <div className="relative mt-space-xs">
              <button
                type="button"
                onClick={() => setShowStatusModal(!showStatusModal)}
                className="flex items-center gap-3 py-1.5 px-3 rounded bg-surface-container-lowest/10 hover:bg-surface-container-lowest/15 transition-colors cursor-pointer"
              >
                <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[#02B4FC] animate-pulse"></span>
                <span className="font-caption text-caption text-surface-container-high tracking-wider uppercase font-semibold text-left">
                  All Enterprise Systems Operational
                </span>
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                  info
                </span>
              </button>

              {showStatusModal && (
                <div className="absolute bottom-full left-0 mb-3 w-72 p-3 bg-surface-container-lowest text-on-surface rounded-lg shadow-2xl border border-outline-variant/40 z-30 animate-fadeIn text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-surface-container-high font-semibold">
                    <span className="text-primary font-bold">
                      Network Infrastructure
                    </span>
                    <span className="text-secondary font-mono">100.0%</span>
                  </div>
                  <div className="space-y-1.5 pt-2 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-outline">
                        US-East Control Plane
                      </span>
                      <span className="text-secondary font-semibold">
                        Operational
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-outline">EU-West Ingress Mesh</span>
                      <span className="text-secondary font-semibold">
                        Operational
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-outline">APAC Edge Anycast</span>
                      <span className="text-secondary font-semibold">
                        Operational
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Capabilities */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-subhead-md text-subhead-md text-on-primary font-bold uppercase tracking-wider text-xs">
              Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/services">Cloud Architecture</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/services">Data &amp; Intelligence</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/services">Cyber Defense</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/services">Platform Modernization</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-subhead-md text-subhead-md text-on-primary font-bold uppercase tracking-wider text-xs">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/work">Financial Services</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/work">Healthcare Tech</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/work">Industrial IoT</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/work">Enterprise SaaS</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-subhead-md text-subhead-md text-on-primary font-bold uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/about">About NexaDigify</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/insights">Insights &amp; Papers</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/about">Leadership</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/contact">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-subhead-md text-subhead-md text-on-primary font-bold uppercase tracking-wider text-xs">
              Legal &amp; Trust
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/about">Privacy Policy</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/about">Terms of Service</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/services">Security &amp; Trust</Link>
              </li>
              <li className="font-label-nav text-label-nav text-surface-container-high hover:text-on-primary transition-colors">
                <Link to="/contact">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-caption text-caption text-surface-container-high text-center md:text-left">
            © 2025 NexaDigify Inc. All rights reserved. Precision architecture
            for enterprise transformation.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-caption text-caption text-surface-container-high flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                verified
              </span>
              SOC2 Type II Certified
            </span>
            <span className="font-caption text-caption text-surface-container-high flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                security
              </span>
              ISO 27001 Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
