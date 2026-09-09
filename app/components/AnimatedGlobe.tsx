/**
 * Abstract SVG globe used in the Global Reach section — thin lines,
 * teal/blue connection nodes, slow rotation. No photographic imagery.
 */
export function AnimatedGlobe() {
  const meridians = [0, 30, 60, 90, 120, 150]
  const nodes = [
    { cx: 30, cy: 25 },
    { cx: 70, cy: 20 },
    { cx: 85, cy: 45 },
    { cx: 60, cy: 70 },
    { cx: 25, cy: 65 },
    { cx: 50, cy: 50 },
    { cx: 15, cy: 40 },
  ]

  return (
    <div className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]" style={{ perspective: '1000px' }}>
      <div
        className="animate-globe-spin absolute h-full w-full rounded-full border border-[rgba(0,70,150,0.14)]"
        style={{ background: 'radial-gradient(circle at 35% 30%, rgba(30,142,171,0.08), transparent 60%)' }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,70,150,0.16)" strokeWidth="0.4" />
          {meridians.map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="50"
              rx={49 * Math.abs(Math.cos((i * Math.PI) / meridians.length))}
              ry="49"
              fill="none"
              stroke="rgba(0,70,150,0.12)"
              strokeWidth="0.3"
            />
          ))}
          {[20, 35, 50, 65, 80].map((cy, i) => (
            <ellipse key={i} cx="50" cy={cy} rx="49" ry={Math.abs(50 - cy) < 1 ? 49 : 12 - Math.abs(50 - cy) * 0.1} fill="none" stroke="rgba(0,70,150,0.1)" strokeWidth="0.25" />
          ))}

          {nodes.map((n, i) => (
            <g key={i}>
              {nodes.slice(i + 1).map((m, j) => (
                <line
                  key={j}
                  x1={n.cx}
                  y1={n.cy}
                  x2={m.cx}
                  y2={m.cy}
                  stroke="rgba(30,142,171,0.22)"
                  strokeWidth="0.25"
                />
              ))}
            </g>
          ))}
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r="1.4"
              fill={i % 2 === 0 ? '#004696' : '#1e8eab'}
              className="animate-node-glow"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </svg>
      </div>
      <div className="absolute h-full w-full rounded-full" style={{ boxShadow: 'inset 0 0 60px rgba(0,70,150,0.08)' }} />
    </div>
  )
}
