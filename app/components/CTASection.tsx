import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { ScrollReveal } from "./ScrollReveal";

interface CTASectionProps {
  title: string;
  highlight?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CTASection({
  title,
  highlight,
  description,
  primaryLabel = "Get Started",
  primaryTo = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryTo = "/solutions",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-6 sm:py-10">
      <div className="relative isolate mx-3 overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[rgba(0,70,150,0.12)] bg-white px-5 py-8 sm:px-8 sm:py-16 md:px-12 md:py-20 shadow-[0_20px_60px_rgba(0,70,150,0.08)] sm:mx-6 md:mx-auto md:max-w-6xl">
        <AnimatedBackground variant="cta" />
        <ScrollReveal className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight text-[#0b1f33] break-words">
            {title}
            {highlight && (
              <span className="text-gradient-brand"> {highlight}</span>
            )}
          </h2>
          {description && (
            <p className="mx-auto mt-3 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#526575]">
              {description}
            </p>
          )}
          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to={primaryTo}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] hover:shadow-[0_16px_32px_rgba(30,142,171,0.32)]"
            >
              {primaryLabel}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,70,150,0.3)] bg-white px-7 py-3.5 text-sm font-semibold text-[#004696] transition-all duration-300 hover:border-[#1e8eab] hover:bg-[#f3f8fa]"
            >
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
