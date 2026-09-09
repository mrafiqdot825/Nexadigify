import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { S as ScrollReveal, A as AnimatedBackground } from "./ScrollReveal-D6reOnV7.js";
import { C as CTASection } from "./CTASection-D38uR-3E.js";
import { a as Route } from "./router-CzK1y6Hr.js";
import "motion/react";
import "react";
function CaseStudySection({
  title,
  children,
  eyebrow
}) {
  return /* @__PURE__ */ jsx(ScrollReveal, { className: "border-t border-[rgba(0,70,150,0.1)] py-14 first:border-t-0", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-[220px_1fr]", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      eyebrow && /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.14em] text-[#1e8eab]", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-bold text-[#0b1f33]", children: title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-[17px] leading-relaxed text-[#526575]", children })
  ] }) });
}
function IndustryTag({ label }) {
  return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-[#f3f8fa] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1e8eab]", children: label });
}
function CaseStudyDetail() {
  const study = Route.useLoaderData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20", children: [
      /* @__PURE__ */ jsx(AnimatedBackground, { variant: "section" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 text-sm font-semibold text-[#004696] transition-transform duration-200 hover:-translate-x-0.5", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
          " Back to Portfolio"
        ] }),
        /* @__PURE__ */ jsxs(ScrollReveal, { delay: 0.05, className: "mt-8", children: [
          /* @__PURE__ */ jsx(IndustryTag, { label: study.category }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b1f33]", children: study.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-lg leading-relaxed text-[#526575]", children: study.description })
        ] }),
        /* @__PURE__ */ jsxs(ScrollReveal, { delay: 0.15, className: "mt-10 grid grid-cols-2 gap-6 rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-6 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-[#718391]", children: "Client" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-semibold text-[#0b1f33]", children: study.client })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-[#718391]", children: "Industry" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-semibold text-[#0b1f33]", children: study.industry })
          ] }),
          study.results.slice(0, 2).map((r) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-[#718391]", children: r.label }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-semibold text-[#1e8eab]", children: r.metric })
          ] }, r.label))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(CaseStudySection, { eyebrow: "The Problem", title: "Challenge", children: /* @__PURE__ */ jsx("p", { children: study.challenge }) }),
      /* @__PURE__ */ jsx(CaseStudySection, { eyebrow: "Our Method", title: "Approach", children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: study.approach.map((a) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e8eab]" }),
        " ",
        a
      ] }, a)) }) }),
      /* @__PURE__ */ jsx(CaseStudySection, { eyebrow: "What We Built", title: "Solution", children: /* @__PURE__ */ jsx("p", { children: study.solution }) }),
      /* @__PURE__ */ jsx(CaseStudySection, { eyebrow: "Stack", title: "Technology", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: study.technology.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-xl border border-[rgba(0,70,150,0.14)] bg-[#f7fafc] px-4 py-2 text-sm font-semibold text-[#004696]", children: t }, t)) }) }),
      /* @__PURE__ */ jsx(CaseStudySection, { eyebrow: "The Outcome", title: "Results", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: study.results.map((r) => /* @__PURE__ */ jsxs("div", { className: "rounded-[20px] border border-[rgba(0,70,150,0.1)] bg-[#f7fafc] p-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-extrabold text-gradient-brand", children: r.metric }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[#526575]", children: r.label })
      ] }, r.label)) }) }),
      /* @__PURE__ */ jsx(CaseStudySection, { eyebrow: "Visual Gallery", title: "Project Visuals", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-3", children: study.gallery.map((g, i) => /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] rounded-2xl", style: {
        background: `radial-gradient(circle at ${30 + i * 15}% ${30 + i * 10}%, rgba(0,70,150,0.22), transparent 60%), radial-gradient(circle at ${70 - i * 10}% ${70 - i * 5}%, rgba(30,142,171,0.22), transparent 60%), #f3f8fa`
      }, "aria-label": `${g} visual` }, g)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, { title: "Ready for results", highlight: "like this?", description: "Let's talk about what an intelligent system could look like for your business." })
  ] });
}
export {
  CaseStudyDetail as component
};
