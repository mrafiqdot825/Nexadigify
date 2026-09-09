import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { HeroVisualization } from "./HeroVisualization";

function HeroButton({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: ReactNode;
}) {
  if (to.startsWith("#")) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

interface HeroProps {
  eyebrow?: string;
  titleLines: (string | { text: string; highlight?: boolean })[][];
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  compact?: boolean;
}

export function Hero({
  eyebrow,
  titleLines,
  description,
  primaryLabel = "Get Started",
  primaryTo = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryTo = "/solutions",
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "pt-36 pb-16" : "pt-40 pb-24 sm:pt-48 sm:pb-32"}`}
    >
      <AnimatedBackground variant="hero" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696] backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1e8eab]" />
              {eyebrow}
            </motion.span>
          )}

          <h1 className="text-[clamp(2.4rem,5.4vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b1f33]">
            {titleLines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {line.map((word, j) => {
                  const isHighlight =
                    typeof word === "object" && word.highlight;
                  const text = typeof word === "string" ? word : word.text;
                  return (
                    <span
                      key={j}
                      className={
                        isHighlight ? "text-gradient-brand" : undefined
                      }
                    >
                      {text}{" "}
                    </span>
                  );
                })}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-[#526575]"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <HeroButton
              to={primaryTo}
              className="group inline-flex items-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] hover:shadow-[0_16px_32px_rgba(30,142,171,0.32)]"
            >
              {primaryLabel}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </HeroButton>
            <HeroButton
              to={secondaryTo}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.28)] bg-white px-7 py-3.5 text-sm font-semibold text-[#004696] transition-all duration-300 hover:border-[#1e8eab] hover:bg-[#f3f8fa]"
            >
              {secondaryLabel}
            </HeroButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisualization />
        </motion.div>
      </div>
    </section>
  );
}
