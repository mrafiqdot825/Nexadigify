import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Target, Lightbulb, Compass, Users } from "lucide-react";
import { H as Hero, S as SectionHeader } from "./SectionHeader-jN0KzzwP.js";
import { C as CTASection } from "./CTASection-D38uR-3E.js";
import { S as ScrollReveal, A as AnimatedBackground, a as ScrollRevealStagger, b as ScrollRevealItem } from "./ScrollReveal-D6reOnV7.js";
import "@tanstack/react-router";
import "motion/react";
import "clsx";
import "tailwind-merge";
function BackgroundParticles({ count = 18, className = "" }) {
  const items = Array.from({ length: count });
  return /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`, children: items.map((_, i) => {
    const left = i * 41 % 100;
    const top = i * 29 % 100;
    const delay = i % 8 * 1.2;
    const duration = 12 + i % 5 * 3;
    const style = {
      left: `${left}%`,
      top: `${top}%`,
      width: i % 3 === 0 ? 3 : 2,
      height: i % 3 === 0 ? 3 : 2,
      background: i % 2 === 0 ? "#1e8eab" : "#004696",
      animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
      "--px": `${16 + i % 4 * 8}px`,
      "--py": `${-30 - i % 5 * 8}px`
    };
    return /* @__PURE__ */ jsx("span", { className: "absolute rounded-full opacity-60", style }, i);
  }) });
}
const APPROACH = [{
  step: "01",
  title: "Understand",
  description: "We start by learning your business, your data, and the real problem behind the request."
}, {
  step: "02",
  title: "Design",
  description: "We architect a solution that fits your constraints, not a generic template."
}, {
  step: "03",
  title: "Build",
  description: "We engineer production-grade systems, tested and documented from day one."
}, {
  step: "04",
  title: "Deploy",
  description: "We launch carefully, with monitoring and rollback plans in place."
}, {
  step: "05",
  title: "Optimize",
  description: "We keep refining performance and value long after launch."
}];
const WHY_CHOOSE = [{
  icon: Target,
  title: "Outcome Focused",
  description: "We measure success in business impact, not lines of code shipped."
}, {
  icon: Lightbulb,
  title: "Deep Technical Craft",
  description: "Every system is engineered by senior practitioners, not templated out."
}, {
  icon: Compass,
  title: "Clear Communication",
  description: "You always know what we’re building, why, and what’s next."
}, {
  icon: Users,
  title: "Long-Term Partnership",
  description: "We build relationships that outlast a single project."
}];
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, { compact: true, eyebrow: "About Novaforge", titleLines: [["We build the"], [{
      text: "intelligence layer.",
      highlight: true
    }]], description: "Novaforge is a technology partner for companies who want AI and automation embedded into how they actually operate — not a slide deck.", secondaryTo: "/careers", secondaryLabel: "Join Our Team" }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white py-20 sm:py-28", children: [
      /* @__PURE__ */ jsx(BackgroundParticles, { count: 10, className: "opacity-60" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Who We Are", title: "A team built around", highlight: "intelligent systems.", align: "center", className: "mx-auto" }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.1, className: "mt-8 text-center text-lg leading-relaxed text-[#526575]", children: "We are engineers, data scientists, and product designers who believe the next generation of software is defined by how intelligently it operates — not just how it looks. We partner with enterprise teams to design and build systems that automate operations, transform data into insight, and create measurable business value." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#f7fafc] py-20 sm:py-28", children: [
      /* @__PURE__ */ jsx(AnimatedBackground, { variant: "subtle" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-14 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Our Philosophy", title: "Intelligence should feel", highlight: "invisible.", description: "The best AI systems don't announce themselves — they simply make the work faster, the decisions clearer, and the outcomes better. That's the standard we build to." }),
        /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "How We Think", title: "Software is a means,", highlight: "not the end.", description: "We never build technology for its own sake. Every system starts from a business outcome and works backward into the right architecture, models, and interface." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Our Approach", title: "How a project", highlight: "comes to life." }),
      /* @__PURE__ */ jsx(ScrollRevealStagger, { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5", children: APPROACH.map((a) => /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.35)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl font-extrabold text-[rgba(0,70,150,0.16)]", children: a.step }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 mb-2 font-bold text-[#0b1f33]", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-[#526575]", children: a.description })
      ] }) }, a.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-[#f3f8fa] py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Why Clients Choose Us", title: "What sets us", highlight: "apart.", align: "center", className: "mx-auto" }),
      /* @__PURE__ */ jsx(ScrollRevealStagger, { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: WHY_CHOOSE.map((w) => /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f8fa] text-[#004696]", children: /* @__PURE__ */ jsx(w.icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 mb-2 font-bold text-[#0b1f33]", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-[#526575]", children: w.description })
      ] }) }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, { title: "Let's build", highlight: "something intelligent." })
  ] });
}
export {
  About as component
};
