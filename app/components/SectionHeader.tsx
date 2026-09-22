import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/70 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1e8eab]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-[#0b1f33] break-words">
        {title}
        {highlight && <span className="text-gradient-brand"> {highlight}</span>}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#526575]">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
