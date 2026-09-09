import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { ArrowUpRight, BrainCircuit, Workflow, Bot, BarChart3, Code2, Sparkles, Layers, Rocket } from "lucide-react";
import { H as Hero, S as SectionHeader } from "./SectionHeader-jN0KzzwP.js";
import { motion } from "motion/react";
import { C as CapabilityPill } from "./CapabilityPill-5qe6VMVG.js";
import { C as CTASection } from "./CTASection-D38uR-3E.js";
import { A as AnimatedBackground, S as ScrollReveal } from "./ScrollReveal-D6reOnV7.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
function ServiceCard({ number, title, description, icon: Icon, index = 0 }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] },
      whileHover: { y: -8 },
      className: "group relative overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-8 shadow-[0_2px_16px_rgba(0,70,150,0.04)] transition-all duration-300 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_24px_48px_rgba(0,70,150,0.12)]",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            style: { background: "linear-gradient(135deg, rgba(0,70,150,0.05), rgba(30,142,171,0.06))" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold tracking-wide text-[#a8bccb]", children: number }),
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f8fa] text-[#004696] transition-all duration-300 group-hover:bg-[#004696] group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 1.75 }) })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold text-[#0b1f33]", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-[15px] leading-relaxed text-[#526575]", children: description }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e8eab] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100", children: [
          "Learn more ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
        ] })
      ]
    }
  );
}
function FeatureCard({ number, title, description, icon: Icon, index = 0 }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
      className: "relative rounded-[28px] border border-[rgba(0,70,150,0.1)] bg-gradient-to-b from-white to-[#f7fafc] p-10",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-6xl font-extrabold tracking-tighter text-[rgba(0,70,150,0.08)]", children: number }),
        /* @__PURE__ */ jsx("div", { className: "-mt-8 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#1e8eab] shadow-[0_10px_24px_rgba(0,70,150,0.1)]", children: /* @__PURE__ */ jsx(Icon, { size: 28, strokeWidth: 1.6 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold text-[#0b1f33]", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-[15px] leading-relaxed text-[#526575]", children: description })
      ]
    }
  );
}
function AnimatedGlobe() {
  const meridians = [0, 30, 60, 90, 120, 150];
  const nodes = [
    { cx: 30, cy: 25 },
    { cx: 70, cy: 20 },
    { cx: 85, cy: 45 },
    { cx: 60, cy: 70 },
    { cx: 25, cy: 65 },
    { cx: 50, cy: 50 },
    { cx: 15, cy: 40 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]", style: { perspective: "1000px" }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "animate-globe-spin absolute h-full w-full rounded-full border border-[rgba(0,70,150,0.14)]",
        style: { background: "radial-gradient(circle at 35% 30%, rgba(30,142,171,0.08), transparent 60%)" },
        children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", className: "h-full w-full", children: [
          /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "49", fill: "none", stroke: "rgba(0,70,150,0.16)", strokeWidth: "0.4" }),
          meridians.map((_, i) => /* @__PURE__ */ jsx(
            "ellipse",
            {
              cx: "50",
              cy: "50",
              rx: 49 * Math.abs(Math.cos(i * Math.PI / meridians.length)),
              ry: "49",
              fill: "none",
              stroke: "rgba(0,70,150,0.12)",
              strokeWidth: "0.3"
            },
            i
          )),
          [20, 35, 50, 65, 80].map((cy, i) => /* @__PURE__ */ jsx("ellipse", { cx: "50", cy, rx: "49", ry: Math.abs(50 - cy) < 1 ? 49 : 12 - Math.abs(50 - cy) * 0.1, fill: "none", stroke: "rgba(0,70,150,0.1)", strokeWidth: "0.25" }, i)),
          nodes.map((n, i) => /* @__PURE__ */ jsx("g", { children: nodes.slice(i + 1).map((m, j) => /* @__PURE__ */ jsx(
            "line",
            {
              x1: n.cx,
              y1: n.cy,
              x2: m.cx,
              y2: m.cy,
              stroke: "rgba(30,142,171,0.22)",
              strokeWidth: "0.25"
            },
            j
          )) }, i)),
          nodes.map((n, i) => /* @__PURE__ */ jsx(
            "circle",
            {
              cx: n.cx,
              cy: n.cy,
              r: "1.4",
              fill: i % 2 === 0 ? "#004696" : "#1e8eab",
              className: "animate-node-glow",
              style: { animationDelay: `${i * 0.4}s` }
            },
            i
          ))
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full rounded-full", style: { boxShadow: "inset 0 0 60px rgba(0,70,150,0.08)" } })
  ] });
}
const SERVICES = [{
  number: "01",
  title: "Custom AI Development",
  description: "Purpose-built AI models engineered around your specific business problem.",
  icon: BrainCircuit
}, {
  number: "02",
  title: "AI Automation",
  description: "Intelligent automation that eliminates repetitive operational work end-to-end.",
  icon: Workflow
}, {
  number: "03",
  title: "Agentic AI Systems",
  description: "Autonomous agents that reason, decide, and execute multi-step work.",
  icon: Bot
}, {
  number: "04",
  title: "Data & Analytics",
  description: "Turn fragmented data into a single, decision-ready source of truth.",
  icon: BarChart3
}, {
  number: "05",
  title: "Full-Stack Development",
  description: "Scalable web and mobile products engineered for growth.",
  icon: Code2
}, {
  number: "06",
  title: "AI-Powered Applications",
  description: "Products with intelligence built into the architecture, not bolted on.",
  icon: Sparkles
}];
const CAPABILITIES = ["AI Automation", "Machine Learning", "AI Agents", "LLM Integration", "Computer Vision", "Data Pipelines", "Predictive Analytics", "LangChain", "Generative AI", "Intelligent Workflows"];
const WHY_US = [{
  number: "01",
  title: "Full-Stack Development",
  description: "From infrastructure to interface, we engineer every layer of your product ourselves.",
  icon: Layers
}, {
  number: "02",
  title: "AI At The Core",
  description: "Intelligence isn’t a feature we add later — it’s architected in from the very first line of code.",
  icon: BrainCircuit
}, {
  number: "03",
  title: "Growth Ready",
  description: "Every system we build is designed to scale with your business, not against it.",
  icon: Rocket
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, { eyebrow: "AI & Intelligent Systems", titleLines: [["From Data"], [{
      text: "To",
      highlight: false
    }, {
      text: "Intelligence.",
      highlight: true
    }]], description: "We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value." }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "What We Do", title: "Six disciplines,", highlight: "one intelligent system.", description: "We combine AI, data, and software engineering into a single team that ships end-to-end — not a patchwork of specialists." }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: SERVICES.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, { ...s, index: i }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#f7fafc] py-24 sm:py-32", children: [
      /* @__PURE__ */ jsx(AnimatedBackground, { variant: "subtle" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(SectionHeader, { align: "center", eyebrow: "Our Philosophy", title: "Intelligence isn't an add-on.", highlight: "It's the architecture.", description: "Every system we ship is designed with intelligence as a first-class citizen — not a feature bolted on after launch.", className: "mx-auto" }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.1, className: "mt-12 flex flex-wrap items-center justify-center gap-3", children: CAPABILITIES.map((c) => /* @__PURE__ */ jsx(CapabilityPill, { label: c }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { align: "center", eyebrow: "Why Us", title: "Built For", highlight: "The Future.", className: "mx-auto" }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3", children: WHY_US.map((f, i) => /* @__PURE__ */ jsx(FeatureCard, { ...f, index: i }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-[#0b1f33]/[0.02] py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Global Reach", title: "Deployed across", highlight: "every time zone.", description: "Our systems run for clients across industries and continents — built once, engineered to operate reliably anywhere in the world." }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.15, children: /* @__PURE__ */ jsx(AnimatedGlobe, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, { title: "Ready to build", highlight: "something intelligent?", description: "Tell us about your goals — we'll show you exactly how AI and automation can move your business forward." })
  ] });
}
export {
  Home as component
};
