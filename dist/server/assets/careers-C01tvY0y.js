import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, MapPin, ChevronDown } from "lucide-react";
import { H as Hero, S as SectionHeader } from "./SectionHeader-jN0KzzwP.js";
import { C as ContactForm } from "./ContactForm-B-89Clmv.js";
import { S as ScrollReveal } from "./ScrollReveal-D6reOnV7.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
const jobOpenings = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Design and ship production AI systems — from model integration to agentic pipelines — for enterprise clients.",
    responsibilities: [
      "Build and fine-tune models for client-specific use cases",
      "Design RAG and agentic pipelines for production use",
      "Partner with engineering to ship AI features end-to-end"
    ],
    requirements: [
      "3+ years building production ML/AI systems",
      "Strong Python fundamentals",
      "Experience with LLM APIs and vector databases"
    ]
  },
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Build premium, performant web applications spanning React frontends and scalable backend systems.",
    responsibilities: [
      "Build responsive, accessible interfaces with React and TypeScript",
      "Design APIs and backend services that scale",
      "Collaborate closely with design and AI engineering teams"
    ],
    requirements: [
      "4+ years professional full-stack experience",
      "Deep knowledge of React, TypeScript, and Node.js",
      "Experience with cloud infrastructure and CI/CD"
    ]
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    department: "AI & Data",
    location: "Remote",
    type: "Full-time",
    description: "Own the full lifecycle of ML models — from data pipelines to training, evaluation, and deployment.",
    responsibilities: [
      "Design data pipelines and feature engineering workflows",
      "Train, evaluate, and deploy models to production",
      "Monitor model performance and drift over time"
    ],
    requirements: [
      "3+ years in applied machine learning",
      "Strong grasp of statistics and model evaluation",
      "Experience with PyTorch or TensorFlow"
    ]
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Craft polished, animated, high-performance interfaces for enterprise AI products.",
    responsibilities: [
      "Implement pixel-perfect, animated UI from design specs",
      "Optimize performance across devices and browsers",
      "Champion accessibility and design-system consistency"
    ],
    requirements: [
      "3+ years frontend engineering experience",
      "Expertise with React, TypeScript, and Tailwind CSS",
      "Experience with motion/animation libraries"
    ]
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Design premium, enterprise-grade product experiences across web and AI-native interfaces.",
    responsibilities: [
      "Lead end-to-end design for client and internal products",
      "Build and maintain design systems and component libraries",
      "Partner with engineering to ensure high-fidelity delivery"
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio of enterprise or SaaS product work",
      "Proficiency in Figma and motion design principles"
    ]
  },
  {
    id: "growth-specialist",
    title: "Growth Specialist",
    department: "Growth",
    location: "Remote",
    type: "Full-time",
    description: "Drive pipeline growth through strategic partnerships, content, and outbound programs.",
    responsibilities: [
      "Develop and execute growth strategies across channels",
      "Build and manage the outbound and partnership pipeline",
      "Analyze funnel performance and optimize continuously"
    ],
    requirements: [
      "3+ years in B2B growth or demand generation",
      "Experience in technology or enterprise software",
      "Strong analytical and communication skills"
    ]
  }
];
function Careers() {
  const [expanded, setExpanded] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, { compact: true, eyebrow: "Careers", titleLines: [["Build What"], [{
      text: "Comes Next.",
      highlight: true
    }]], description: "Join a team of engineers, data scientists, and designers building the intelligent systems enterprise companies run on.", primaryTo: "#openings", primaryLabel: "View Openings", secondaryTo: "/about", secondaryLabel: "About Us" }),
    /* @__PURE__ */ jsx("section", { id: "openings", className: "relative bg-white py-16 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Open Positions", title: "Current", highlight: "openings." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-4", children: jobOpenings.map((job) => {
        const isOpen = expanded === job.id;
        return /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white transition-colors duration-300 hover:border-[rgba(30,142,171,0.35)]", children: [
          /* @__PURE__ */ jsxs("button", { className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left", onClick: () => setExpanded(isOpen ? null : job.id), "aria-expanded": isOpen, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0b1f33]", children: job.title }),
              /* @__PURE__ */ jsxs("div", { className: "mt-1.5 flex flex-wrap items-center gap-3 text-xs font-medium text-[#718391]", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Briefcase, { size: 13 }),
                  " ",
                  job.department
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 13 }),
                  " ",
                  job.location
                ] }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#f3f8fa] px-2.5 py-0.5 text-[#1e8eab]", children: job.type })
              ] })
            ] }),
            /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: `shrink-0 text-[#004696] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })
          ] }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(motion.div, { initial: {
            height: 0,
            opacity: 0
          }, animate: {
            height: "auto",
            opacity: 1
          }, exit: {
            height: 0,
            opacity: 0
          }, transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }, className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "border-t border-[rgba(0,70,150,0.08)] px-6 py-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[15px] leading-relaxed text-[#526575]", children: job.description }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-6 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "mb-2 text-sm font-bold text-[#0b1f33]", children: "Responsibilities" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-[#526575]", children: job.responsibilities.map((r) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1e8eab]" }),
                  " ",
                  r
                ] }, r)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "mb-2 text-sm font-bold text-[#0b1f33]", children: "Requirements" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-[#526575]", children: job.requirements.map((r) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1e8eab]" }),
                  " ",
                  r
                ] }, r)) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#apply", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[#004696] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e8eab]", children: "Apply for this role" })
          ] }) }) })
        ] }) }, job.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "apply", className: "relative bg-[#f7fafc] py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Apply", title: "Tell us about", highlight: "yourself.", align: "center", className: "mx-auto" }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.1, className: "mt-10", children: /* @__PURE__ */ jsx(ContactForm, { variant: "careers" }) })
    ] }) })
  ] });
}
export {
  Careers as component
};
