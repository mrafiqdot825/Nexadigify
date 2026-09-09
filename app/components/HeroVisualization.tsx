/**
 * Abstract "AI core" visualization for the hero: pulsing center, orbital
 * rings, floating nodes and connecting lines. Pure SVG/CSS, no imagery.
 */
export function HeroVisualization() {
  const outerNodes = [
    { angle: 20, ring: 1 },
    { angle: 110, ring: 1 },
    { angle: 200, ring: 1 },
    { angle: 290, ring: 1 },
    { angle: 60, ring: 2 },
    { angle: 150, ring: 2 },
    { angle: 240, ring: 2 },
    { angle: 330, ring: 2 },
  ]

  return (
    <div className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px]">
      {/* Soft glow field */}
      <div
        className="absolute h-full w-full rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(30,142,171,0.18), transparent 65%)' }}
      />

      {/* Outer ring */}
      <div className="animate-orbit-spin absolute h-[92%] w-[92%] rounded-full border border-dashed border-[rgba(0,70,150,0.18)]" />
      {/* Middle ring */}
      <div className="animate-orbit-spin-reverse absolute h-[68%] w-[68%] rounded-full border border-[rgba(30,142,171,0.24)]" />

      {/* Nodes orbiting */}
      <div className="animate-orbit-spin absolute h-[92%] w-[92%]">
        {outerNodes
          .filter((n) => n.ring === 1)
          .map((n, i) => (
            <span
              key={i}
              className="absolute h-2.5 w-2.5 rounded-full bg-[#004696] shadow-[0_0_12px_rgba(0,70,150,0.6)]"
              style={{
                top: `${50 + 49 * Math.sin((n.angle * Math.PI) / 180)}%`,
                left: `${50 + 49 * Math.cos((n.angle * Math.PI) / 180)}%`,
              }}
            />
          ))}
      </div>
      <div className="animate-orbit-spin-reverse absolute h-[68%] w-[68%]">
        {outerNodes
          .filter((n) => n.ring === 2)
          .map((n, i) => (
            <span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-[#1e8eab] shadow-[0_0_10px_rgba(30,142,171,0.6)]"
              style={{
                top: `${50 + 49 * Math.sin((n.angle * Math.PI) / 180)}%`,
                left: `${50 + 49 * Math.cos((n.angle * Math.PI) / 180)}%`,
              }}
            />
          ))}
      </div>

      {/* Connection lines */}
      <svg className="absolute h-full w-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0,70,150,0.08)" strokeWidth="0.3" />
        {[15, 85, 45, 130, 200, 260].map((a, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 44 * Math.cos((a * Math.PI) / 180)}
            y2={50 + 44 * Math.sin((a * Math.PI) / 180)}
            stroke="rgba(30,142,171,0.25)"
            strokeWidth="0.3"
            strokeDasharray="3 6"
          />
        ))}
      </svg>

      {/* Core */}
      <div className="animate-core-pulse relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#004696] to-[#1e8eab] shadow-[0_0_60px_rgba(30,142,171,0.55)] sm:h-32 sm:w-32">
        <div className="absolute h-full w-full rounded-full bg-white/10 blur-sm" />
        <div className="h-14 w-14 rounded-full bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.8)] sm:h-16 sm:w-16" />
      </div>
    </div>
  )
}
