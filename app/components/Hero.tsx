import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { HeroVisualization } from "./HeroVisualization";
import { TechIconsMarquee } from "./TechIconsMarquee";

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
  showTechMarquee?: boolean;
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
  showTechMarquee,
}: HeroProps) {
  const renderVisualization = showVisualization ?? !compact;
  const renderTechMarquee = showTechMarquee ?? !compact;

  return (
    <section className="relative flex w-full flex-col overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14 lg:min-h-screen lg:min-h-[100dvh] lg:justify-center lg:pt-32 lg:pb-20">
      <AnimatedBackground variant="hero" />
      <div
        className={`relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 ${
          renderVisualization
            ? "grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16"
            : "max-w-4xl"
        }`}
      >
        <div className={renderVisualization ? undefined : "max-w-3xl"}>
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(0,70,150,0.2)] bg-white/95 px-5 py-2.5 text-sm sm:text-base font-bold uppercase tracking-[0.14em] text-[#004696] shadow-xs backdrop-blur-md"
            >
              <span className="h-3 w-3 rounded-full bg-[#1e8eab] animate-pulse" />
              {eyebrow}
            </motion.span>
          )}

          <h1 className="text-[2.85rem] min-[380px]:text-[3.35rem] min-[430px]:text-[3.75rem] sm:text-[4rem] lg:text-[4.4rem] font-black leading-[1.04] tracking-tight text-[#0b1f33] break-words">
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
            className="mt-6 sm:mt-8 max-w-xl text-[19px] min-[380px]:text-[21px] sm:text-[22px] font-normal leading-relaxed text-[#3e5263]"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 sm:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <HeroButton
              to={primaryTo}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#004696] px-9 py-5 text-[18px] sm:text-[19px] font-bold text-white shadow-[0_16px_36px_rgba(0,70,150,0.36)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] hover:shadow-[0_20px_40px_rgba(30,142,171,0.4)] active:scale-[0.98]"
            >
              {primaryLabel}
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </HeroButton>
            <HeroButton
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[rgba(0,70,150,0.26)] bg-white px-9 py-5 text-[18px] sm:text-[19px] font-bold text-[#004696] shadow-sm backdrop-blur-xs transition-all duration-300 hover:border-[#1e8eab] hover:bg-[#f3f8fa] active:scale-[0.98]"
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

      {renderTechMarquee && (
        <div className="relative z-10 mt-8 sm:mt-12 lg:mt-16 w-full">
          <TechIconsMarquee />
        </div>
      )}

      {/* Subtle scroll prompt */}
      {!renderTechMarquee && (
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
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="h-1 w-1 rounded-full bg-[#1e8eab]"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
