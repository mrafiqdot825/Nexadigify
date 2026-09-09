import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { H as Hero, S as SectionHeader } from "./SectionHeader-jN0KzzwP.js";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { C as CTASection } from "./CTASection-D38uR-3E.js";
import { s as solutions } from "./router-CzK1y6Hr.js";
import "./ScrollReveal-D6reOnV7.js";
import "clsx";
import "tailwind-merge";
import "react";
function SolutionCard({ slug, title, description, icon: Icon, index = 0 }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: index * 0.06 },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/solutions/$slug",
          params: { slug },
          className: "group block h-full rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_24px_48px_rgba(0,70,150,0.12)]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004696] to-[#1e8eab] text-white shadow-[0_8px_20px_rgba(0,70,150,0.25)]", children: /* @__PURE__ */ jsx(Icon, { size: 24, strokeWidth: 1.75 }) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-bold text-[#0b1f33]", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mb-5 text-sm leading-relaxed text-[#526575]", children: description }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696] transition-transform duration-300 group-hover:translate-x-1", children: [
              "Explore ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
            ] })
          ]
        }
      )
    }
  );
}
function SolutionsIndex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, { compact: true, eyebrow: "Solutions", titleLines: [["Solutions built"], [{
      text: "to move business.",
      highlight: true
    }]], description: "Five disciplines, one connected team — from automation and agents to data and full-stack software.", secondaryTo: "/portfolio", secondaryLabel: "View Our Work" }),
    /* @__PURE__ */ jsx("section", { className: "relative bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Explore", title: "Everything we", highlight: "build." }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: solutions.map((s, i) => /* @__PURE__ */ jsx(SolutionCard, { slug: s.slug, title: s.title, description: s.shortDescription, icon: s.icon, index: i }, s.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, { title: "Not sure where", highlight: "to start?", description: "Tell us about your business and we'll recommend the right solution for your goals." })
  ] });
}
export {
  SolutionsIndex as component
};
