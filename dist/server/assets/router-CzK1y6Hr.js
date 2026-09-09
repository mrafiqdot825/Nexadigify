import { Link, useLocation, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Workflow, BrainCircuit, Bot, BarChart3, Code2, ArrowRight, X, ChevronDown, Menu, Linkedin, Twitter, Github } from "lucide-react";
const solutions = [
  {
    slug: "ai-automation",
    navTitle: "AI Automation",
    title: "AI Automation",
    shortDescription: "Automate repetitive operations and free your teams to focus on higher-value work.",
    heroHeadline: "Automation That Thinks.",
    heroSub: "We design intelligent automation systems that handle repetitive operational work end-to-end, reducing manual effort while improving accuracy and speed.",
    icon: Workflow,
    capabilities: [
      "Process Automation",
      "Document Intelligence",
      "Workflow Orchestration",
      "Robotic Task Automation",
      "Intelligent Alerts",
      "System Integration"
    ],
    process: [
      { step: "01", title: "Map", description: "We audit existing workflows to find automation opportunities with the highest operational impact." },
      { step: "02", title: "Design", description: "We architect automation logic that fits your systems, data, and compliance requirements." },
      { step: "03", title: "Build", description: "We implement automations using resilient, observable, and maintainable pipelines." },
      { step: "04", title: "Operate", description: "We monitor, refine, and scale automations as your operations evolve." }
    ],
    benefits: [
      { title: "Fewer Manual Hours", description: "Remove repetitive tasks from your team’s day-to-day workload." },
      { title: "Fewer Errors", description: "Reduce human error in high-volume operational processes." },
      { title: "Faster Turnaround", description: "Cut process cycle times from days to minutes." }
    ],
    useCases: [
      "Invoice & document processing",
      "Customer support triage",
      "Internal operations workflows",
      "Data entry & reconciliation",
      "Compliance monitoring"
    ],
    stack: ["Python", "Node.js", "n8n", "Temporal", "AWS Lambda", "Netlify Functions"]
  },
  {
    slug: "custom-ai",
    navTitle: "Custom AI Development",
    title: "Custom AI Development",
    shortDescription: "Purpose-built AI models and systems engineered around your business problem.",
    heroHeadline: "Intelligence, Custom-Built.",
    heroSub: "We design and build bespoke AI systems tailored to your data, your workflows, and your business objectives — not off-the-shelf approximations.",
    icon: BrainCircuit,
    capabilities: [
      "Model Fine-Tuning",
      "LLM Integration",
      "Computer Vision",
      "Predictive Modeling",
      "Retrieval-Augmented Generation",
      "Custom ML Pipelines"
    ],
    process: [
      { step: "01", title: "Discover", description: "We define the problem, success metrics, and available data." },
      { step: "02", title: "Prototype", description: "We validate feasibility with rapid, testable prototypes." },
      { step: "03", title: "Engineer", description: "We build production-grade models and serving infrastructure." },
      { step: "04", title: "Scale", description: "We monitor performance and continuously improve accuracy." }
    ],
    benefits: [
      { title: "Built For Your Data", description: "Models trained and tuned specifically on your domain." },
      { title: "Production Ready", description: "Engineered for reliability, not just proof-of-concept demos." },
      { title: "Measurable ROI", description: "Every model ships with clear performance benchmarks." }
    ],
    useCases: [
      "Custom recommendation engines",
      "Fraud & anomaly detection",
      "Document understanding",
      "Forecasting & planning models",
      "Domain-specific copilots"
    ],
    stack: ["PyTorch", "TensorFlow", "Anthropic Claude", "OpenAI", "LangChain", "Vector Databases"]
  },
  {
    slug: "agentic-ai",
    navTitle: "Agentic AI",
    title: "Agentic AI",
    shortDescription: "Autonomous AI agents that plan, decide, and execute multi-step work independently.",
    heroHeadline: "Systems That Act.",
    heroSub: "We build agentic AI systems capable of reasoning across tools, data, and multi-step tasks — acting autonomously within the guardrails you define.",
    icon: Bot,
    capabilities: [
      "Multi-Agent Orchestration",
      "Tool-Using Agents",
      "Autonomous Task Execution",
      "Agent Memory Systems",
      "Human-in-the-Loop Controls",
      "Agent Evaluation Frameworks"
    ],
    process: [
      { step: "01", title: "Define", description: "We define the agent’s scope, tools, and decision boundaries." },
      { step: "02", title: "Architect", description: "We design the reasoning loop, memory, and tool integrations." },
      { step: "03", title: "Guardrail", description: "We implement safety checks, approvals, and monitoring." },
      { step: "04", title: "Deploy", description: "We launch agents into production with full observability." }
    ],
    benefits: [
      { title: "Autonomous Execution", description: "Agents complete multi-step work without constant supervision." },
      { title: "Safe By Design", description: "Guardrails and human checkpoints keep agents accountable." },
      { title: "Composable", description: "Agents integrate cleanly with your existing tools and APIs." }
    ],
    useCases: [
      "Autonomous research assistants",
      "Multi-step operations agents",
      "Customer-facing AI agents",
      "Internal knowledge agents",
      "Agent-driven QA & testing"
    ],
    stack: ["LangGraph", "Claude Agent SDK", "Model Context Protocol", "Vector Databases", "Temporal", "TypeScript"]
  },
  {
    slug: "data-analytics",
    navTitle: "Data & Analytics",
    title: "Data & Analytics",
    shortDescription: "Turn fragmented data into a single, trustworthy source of business intelligence.",
    heroHeadline: "Data Into Insight.",
    heroSub: "We build data infrastructure and analytics systems that transform fragmented operational data into a single, decision-ready source of truth.",
    icon: BarChart3,
    capabilities: [
      "Data Pipelines",
      "Real-Time Analytics",
      "Predictive Analytics",
      "Data Warehousing",
      "Business Intelligence",
      "Data Quality Monitoring"
    ],
    process: [
      { step: "01", title: "Audit", description: "We map your data sources, quality, and gaps." },
      { step: "02", title: "Architect", description: "We design pipelines and warehousing that scale." },
      { step: "03", title: "Visualize", description: "We build dashboards that surface what matters." },
      { step: "04", title: "Predict", description: "We layer predictive models on top of clean data." }
    ],
    benefits: [
      { title: "One Source of Truth", description: "Unify fragmented data into a single reliable model." },
      { title: "Real-Time Visibility", description: "See what’s happening in your business as it happens." },
      { title: "Predictive Power", description: "Move from reporting the past to forecasting what’s next." }
    ],
    useCases: [
      "Executive dashboards",
      "Operational data warehouses",
      "Customer analytics platforms",
      "Demand forecasting",
      "Data pipeline modernization"
    ],
    stack: ["dbt", "Snowflake", "PostgreSQL", "Airflow", "Apache Kafka", "Metabase"]
  },
  {
    slug: "web-app-development",
    navTitle: "Web & App Development",
    title: "Web & App Development",
    shortDescription: "Full-stack software engineering for products built to scale with intelligence baked in.",
    heroHeadline: "Software, Engineered.",
    heroSub: "We design and build full-stack web and mobile applications with intelligent capabilities built into the architecture from day one.",
    icon: Code2,
    capabilities: [
      "Full-Stack Engineering",
      "API & Systems Design",
      "Cloud Infrastructure",
      "AI-Native Applications",
      "Design Systems",
      "Performance Engineering"
    ],
    process: [
      { step: "01", title: "Plan", description: "We define architecture, scope, and technical strategy." },
      { step: "02", title: "Design", description: "We craft interfaces that are premium, usable, and fast." },
      { step: "03", title: "Build", description: "We engineer scalable, well-tested full-stack systems." },
      { step: "04", title: "Launch", description: "We deploy, monitor, and iterate post-launch." }
    ],
    benefits: [
      { title: "Built To Scale", description: "Architecture designed for growth from day one." },
      { title: "Intelligence Native", description: "AI capability built into the product, not bolted on." },
      { title: "Premium Experience", description: "Interfaces engineered for speed and polish." }
    ],
    useCases: [
      "SaaS platforms",
      "Internal enterprise tools",
      "Customer portals",
      "AI-powered applications",
      "Mobile & web products"
    ],
    stack: ["React", "TypeScript", "Node.js", "Netlify", "PostgreSQL", "Tailwind CSS"]
  }
];
function getSolution(slug) {
  return solutions.find((s) => s.slug === slug);
}
function MegaMenu({ onNavigate }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 8 },
      transition: { duration: 0.2 },
      className: "absolute left-1/2 top-full z-40 w-[min(880px,92vw)] -translate-x-1/2 pt-4",
      children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-white/95 p-3 shadow-[0_28px_64px_rgba(0,70,150,0.16)] backdrop-blur-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2", children: solutions.map((s) => {
          const Icon = s.icon;
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/solutions/$slug",
              params: { slug: s.slug },
              onClick: onNavigate,
              className: "group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-[rgba(0,70,150,0.12)] hover:bg-[#f3f8fa]",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f3f8fa] text-[#004696] transition-colors duration-200 group-hover:bg-[#1e8eab] group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { size: 20, strokeWidth: 1.75 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[15px] font-semibold text-[#0b1f33]", children: s.navTitle }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-snug text-[#718391]", children: s.shortDescription })
                ] })
              ]
            },
            s.slug
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-between rounded-2xl bg-[#f7fafc] px-5 py-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#526575]", children: "See every service we offer, in depth." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/solutions",
              onClick: onNavigate,
              className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696] transition-transform duration-200 hover:translate-x-0.5",
              children: [
                "View all solutions ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const NAV_LINKS$1 = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" }
];
function MobileNavigation({ open, onClose }) {
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-[55] bg-[#0b1f33]/30 backdrop-blur-sm lg:hidden",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden",
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[rgba(0,70,150,0.1)] px-6 py-5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-[#0b1f33]", children: "Menu" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": "Close menu",
                onClick: onClose,
                className: "flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#0b1f33]",
                children: /* @__PURE__ */ jsx(X, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "flex-1 overflow-y-auto px-6 py-6", "aria-label": "Mobile primary", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "flex w-full items-center justify-between py-3 text-left text-base font-semibold text-[#0b1f33]",
                onClick: () => setSolutionsExpanded((v) => !v),
                "aria-expanded": solutionsExpanded,
                children: [
                  "Solutions",
                  /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `transition-transform duration-300 ${solutionsExpanded ? "rotate-180" : ""}` })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { children: solutionsExpanded && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1 py-1 pl-2", children: [
                  solutions.map((s) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/solutions/$slug",
                      params: { slug: s.slug },
                      onClick: onClose,
                      className: "rounded-lg px-3 py-2.5 text-sm font-medium text-[#526575] transition-colors hover:bg-[#f3f8fa] hover:text-[#004696]",
                      children: s.navTitle
                    },
                    s.slug
                  )),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/solutions",
                      onClick: onClose,
                      className: "rounded-lg px-3 py-2.5 text-sm font-semibold text-[#004696] hover:bg-[#f3f8fa]",
                      children: "View all solutions"
                    }
                  )
                ] })
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 h-px bg-[rgba(0,70,150,0.1)]" }),
            NAV_LINKS$1.map((link) => /* @__PURE__ */ jsx(
              Link,
              {
                to: link.to,
                onClick: onClose,
                className: "block py-3 text-base font-semibold text-[#0b1f33] transition-colors hover:text-[#004696]",
                children: link.label
              },
              link.to
            ))
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-[rgba(0,70,150,0.1)] p-6", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              onClick: onClose,
              className: "flex w-full items-center justify-center rounded-full bg-[#004696] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,70,150,0.25)] transition-colors hover:bg-[#1e8eab]",
              children: "Let's Talk"
            }
          ) })
        ]
      }
    )
  ] }) });
}
const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" }
];
function Logo() {
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-2.5", "aria-label": "Home", children: [
    /* @__PURE__ */ jsxs("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("circle", { cx: "15", cy: "15", r: "14", stroke: "#004696", strokeWidth: "1.4", opacity: "0.35" }),
      /* @__PURE__ */ jsx("circle", { cx: "15", cy: "15", r: "6.5", fill: "url(#logo-grad)" }),
      /* @__PURE__ */ jsx("circle", { cx: "6", cy: "10", r: "1.6", fill: "#1e8eab" }),
      /* @__PURE__ */ jsx("circle", { cx: "24", cy: "20", r: "1.6", fill: "#004696" }),
      /* @__PURE__ */ jsx("line", { x1: "9.5", y1: "12", x2: "15", y2: "15", stroke: "#1e8eab", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("line", { x1: "15", y1: "15", x2: "21.5", y2: "19", stroke: "#004696", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "logo-grad", x1: "8.5", y1: "8.5", x2: "21.5", y2: "21.5", children: [
        /* @__PURE__ */ jsx("stop", { stopColor: "#004696" }),
        /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#1e8eab" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "text-lg font-extrabold tracking-tight text-[#0b1f33]", children: [
      "Nova",
      /* @__PURE__ */ jsx("span", { className: "text-[#1e8eab]", children: "forge" })
    ] })
  ] });
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[rgba(0,70,150,0.1)] bg-white/90 shadow-[0_4px_24px_rgba(0,70,150,0.06)] backdrop-blur-md" : "border-b border-transparent bg-white/60 backdrop-blur-sm"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8", "aria-label": "Primary", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-8 lg:flex", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: openSolutions,
                onMouseLeave: scheduleClose,
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: "relative text-sm font-medium text-[#0b1f33] transition-colors duration-200 hover:text-[#004696]",
                      "aria-expanded": solutionsOpen,
                      onClick: () => setSolutionsOpen((v) => !v),
                      children: [
                        "Solutions",
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: `absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#1e8eab] transition-transform duration-300 ${solutionsOpen ? "scale-x-100" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { children: solutionsOpen && /* @__PURE__ */ jsx(MegaMenu, { onNavigate: () => setSolutionsOpen(false) }) })
                ]
              }
            ),
            NAV_LINKS.map((link) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: link.to,
                className: "group relative text-sm font-medium text-[#0b1f33] transition-colors duration-200 hover:text-[#004696]",
                activeProps: { className: "text-[#004696]" },
                children: [
                  link.label,
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#1e8eab] transition-all duration-300 group-hover:w-full" })
                ]
              },
              link.to
            ))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "hidden rounded-full bg-[#004696] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,70,150,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] sm:inline-flex",
                children: "Let's Talk"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#0b1f33] lg:hidden",
                "aria-label": "Open menu",
                onClick: () => setMobileOpen(true),
                children: /* @__PURE__ */ jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(MobileNavigation, { open: mobileOpen, onClose: () => setMobileOpen(false) })
      ]
    }
  );
}
const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden border-t border-[rgba(0,70,150,0.1)] bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "animate-gradient-line h-[2px] w-full bg-gradient-to-r from-[#004696] via-[#1e8eab] to-[#004696]" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 lg:col-span-2", children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-[#526575]", children: "We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value." }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-3", children: [Linkedin, Twitter, Github].map((Icon, i) => /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              "aria-label": "Social link",
              className: "flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#004696] transition-colors duration-200 hover:border-[#1e8eab] hover:bg-[#f3f8fa]",
              children: /* @__PURE__ */ jsx(Icon, { size: 16 })
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]", children: "Solutions" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: solutions.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/solutions/$slug",
              params: { slug: s.slug },
              className: "text-sm text-[#526575] transition-colors duration-200 hover:text-[#1e8eab]",
              children: s.navTitle
            }
          ) }, s.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]", children: "Company" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: COMPANY_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "text-sm text-[#526575] transition-colors duration-200 hover:text-[#1e8eab]", children: l.label }) }, l.to)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]", children: "Connect" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-[#526575]", children: [
            /* @__PURE__ */ jsx("li", { children: "hello@novaforge.ai" }),
            /* @__PURE__ */ jsx("li", { children: "+1 (415) 555-0148" }),
            /* @__PURE__ */ jsx("li", { children: "San Francisco, CA" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-[rgba(0,70,150,0.08)] pt-8 text-sm text-[#718391] sm:flex-row", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Novaforge AI. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "transition-colors hover:text-[#1e8eab]", children: "Privacy Policy" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "transition-colors hover:text-[#1e8eab]", children: "Terms of Service" })
        ] })
      ] })
    ] })
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 1e-3 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      "aria-hidden": "true",
      className: "fixed left-0 top-0 z-[70] h-[3px] w-full origin-left",
      style: {
        scaleX,
        background: "linear-gradient(90deg, #004696, #1e8eab)"
      }
    }
  );
}
function CursorGlow() {
  const [pos, setPos] = useState(null);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [enabled]);
  if (!enabled || !pos) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": "true",
      className: "pointer-events-none fixed inset-0 z-[60] hidden lg:block",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute rounded-full transition-transform duration-100 ease-out",
          style: {
            left: pos.x - 180,
            top: pos.y - 180,
            width: 360,
            height: 360,
            background: "radial-gradient(circle, rgba(30,142,171,0.14), transparent 70%)",
            filter: "blur(10px)"
          }
        }
      )
    }
  );
}
function PageTransition({ children }) {
  const location = useLocation();
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -8 },
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      children
    },
    location.pathname
  ) });
}
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Novaforge — AI & Intelligent Technology" },
      {
        name: "description",
        content: "Novaforge designs and builds intelligent digital systems — AI automation, agentic AI, custom AI development, and data platforms — for enterprise clients."
      },
      { property: "og:title", content: "Novaforge — AI & Intelligent Technology" },
      {
        property: "og:description",
        content: "Enterprise AI automation, agentic AI, and data intelligence, engineered for real-world impact."
      },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#ffffff" }
    ]
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-white text-[#0b1f33]", children: [
      /* @__PURE__ */ jsx(ScrollProgress, {}),
      /* @__PURE__ */ jsx(CursorGlow, {}),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { id: "main-content", children: /* @__PURE__ */ jsx(PageTransition, { children }) }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-[0.14em] text-[#1e8eab]", children: "Error 404" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-extrabold text-[#0b1f33]", children: "Page not found." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-[#526575]", children: "The page you're looking for doesn't exist or has moved." }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/",
        className: "mt-8 inline-flex items-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e8eab]",
        children: "Back to Home"
      }
    )
  ] });
}
const $$splitComponentImporter$7 = () => import("./contact-D69IAxvU.js");
const Route$7 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Novaforge"
    }, {
      name: "description",
      content: "Tell Novaforge about your project — AI automation, agentic AI, custom AI development, data analytics, or web development."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./careers-C01tvY0y.js");
const Route$6 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — Novaforge"
    }, {
      name: "description",
      content: "Join Novaforge and help build intelligent AI systems for enterprise clients. Explore open roles and apply today."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./about-BRxleHUr.js");
const Route$5 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Novaforge"
    }, {
      name: "description",
      content: "Learn who Novaforge is, how we think, and why enterprise clients choose us to build their intelligent systems."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-DCRqjtIp.js");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Novaforge — AI & Intelligent Technology"
    }, {
      name: "description",
      content: "We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-CJwpXD4I.js");
const Route$3 = createFileRoute("/solutions/")({
  head: () => ({
    meta: [{
      title: "Solutions — Novaforge"
    }, {
      name: "description",
      content: "Explore Novaforge’s AI automation, custom AI, agentic AI, data analytics, and web development solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DF1yYN7k.js");
const Route$2 = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [{
      title: "Portfolio — Novaforge"
    }, {
      name: "description",
      content: "Explore case studies of AI systems, automation platforms, and data products Novaforge has built for enterprise clients."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitNotFoundComponentImporter$1 = () => import("./_slug-DvmKOjI9.js");
const $$splitComponentImporter$1 = () => import("./_slug-BdR-4uAD.js");
const Route$1 = createFileRoute("/solutions/$slug")({
  loader: ({
    params
  }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return solution;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.title} — Novaforge`
    }, {
      name: "description",
      content: loaderData.heroSub
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const portfolio = [
  {
    slug: "ai-customer-intelligence-platform",
    category: "Agentic AI",
    title: "AI Customer Intelligence Platform",
    description: "An AI-driven platform that unifies customer data and surfaces intelligent, real-time engagement signals.",
    client: "Mid-Market Retail Group",
    industry: "Retail & E-Commerce",
    challenge: "Customer data was scattered across five disconnected systems, making it impossible to build a coherent view of customer behavior or intervene at the right moment.",
    approach: [
      "Unified customer data into a single real-time model",
      "Built ML models to score engagement and churn risk",
      "Designed an agent layer to surface next-best actions"
    ],
    solution: "We built a centralized intelligence layer that ingests behavioral, transactional, and support data in real time, scoring every customer against churn and lifetime-value models, then surfacing recommended actions directly inside the team’s existing tools.",
    technology: ["React", "PostgreSQL", "Python", "LangChain", "Kafka"],
    results: [
      { metric: "32%", label: "Reduction in churn" },
      { metric: "4.6x", label: "Faster insight delivery" },
      { metric: "18%", label: "Increase in retention revenue" }
    ],
    gallery: ["dashboard", "network", "insight"]
  },
  {
    slug: "automated-operations-system",
    category: "AI Automation",
    title: "Automated Operations System",
    description: "An end-to-end automation system that eliminated manual document processing across finance operations.",
    client: "Regional Logistics Provider",
    industry: "Logistics & Supply Chain",
    challenge: "Finance teams manually processed thousands of shipping documents each week, causing delays, errors, and mounting operational cost.",
    approach: [
      "Automated document ingestion and classification",
      "Built intelligent extraction pipelines",
      "Integrated automation directly into finance systems"
    ],
    solution: "We designed a document intelligence pipeline that classifies, extracts, and validates data from incoming shipping documents automatically, routing exceptions to human reviewers and posting clean data directly into finance systems.",
    technology: ["Python", "AWS Lambda", "Computer Vision", "Temporal"],
    results: [
      { metric: "91%", label: "Manual work eliminated" },
      { metric: "3.2 days", label: "Faster processing time" },
      { metric: "99.4%", label: "Data accuracy achieved" }
    ],
    gallery: ["workflow", "pipeline", "automation"]
  },
  {
    slug: "ai-powered-analytics-dashboard",
    category: "Data & Analytics",
    title: "AI-Powered Analytics Dashboard",
    description: "A predictive analytics platform giving executives real-time visibility into operational performance.",
    client: "National Healthcare Network",
    industry: "Healthcare",
    challenge: "Leadership lacked real-time visibility into operational performance across facilities, relying on stale, manually assembled reports.",
    approach: [
      "Consolidated data from twelve operational systems",
      "Built real-time pipelines and a governed data model",
      "Layered predictive models for capacity forecasting"
    ],
    solution: "We engineered a real-time data warehouse and analytics layer, giving executives live dashboards and predictive forecasts for staffing and capacity across every facility.",
    technology: ["Snowflake", "dbt", "Airflow", "Metabase"],
    results: [
      { metric: "100%", label: "Real-time visibility" },
      { metric: "27%", label: "Improved forecast accuracy" },
      { metric: "6 hrs → 4 min", label: "Report generation time" }
    ],
    gallery: ["analytics", "dashboard", "forecast"]
  },
  {
    slug: "intelligent-ecommerce-platform",
    category: "Web & App Development",
    title: "Intelligent E-Commerce Platform",
    description: "A high-performance commerce platform with AI-driven personalization built into its architecture.",
    client: "DTC Consumer Brand",
    industry: "Consumer Goods",
    challenge: "An aging e-commerce stack couldn’t support personalization or scale for peak traffic events, capping growth.",
    approach: [
      "Rebuilt the storefront on a modern full-stack architecture",
      "Integrated a real-time personalization engine",
      "Engineered for elastic scale under peak load"
    ],
    solution: "We rebuilt the commerce platform end-to-end with a modern architecture and an embedded recommendation engine that personalizes every session, tested to scale seamlessly through peak demand.",
    technology: ["React", "Node.js", "PostgreSQL", "Netlify", "Stripe"],
    results: [
      { metric: "41%", label: "Increase in conversion" },
      { metric: "2.1x", label: "Average order value lift" },
      { metric: "99.99%", label: "Uptime during peak events" }
    ],
    gallery: ["commerce", "personalization", "storefront"]
  },
  {
    slug: "enterprise-ai-assistant",
    category: "Custom AI Development",
    title: "Enterprise AI Assistant",
    description: "A domain-tuned AI assistant giving employees instant, accurate answers from internal knowledge.",
    client: "Global Professional Services Firm",
    industry: "Professional Services",
    challenge: "Employees spent hours searching fragmented internal documentation to answer routine client and policy questions.",
    approach: [
      "Built a retrieval-augmented knowledge layer",
      "Fine-tuned response behavior for domain accuracy",
      "Deployed with enterprise-grade access controls"
    ],
    solution: "We built a retrieval-augmented AI assistant grounded in the firm’s internal knowledge base, with fine-tuned response behavior and enterprise access controls, deployed directly into existing collaboration tools.",
    technology: ["Anthropic Claude", "LangChain", "Vector Databases", "TypeScript"],
    results: [
      { metric: "76%", label: "Reduction in search time" },
      { metric: "12,000+", label: "Queries answered monthly" },
      { metric: "94%", label: "Employee satisfaction score" }
    ],
    gallery: ["assistant", "knowledge", "chat"]
  },
  {
    slug: "data-intelligence-platform",
    category: "Data & Analytics",
    title: "Data Intelligence Platform",
    description: "A unified data intelligence platform turning fragmented operational data into predictive insight.",
    client: "Industrial Manufacturing Company",
    industry: "Manufacturing",
    challenge: "Equipment and production data lived in disconnected legacy systems, preventing any predictive view of maintenance or output.",
    approach: [
      "Built ingestion pipelines from legacy plant systems",
      "Modeled equipment data into a unified schema",
      "Layered predictive maintenance models on top"
    ],
    solution: "We connected legacy plant systems into a unified data platform, modeling equipment and production data centrally, then layered predictive maintenance models to flag failures before they happen.",
    technology: ["PostgreSQL", "Python", "Airflow", "Predictive ML"],
    results: [
      { metric: "38%", label: "Reduction in unplanned downtime" },
      { metric: "22%", label: "Increase in throughput visibility" },
      { metric: "5x", label: "Faster root-cause analysis" }
    ],
    gallery: ["industrial", "network", "insight"]
  }
];
function getCaseStudy(slug) {
  return portfolio.find((p) => p.slug === slug);
}
const $$splitNotFoundComponentImporter = () => import("./_slug-54ngXc5J.js");
const $$splitComponentImporter = () => import("./_slug-DQ6k8ejD.js");
const Route = createFileRoute("/portfolio/$slug")({
  loader: ({
    params
  }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.title} — Novaforge`
    }, {
      name: "description",
      content: loaderData.description
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const CareersRoute = Route$6.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$5.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const SolutionsIndexRoute = Route$3.update({
  id: "/solutions/",
  path: "/solutions/",
  getParentRoute: () => Route$8
});
const PortfolioIndexRoute = Route$2.update({
  id: "/portfolio/",
  path: "/portfolio/",
  getParentRoute: () => Route$8
});
const SolutionsSlugRoute = Route$1.update({
  id: "/solutions/$slug",
  path: "/solutions/$slug",
  getParentRoute: () => Route$8
});
const PortfolioSlugRoute = Route.update({
  id: "/portfolio/$slug",
  path: "/portfolio/$slug",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CareersRoute,
  ContactRoute,
  PortfolioSlugRoute,
  SolutionsSlugRoute,
  PortfolioIndexRoute,
  SolutionsIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  Route as a,
  portfolio as p,
  router as r,
  solutions as s
};
