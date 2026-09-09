import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
function AnimatedBackground({ variant = "section", className = "" }) {
  const intensity = variant === "hero" || variant === "cta" ? 1 : variant === "subtle" ? 0.5 : 0.75;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-orb-a absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] max-w-[720px] max-h-[720px] rounded-full blur-[90px]",
            style: {
              background: "radial-gradient(circle, rgba(0,70,150,0.28), transparent 70%)",
              opacity: intensity
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-orb-b absolute -right-[12%] top-[10%] h-[48vw] w-[48vw] max-w-[640px] max-h-[640px] rounded-full blur-[90px]",
            style: {
              background: "radial-gradient(circle, rgba(30,142,171,0.26), transparent 70%)",
              opacity: intensity
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-orb-a absolute bottom-[-20%] left-[20%] h-[40vw] w-[40vw] max-w-[520px] max-h-[520px] rounded-full blur-[100px]",
            style: {
              background: "radial-gradient(circle, rgba(0,70,150,0.16), transparent 70%)",
              opacity: intensity * 0.8,
              animationDelay: "4s"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-grid-drift absolute inset-[-10%]",
            style: {
              backgroundImage: "linear-gradient(rgba(0,70,150,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,70,150,0.055) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              opacity: intensity
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-beam absolute left-[10%] top-[-10%] h-[140%] w-[26%]",
            style: {
              background: "linear-gradient(180deg, transparent, rgba(30,142,171,0.14), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsx(Particles, { count: variant === "hero" ? 26 : 14 }),
        /* @__PURE__ */ jsx(ConnectionLines, {}),
        /* @__PURE__ */ jsx("div", { className: "noise-overlay absolute inset-0" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" })
      ]
    }
  );
}
function Particles({ count }) {
  const items = Array.from({ length: count });
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: items.map((_, i) => {
    const left = i * 37 % 100 + Math.sin(i) * 4;
    const top = i * 53 % 100 + Math.cos(i) * 4;
    const delay = i % 10 * 1.4;
    const duration = 14 + i % 6 * 3;
    const px = 20 + i % 5 * 10;
    const py = -40 - i % 7 * 10;
    const isTeal = i % 2 === 0;
    const style = {
      left: `${left}%`,
      top: `${top}%`,
      width: i % 4 === 0 ? 3 : 2,
      height: i % 4 === 0 ? 3 : 2,
      background: isTeal ? "#1e8eab" : "#004696",
      animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
      "--px": `${px}px`,
      "--py": `${py}px`
    };
    return /* @__PURE__ */ jsx("span", { className: "absolute rounded-full", style }, i);
  }) });
}
function ConnectionLines() {
  const lines = [
    { x1: 8, y1: 20, x2: 30, y2: 40 },
    { x1: 30, y1: 40, x2: 55, y2: 18 },
    { x1: 70, y1: 55, x2: 92, y2: 30 },
    { x1: 15, y1: 70, x2: 42, y2: 85 },
    { x1: 60, y1: 78, x2: 85, y2: 62 }
  ];
  return /* @__PURE__ */ jsx("svg", { className: "absolute inset-0 h-full w-full", preserveAspectRatio: "none", viewBox: "0 0 100 100", children: lines.map((l, i) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "line",
      {
        x1: l.x1,
        y1: l.y1,
        x2: l.x2,
        y2: l.y2,
        stroke: "rgba(0,70,150,0.12)",
        strokeWidth: "0.15",
        vectorEffect: "non-scaling-stroke"
      }
    ),
    /* @__PURE__ */ jsx(
      "line",
      {
        x1: l.x1,
        y1: l.y1,
        x2: l.x2,
        y2: l.y2,
        stroke: "#1e8eab",
        strokeWidth: "0.3",
        strokeDasharray: "4 236",
        vectorEffect: "non-scaling-stroke",
        style: {
          animation: `pulse-line ${8 + i * 1.6}s linear ${i * 1.3}s infinite`
        }
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: l.x1, cy: l.y1, r: "0.5", fill: "#004696", className: "animate-node-glow", style: { animationDelay: `${i * 0.4}s` } }),
    /* @__PURE__ */ jsx("circle", { cx: l.x2, cy: l.y2, r: "0.5", fill: "#1e8eab", className: "animate-node-glow", style: { animationDelay: `${i * 0.6}s` } })
  ] }, i)) });
}
function ScrollReveal({ children, delay = 0, y = 28, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
      children
    }
  );
}
function ScrollRevealStagger({
  children,
  className = "",
  stagger = 0.08
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger } }
      },
      children
    }
  );
}
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};
function ScrollRevealItem({ children, className = "" }) {
  return /* @__PURE__ */ jsx(motion.div, { className, variants: staggerItem, children });
}
export {
  AnimatedBackground as A,
  ScrollReveal as S,
  ScrollRevealStagger as a,
  ScrollRevealItem as b
};
