import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { H as Hero, S as SectionHeader } from "./SectionHeader-jN0KzzwP.js";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { C as CTASection } from "./CTASection-D38uR-3E.js";
import { p as portfolio } from "./router-CzK1y6Hr.js";
import "./ScrollReveal-D6reOnV7.js";
import "clsx";
import "tailwind-merge";
import "react";
const VISUAL_SEEDS = [
  { r1: 30, r2: 60, r3: 85 },
  { r1: 40, r2: 65, r3: 90 },
  { r1: 25, r2: 55, r3: 80 }
];
function PortfolioCard({ slug, category, title, description, index = 0 }) {
  const seed = VISUAL_SEEDS[index % VISUAL_SEEDS.length];
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: index % 3 * 0.08 },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/portfolio/$slug",
          params: { slug },
          className: "group block overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(0,70,150,0.14)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-56 w-full overflow-hidden bg-[#f3f8fa]", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 transition-transform duration-500 group-hover:scale-110",
                  style: {
                    background: `radial-gradient(circle at 30% 30%, rgba(0,70,150,0.22), transparent ${seed.r1}%), radial-gradient(circle at 75% 65%, rgba(30,142,171,0.24), transparent ${seed.r2}%), linear-gradient(135deg, #eef6fa, #f7fafc)`
                  }
                }
              ),
              /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-70", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: [
                /* @__PURE__ */ jsx("circle", { cx: seed.r1, cy: "30", r: "0.6", fill: "#004696" }),
                /* @__PURE__ */ jsx("circle", { cx: seed.r2, cy: "60", r: "0.6", fill: "#1e8eab" }),
                /* @__PURE__ */ jsx("circle", { cx: seed.r3, cy: "40", r: "0.6", fill: "#004696" }),
                /* @__PURE__ */ jsx("line", { x1: seed.r1, y1: "30", x2: seed.r2, y2: "60", stroke: "rgba(0,70,150,0.3)", strokeWidth: "0.2" }),
                /* @__PURE__ */ jsx("line", { x1: seed.r2, y1: "60", x2: seed.r3, y2: "40", stroke: "rgba(30,142,171,0.3)", strokeWidth: "0.2" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#004696] opacity-0 shadow-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-[#1e8eab]", children: category }),
              /* @__PURE__ */ jsx("h3", { className: "mt-2 mb-2 text-lg font-bold text-[#0b1f33]", children: title }),
              /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm leading-relaxed text-[#526575]", children: description }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696]", children: [
                "View Case Study ",
                /* @__PURE__ */ jsx(ArrowUpRight, { size: 14, className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function PortfolioIndex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, { compact: true, eyebrow: "Portfolio", titleLines: [["Work that"], [{
      text: "moves the needle.",
      highlight: true
    }]], description: "A selection of AI systems, automation platforms, and data products we've engineered for enterprise clients.", primaryTo: "/contact", secondaryTo: "/solutions" }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-16 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Case Studies", title: "Selected", highlight: "projects." }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: portfolio.map((p, i) => /* @__PURE__ */ jsx(PortfolioCard, { slug: p.slug, category: p.category, title: p.title, description: p.description, index: i }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, { title: "Want results", highlight: "like these?", description: "Let's talk about what an intelligent system could look like for your business." })
  ] });
}
export {
  PortfolioIndex as component
};
