import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  svgSrc?: string;
  index?: number;
}

export function FeatureCard({
  number,
  title,
  description,
  icon: Icon,
  svgSrc,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="group relative rounded-[28px] border border-[rgba(0,70,150,0.1)] bg-gradient-to-b from-white to-[#f7fafc] p-10 transition-all duration-300 hover:border-[rgba(30,142,171,0.35)] hover:shadow-[0_20px_40px_rgba(0,70,150,0.08)]"
    >
      <span className="text-6xl font-extrabold tracking-tighter text-[rgba(0,70,150,0.08)]">
        {number}
      </span>
      <div className="-mt-8 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 text-[#1e8eab] shadow-[0_10px_24px_rgba(0,70,150,0.1)] transition-transform duration-300 group-hover:scale-105">
        {svgSrc ? (
          <img src={svgSrc} alt={title} className="h-12 w-12 object-contain" />
        ) : Icon ? (
          <Icon size={28} strokeWidth={1.6} />
        ) : null}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-[#0b1f33]">{title}</h3>
      <p className="text-[15px] leading-relaxed text-[#526575]">
        {description}
      </p>
    </motion.div>
  );
}
