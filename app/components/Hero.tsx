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
  showVisualization?: boolean;
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
  showVisualization,
}: HeroProps) {
  const renderVisualization = showVisualization ?? !compact;

  return (
    <section className="relative flex min-h-screen min-h-[100dvh] w-full flex-col justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      <AnimatedBackground variant="hero" />
      <div
        className={`relative z-10 mx-auto w-full px-6 lg:px-8 ${
          renderVisualization
            ? "grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2"
            : "max-w-4xl"
        }`}
      >
        <div className={renderVisualization ? undefined : "max-w-3xl"}>
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

        {renderVisualization && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVisualization />
          </motion.div>
        )}
      </div>

      {/* Subtle scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 select-none sm:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#718391]/80">
          Scroll
        </span>
        <div className="flex h-4 w-2.5 items-start justify-center rounded-full border border-[rgba(0,70,150,0.22)] p-0.5">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1 w-1 rounded-full bg-[#1e8eab]"
          />
        </div>
      </motion.div>
    </section>
  );
}
