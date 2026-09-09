import type { CSSProperties } from 'react'

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'cta' | 'subtle'
  className?: string
}

/**
 * Reusable ambient background: blurred orbs, faint grid, drifting particles,
 * AI connection lines and a soft light beam. Pure CSS/SVG so it stays cheap
 * to render and respects prefers-reduced-motion via the .animate-* classes.
 */
export function AnimatedBackground({ variant = 'section', className = '' }: AnimatedBackgroundProps) {
  const intensity = variant === 'hero' || variant === 'cta' ? 1 : variant === 'subtle' ? 0.5 : 0.75

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Blurred gradient orbs */}
      <div
        className="animate-orb-a absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] max-w-[720px] max-h-[720px] rounded-full blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,70,150,0.28), transparent 70%)',
          opacity: intensity,
        }}
      />
      <div
        className="animate-orb-b absolute -right-[12%] top-[10%] h-[48vw] w-[48vw] max-w-[640px] max-h-[640px] rounded-full blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(30,142,171,0.26), transparent 70%)',
          opacity: intensity,
        }}
      />
      <div
        className="animate-orb-a absolute bottom-[-20%] left-[20%] h-[40vw] w-[40vw] max-w-[520px] max-h-[520px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,70,150,0.16), transparent 70%)',
          opacity: intensity * 0.8,
          animationDelay: '4s',
        }}
      />

      {/* Faint grid */}
      <div
        className="animate-grid-drift absolute inset-[-10%]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,70,150,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,70,150,0.055) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: intensity,
        }}
      />

      {/* Light beam */}
      <div
        className="animate-beam absolute left-[10%] top-[-10%] h-[140%] w-[26%]"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(30,142,171,0.14), transparent)',
        }}
      />

      {/* Particles */}
      <Particles count={variant === 'hero' ? 26 : 14} />

      {/* Connection lines */}
      <ConnectionLines />

      {/* Noise */}
      <div className="noise-overlay absolute inset-0" />

      {/* Fade to white at edges so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
    </div>
  )
}

function Particles({ count }: { count: number }) {
  const items = Array.from({ length: count })
  return (
    <div className="absolute inset-0">
      {items.map((_, i) => {
        const left = ((i * 37) % 100) + Math.sin(i) * 4
        const top = ((i * 53) % 100) + Math.cos(i) * 4
        const delay = (i % 10) * 1.4
        const duration = 14 + (i % 6) * 3
        const px = 20 + (i % 5) * 10
        const py = -40 - (i % 7) * 10
        const isTeal = i % 2 === 0
        const style = {
          left: `${left}%`,
          top: `${top}%`,
          width: i % 4 === 0 ? 3 : 2,
          height: i % 4 === 0 ? 3 : 2,
          background: isTeal ? '#1e8eab' : '#004696',
          animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
          '--px': `${px}px`,
          '--py': `${py}px`,
        } as CSSProperties
        return <span key={i} className="absolute rounded-full" style={style} />
      })}
    </div>
  )
}

function ConnectionLines() {
  const lines = [
    { x1: 8, y1: 20, x2: 30, y2: 40 },
    { x1: 30, y1: 40, x2: 55, y2: 18 },
    { x1: 70, y1: 55, x2: 92, y2: 30 },
    { x1: 15, y1: 70, x2: 42, y2: 85 },
    { x1: 60, y1: 78, x2: 85, y2: 62 },
  ]
  return (
    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      {lines.map((l, i) => (
        <g key={i}>
          <line
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="rgba(0,70,150,0.12)"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#1e8eab"
            strokeWidth="0.3"
            strokeDasharray="4 236"
            vectorEffect="non-scaling-stroke"
            style={{
              animation: `pulse-line ${8 + i * 1.6}s linear ${i * 1.3}s infinite`,
            }}
          />
          <circle cx={l.x1} cy={l.y1} r="0.5" fill="#004696" className="animate-node-glow" style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={l.x2} cy={l.y2} r="0.5" fill="#1e8eab" className="animate-node-glow" style={{ animationDelay: `${i * 0.6}s` }} />
        </g>
      ))}
    </svg>
  )
}
