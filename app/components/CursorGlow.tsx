import { useEffect, useState } from 'react'

/**
 * Subtle cursor-following glow. Desktop, fine-pointer, non-reduced-motion only.
 */
export function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [enabled])

  if (!enabled || !pos) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden lg:block"
    >
      <div
        className="absolute rounded-full transition-transform duration-100 ease-out"
        style={{
          left: pos.x - 180,
          top: pos.y - 180,
          width: 360,
          height: 360,
          background: 'radial-gradient(circle, rgba(30,142,171,0.14), transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  )
}
