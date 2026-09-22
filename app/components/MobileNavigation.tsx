import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { solutions } from "@/data/solutions";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
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
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 lg:hidden">
          {/* Backdrop overlay */}
          <motion.div
            className="absolute inset-0 bg-[#0b1f33]/30 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dropdown Panel attached below Navbar */}
          <motion.div
            className="relative z-10 flex max-h-[calc(100dvh-5rem)] w-full flex-col overflow-y-auto overscroll-contain rounded-b-3xl border-b border-[rgba(0,70,150,0.12)] bg-white/95 px-4 pt-3 pb-6 shadow-[0_24px_48px_rgba(0,70,150,0.14)] backdrop-blur-xl sm:px-6"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav
              className="flex flex-col space-y-1.5"
              aria-label="Mobile primary navigation"
            >
              {/* Home */}
              <NavLink
                to="/"
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-3.5 py-2.5 text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#f3f8fa] text-[#004696]"
                      : "text-[#0b1f33] hover:bg-[#f3f8fa] hover:text-[#004696]"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Solutions Accordion Dropdown */}
              <div className="rounded-2xl border border-[rgba(0,70,150,0.1)] bg-[#f7fafc]/80 p-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-base font-semibold text-[#0b1f33] transition-colors hover:text-[#004696]"
                  onClick={() => setSolutionsExpanded((v) => !v)}
                  aria-expanded={solutionsExpanded}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#526575] transition-transform duration-300 ${
                      solutionsExpanded ? "rotate-180 text-[#004696]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {solutionsExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
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
                                `group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
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
                          className="mt-1 flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#004696] hover:bg-white"
                        >
                          <span>View all solutions</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Main Links */}
              {NAV_LINKS.slice(1).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-3.5 py-2.5 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-[#f3f8fa] text-[#004696]"
                        : "text-[#0b1f33] hover:bg-[#f3f8fa] hover:text-[#004696]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#004696] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,70,150,0.25)] transition-colors hover:bg-[#1e8eab]"
                >
                  Let's Talk
                  <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
