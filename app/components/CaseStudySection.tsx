import type { ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

export function CaseStudySection({
  title,
  children,
  eyebrow,
}: {
  title: string
  children: ReactNode
  eyebrow?: string
}) {
  return (
    <ScrollReveal className="border-t border-[rgba(0,70,150,0.1)] py-14 first:border-t-0">
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1e8eab]">{eyebrow}</span>
          )}
          <h2 className="mt-2 text-2xl font-bold text-[#0b1f33]">{title}</h2>
        </div>
        <div className="text-[17px] leading-relaxed text-[#526575]">{children}</div>
      </div>
    </ScrollReveal>
  )
}
