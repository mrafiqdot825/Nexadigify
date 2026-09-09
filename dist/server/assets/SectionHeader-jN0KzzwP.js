import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { A as AnimatedBackground, S as ScrollReveal } from "./ScrollReveal-D6reOnV7.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function HeroVisualization() {
  const outerNodes = [
    { angle: 20, ring: 1 },
    { angle: 110, ring: 1 },
    { angle: 200, ring: 1 },
    { angle: 290, ring: 1 },
    { angle: 60, ring: 2 },
    { angle: 150, ring: 2 },
    { angle: 240, ring: 2 },
    { angle: 330, ring: 2 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute h-full w-full rounded-full blur-3xl",
        style: { background: "radial-gradient(circle, rgba(30,142,171,0.18), transparent 65%)" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin absolute h-[92%] w-[92%] rounded-full border border-dashed border-[rgba(0,70,150,0.18)]" }),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin-reverse absolute h-[68%] w-[68%] rounded-full border border-[rgba(30,142,171,0.24)]" }),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin absolute h-[92%] w-[92%]", children: outerNodes.filter((n) => n.ring === 1).map((n, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute h-2.5 w-2.5 rounded-full bg-[#004696] shadow-[0_0_12px_rgba(0,70,150,0.6)]",
        style: {
          top: `${50 + 49 * Math.sin(n.angle * Math.PI / 180)}%`,
          left: `${50 + 49 * Math.cos(n.angle * Math.PI / 180)}%`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin-reverse absolute h-[68%] w-[68%]", children: outerNodes.filter((n) => n.ring === 2).map((n, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute h-2 w-2 rounded-full bg-[#1e8eab] shadow-[0_0_10px_rgba(30,142,171,0.6)]",
        style: {
          top: `${50 + 49 * Math.sin(n.angle * Math.PI / 180)}%`,
          left: `${50 + 49 * Math.cos(n.angle * Math.PI / 180)}%`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("svg", { className: "absolute h-full w-full", viewBox: "0 0 100 100", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "46", fill: "none", stroke: "rgba(0,70,150,0.08)", strokeWidth: "0.3" }),
      [15, 85, 45, 130, 200, 260].map((a, i) => /* @__PURE__ */ jsx(
        "line",
        {
          x1: "50",
          y1: "50",
          x2: 50 + 44 * Math.cos(a * Math.PI / 180),
          y2: 50 + 44 * Math.sin(a * Math.PI / 180),
          stroke: "rgba(30,142,171,0.25)",
          strokeWidth: "0.3",
          strokeDasharray: "3 6"
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "animate-core-pulse relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#004696] to-[#1e8eab] shadow-[0_0_60px_rgba(30,142,171,0.55)] sm:h-32 sm:w-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full rounded-full bg-white/10 blur-sm" }),
      /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.8)] sm:h-16 sm:w-16" })
    ] })
  ] });
}
function HeroButton({ to, className, children }) {
  if (to.startsWith("#")) {
    return /* @__PURE__ */ jsx("a", { href: to, className, children });
  }
  return /* @__PURE__ */ jsx(Link, { to, className, children });
}
function Hero({
  eyebrow,
  titleLines,
  description,
  primaryLabel = "Get Started",
  primaryTo = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryTo = "/solutions",
  compact = false
}) {
  return /* @__PURE__ */ jsxs("section", { className: `relative overflow-hidden ${compact ? "pt-36 pb-16" : "pt-40 pb-24 sm:pt-48 sm:pb-32"}`, children: [
    /* @__PURE__ */ jsx(AnimatedBackground, { variant: "hero" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        eyebrow && /* @__PURE__ */ jsxs(
          motion.span,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696] backdrop-blur-sm",
            children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]" }),
              eyebrow
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-[clamp(2.4rem,5.4vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b1f33]", children: titleLines.map((line, i) => /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
            className: "block",
            children: line.map((word, j) => {
              const isHighlight = typeof word === "object" && word.highlight;
              const text = typeof word === "string" ? word : word.text;
              return /* @__PURE__ */ jsxs("span", { className: isHighlight ? "text-gradient-brand" : void 0, children: [
                text,
                " "
              ] }, j);
            })
          },
          i
        )) }),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.4 },
            className: "mt-7 max-w-lg text-lg leading-relaxed text-[#526575]",
            children: description
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.55 },
            className: "mt-10 flex flex-wrap items-center gap-4",
            children: [
              /* @__PURE__ */ jsxs(
                HeroButton,
                {
                  to: primaryTo,
                  className: "group inline-flex items-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] hover:shadow-[0_16px_32px_rgba(30,142,171,0.32)]",
                  children: [
                    primaryLabel,
                    /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "transition-transform duration-300 group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                HeroButton,
                {
                  to: secondaryTo,
                  className: "inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.28)] bg-white px-7 py-3.5 text-sm font-semibold text-[#004696] transition-all duration-300 hover:border-[#1e8eab] hover:bg-[#f3f8fa]",
                  children: secondaryLabel
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.94 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
          children: /* @__PURE__ */ jsx(HeroVisualization, {})
        }
      )
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className
}) {
  return /* @__PURE__ */ jsxs(ScrollReveal, { className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className), children: [
    eyebrow && /* @__PURE__ */ jsxs("span", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696]", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]" }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxs("h2", { className: "text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-[#0b1f33]", children: [
      title,
      highlight && /* @__PURE__ */ jsxs("span", { className: "text-gradient-brand", children: [
        " ",
        highlight
      ] })
    ] }),
    description && /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-relaxed text-[#526575]", children: description })
  ] });
}
export {
  Hero as H,
  SectionHeader as S
};
