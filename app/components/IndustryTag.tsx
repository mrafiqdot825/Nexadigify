export function IndustryTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#f3f8fa] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1e8eab]">
      {label}
    </span>
  )
}
