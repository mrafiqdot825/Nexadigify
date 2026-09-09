import type { CSSProperties } from 'react'

/**
 * Lightweight standalone particle field for sections that need motion
 * without the full AnimatedBackground orb/grid system.
 */
export function BackgroundParticles({ count = 18, className = '' }: { count?: number; className?: string }) {
  const items = Array.from({ length: count })
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((_, i) => {
        const left = (i * 41) % 100
        const top = (i * 29) % 100
        const delay = (i % 8) * 1.2
        const duration = 12 + (i % 5) * 3
        const style = {
          left: `${left}%`,
          top: `${top}%`,
          width: i % 3 === 0 ? 3 : 2,
          height: i % 3 === 0 ? 3 : 2,
          background: i % 2 === 0 ? '#1e8eab' : '#004696',
          animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
          '--px': `${16 + (i % 4) * 8}px`,
          '--py': `${-30 - (i % 5) * 8}px`,
        } as CSSProperties
        return <span key={i} className="absolute rounded-full opacity-60" style={style} />
      })}
    </div>
  )
}
