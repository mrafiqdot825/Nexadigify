import { jsxs, jsx } from "react/jsx-runtime";
import { Mail, Phone, MapPin } from "lucide-react";
import { A as AnimatedBackground, S as ScrollReveal } from "./ScrollReveal-D6reOnV7.js";
import { C as ContactForm } from "./ContactForm-B-89Clmv.js";
import "motion/react";
import "react";
const CONTACT_DETAILS = [{
  icon: Mail,
  label: "hello@novaforge.ai"
}, {
  icon: Phone,
  label: "+1 (415) 555-0148"
}, {
  icon: MapPin,
  label: "San Francisco, CA"
}];
function Contact() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32", children: [
    /* @__PURE__ */ jsx(AnimatedBackground, { variant: "hero" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696]", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]" }),
          "Contact"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.06] tracking-tight text-[#0b1f33]", children: [
          "Let's build something ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-brand", children: "intelligent." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-lg leading-relaxed text-[#526575]", children: "Tell us about your business and goals — a member of our team will follow up within one business day." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-4", children: CONTACT_DETAILS.map((d) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[#0b1f33]", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#004696] shadow-[0_6px_16px_rgba(0,70,150,0.1)]", children: /* @__PURE__ */ jsx(d.icon, { size: 16 }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: d.label })
        ] }, d.label)) })
      ] }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.1, children: /* @__PURE__ */ jsx(ContactForm, { variant: "contact" }) })
    ] })
  ] });
}
export {
  Contact as component
};
