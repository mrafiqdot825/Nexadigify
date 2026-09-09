import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";

export function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 top-full z-40 w-[min(880px,92vw)] -translate-x-1/2 pt-4"
    >
      <div className="overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-white/95 p-3 shadow-[0_28px_64px_rgba(0,70,150,0.16)] backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/solutions/${s.slug}`}
                onClick={onNavigate}
                className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-[rgba(0,70,150,0.12)] hover:bg-[#f3f8fa]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3f8fa] text-[#004696] transition-colors duration-200 group-hover:bg-[#1e8eab] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#0b1f33]">
                    {s.navTitle}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-[#718391]">
                    {s.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-2xl bg-[#f7fafc] px-5 py-4">
          <p className="text-sm font-medium text-[#526575]">
            See every service we offer, in depth.
          </p>
          <Link
            to="/solutions"
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696] transition-transform duration-200 hover:translate-x-0.5"
          >
            View all solutions <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
