import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  svgSrc?: string;
  to?: string;
  index?: number;
}

export function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  svgSrc,
  to = "/solutions",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-7 shadow-[0_2px_16px_rgba(0,70,150,0.04)] transition-all duration-300 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_24px_48px_rgba(0,70,150,0.12)]"
    >
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,70,150,0.05), rgba(30,142,171,0.06))",
        }}
      />
      <div>
        {svgSrc && (
          <div className="mb-5 h-40 w-full overflow-hidden rounded-xl bg-[#0b0f1f] shadow-sm">
            <img
              src={svgSrc}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-bold tracking-wide text-[#a8bccb]">
            {number}
          </span>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3f8fa] text-[#004696] transition-all duration-300 group-hover:bg-[#004696] group-hover:text-white">
            <Icon size={20} strokeWidth={1.75} />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#0b1f33]">{title}</h3>
        <p className="mb-6 text-[15px] leading-relaxed text-[#526575]">
          {description}
        </p>
      </div>
      <Link
        to={to}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e8eab] transition-all duration-300 group-hover:translate-x-1"
      >
        Learn more <ArrowUpRight size={15} />
      </Link>
    </motion.div>
  );
}
