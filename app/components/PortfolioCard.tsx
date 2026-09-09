import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface PortfolioCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  index?: number;
}

const VISUAL_SEEDS = [
  { r1: 30, r2: 60, r3: 85 },
  { r1: 40, r2: 65, r3: 90 },
  { r1: 25, r2: 55, r3: 80 },
];

export function PortfolioCard({
  slug,
  category,
  title,
  description,
  image,
  index = 0,
}: PortfolioCardProps) {
  const seed = VISUAL_SEEDS[index % VISUAL_SEEDS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
    >
      <Link
        to={`/portfolio/${slug}`}
        className="group block overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_28px_56px_rgba(0,70,150,0.14)]"
      >
        <div className="relative h-56 w-full overflow-hidden bg-[#0a0f1d]">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(0,70,150,0.22), transparent ${seed.r1}%), radial-gradient(circle at 75% 65%, rgba(30,142,171,0.24), transparent ${seed.r2}%), linear-gradient(135deg, #eef6fa, #f7fafc)`,
                }}
              />
              <svg
                className="absolute inset-0 h-full w-full opacity-70"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <circle cx={seed.r1} cy="30" r="0.6" fill="#004696" />
                <circle cx={seed.r2} cy="60" r="0.6" fill="#1e8eab" />
                <circle cx={seed.r3} cy="40" r="0.6" fill="#004696" />
                <line
                  x1={seed.r1}
                  y1="30"
                  x2={seed.r2}
                  y2="60"
                  stroke="rgba(0,70,150,0.3)"
                  strokeWidth="0.2"
                />
                <line
                  x1={seed.r2}
                  y1="60"
                  x2={seed.r3}
                  y2="40"
                  stroke="rgba(30,142,171,0.3)"
                  strokeWidth="0.2"
                />
              </svg>
            </>
          )}
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#004696] opacity-0 shadow-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowUpRight size={16} />
          </div>
        </div>
        <div className="p-7">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#1e8eab]">
            {category}
          </span>
          <h3 className="mt-2 mb-2 text-lg font-bold text-[#0b1f33]">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-[#526575]">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696]">
            View Case Study{" "}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
