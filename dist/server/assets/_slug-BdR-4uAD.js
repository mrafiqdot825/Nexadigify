import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { H as Hero, S as SectionHeader } from "./SectionHeader-jN0KzzwP.js";
import { C as CapabilityPill } from "./CapabilityPill-5qe6VMVG.js";
import { C as CTASection } from "./CTASection-D38uR-3E.js";
import { S as ScrollReveal, A as AnimatedBackground, a as ScrollRevealStagger, b as ScrollRevealItem } from "./ScrollReveal-D6reOnV7.js";
import { R as Route, s as solutions } from "./router-CzK1y6Hr.js";
import "motion/react";
import "clsx";
import "tailwind-merge";
import "react";
function SolutionDetail() {
  const solution = Route.useLoaderData();
  const Icon = solution.icon;
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, { compact: true, eyebrow: solution.navTitle, titleLines: [[solution.heroHeadline.split(" ").slice(0, -2).join(" ")], [{
      text: solution.heroHeadline.split(" ").slice(-2).join(" "),
      highlight: true
    }]], description: solution.heroSub }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Capabilities", title: "What this", highlight: "includes." }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.1, className: "mt-10 flex flex-wrap gap-3", children: solution.capabilities.map((c) => /* @__PURE__ */ jsx(CapabilityPill, { label: c }, c)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#f7fafc] py-20 sm:py-28", children: [
      /* @__PURE__ */ jsx(AnimatedBackground, { variant: "subtle" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Process", title: "How we", highlight: "get there." }),
        /* @__PURE__ */ jsx(ScrollRevealStagger, { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: solution.process.map((p) => /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-7", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl font-extrabold text-[rgba(0,70,150,0.15)]", children: p.step }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 mb-2 text-lg font-bold text-[#0b1f33]", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-[#526575]", children: p.description })
        ] }) }, p.step)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Benefits", title: "Why it", highlight: "matters." }),
      /* @__PURE__ */ jsx(ScrollRevealStagger, { className: "space-y-6", children: solution.benefits.map((b) => /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 22, className: "mt-0.5 shrink-0 text-[#1e8eab]" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#0b1f33]", children: b.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-[#526575]", children: b.description })
        ] })
      ] }) }, b.title)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-[#f3f8fa] py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8", children: [
      /* @__PURE__ */ jsxs(ScrollReveal, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004696] to-[#1e8eab] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 26 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 text-2xl font-bold text-[#0b1f33]", children: "Use Cases" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: solution.useCases.map((u) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-[#526575]", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]" }),
          " ",
          u
        ] }, u)) })
      ] }),
      /* @__PURE__ */ jsxs(ScrollReveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#0b1f33]", children: "Technology Stack" }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-3", children: solution.stack.map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-xl border border-[rgba(0,70,150,0.14)] bg-white px-4 py-2 text-sm font-semibold text-[#004696]", children: tech }, tech)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Explore More", title: "Related", highlight: "solutions." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3", children: related.map((s) => {
        const RIcon = s.icon;
        return /* @__PURE__ */ jsxs(Link, { to: "/solutions/$slug", params: {
          slug: s.slug
        }, className: "group rounded-[20px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]", children: [
          /* @__PURE__ */ jsx(RIcon, { size: 22, className: "text-[#004696]" }),
          /* @__PURE__ */ jsx("h4", { className: "mt-4 font-bold text-[#0b1f33]", children: s.navTitle }),
          /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1e8eab]", children: [
            "Learn more ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "transition-transform duration-300 group-hover:translate-x-1" })
          ] })
        ] }, s.slug);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, { title: "Let's bring", highlight: `${solution.navTitle.toLowerCase()} to your business.`, description: "Tell us about your goals and we'll map out exactly how this solution fits your operations." })
  ] });
}
export {
  SolutionDetail as component
};
