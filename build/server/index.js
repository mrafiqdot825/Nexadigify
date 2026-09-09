import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, NavLink, useLocation, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useLoaderData } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Workflow, BrainCircuit, Bot, BarChart3, Code2, ArrowRight, X, ChevronDown, Menu, ArrowUpRight, Sparkles, Layers, Rocket, Target, Lightbulb, Compass, Users, CheckCircle2, ArrowLeft, Upload, Briefcase, MapPin, Mail, Phone } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const solutions = [
  {
    slug: "ai-automation",
    navTitle: "AI Automation",
    title: "AI Automation",
    shortDescription: "Automate repetitive operations and free your teams to focus on higher-value work.",
    heroHeadline: "Automation That Thinks.",
    heroSub: "We design intelligent automation systems that handle repetitive operational work end-to-end, reducing manual effort while improving accuracy and speed.",
    icon: Workflow,
    svgIllustration: "/Images/ai-automation.svg",
    capabilities: [
      "Process Automation",
      "Document Intelligence",
      "Workflow Orchestration",
      "Robotic Task Automation",
      "Intelligent Alerts",
      "System Integration"
    ],
    process: [
      {
        step: "01",
        title: "Map",
        description: "We audit existing workflows to find automation opportunities with the highest operational impact."
      },
      {
        step: "02",
        title: "Design",
        description: "We architect automation logic that fits your systems, data, and compliance requirements."
      },
      {
        step: "03",
        title: "Build",
        description: "We implement automations using resilient, observable, and maintainable pipelines."
      },
      {
        step: "04",
        title: "Operate",
        description: "We monitor, refine, and scale automations as your operations evolve."
      }
    ],
    benefits: [
      {
        title: "Fewer Manual Hours",
        description: "Remove repetitive tasks from your team’s day-to-day workload."
      },
      {
        title: "Fewer Errors",
        description: "Reduce human error in high-volume operational processes."
      },
      {
        title: "Faster Turnaround",
        description: "Cut process cycle times from days to minutes."
      }
    ],
    useCases: [
      "Invoice & document processing",
      "Customer support triage",
      "Internal operations workflows",
      "Data entry & reconciliation",
      "Compliance monitoring"
    ],
    stack: ["Python", "Node.js", "n8n", "Temporal", "AWS Lambda", "PostgreSQL"]
  },
  {
    slug: "custom-ai",
    navTitle: "Custom AI Development",
    title: "Custom AI Development",
    shortDescription: "Purpose-built AI models and systems engineered around your business problem.",
    heroHeadline: "Intelligence, Custom-Built.",
    heroSub: "We design and build bespoke AI systems tailored to your data, your workflows, and your business objectives — not off-the-shelf approximations.",
    icon: BrainCircuit,
    svgIllustration: "/Images/ai-powered-applications.svg",
    capabilities: [
      "Model Fine-Tuning",
      "LLM Integration",
      "Computer Vision",
      "Predictive Modeling",
      "Retrieval-Augmented Generation",
      "Custom ML Pipelines"
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "We define the problem, success metrics, and available data."
      },
      {
        step: "02",
        title: "Prototype",
        description: "We validate feasibility with rapid, testable prototypes."
      },
      {
        step: "03",
        title: "Engineer",
        description: "We build production-grade models and serving infrastructure."
      },
      {
        step: "04",
        title: "Scale",
        description: "We monitor performance and continuously improve accuracy."
      }
    ],
    benefits: [
      {
        title: "Built For Your Data",
        description: "Models trained and tuned specifically on your domain."
      },
      {
        title: "Production Ready",
        description: "Engineered for reliability, not just proof-of-concept demos."
      },
      {
        title: "Measurable ROI",
        description: "Every model ships with clear performance benchmarks."
      }
    ],
    useCases: [
      "Custom recommendation engines",
      "Fraud & anomaly detection",
      "Document understanding",
      "Forecasting & planning models",
      "Domain-specific copilots"
    ],
    stack: [
      "PyTorch",
      "TensorFlow",
      "Anthropic Claude",
      "OpenAI",
      "LangChain",
      "Vector Databases"
    ]
  },
  {
    slug: "agentic-ai",
    navTitle: "Agentic AI",
    title: "Agentic AI",
    shortDescription: "Autonomous AI agents that plan, decide, and execute multi-step work independently.",
    heroHeadline: "Systems That Act.",
    heroSub: "We build agentic AI systems capable of reasoning across tools, data, and multi-step tasks — acting autonomously within the guardrails you define.",
    icon: Bot,
    svgIllustration: "/Images/agentic-ai.svg",
    capabilities: [
      "Multi-Agent Orchestration",
      "Tool-Using Agents",
      "Autonomous Task Execution",
      "Agent Memory Systems",
      "Human-in-the-Loop Controls",
      "Agent Evaluation Frameworks"
    ],
    process: [
      {
        step: "01",
        title: "Define",
        description: "We define the agent’s scope, tools, and decision boundaries."
      },
      {
        step: "02",
        title: "Architect",
        description: "We design the reasoning loop, memory, and tool integrations."
      },
      {
        step: "03",
        title: "Guardrail",
        description: "We implement safety checks, approvals, and monitoring."
      },
      {
        step: "04",
        title: "Deploy",
        description: "We launch agents into production with full observability."
      }
    ],
    benefits: [
      {
        title: "Autonomous Execution",
        description: "Agents complete multi-step work without constant supervision."
      },
      {
        title: "Safe By Design",
        description: "Guardrails and human checkpoints keep agents accountable."
      },
      {
        title: "Composable",
        description: "Agents integrate cleanly with your existing tools and APIs."
      }
    ],
    useCases: [
      "Autonomous research assistants",
      "Multi-step operations agents",
      "Customer-facing AI agents",
      "Internal knowledge agents",
      "Agent-driven QA & testing"
    ],
    stack: [
      "LangGraph",
      "Claude Agent SDK",
      "Model Context Protocol",
      "Vector Databases",
      "Temporal",
      "TypeScript"
    ]
  },
  {
    slug: "data-analytics",
    navTitle: "Data & Analytics",
    title: "Data & Analytics",
    shortDescription: "Turn fragmented data into a single, trustworthy source of business intelligence.",
    heroHeadline: "Data Into Insight.",
    heroSub: "We build data infrastructure and analytics systems that transform fragmented operational data into a single, decision-ready source of truth.",
    icon: BarChart3,
    svgIllustration: "/Images/data-analytics.svg",
    capabilities: [
      "Data Pipelines",
      "Real-Time Analytics",
      "Predictive Analytics",
      "Data Warehousing",
      "Business Intelligence",
      "Data Quality Monitoring"
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "We map your data sources, quality, and gaps."
      },
      {
        step: "02",
        title: "Architect",
        description: "We design pipelines and warehousing that scale."
      },
      {
        step: "03",
        title: "Visualize",
        description: "We build dashboards that surface what matters."
      },
      {
        step: "04",
        title: "Predict",
        description: "We layer predictive models on top of clean data."
      }
    ],
    benefits: [
      {
        title: "One Source of Truth",
        description: "Unify fragmented data into a single reliable model."
      },
      {
        title: "Real-Time Visibility",
        description: "See what’s happening in your business as it happens."
      },
      {
        title: "Predictive Power",
        description: "Move from reporting the past to forecasting what’s next."
      }
    ],
    useCases: [
      "Executive dashboards",
      "Operational data warehouses",
      "Customer analytics platforms",
      "Demand forecasting",
      "Data pipeline modernization"
    ],
    stack: [
      "dbt",
      "Snowflake",
      "PostgreSQL",
      "Airflow",
      "Apache Kafka",
      "Metabase"
    ]
  },
  {
    slug: "web-app-development",
    navTitle: "Web & App Development",
    title: "Web & App Development",
    shortDescription: "Full-stack software engineering for products built to scale with intelligence baked in.",
    heroHeadline: "Software, Engineered.",
    heroSub: "We design and build full-stack web and mobile applications with intelligent capabilities built into the architecture from day one.",
    icon: Code2,
    svgIllustration: "/Images/full-stack-development.svg",
    capabilities: [
      "Full-Stack Engineering",
      "API & Systems Design",
      "Cloud Infrastructure",
      "AI-Native Applications",
      "Design Systems",
      "Performance Engineering"
    ],
    process: [
      {
        step: "01",
        title: "Plan",
        description: "We define architecture, scope, and technical strategy."
      },
      {
        step: "02",
        title: "Design",
        description: "We craft interfaces that are premium, usable, and fast."
      },
      {
        step: "03",
        title: "Build",
        description: "We engineer scalable, well-tested full-stack systems."
      },
      {
        step: "04",
        title: "Launch",
        description: "We deploy, monitor, and iterate post-launch."
      }
    ],
    benefits: [
      {
        title: "Built To Scale",
        description: "Architecture designed for growth from day one."
      },
      {
        title: "Intelligence Native",
        description: "AI capability built into the product, not bolted on."
      },
      {
        title: "Premium Experience",
        description: "Interfaces engineered for speed and polish."
      }
    ],
    useCases: [
      "SaaS platforms",
      "Internal enterprise tools",
      "Customer portals",
      "AI-powered applications",
      "Mobile & web products"
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
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
              to: `/solutions/${s.slug}`,
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
function MobileNavigation({
  open,
  onClose
}) {
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
          /* @__PURE__ */ jsxs(
            "nav",
            {
              className: "flex-1 overflow-y-auto px-6 py-6",
              "aria-label": "Mobile primary",
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: "flex w-full items-center justify-between py-3 text-left text-base font-semibold text-[#0b1f33]",
                    onClick: () => setSolutionsExpanded((v) => !v),
                    "aria-expanded": solutionsExpanded,
                    children: [
                      "Solutions",
                      /* @__PURE__ */ jsx(
                        ChevronDown,
                        {
                          size: 18,
                          className: `transition-transform duration-300 ${solutionsExpanded ? "rotate-180" : ""}`
                        }
                      )
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
                          to: `/solutions/${s.slug}`,
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
              ]
            }
          ),
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
function Logo({ className = "h-9 w-auto" }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to: "/",
      className: "group flex items-center",
      "aria-label": "Nexadigify Home",
      children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/logo.svg",
          alt: "Nexadigify",
          className: `${className} transition-transform duration-300 group-hover:scale-[1.03]`
        }
      )
    }
  );
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
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8",
            "aria-label": "Primary",
            children: [
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
                  NavLink,
                  {
                    to: link.to,
                    className: ({ isActive }) => `group relative text-sm font-medium transition-colors duration-200 hover:text-[#004696] ${isActive ? "text-[#004696]" : "text-[#0b1f33]"}`,
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
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          MobileNavigation,
          {
            open: mobileOpen,
            onClose: () => setMobileOpen(false)
          }
        )
      ]
    }
  );
}
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" }) })
  },
  {
    name: "X",
    href: "#",
    icon: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
  },
  {
    name: "GitHub",
    href: "#",
    icon: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" }) })
  }
];
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
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-3", children: SOCIAL_LINKS.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              "aria-label": item.name,
              className: "flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,70,150,0.14)] text-[#004696] transition-colors duration-200 hover:border-[#1e8eab] hover:bg-[#f3f8fa]",
              children: item.icon
            },
            item.name
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]", children: "Solutions" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: solutions.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: `/solutions/${s.slug}`,
              className: "text-sm text-[#526575] transition-colors duration-200 hover:text-[#1e8eab]",
              children: s.navTitle
            }
          ) }, s.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold uppercase tracking-wide text-[#004696]", children: "Company" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: COMPANY_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "text-sm text-[#526575] transition-colors duration-200 hover:text-[#1e8eab]",
              children: l.label
            }
          ) }, l.to)) })
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
          " Nexadigify AI. All rights reserved."
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
const stylesheet = "/assets/app-DChBRds8.css";
const links = () => [{
  rel: "stylesheet",
  href: stylesheet
}, {
  rel: "icon",
  href: "/favicon.ico"
}];
const meta$8 = () => [{
  charSet: "utf-8"
}, {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}, {
  title: "Nexadigify — AI & Intelligent Technology"
}, {
  name: "description",
  content: "Nexadigify designs and builds intelligent digital systems — AI automation, agentic AI, custom AI development, and data platforms — for enterprise clients."
}, {
  property: "og:title",
  content: "Nexadigify — AI & Intelligent Technology"
}, {
  property: "og:description",
  content: "Enterprise AI automation, agentic AI, and data intelligence, engineered for real-world impact."
}, {
  property: "og:type",
  content: "website"
}, {
  name: "theme-color",
  content: "#ffffff"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "bg-white text-[#0b1f33]",
      children: [/* @__PURE__ */ jsx(ScrollProgress, {}), /* @__PURE__ */ jsx(CursorGlow, {}), /* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("main", {
        id: "main-content",
        children: /* @__PURE__ */ jsx(PageTransition, {
          children
        })
      }), /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center",
    children: [/* @__PURE__ */ jsx("span", {
      className: "text-sm font-semibold uppercase tracking-[0.14em] text-[#1e8eab]",
      children: message
    }), /* @__PURE__ */ jsx("h1", {
      className: "mt-4 text-4xl font-extrabold text-[#0b1f33]",
      children: error && typeof error === "object" && "status" in error && error.status === 404 ? "Page not found." : "Something went wrong."
    }), /* @__PURE__ */ jsx("p", {
      className: "mt-3 max-w-md text-[#526575]",
      children: details
    }), stack, /* @__PURE__ */ jsx(Link, {
      to: "/",
      className: "mt-8 inline-flex items-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e8eab]",
      children: "Back to Home"
    })]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
function AnimatedBackground({ variant = "section", className = "" }) {
  const intensity = variant === "hero" || variant === "cta" ? 1 : variant === "subtle" ? 0.5 : 0.75;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": "true",
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-orb-a absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] max-w-[720px] max-h-[720px] rounded-full blur-[90px]",
            style: {
              background: "radial-gradient(circle, rgba(0,70,150,0.28), transparent 70%)",
              opacity: intensity
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-orb-b absolute -right-[12%] top-[10%] h-[48vw] w-[48vw] max-w-[640px] max-h-[640px] rounded-full blur-[90px]",
            style: {
              background: "radial-gradient(circle, rgba(30,142,171,0.26), transparent 70%)",
              opacity: intensity
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-orb-a absolute bottom-[-20%] left-[20%] h-[40vw] w-[40vw] max-w-[520px] max-h-[520px] rounded-full blur-[100px]",
            style: {
              background: "radial-gradient(circle, rgba(0,70,150,0.16), transparent 70%)",
              opacity: intensity * 0.8,
              animationDelay: "4s"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-grid-drift absolute inset-[-10%]",
            style: {
              backgroundImage: "linear-gradient(rgba(0,70,150,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,70,150,0.055) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              opacity: intensity
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "animate-beam absolute left-[10%] top-[-10%] h-[140%] w-[26%]",
            style: {
              background: "linear-gradient(180deg, transparent, rgba(30,142,171,0.14), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsx(Particles, { count: variant === "hero" ? 26 : 14 }),
        /* @__PURE__ */ jsx(ConnectionLines, {}),
        /* @__PURE__ */ jsx("div", { className: "noise-overlay absolute inset-0" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" })
      ]
    }
  );
}
function Particles({ count }) {
  const items = Array.from({ length: count });
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: items.map((_, i) => {
    const left = i * 37 % 100 + Math.sin(i) * 4;
    const top = i * 53 % 100 + Math.cos(i) * 4;
    const delay = i % 10 * 1.4;
    const duration = 14 + i % 6 * 3;
    const px = 20 + i % 5 * 10;
    const py = -40 - i % 7 * 10;
    const isTeal = i % 2 === 0;
    const style = {
      left: `${left}%`,
      top: `${top}%`,
      width: i % 4 === 0 ? 3 : 2,
      height: i % 4 === 0 ? 3 : 2,
      background: isTeal ? "#1e8eab" : "#004696",
      animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite`,
      "--px": `${px}px`,
      "--py": `${py}px`
    };
    return /* @__PURE__ */ jsx("span", { className: "absolute rounded-full", style }, i);
  }) });
}
function ConnectionLines() {
  const lines = [
    { x1: 8, y1: 20, x2: 30, y2: 40 },
    { x1: 30, y1: 40, x2: 55, y2: 18 },
    { x1: 70, y1: 55, x2: 92, y2: 30 },
    { x1: 15, y1: 70, x2: 42, y2: 85 },
    { x1: 60, y1: 78, x2: 85, y2: 62 }
  ];
  return /* @__PURE__ */ jsx("svg", { className: "absolute inset-0 h-full w-full", preserveAspectRatio: "none", viewBox: "0 0 100 100", children: lines.map((l, i) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "line",
      {
        x1: l.x1,
        y1: l.y1,
        x2: l.x2,
        y2: l.y2,
        stroke: "rgba(0,70,150,0.12)",
        strokeWidth: "0.15",
        vectorEffect: "non-scaling-stroke"
      }
    ),
    /* @__PURE__ */ jsx(
      "line",
      {
        x1: l.x1,
        y1: l.y1,
        x2: l.x2,
        y2: l.y2,
        stroke: "#1e8eab",
        strokeWidth: "0.3",
        strokeDasharray: "4 236",
        vectorEffect: "non-scaling-stroke",
        style: {
          animation: `pulse-line ${8 + i * 1.6}s linear ${i * 1.3}s infinite`
        }
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: l.x1, cy: l.y1, r: "0.5", fill: "#004696", className: "animate-node-glow", style: { animationDelay: `${i * 0.4}s` } }),
    /* @__PURE__ */ jsx("circle", { cx: l.x2, cy: l.y2, r: "0.5", fill: "#1e8eab", className: "animate-node-glow", style: { animationDelay: `${i * 0.6}s` } })
  ] }, i)) });
}
function HeroVisualization() {
  const outerNodes = [
    { angle: 20, ring: 1 },
    { angle: 110, ring: 1 },
    { angle: 200, ring: 1 },
    { angle: 290, ring: 1 },
    { angle: 60, ring: 2 },
    { angle: 150, ring: 2 },
    { angle: 240, ring: 2 },
    { angle: 330, ring: 2 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute h-full w-full rounded-full blur-3xl",
        style: { background: "radial-gradient(circle, rgba(30,142,171,0.18), transparent 65%)" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin absolute h-[92%] w-[92%] rounded-full border border-dashed border-[rgba(0,70,150,0.18)]" }),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin-reverse absolute h-[68%] w-[68%] rounded-full border border-[rgba(30,142,171,0.24)]" }),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin absolute h-[92%] w-[92%]", children: outerNodes.filter((n) => n.ring === 1).map((n, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute h-2.5 w-2.5 rounded-full bg-[#004696] shadow-[0_0_12px_rgba(0,70,150,0.6)]",
        style: {
          top: `${50 + 49 * Math.sin(n.angle * Math.PI / 180)}%`,
          left: `${50 + 49 * Math.cos(n.angle * Math.PI / 180)}%`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "animate-orbit-spin-reverse absolute h-[68%] w-[68%]", children: outerNodes.filter((n) => n.ring === 2).map((n, i) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute h-2 w-2 rounded-full bg-[#1e8eab] shadow-[0_0_10px_rgba(30,142,171,0.6)]",
        style: {
          top: `${50 + 49 * Math.sin(n.angle * Math.PI / 180)}%`,
          left: `${50 + 49 * Math.cos(n.angle * Math.PI / 180)}%`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("svg", { className: "absolute h-full w-full", viewBox: "0 0 100 100", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "46", fill: "none", stroke: "rgba(0,70,150,0.08)", strokeWidth: "0.3" }),
      [15, 85, 45, 130, 200, 260].map((a, i) => /* @__PURE__ */ jsx(
        "line",
        {
          x1: "50",
          y1: "50",
          x2: 50 + 44 * Math.cos(a * Math.PI / 180),
          y2: 50 + 44 * Math.sin(a * Math.PI / 180),
          stroke: "rgba(30,142,171,0.25)",
          strokeWidth: "0.3",
          strokeDasharray: "3 6"
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "animate-core-pulse relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#004696] to-[#1e8eab] shadow-[0_0_60px_rgba(30,142,171,0.55)] sm:h-32 sm:w-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full rounded-full bg-white/10 blur-sm" }),
      /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.8)] sm:h-16 sm:w-16" })
    ] })
  ] });
}
function HeroButton({
  to,
  className,
  children
}) {
  if (to.startsWith("#")) {
    return /* @__PURE__ */ jsx("a", { href: to, className, children });
  }
  return /* @__PURE__ */ jsx(Link, { to, className, children });
}
function Hero({
  eyebrow,
  titleLines,
  description,
  primaryLabel = "Get Started",
  primaryTo = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryTo = "/solutions",
  compact = false
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `relative overflow-hidden ${compact ? "pt-36 pb-16" : "pt-40 pb-24 sm:pt-48 sm:pb-32"}`,
      children: [
        /* @__PURE__ */ jsx(AnimatedBackground, { variant: "hero" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            eyebrow && /* @__PURE__ */ jsxs(
              motion.span,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696] backdrop-blur-sm",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]" }),
                  eyebrow
                ]
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-[clamp(2.4rem,5.4vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b1f33]", children: titleLines.map((line, i) => /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.7,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                },
                className: "block",
                children: line.map((word, j) => {
                  const isHighlight = typeof word === "object" && word.highlight;
                  const text = typeof word === "string" ? word : word.text;
                  return /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: isHighlight ? "text-gradient-brand" : void 0,
                      children: [
                        text,
                        " "
                      ]
                    },
                    j
                  );
                })
              },
              i
            )) }),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.4 },
                className: "mt-7 max-w-lg text-lg leading-relaxed text-[#526575]",
                children: description
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.55 },
                className: "mt-10 flex flex-wrap items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxs(
                    HeroButton,
                    {
                      to: primaryTo,
                      className: "group inline-flex items-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] hover:shadow-[0_16px_32px_rgba(30,142,171,0.32)]",
                      children: [
                        primaryLabel,
                        /* @__PURE__ */ jsx(
                          ArrowRight,
                          {
                            size: 16,
                            className: "transition-transform duration-300 group-hover:translate-x-1"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    HeroButton,
                    {
                      to: secondaryTo,
                      className: "inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.28)] bg-white px-7 py-3.5 text-sm font-semibold text-[#004696] transition-all duration-300 hover:border-[#1e8eab] hover:bg-[#f3f8fa]",
                      children: secondaryLabel
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.94 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
              children: /* @__PURE__ */ jsx(HeroVisualization, {})
            }
          )
        ] })
      ]
    }
  );
}
function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
      children
    }
  );
}
function ScrollRevealStagger({
  children,
  className = "",
  stagger = 0.08
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger } }
      },
      children
    }
  );
}
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function ScrollRevealItem({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx(motion.div, { className, variants: staggerItem, children });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className
}) {
  return /* @__PURE__ */ jsxs(ScrollReveal, { className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className), children: [
    eyebrow && /* @__PURE__ */ jsxs("span", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696]", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]" }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxs("h2", { className: "text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-[#0b1f33]", children: [
      title,
      highlight && /* @__PURE__ */ jsxs("span", { className: "text-gradient-brand", children: [
        " ",
        highlight
      ] })
    ] }),
    description && /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-relaxed text-[#526575]", children: description })
  ] });
}
function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  svgSrc,
  to = "/solutions",
  index: index2 = 0
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: {
        duration: 0.6,
        delay: index2 * 0.06,
        ease: [0.16, 1, 0.3, 1]
      },
      whileHover: { y: -8 },
      className: "group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-7 shadow-[0_2px_16px_rgba(0,70,150,0.04)] transition-all duration-300 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_24px_48px_rgba(0,70,150,0.12)]",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            style: {
              background: "linear-gradient(135deg, rgba(0,70,150,0.05), rgba(30,142,171,0.06))"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          svgSrc && /* @__PURE__ */ jsx("div", { className: "mb-5 h-40 w-full overflow-hidden rounded-xl bg-[#0b0f1f] shadow-sm", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: svgSrc,
              alt: title,
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold tracking-wide text-[#a8bccb]", children: number }),
            /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3f8fa] text-[#004696] transition-all duration-300 group-hover:bg-[#004696] group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { size: 20, strokeWidth: 1.75 }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold text-[#0b1f33]", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mb-6 text-[15px] leading-relaxed text-[#526575]", children: description })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to,
            className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e8eab] transition-all duration-300 group-hover:translate-x-1",
            children: [
              "Learn more ",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
            ]
          }
        )
      ]
    }
  );
}
function FeatureCard({
  number,
  title,
  description,
  icon: Icon,
  svgSrc,
  index: index2 = 0
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: {
        duration: 0.7,
        delay: index2 * 0.1,
        ease: [0.16, 1, 0.3, 1]
      },
      className: "group relative rounded-[28px] border border-[rgba(0,70,150,0.1)] bg-gradient-to-b from-white to-[#f7fafc] p-10 transition-all duration-300 hover:border-[rgba(30,142,171,0.35)] hover:shadow-[0_20px_40px_rgba(0,70,150,0.08)]",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-6xl font-extrabold tracking-tighter text-[rgba(0,70,150,0.08)]", children: number }),
        /* @__PURE__ */ jsx("div", { className: "-mt-8 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 text-[#1e8eab] shadow-[0_10px_24px_rgba(0,70,150,0.1)] transition-transform duration-300 group-hover:scale-105", children: svgSrc ? /* @__PURE__ */ jsx("img", { src: svgSrc, alt: title, className: "h-12 w-12 object-contain" }) : Icon ? /* @__PURE__ */ jsx(Icon, { size: 28, strokeWidth: 1.6 }) : null }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-bold text-[#0b1f33]", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-[15px] leading-relaxed text-[#526575]", children: description })
      ]
    }
  );
}
function CapabilityPill({ label }) {
  return /* @__PURE__ */ jsx("span", { className: "group cursor-default rounded-full border border-[rgba(0,70,150,0.2)] bg-white px-4 py-2 text-sm font-medium text-[#004696] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1e8eab] hover:text-white hover:shadow-[0_10px_24px_rgba(30,142,171,0.28)]", children: label });
}
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
              /* @__PURE__ */ jsx(
                ArrowRight,
                {
                  size: 16,
                  className: "transition-transform duration-300 group-hover:translate-x-1"
                }
              )
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
const meta$7 = () => [{
  title: "Nexadigify — AI & Intelligent Technology"
}, {
  name: "description",
  content: "We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value."
}];
const SERVICES$1 = [{
  number: "01",
  title: "Custom AI Development",
  description: "Purpose-built AI models engineered around your specific business problem.",
  icon: BrainCircuit,
  svgSrc: "/Images/ai-powered-applications.svg",
  to: "/solutions/custom-ai"
}, {
  number: "02",
  title: "AI Automation",
  description: "Intelligent automation that eliminates repetitive operational work end-to-end.",
  icon: Workflow,
  svgSrc: "/Images/ai-automation.svg",
  to: "/solutions/ai-automation"
}, {
  number: "03",
  title: "Agentic AI Systems",
  description: "Autonomous agents that reason, decide, and execute multi-step work.",
  icon: Bot,
  svgSrc: "/Images/agentic-ai.svg",
  to: "/solutions/agentic-ai"
}, {
  number: "04",
  title: "Data & Analytics",
  description: "Turn fragmented data into a single, decision-ready source of truth.",
  icon: BarChart3,
  svgSrc: "/Images/data-analytics.svg",
  to: "/solutions/data-analytics"
}, {
  number: "05",
  title: "Full-Stack Development",
  description: "Scalable web and mobile products engineered for growth.",
  icon: Code2,
  svgSrc: "/Images/full-stack-development.svg",
  to: "/solutions/web-app-development"
}, {
  number: "06",
  title: "AI-Powered Applications",
  description: "Products with intelligence built into the architecture, not bolted on.",
  icon: Sparkles,
  svgSrc: "/Images/ai-powered-applications.svg",
  to: "/solutions/custom-ai"
}];
const CAPABILITIES = ["AI Automation", "Machine Learning", "AI Agents", "LLM Integration", "Computer Vision", "Data Pipelines", "Predictive Analytics", "LangChain", "Generative AI", "Intelligent Workflows"];
const WHY_US = [{
  number: "01",
  title: "Full-Stack Development",
  description: "From infrastructure to interface, we engineer every layer of your product ourselves.",
  icon: Layers,
  svgSrc: "/Images/full-stack-development.svg"
}, {
  number: "02",
  title: "AI At The Core",
  description: "Intelligence isn’t a feature we add later — it’s architected in from the very first line of code.",
  icon: BrainCircuit,
  svgSrc: "/Images/ai-at-the-core.svg"
}, {
  number: "03",
  title: "Growth Ready",
  description: "Every system we build is designed to scale with your business, not against it.",
  icon: Rocket,
  svgSrc: "/Images/growth-ready.svg"
}];
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {
      eyebrow: "AI & Intelligent Systems",
      titleLines: [["From Data"], [{
        text: "To",
        highlight: false
      }, {
        text: "Intelligence.",
        highlight: true
      }]],
      description: "We design and build intelligent digital systems that automate operations, transform data into insight, and create measurable business value."
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-24 sm:py-32",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "What We Do",
          title: "Six disciplines,",
          highlight: "one intelligent system.",
          description: "We combine AI, data, and software engineering into a single team that ships end-to-end — not a patchwork of specialists."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
          children: SERVICES$1.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, {
            ...s,
            index: i
          }, s.title))
        })]
      })
    }), /* @__PURE__ */ jsxs("section", {
      className: "relative overflow-hidden bg-[#f7fafc] py-24 sm:py-32",
      children: [/* @__PURE__ */ jsx(AnimatedBackground, {
        variant: "subtle"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          align: "center",
          eyebrow: "Our Philosophy",
          title: "Intelligence isn't an add-on.",
          highlight: "It's the architecture.",
          description: "Every system we ship is designed with intelligence as a first-class citizen — not a feature bolted on after launch.",
          className: "mx-auto"
        }), /* @__PURE__ */ jsx(ScrollReveal, {
          delay: 0.1,
          className: "mt-12 flex flex-wrap items-center justify-center gap-3",
          children: CAPABILITIES.map((c) => /* @__PURE__ */ jsx(CapabilityPill, {
            label: c
          }, c))
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-24 sm:py-32",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          align: "center",
          eyebrow: "Why Us",
          title: "Built For",
          highlight: "The Future.",
          className: "mx-auto"
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
          children: WHY_US.map((f, i) => /* @__PURE__ */ jsx(FeatureCard, {
            ...f,
            index: i
          }, f.title))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "relative overflow-hidden bg-[#0b1f33]/[0.02] py-24 sm:py-32",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Global Reach",
          title: "Deployed across",
          highlight: "every time zone.",
          description: "Our systems run for clients across industries and continents — built once, engineered to operate reliably anywhere in the world."
        }), /* @__PURE__ */ jsx(ScrollReveal, {
          delay: 0.15,
          children: /* @__PURE__ */ jsx(AnimatedGlobe, {})
        })]
      })
    }), /* @__PURE__ */ jsx(CTASection, {
      title: "Ready to build",
      highlight: "something intelligent?",
      description: "Tell us about your goals — we'll show you exactly how AI and automation can move your business forward."
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
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
const meta$6 = () => [{
  title: "About — Nexadigify"
}, {
  name: "description",
  content: "Learn who Nexadigify is, how we think, and why enterprise clients choose us to build their intelligent systems."
}];
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
const about = UNSAFE_withComponentProps(function About() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {
      compact: true,
      eyebrow: "About Nexadigify",
      titleLines: [["We build the"], [{
        text: "intelligence layer.",
        highlight: true
      }]],
      description: "Nexadigify is a technology partner for companies who want AI and automation embedded into how they actually operate — not a slide deck.",
      secondaryTo: "/careers",
      secondaryLabel: "Join Our Team"
    }), /* @__PURE__ */ jsxs("section", {
      className: "relative overflow-hidden bg-white py-20 sm:py-28",
      children: [/* @__PURE__ */ jsx(BackgroundParticles, {
        count: 10,
        className: "opacity-60"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 mx-auto max-w-4xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Who We Are",
          title: "A team built around",
          highlight: "intelligent systems.",
          align: "center",
          className: "mx-auto"
        }), /* @__PURE__ */ jsx(ScrollReveal, {
          delay: 0.1,
          className: "mt-8 text-center text-lg leading-relaxed text-[#526575]",
          children: "We are engineers, data scientists, and product designers who believe the next generation of software is defined by how intelligently it operates — not just how it looks. We partner with enterprise teams to design and build systems that automate operations, transform data into insight, and create measurable business value."
        })]
      })]
    }), /* @__PURE__ */ jsxs("section", {
      className: "relative overflow-hidden bg-[#f7fafc] py-20 sm:py-28",
      children: [/* @__PURE__ */ jsx(AnimatedBackground, {
        variant: "subtle"
      }), /* @__PURE__ */ jsx("div", {
        className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 gap-14 lg:grid-cols-2",
          children: [/* @__PURE__ */ jsx(SectionHeader, {
            eyebrow: "Our Philosophy",
            title: "Intelligence should feel",
            highlight: "invisible.",
            description: "The best AI systems don't announce themselves — they simply make the work faster, the decisions clearer, and the outcomes better. That's the standard we build to."
          }), /* @__PURE__ */ jsx(SectionHeader, {
            eyebrow: "How We Think",
            title: "Software is a means,",
            highlight: "not the end.",
            description: "We never build technology for its own sake. Every system starts from a business outcome and works backward into the right architecture, models, and interface."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-20 sm:py-28",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Our Approach",
          title: "How a project",
          highlight: "comes to life."
        }), /* @__PURE__ */ jsx(ScrollRevealStagger, {
          className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5",
          children: APPROACH.map((a) => /* @__PURE__ */ jsx(ScrollRevealItem, {
            children: /* @__PURE__ */ jsxs("div", {
              className: "h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.35)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-3xl font-extrabold text-[rgba(0,70,150,0.16)]",
                children: a.step
              }), /* @__PURE__ */ jsx("h3", {
                className: "mt-4 mb-2 font-bold text-[#0b1f33]",
                children: a.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm leading-relaxed text-[#526575]",
                children: a.description
              })]
            })
          }, a.step))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-[#f3f8fa] py-20 sm:py-28",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Why Clients Choose Us",
          title: "What sets us",
          highlight: "apart.",
          align: "center",
          className: "mx-auto"
        }), /* @__PURE__ */ jsx(ScrollRevealStagger, {
          className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
          children: WHY_CHOOSE.map((w) => /* @__PURE__ */ jsx(ScrollRevealItem, {
            children: /* @__PURE__ */ jsxs("div", {
              className: "h-full rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white p-6 text-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f8fa] text-[#004696]",
                children: /* @__PURE__ */ jsx(w.icon, {
                  size: 22
                })
              }), /* @__PURE__ */ jsx("h3", {
                className: "mt-4 mb-2 font-bold text-[#0b1f33]",
                children: w.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm leading-relaxed text-[#526575]",
                children: w.description
              })]
            })
          }, w.title))
        })]
      })
    }), /* @__PURE__ */ jsx(CTASection, {
      title: "Let's build",
      highlight: "something intelligent."
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function SolutionCard({
  slug,
  title,
  description,
  icon: Icon,
  svgIllustration,
  index: index2 = 0
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: index2 * 0.06 },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/solutions/${slug}`,
          className: "group block h-full overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_24px_48px_rgba(0,70,150,0.12)]",
          children: [
            svgIllustration && /* @__PURE__ */ jsx("div", { className: "mb-5 h-40 w-full overflow-hidden rounded-xl bg-[#0b0f1f] shadow-sm", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: svgIllustration,
                alt: title,
                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#004696] to-[#1e8eab] text-white shadow-[0_6px_16px_rgba(0,70,150,0.2)]", children: /* @__PURE__ */ jsx(Icon, { size: 20, strokeWidth: 1.75 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0b1f33]", children: title })
            ] }),
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
const meta$5 = () => [{
  title: "Solutions — Nexadigify"
}, {
  name: "description",
  content: "Explore Nexadigify’s AI automation, custom AI, agentic AI, data analytics, and web development solutions."
}];
const index$1 = UNSAFE_withComponentProps(function SolutionsIndex() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {
      compact: true,
      eyebrow: "Solutions",
      titleLines: [["Solutions built"], [{
        text: "to move business.",
        highlight: true
      }]],
      description: "Five disciplines, one connected team — from automation and agents to data and full-stack software.",
      secondaryTo: "/portfolio",
      secondaryLabel: "View Our Work"
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-20 sm:py-28",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Explore",
          title: "Everything we",
          highlight: "build."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
          children: solutions.map((s, i) => /* @__PURE__ */ jsx(SolutionCard, {
            slug: s.slug,
            title: s.title,
            description: s.shortDescription,
            icon: s.icon,
            svgIllustration: s.svgIllustration,
            index: i
          }, s.slug))
        })]
      })
    }), /* @__PURE__ */ jsx(CTASection, {
      title: "Not sure where",
      highlight: "to start?",
      description: "Tell us about your business and we'll recommend the right solution for your goals."
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$1,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function loader$1({
  params
}) {
  const {
    slug
  } = params;
  if (!slug) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  const solution = getSolution(slug);
  if (!solution) {
    throw new Response("Solution Not Found", {
      status: 404
    });
  }
  return {
    solutionSlug: solution.slug
  };
}
const meta$4 = ({
  data
}) => {
  const solution = data ? getSolution(data.solutionSlug) : void 0;
  if (!solution) {
    return [{
      title: "Solution Not Found — Nexadigify"
    }];
  }
  return [{
    title: `${solution.title} — Nexadigify`
  }, {
    name: "description",
    content: solution.heroSub
  }];
};
const detail$1 = UNSAFE_withComponentProps(function SolutionDetail() {
  const {
    solutionSlug
  } = useLoaderData();
  const solution = getSolution(solutionSlug);
  const Icon = solution.icon;
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {
      compact: true,
      eyebrow: solution.navTitle,
      titleLines: [[solution.heroHeadline.split(" ").slice(0, -2).join(" ")], [{
        text: solution.heroHeadline.split(" ").slice(-2).join(" "),
        highlight: true
      }]],
      description: solution.heroSub
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-16 sm:py-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Capabilities",
          title: "What this",
          highlight: "includes."
        }), /* @__PURE__ */ jsx(ScrollReveal, {
          delay: 0.1,
          className: "mt-10 flex flex-wrap gap-3",
          children: solution.capabilities.map((c) => /* @__PURE__ */ jsx(CapabilityPill, {
            label: c
          }, c))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "relative overflow-hidden bg-white py-8",
      children: /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: /* @__PURE__ */ jsx(ScrollReveal, {
          className: "overflow-hidden rounded-[28px] border border-[rgba(0,70,150,0.12)] bg-[#070912] shadow-[0_24px_54px_rgba(0,70,150,0.14)]",
          children: /* @__PURE__ */ jsx("img", {
            src: solution.svgIllustration,
            alt: `${solution.title} Architecture Blueprint`,
            className: "h-auto w-full object-cover max-h-[480px]",
            loading: "lazy"
          })
        })
      })
    }), /* @__PURE__ */ jsxs("section", {
      className: "relative overflow-hidden bg-[#f7fafc] py-20 sm:py-28",
      children: [/* @__PURE__ */ jsx(AnimatedBackground, {
        variant: "subtle"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Process",
          title: "How we",
          highlight: "get there."
        }), /* @__PURE__ */ jsx(ScrollRevealStagger, {
          className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
          children: solution.process.map((p) => /* @__PURE__ */ jsx(ScrollRevealItem, {
            children: /* @__PURE__ */ jsxs("div", {
              className: "h-full rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-7",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-4xl font-extrabold text-[rgba(0,70,150,0.15)]",
                children: p.step
              }), /* @__PURE__ */ jsx("h3", {
                className: "mt-4 mb-2 text-lg font-bold text-[#0b1f33]",
                children: p.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm leading-relaxed text-[#526575]",
                children: p.description
              })]
            })
          }, p.step))
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-20 sm:py-28",
      children: /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 gap-16 lg:grid-cols-2",
          children: [/* @__PURE__ */ jsx(SectionHeader, {
            eyebrow: "Benefits",
            title: "Why it",
            highlight: "matters."
          }), /* @__PURE__ */ jsx(ScrollRevealStagger, {
            className: "space-y-6",
            children: solution.benefits.map((b) => /* @__PURE__ */ jsx(ScrollRevealItem, {
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex items-start gap-4",
                children: [/* @__PURE__ */ jsx(CheckCircle2, {
                  size: 22,
                  className: "mt-0.5 shrink-0 text-[#1e8eab]"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "font-bold text-[#0b1f33]",
                    children: b.title
                  }), /* @__PURE__ */ jsx("p", {
                    className: "mt-1 text-sm leading-relaxed text-[#526575]",
                    children: b.description
                  })]
                })]
              })
            }, b.title))
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-[#f3f8fa] py-20 sm:py-28",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8",
        children: [/* @__PURE__ */ jsxs(ScrollReveal, {
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#004696] to-[#1e8eab] text-white",
            children: /* @__PURE__ */ jsx(Icon, {
              size: 26
            })
          }), /* @__PURE__ */ jsx("h3", {
            className: "mt-6 text-2xl font-bold text-[#0b1f33]",
            children: "Use Cases"
          }), /* @__PURE__ */ jsx("ul", {
            className: "mt-5 space-y-3",
            children: solution.useCases.map((u) => /* @__PURE__ */ jsxs("li", {
              className: "flex items-center gap-3 text-[#526575]",
              children: [/* @__PURE__ */ jsx("span", {
                className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]"
              }), " ", u]
            }, u))
          })]
        }), /* @__PURE__ */ jsxs(ScrollReveal, {
          delay: 0.1,
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-2xl font-bold text-[#0b1f33]",
            children: "Technology Stack"
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-5 flex flex-wrap gap-3",
            children: solution.stack.map((tech) => /* @__PURE__ */ jsx("span", {
              className: "rounded-xl border border-[rgba(0,70,150,0.14)] bg-white px-4 py-2 text-sm font-semibold text-[#004696]",
              children: tech
            }, tech))
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-20 sm:py-28",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Explore More",
          title: "Related",
          highlight: "solutions."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3",
          children: related.map((s) => {
            const RIcon = s.icon;
            return /* @__PURE__ */ jsxs(Link, {
              to: `/solutions/${s.slug}`,
              className: "group rounded-[20px] border border-[rgba(0,70,150,0.1)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_16px_32px_rgba(0,70,150,0.1)]",
              children: [/* @__PURE__ */ jsx(RIcon, {
                size: 22,
                className: "text-[#004696]"
              }), /* @__PURE__ */ jsx("h4", {
                className: "mt-4 font-bold text-[#0b1f33]",
                children: s.navTitle
              }), /* @__PURE__ */ jsxs("span", {
                className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1e8eab]",
                children: ["Learn more", " ", /* @__PURE__ */ jsx(ArrowRight, {
                  size: 14,
                  className: "transition-transform duration-300 group-hover:translate-x-1"
                })]
              })]
            }, s.slug);
          })
        })]
      })
    }), /* @__PURE__ */ jsx(CTASection, {
      title: "Let's bring",
      highlight: `${solution.navTitle.toLowerCase()} to your business.`,
      description: "Tell us about your goals and we'll map out exactly how this solution fits your operations."
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: detail$1,
  loader: loader$1,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const VISUAL_SEEDS = [
  { r1: 30, r2: 60, r3: 85 },
  { r1: 40, r2: 65, r3: 90 },
  { r1: 25, r2: 55, r3: 80 }
];
function PortfolioCard({
  slug,
  category,
  title,
  description,
  image,
  index: index2 = 0
}) {
  const seed = VISUAL_SEEDS[index2 % VISUAL_SEEDS.length];
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: index2 % 3 * 0.08 },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/portfolio/${slug}`,
          className: "group block overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(30,142,171,0.4)] hover:shadow-[0_28px_56px_rgba(0,70,150,0.14)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-56 w-full overflow-hidden bg-[#0a0f1d]", children: [
              image ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: image,
                  alt: title,
                  className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 transition-transform duration-500 group-hover:scale-110",
                    style: {
                      background: `radial-gradient(circle at 30% 30%, rgba(0,70,150,0.22), transparent ${seed.r1}%), radial-gradient(circle at 75% 65%, rgba(30,142,171,0.24), transparent ${seed.r2}%), linear-gradient(135deg, #eef6fa, #f7fafc)`
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "absolute inset-0 h-full w-full opacity-70",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    children: [
                      /* @__PURE__ */ jsx("circle", { cx: seed.r1, cy: "30", r: "0.6", fill: "#004696" }),
                      /* @__PURE__ */ jsx("circle", { cx: seed.r2, cy: "60", r: "0.6", fill: "#1e8eab" }),
                      /* @__PURE__ */ jsx("circle", { cx: seed.r3, cy: "40", r: "0.6", fill: "#004696" }),
                      /* @__PURE__ */ jsx(
                        "line",
                        {
                          x1: seed.r1,
                          y1: "30",
                          x2: seed.r2,
                          y2: "60",
                          stroke: "rgba(0,70,150,0.3)",
                          strokeWidth: "0.2"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "line",
                        {
                          x1: seed.r2,
                          y1: "60",
                          x2: seed.r3,
                          y2: "40",
                          stroke: "rgba(30,142,171,0.3)",
                          strokeWidth: "0.2"
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#004696] opacity-0 shadow-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-[#1e8eab]", children: category }),
              /* @__PURE__ */ jsx("h3", { className: "mt-2 mb-2 text-lg font-bold text-[#0b1f33]", children: title }),
              /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm leading-relaxed text-[#526575]", children: description }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#004696]", children: [
                "View Case Study",
                " ",
                /* @__PURE__ */ jsx(
                  ArrowUpRight,
                  {
                    size: 14,
                    className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const portfolio = [
  {
    slug: "ai-customer-intelligence-platform",
    category: "Agentic AI",
    title: "AI Customer Intelligence Platform",
    description: "An AI-driven platform that unifies customer data and surfaces intelligent, real-time engagement signals.",
    client: "Mid-Market Retail Group",
    industry: "Retail & E-Commerce",
    image: "/Images/agentic-ai.svg",
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
    image: "/Images/ai-automation.svg",
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
    image: "/Images/data-analytics.svg",
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
    image: "/Images/full-stack-development.svg",
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
    image: "/Images/ai-powered-applications.svg",
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
    image: "/Images/ai-at-the-core.svg",
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
const meta$3 = () => [{
  title: "Portfolio — Nexadigify"
}, {
  name: "description",
  content: "Explore case studies of AI systems, automation platforms, and data products Nexadigify has built for enterprise clients."
}];
const index = UNSAFE_withComponentProps(function PortfolioIndex() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {
      compact: true,
      eyebrow: "Portfolio",
      titleLines: [["Work that"], [{
        text: "moves the needle.",
        highlight: true
      }]],
      description: "A selection of AI systems, automation platforms, and data products we've engineered for enterprise clients.",
      primaryTo: "/contact",
      secondaryTo: "/solutions"
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-16 sm:py-24",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Case Studies",
          title: "Selected",
          highlight: "projects."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
          children: portfolio.map((p, i) => /* @__PURE__ */ jsx(PortfolioCard, {
            slug: p.slug,
            category: p.category,
            title: p.title,
            description: p.description,
            image: p.image,
            index: i
          }, p.slug))
        })]
      })
    }), /* @__PURE__ */ jsx(CTASection, {
      title: "Want results",
      highlight: "like these?",
      description: "Let's talk about what an intelligent system could look like for your business."
    })]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
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
async function loader({
  params
}) {
  const {
    slug
  } = params;
  if (!slug) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  const study = getCaseStudy(slug);
  if (!study) {
    throw new Response("Case Study Not Found", {
      status: 404
    });
  }
  return {
    studySlug: study.slug
  };
}
const meta$2 = ({
  data
}) => {
  const study = data ? getCaseStudy(data.studySlug) : void 0;
  if (!study) {
    return [{
      title: "Case Study Not Found — Nexadigify"
    }];
  }
  return [{
    title: `${study.title} — Nexadigify`
  }, {
    name: "description",
    content: study.description
  }];
};
const detail = UNSAFE_withComponentProps(function PortfolioDetail() {
  const {
    studySlug
  } = useLoaderData();
  const study = getCaseStudy(studySlug);
  const relatedProjects = portfolio.filter((p) => p.slug !== study.slug).sort((a, b) => {
    const aMatch = a.category === study.category || a.industry === study.industry ? 1 : 0;
    const bMatch = b.category === study.category || b.industry === study.industry ? 1 : 0;
    return bMatch - aMatch;
  }).slice(0, 3);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20",
      children: [/* @__PURE__ */ jsx(AnimatedBackground, {
        variant: "section"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 mx-auto max-w-4xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsxs(Link, {
          to: "/portfolio",
          className: "inline-flex items-center gap-2 text-sm font-semibold text-[#004696] transition-transform duration-200 hover:-translate-x-0.5",
          children: [/* @__PURE__ */ jsx(ArrowLeft, {
            size: 16
          }), " Back to Portfolio"]
        }), /* @__PURE__ */ jsxs(ScrollReveal, {
          delay: 0.05,
          className: "mt-8",
          children: [/* @__PURE__ */ jsx(IndustryTag, {
            label: study.category
          }), /* @__PURE__ */ jsx("h1", {
            className: "mt-5 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b1f33]",
            children: study.title
          }), /* @__PURE__ */ jsx("p", {
            className: "mt-5 max-w-2xl text-lg leading-relaxed text-[#526575]",
            children: study.description
          })]
        }), /* @__PURE__ */ jsxs(ScrollReveal, {
          delay: 0.15,
          className: "mt-10 grid grid-cols-2 gap-6 rounded-[24px] border border-[rgba(0,70,150,0.1)] bg-white p-6 sm:grid-cols-4",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-xs font-semibold uppercase tracking-wide text-[#718391]",
              children: "Client"
            }), /* @__PURE__ */ jsx("p", {
              className: "mt-1 text-sm font-semibold text-[#0b1f33]",
              children: study.client
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-xs font-semibold uppercase tracking-wide text-[#718391]",
              children: "Industry"
            }), /* @__PURE__ */ jsx("p", {
              className: "mt-1 text-sm font-semibold text-[#0b1f33]",
              children: study.industry
            })]
          }), study.results.slice(0, 2).map((r) => /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-xs font-semibold uppercase tracking-wide text-[#718391]",
              children: r.label
            }), /* @__PURE__ */ jsx("p", {
              className: "mt-1 text-sm font-semibold text-[#1e8eab]",
              children: r.metric
            })]
          }, r.label))]
        }), study.image && /* @__PURE__ */ jsx(ScrollReveal, {
          delay: 0.2,
          className: "mt-10 overflow-hidden rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-[#070912] shadow-[0_24px_54px_rgba(0,70,150,0.14)]",
          children: /* @__PURE__ */ jsx("img", {
            src: study.image,
            alt: `${study.title} Architecture Blueprint`,
            className: "h-auto w-full object-cover max-h-[460px]",
            loading: "lazy"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-white py-4",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-4xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(CaseStudySection, {
          eyebrow: "The Problem",
          title: "Challenge",
          children: /* @__PURE__ */ jsx("p", {
            children: study.challenge
          })
        }), /* @__PURE__ */ jsx(CaseStudySection, {
          eyebrow: "Our Method",
          title: "Approach",
          children: /* @__PURE__ */ jsx("ul", {
            className: "space-y-3",
            children: study.approach.map((a) => /* @__PURE__ */ jsxs("li", {
              className: "flex items-start gap-3",
              children: [/* @__PURE__ */ jsx("span", {
                className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e8eab]"
              }), " ", a]
            }, a))
          })
        }), /* @__PURE__ */ jsx(CaseStudySection, {
          eyebrow: "What We Built",
          title: "Solution",
          children: /* @__PURE__ */ jsx("p", {
            children: study.solution
          })
        }), /* @__PURE__ */ jsx(CaseStudySection, {
          eyebrow: "Stack",
          title: "Technology",
          children: /* @__PURE__ */ jsx("div", {
            className: "flex flex-wrap gap-3",
            children: study.technology.map((t) => /* @__PURE__ */ jsx("span", {
              className: "rounded-xl border border-[rgba(0,70,150,0.14)] bg-[#f7fafc] px-4 py-2 text-sm font-semibold text-[#004696]",
              children: t
            }, t))
          })
        }), /* @__PURE__ */ jsx(CaseStudySection, {
          eyebrow: "The Outcome",
          title: "Results",
          children: /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 gap-6 sm:grid-cols-3",
            children: study.results.map((r) => /* @__PURE__ */ jsxs("div", {
              className: "rounded-[20px] border border-[rgba(0,70,150,0.1)] bg-[#f7fafc] p-6 text-center",
              children: [/* @__PURE__ */ jsx("p", {
                className: "text-3xl font-extrabold text-gradient-brand",
                children: r.metric
              }), /* @__PURE__ */ jsx("p", {
                className: "mt-1 text-sm text-[#526575]",
                children: r.label
              })]
            }, r.label))
          })
        }), /* @__PURE__ */ jsx(CaseStudySection, {
          eyebrow: "Visual Gallery",
          title: "Project Visuals",
          children: /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
            children: study.gallery.map((g, i) => /* @__PURE__ */ jsxs("div", {
              className: "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(0,70,150,0.1)] bg-[#070912]",
              children: [/* @__PURE__ */ jsx("img", {
                src: study.image,
                alt: `${study.title} ${g}`,
                className: "h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100",
                loading: "lazy"
              }), /* @__PURE__ */ jsx("div", {
                className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070912] via-[#070912]/80 to-transparent p-4",
                children: /* @__PURE__ */ jsxs("span", {
                  className: "text-xs font-semibold uppercase tracking-wider text-white capitalize",
                  children: [g, " Blueprint"]
                })
              })]
            }, g))
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "relative bg-[#f7fafc] py-20 sm:py-24 border-t border-[rgba(0,70,150,0.08)]",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("p", {
              className: "text-xs font-bold uppercase tracking-widest text-[#1e8eab]",
              children: "More Case Studies"
            }), /* @__PURE__ */ jsxs("h2", {
              className: "mt-2 text-3xl font-extrabold tracking-tight text-[#0b1f33] sm:text-4xl",
              children: ["Related ", /* @__PURE__ */ jsx("span", {
                className: "text-gradient-brand",
                children: "projects."
              })]
            })]
          }), /* @__PURE__ */ jsxs(Link, {
            to: "/portfolio",
            className: "inline-flex items-center gap-2 text-sm font-semibold text-[#004696] hover:text-[#1e8eab] transition-colors",
            children: ["View all projects ", /* @__PURE__ */ jsx(ArrowRight, {
              size: 16
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
          children: relatedProjects.map((p, i) => /* @__PURE__ */ jsx(PortfolioCard, {
            slug: p.slug,
            category: p.category,
            title: p.title,
            description: p.description,
            image: p.image,
            index: i
          }, p.slug))
        })]
      })
    }), /* @__PURE__ */ jsx(CTASection, {
      title: "Ready for results",
      highlight: "like this?",
      description: "Let's talk about what an intelligent system could look like for your business."
    })]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: detail,
  loader,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const SERVICES = [
  "AI Automation",
  "Custom AI Development",
  "Agentic AI",
  "Data Analytics",
  "Web Development",
  "AI Consulting",
  "Other"
];
const BUDGETS = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k+", "Not sure yet"];
function ContactForm({ variant = "contact" }) {
  const isCareers = variant === "careers";
  const formName = isCareers ? "careers-application" : "contact";
  const [fields, setFields] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    position: "",
    portfolio: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const fileInputRef = useRef(null);
  const handleChange = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleFileChange = (e) => {
    var _a, _b;
    setResumeName(((_b = (_a = e.target.files) == null ? void 0 : _a[0]) == null ? void 0 : _b.name) ?? "");
  };
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const data = new FormData();
      data.append("form-name", formName);
      Object.entries(fields).forEach(([key, value]) => data.append(key, value));
      if (isCareers && ((_b = (_a = fileInputRef.current) == null ? void 0 : _a.files) == null ? void 0 : _b[0])) {
        data.append("resume", fileInputRef.current.files[0]);
      }
      await fetch("/__forms.html", {
        method: "POST",
        body: data
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col items-center justify-center rounded-[24px] border border-[rgba(0,70,150,0.12)] bg-white px-8 py-16 text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f8fa] text-[#1e8eab]", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 30 }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-bold text-[#0b1f33]", children: "Message sent." }),
          /* @__PURE__ */ jsx("p", { className: "max-w-sm text-[#526575]", children: isCareers ? "Thanks for applying — our team will review your application and be in touch soon." : "Thanks for reaching out. A member of our team will respond within one business day." })
        ]
      }
    );
  }
  const inputClass = "w-full rounded-xl border border-[rgba(0,70,150,0.16)] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#a8bccb] transition-colors duration-200 focus:border-[#1e8eab] focus:outline-none focus:ring-2 focus:ring-[rgba(30,142,171,0.18)]";
  const labelClass = "mb-1.5 block text-sm font-semibold text-[#0b1f33]";
  return /* @__PURE__ */ jsxs(
    "form",
    {
      name: formName,
      onSubmit: handleSubmit,
      className: "rounded-[28px] border border-[rgba(0,70,150,0.1)] bg-white p-6 shadow-[0_16px_48px_rgba(0,70,150,0.08)] sm:p-10",
      children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: formName }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsx("input", { id: "name", name: "name", required: true, value: fields.name, onChange: handleChange, className: inputClass, placeholder: "Jane Doe" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx("input", { id: "email", type: "email", name: "email", required: true, value: fields.email, onChange: handleChange, className: inputClass, placeholder: "jane@company.com" })
          ] }),
          isCareers ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "position", children: "Position" }),
              /* @__PURE__ */ jsx("input", { id: "position", name: "position", required: true, value: fields.position, onChange: handleChange, className: inputClass, placeholder: "AI Engineer" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "portfolio", children: "Portfolio / LinkedIn" }),
              /* @__PURE__ */ jsx("input", { id: "portfolio", name: "portfolio", value: fields.portfolio, onChange: handleChange, className: inputClass, placeholder: "https://" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "resume", children: "Resume" }),
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "resume",
                  className: "flex w-full cursor-pointer items-center justify-between rounded-xl border border-dashed border-[rgba(0,70,150,0.28)] bg-[#f7fafc] px-4 py-3.5 text-sm text-[#526575] transition-colors duration-200 hover:border-[#1e8eab]",
                  children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Upload, { size: 16, className: "text-[#1e8eab]" }),
                    resumeName || "Upload your resume (PDF, DOC)"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: fileInputRef,
                  id: "resume",
                  name: "resume",
                  type: "file",
                  accept: ".pdf,.doc,.docx",
                  onChange: handleFileChange,
                  className: "sr-only"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "company", children: "Company" }),
              /* @__PURE__ */ jsx("input", { id: "company", name: "company", value: fields.company, onChange: handleChange, className: inputClass, placeholder: "Company name" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "phone", children: "Phone" }),
              /* @__PURE__ */ jsx("input", { id: "phone", name: "phone", value: fields.phone, onChange: handleChange, className: inputClass, placeholder: "+1 (555) 000-0000" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "service", children: "Service" }),
              /* @__PURE__ */ jsxs("select", { id: "service", name: "service", value: fields.service, onChange: handleChange, className: inputClass, children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select a service" }),
                SERVICES.map((s) => /* @__PURE__ */ jsx("option", { value: s, children: s }, s))
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "budget", children: "Budget" }),
              /* @__PURE__ */ jsxs("select", { id: "budget", name: "budget", value: fields.budget, onChange: handleChange, className: inputClass, children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select a range" }),
                BUDGETS.map((b) => /* @__PURE__ */ jsx("option", { value: b, children: b }, b))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: labelClass, htmlFor: "message", children: isCareers ? "Message" : "Project Details" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                required: true,
                rows: 5,
                value: fields.message,
                onChange: handleChange,
                className: inputClass,
                placeholder: isCareers ? "Tell us a bit about yourself" : "Tell us about your project and goals"
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-medium text-red-600", children: "Something went wrong sending your message. Please try again." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            disabled: submitting,
            className: "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,70,150,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e8eab] disabled:opacity-60 sm:w-auto",
            children: [
              submitting ? "Sending…" : isCareers ? "Submit Application" : "Send Message",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "transition-transform duration-300 group-hover:translate-x-1" })
            ]
          }
        )
      ]
    }
  );
}
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
const meta$1 = () => [{
  title: "Careers — Nexadigify"
}, {
  name: "description",
  content: "Join Nexadigify and help build intelligent AI systems for enterprise clients. Explore open roles and apply today."
}];
const careers = UNSAFE_withComponentProps(function Careers() {
  const [expanded, setExpanded] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {
      compact: true,
      eyebrow: "Careers",
      titleLines: [["Build What"], [{
        text: "Comes Next.",
        highlight: true
      }]],
      description: "Join a team of engineers, data scientists, and designers building the intelligent systems enterprise companies run on.",
      primaryTo: "#openings",
      primaryLabel: "View Openings",
      secondaryTo: "/about",
      secondaryLabel: "About Us"
    }), /* @__PURE__ */ jsx("section", {
      id: "openings",
      className: "relative bg-white py-16 sm:py-24",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-4xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Open Positions",
          title: "Current",
          highlight: "openings."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-12 space-y-4",
          children: jobOpenings.map((job) => {
            const isOpen = expanded === job.id;
            return /* @__PURE__ */ jsx(ScrollReveal, {
              children: /* @__PURE__ */ jsxs("div", {
                className: "overflow-hidden rounded-[22px] border border-[rgba(0,70,150,0.1)] bg-white transition-colors duration-300 hover:border-[rgba(30,142,171,0.35)]",
                children: [/* @__PURE__ */ jsxs("button", {
                  className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
                  onClick: () => setExpanded(isOpen ? null : job.id),
                  "aria-expanded": isOpen,
                  children: [/* @__PURE__ */ jsxs("div", {
                    children: [/* @__PURE__ */ jsx("h3", {
                      className: "text-lg font-bold text-[#0b1f33]",
                      children: job.title
                    }), /* @__PURE__ */ jsxs("div", {
                      className: "mt-1.5 flex flex-wrap items-center gap-3 text-xs font-medium text-[#718391]",
                      children: [/* @__PURE__ */ jsxs("span", {
                        className: "inline-flex items-center gap-1",
                        children: [/* @__PURE__ */ jsx(Briefcase, {
                          size: 13
                        }), " ", job.department]
                      }), /* @__PURE__ */ jsxs("span", {
                        className: "inline-flex items-center gap-1",
                        children: [/* @__PURE__ */ jsx(MapPin, {
                          size: 13
                        }), " ", job.location]
                      }), /* @__PURE__ */ jsx("span", {
                        className: "rounded-full bg-[#f3f8fa] px-2.5 py-0.5 text-[#1e8eab]",
                        children: job.type
                      })]
                    })]
                  }), /* @__PURE__ */ jsx(ChevronDown, {
                    size: 20,
                    className: `shrink-0 text-[#004696] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`
                  })]
                }), /* @__PURE__ */ jsx(AnimatePresence, {
                  children: isOpen && /* @__PURE__ */ jsx(motion.div, {
                    initial: {
                      height: 0,
                      opacity: 0
                    },
                    animate: {
                      height: "auto",
                      opacity: 1
                    },
                    exit: {
                      height: 0,
                      opacity: 0
                    },
                    transition: {
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    },
                    className: "overflow-hidden",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "border-t border-[rgba(0,70,150,0.08)] px-6 py-6",
                      children: [/* @__PURE__ */ jsx("p", {
                        className: "text-[15px] leading-relaxed text-[#526575]",
                        children: job.description
                      }), /* @__PURE__ */ jsxs("div", {
                        className: "mt-5 grid gap-6 sm:grid-cols-2",
                        children: [/* @__PURE__ */ jsxs("div", {
                          children: [/* @__PURE__ */ jsx("h4", {
                            className: "mb-2 text-sm font-bold text-[#0b1f33]",
                            children: "Responsibilities"
                          }), /* @__PURE__ */ jsx("ul", {
                            className: "space-y-2 text-sm text-[#526575]",
                            children: job.responsibilities.map((r) => /* @__PURE__ */ jsxs("li", {
                              className: "flex gap-2",
                              children: [/* @__PURE__ */ jsx("span", {
                                className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1e8eab]"
                              }), " ", r]
                            }, r))
                          })]
                        }), /* @__PURE__ */ jsxs("div", {
                          children: [/* @__PURE__ */ jsx("h4", {
                            className: "mb-2 text-sm font-bold text-[#0b1f33]",
                            children: "Requirements"
                          }), /* @__PURE__ */ jsx("ul", {
                            className: "space-y-2 text-sm text-[#526575]",
                            children: job.requirements.map((r) => /* @__PURE__ */ jsxs("li", {
                              className: "flex gap-2",
                              children: [/* @__PURE__ */ jsx("span", {
                                className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1e8eab]"
                              }), " ", r]
                            }, r))
                          })]
                        })]
                      }), /* @__PURE__ */ jsx("a", {
                        href: "#apply",
                        className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[#004696] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e8eab]",
                        children: "Apply for this role"
                      })]
                    })
                  })
                })]
              })
            }, job.id);
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      id: "apply",
      className: "relative bg-[#f7fafc] py-20 sm:py-28",
      children: /* @__PURE__ */ jsxs("div", {
        className: "mx-auto max-w-2xl px-6 lg:px-8",
        children: [/* @__PURE__ */ jsx(SectionHeader, {
          eyebrow: "Apply",
          title: "Tell us about",
          highlight: "yourself.",
          align: "center",
          className: "mx-auto"
        }), /* @__PURE__ */ jsx(ScrollReveal, {
          delay: 0.1,
          className: "mt-10",
          children: /* @__PURE__ */ jsx(ContactForm, {
            variant: "careers"
          })
        })]
      })
    })]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: careers,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => [{
  title: "Contact — Nexadigify"
}, {
  name: "description",
  content: "Tell Nexadigify about your project — AI automation, agentic AI, custom AI development, data analytics, or web development."
}];
const CONTACT_DETAILS = [{
  icon: Mail,
  label: "hello@nexadigify.com"
}, {
  icon: Phone,
  label: "+1 (415) 555-0148"
}, {
  icon: MapPin,
  label: "San Francisco, CA"
}];
const contact = UNSAFE_withComponentProps(function Contact() {
  return /* @__PURE__ */ jsxs("section", {
    className: "relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32",
    children: [/* @__PURE__ */ jsx(AnimatedBackground, {
      variant: "hero"
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsxs("span", {
          className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,70,150,0.16)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#004696]",
          children: [/* @__PURE__ */ jsx("span", {
            className: "h-1.5 w-1.5 rounded-full bg-[#1e8eab]"
          }), "Contact"]
        }), /* @__PURE__ */ jsxs("h1", {
          className: "text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.06] tracking-tight text-[#0b1f33]",
          children: ["Let's build something", " ", /* @__PURE__ */ jsx("span", {
            className: "text-gradient-brand",
            children: "intelligent."
          })]
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-6 max-w-md text-lg leading-relaxed text-[#526575]",
          children: "Tell us about your business and goals — a member of our team will follow up within one business day."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-10 space-y-4",
          children: CONTACT_DETAILS.map((d) => /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-3 text-[#0b1f33]",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#004696] shadow-[0_6px_16px_rgba(0,70,150,0.1)]",
              children: /* @__PURE__ */ jsx(d.icon, {
                size: 16
              })
            }), /* @__PURE__ */ jsx("span", {
              className: "text-sm font-medium",
              children: d.label
            })]
          }, d.label))
        })]
      }), /* @__PURE__ */ jsx(ScrollReveal, {
        delay: 0.1,
        children: /* @__PURE__ */ jsx(ContactForm, {
          variant: "contact"
        })
      })]
    })]
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CumgHwSh.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-yX3KjfJ4.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/solutions-gr_vGTtm.js", "/assets/chevron-down-BR73dhf9.js", "/assets/workflow-j394aVPG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-BVPPKxBp.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/SectionHeader-CNfLWwjI.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/arrow-up-right-DQenOPWu.js", "/assets/CapabilityPill-Bq2zShMu.js", "/assets/CTASection-Cusbx29I.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/workflow-j394aVPG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/about-NoUgTetp.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/SectionHeader-CNfLWwjI.js", "/assets/CTASection-Cusbx29I.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/arrow-right-B3CR_aBv.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/solutions/index": { "id": "routes/solutions/index", "parentId": "root", "path": "solutions", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/index-Ckqos3lV.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/SectionHeader-CNfLWwjI.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/CTASection-Cusbx29I.js", "/assets/solutions-gr_vGTtm.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/workflow-j394aVPG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/solutions/detail": { "id": "routes/solutions/detail", "parentId": "root", "path": "solutions/:slug", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/detail-DJBmWc8k.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/SectionHeader-CNfLWwjI.js", "/assets/CapabilityPill-Bq2zShMu.js", "/assets/CTASection-Cusbx29I.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/solutions-gr_vGTtm.js", "/assets/circle-check-yQLdv0a9.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/workflow-j394aVPG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/portfolio/index": { "id": "routes/portfolio/index", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/index-8utSmDA4.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/SectionHeader-CNfLWwjI.js", "/assets/portfolio-kvTROtGu.js", "/assets/CTASection-Cusbx29I.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/arrow-up-right-DQenOPWu.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/portfolio/detail": { "id": "routes/portfolio/detail", "parentId": "root", "path": "portfolio/:slug", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/detail-ody0DrHH.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/portfolio-kvTROtGu.js", "/assets/CTASection-Cusbx29I.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/arrow-up-right-DQenOPWu.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/careers": { "id": "routes/careers", "parentId": "root", "path": "careers", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/careers-CBXJbHPt.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/SectionHeader-CNfLWwjI.js", "/assets/ContactForm-uEOYmpOQ.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/chevron-down-BR73dhf9.js", "/assets/circle-check-yQLdv0a9.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/contact-CT3VpMgz.js", "imports": ["/assets/jsx-runtime-Cra9Yydo.js", "/assets/ScrollReveal-BNoithEe.js", "/assets/ContactForm-uEOYmpOQ.js", "/assets/arrow-right-B3CR_aBv.js", "/assets/circle-check-yQLdv0a9.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-c2b67a07.js", "version": "c2b67a07", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "v8_passThroughRequests": false, "v8_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/solutions/index": {
    id: "routes/solutions/index",
    parentId: "root",
    path: "solutions",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/solutions/detail": {
    id: "routes/solutions/detail",
    parentId: "root",
    path: "solutions/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/portfolio/index": {
    id: "routes/portfolio/index",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/portfolio/detail": {
    id: "routes/portfolio/detail",
    parentId: "root",
    path: "portfolio/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/careers": {
    id: "routes/careers",
    parentId: "root",
    path: "careers",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
