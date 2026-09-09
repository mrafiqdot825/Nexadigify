import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { A as AnimatedBackground, S as ScrollReveal } from "./ScrollReveal-D6reOnV7.js";
function CTASection({
  title,
  highlight,
  description,
  primaryLabel = "Get Started",
  primaryTo = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryTo = "/solutions"
}) {
  return /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-[#f7fafc] py-10", children: /* @__PURE__ */ jsxs("div", { className: "relative isolate mx-4 overflow-hidden rounded-[32px] border border-[rgba(0,70,150,0.12)] bg-white px-6 py-20 shadow-[0_20px_60px_rgba(0,70,150,0.08)] sm:mx-8 md:mx-auto md:max-w-6xl", children: [
    /* @__PURE__ */ jsx(AnimatedBackground, { variant: "cta" }),
    /* @__PURE__ */ jsxs(ScrollReveal, { className: "relative z-10 mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-[#0b1f33]", children: [
        title,
        highlight && /* @__PURE__ */ jsxs("span", { className: "text-gradient-brand", children: [
          " ",
          highlight
        ] })
      ] }),
      description && /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#526575]", children: description }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
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
          Link,
          {
            to: secondaryTo,
            className: "inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.3)] bg-white px-7 py-3.5 text-sm font-semibold text-[#004696] transition-all duration-300 hover:border-[#1e8eab] hover:bg-[#f3f8fa]",
            children: secondaryLabel
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  CTASection as C
};
