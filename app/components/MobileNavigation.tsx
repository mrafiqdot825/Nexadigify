import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { solutions } from "@/data/solutions";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
];

export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[55] bg-[#0b1f33]/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed inset-y-0 right-0 z-[60] flex h-full h-[100dvh] max-h-[100dvh] w-full max-w-[340px] sm:max-w-sm flex-col bg-white shadow-2xl overscroll-contain lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header with Logo and Close */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-[rgba(0,70,150,0.1)] px-5 sm:px-6">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-2"
                aria-label="Nexadigify Home"
              >
                <img src="/Logo.png" alt="Nexadigify" className="h-8 w-auto" />
                <span className="flex items-center text-xl font-extrabold tracking-tight select-none">
                  <span className="text-[#004696]">Nexa</span>
                  <span className="text-[#1e8eab]">digify</span>
                </span>
              </Link>

              <button
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#0b1f33] transition-colors hover:bg-[#f3f8fa]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Nav Area */}
            <nav
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6"
              aria-label="Mobile primary navigation"
            >
              <div className="flex flex-col space-y-1">
                {/* Home Link */}
                <NavLink
                  to="/"
                  end
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-3 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-[#f3f8fa] text-[#004696]"
                        : "text-[#0b1f33] hover:bg-[#f3f8fa] hover:text-[#004696]"
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* Solutions Accordion */}
                <div className="rounded-2xl border border-[rgba(0,70,150,0.1)] bg-[#f7fafc]/70 p-2">
                  <button
                    className="flex w-full items-center justify-between px-3 py-2.5 text-left text-base font-semibold text-[#0b1f33] transition-colors hover:text-[#004696]"
                    onClick={() => setSolutionsExpanded((v) => !v)}
                    aria-expanded={solutionsExpanded}
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#526575] transition-transform duration-300 ${
                        solutionsExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {solutionsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 flex flex-col space-y-1 border-t border-[rgba(0,70,150,0.08)] pt-2">
                          {solutions.map((s) => {
                            const Icon = s.icon;
                            return (
                              <NavLink
                                key={s.slug}
                                to={`/solutions/${s.slug}`}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                                    isActive
                                      ? "bg-white text-[#004696] shadow-xs"
                                      : "text-[#526575] hover:bg-white hover:text-[#004696]"
                                  }`
                                }
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,70,150,0.1)] bg-white text-[#004696] transition-colors group-hover:bg-[#1e8eab] group-hover:text-white">
                                  <Icon size={16} />
                                </div>
                                <span className="truncate">{s.navTitle}</span>
                              </NavLink>
                            );
                          })}

                          <Link
                            to="/solutions"
                            onClick={onClose}
                            className="mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#004696] hover:bg-white"
                          >
                            <span>View all solutions</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rest of Navigation Links */}
                {NAV_LINKS.slice(1).map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center rounded-xl px-3 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-[#f3f8fa] text-[#004696]"
                          : "text-[#0b1f33] hover:bg-[#f3f8fa] hover:text-[#004696]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* Pinned Bottom CTA */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
