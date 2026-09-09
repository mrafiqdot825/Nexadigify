import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { solutions } from "@/data/solutions";

const NAV_LINKS = [
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

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[55] bg-[#0b1f33]/30 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[rgba(0,70,150,0.1)] px-6 py-5">
              <span className="text-lg font-bold text-[#0b1f33]">Menu</span>
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#0b1f33]"
              >
                <X size={18} />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto px-6 py-6"
              aria-label="Mobile primary"
            >
              <button
                className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-[#0b1f33]"
                onClick={() => setSolutionsExpanded((v) => !v)}
                aria-expanded={solutionsExpanded}
              >
                Solutions
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${solutionsExpanded ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {solutionsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 py-1 pl-2">
                      {solutions.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/solutions/${s.slug}`}
                          onClick={onClose}
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#526575] transition-colors hover:bg-[#f3f8fa] hover:text-[#004696]"
                        >
                          {s.navTitle}
                        </Link>
                      ))}
                      <Link
                        to="/solutions"
                        onClick={onClose}
                        className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#004696] hover:bg-[#f3f8fa]"
                      >
                        View all solutions
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-2 h-px bg-[rgba(0,70,150,0.1)]" />

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className="block py-3 text-base font-semibold text-[#0b1f33] transition-colors hover:text-[#004696]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-[rgba(0,70,150,0.1)] p-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-[#004696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,70,150,0.25)] transition-colors hover:bg-[#1e8eab]"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
