import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface SolutionCardProps {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  svgIllustration?: string;
  index?: number;
}

export function SolutionCard({
  slug,
  title,
  description,
  icon: Icon,
  svgIllustration,
  index = 0,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
    >
      <Link
        to={`/solutions/${slug}`}
        className="group block h-full overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_24px_48px_rgba(0,70,150,0.12)]"
      >
        {svgIllustration && (
          <div className="mb-5 h-40 w-full overflow-hidden rounded-xl bg-[#0b0f1f] shadow-sm">
            <img
              src={svgIllustration}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#004696] to-[#1e8eab] text-white shadow-[0_6px_16px_rgba(0,70,150,0.2)]">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <h3 className="text-lg font-bold text-[#0b1f33]">{title}</h3>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-[#526575]">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696] transition-transform duration-300 group-hover:translate-x-1">
          Explore <ArrowRight size={15} />
        </span>
      </Link>
    </motion.div>
  );
}
