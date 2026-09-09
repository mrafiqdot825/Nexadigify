export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  image: string;
  challenge: string;
  approach: string[];
  solution: string;
  technology: string[];
  results: { metric: string; label: string }[];
  gallery: string[];
}

export const portfolio: CaseStudy[] = [
  {
    slug: "ai-customer-intelligence-platform",
    category: "Agentic AI",
    title: "AI Customer Intelligence Platform",
    description:
      "An AI-driven platform that unifies customer data and surfaces intelligent, real-time engagement signals.",
    client: "Mid-Market Retail Group",
    industry: "Retail & E-Commerce",
    image: "/Images/agentic-ai.svg",
    challenge:
      "Customer data was scattered across five disconnected systems, making it impossible to build a coherent view of customer behavior or intervene at the right moment.",
    approach: [
      "Unified customer data into a single real-time model",
      "Built ML models to score engagement and churn risk",
      "Designed an agent layer to surface next-best actions",
    ],
    solution:
      "We built a centralized intelligence layer that ingests behavioral, transactional, and support data in real time, scoring every customer against churn and lifetime-value models, then surfacing recommended actions directly inside the team’s existing tools.",
    technology: ["React", "PostgreSQL", "Python", "LangChain", "Kafka"],
    results: [
      { metric: "32%", label: "Reduction in churn" },
      { metric: "4.6x", label: "Faster insight delivery" },
      { metric: "18%", label: "Increase in retention revenue" },
    ],
    gallery: ["dashboard", "network", "insight"],
  },
  {
    slug: "automated-operations-system",
    category: "AI Automation",
    title: "Automated Operations System",
    description:
      "An end-to-end automation system that eliminated manual document processing across finance operations.",
    client: "Regional Logistics Provider",
    industry: "Logistics & Supply Chain",
    image: "/Images/ai-automation.svg",
    challenge:
      "Finance teams manually processed thousands of shipping documents each week, causing delays, errors, and mounting operational cost.",
    approach: [
      "Automated document ingestion and classification",
      "Built intelligent extraction pipelines",
      "Integrated automation directly into finance systems",
    ],
    solution:
      "We designed a document intelligence pipeline that classifies, extracts, and validates data from incoming shipping documents automatically, routing exceptions to human reviewers and posting clean data directly into finance systems.",
    technology: ["Python", "AWS Lambda", "Computer Vision", "Temporal"],
    results: [
      { metric: "91%", label: "Manual work eliminated" },
      { metric: "3.2 days", label: "Faster processing time" },
      { metric: "99.4%", label: "Data accuracy achieved" },
    ],
    gallery: ["workflow", "pipeline", "automation"],
  },
  {
    slug: "ai-powered-analytics-dashboard",
    category: "Data & Analytics",
    title: "AI-Powered Analytics Dashboard",
    description:
      "A predictive analytics platform giving executives real-time visibility into operational performance.",
    client: "National Healthcare Network",
    industry: "Healthcare",
    image: "/Images/data-analytics.svg",
    challenge:
      "Leadership lacked real-time visibility into operational performance across facilities, relying on stale, manually assembled reports.",
    approach: [
      "Consolidated data from twelve operational systems",
      "Built real-time pipelines and a governed data model",
      "Layered predictive models for capacity forecasting",
    ],
    solution:
      "We engineered a real-time data warehouse and analytics layer, giving executives live dashboards and predictive forecasts for staffing and capacity across every facility.",
    technology: ["Snowflake", "dbt", "Airflow", "Metabase"],
    results: [
      { metric: "100%", label: "Real-time visibility" },
      { metric: "27%", label: "Improved forecast accuracy" },
      { metric: "6 hrs → 4 min", label: "Report generation time" },
    ],
    gallery: ["analytics", "dashboard", "forecast"],
  },
  {
    slug: "intelligent-ecommerce-platform",
    category: "Web & App Development",
    title: "Intelligent E-Commerce Platform",
    description:
      "A high-performance commerce platform with AI-driven personalization built into its architecture.",
    client: "DTC Consumer Brand",
    industry: "Consumer Goods",
    image: "/Images/full-stack-development.svg",
    challenge:
      "An aging e-commerce stack couldn’t support personalization or scale for peak traffic events, capping growth.",
    approach: [
      "Rebuilt the storefront on a modern full-stack architecture",
      "Integrated a real-time personalization engine",
      "Engineered for elastic scale under peak load",
    ],
    solution:
      "We rebuilt the commerce platform end-to-end with a modern architecture and an embedded recommendation engine that personalizes every session, tested to scale seamlessly through peak demand.",
    technology: ["React", "Node.js", "PostgreSQL", "Netlify", "Stripe"],
    results: [
      { metric: "41%", label: "Increase in conversion" },
      { metric: "2.1x", label: "Average order value lift" },
      { metric: "99.99%", label: "Uptime during peak events" },
    ],
    gallery: ["commerce", "personalization", "storefront"],
  },
  {
    slug: "enterprise-ai-assistant",
    category: "Custom AI Development",
    title: "Enterprise AI Assistant",
    description:
      "A domain-tuned AI assistant giving employees instant, accurate answers from internal knowledge.",
    client: "Global Professional Services Firm",
    industry: "Professional Services",
    image: "/Images/ai-powered-applications.svg",
    challenge:
      "Employees spent hours searching fragmented internal documentation to answer routine client and policy questions.",
    approach: [
      "Built a retrieval-augmented knowledge layer",
      "Fine-tuned response behavior for domain accuracy",
      "Deployed with enterprise-grade access controls",
    ],
    solution:
      "We built a retrieval-augmented AI assistant grounded in the firm’s internal knowledge base, with fine-tuned response behavior and enterprise access controls, deployed directly into existing collaboration tools.",
    technology: [
      "Anthropic Claude",
      "LangChain",
      "Vector Databases",
      "TypeScript",
    ],
    results: [
      { metric: "76%", label: "Reduction in search time" },
      { metric: "12,000+", label: "Queries answered monthly" },
      { metric: "94%", label: "Employee satisfaction score" },
    ],
    gallery: ["assistant", "knowledge", "chat"],
  },
  {
    slug: "data-intelligence-platform",
    category: "Data & Analytics",
    title: "Data Intelligence Platform",
    description:
      "A unified data intelligence platform turning fragmented operational data into predictive insight.",
    client: "Industrial Manufacturing Company",
    industry: "Manufacturing",
    image: "/Images/ai-at-the-core.svg",
    challenge:
      "Equipment and production data lived in disconnected legacy systems, preventing any predictive view of maintenance or output.",
    approach: [
      "Built ingestion pipelines from legacy plant systems",
      "Modeled equipment data into a unified schema",
      "Layered predictive maintenance models on top",
    ],
    solution:
      "We connected legacy plant systems into a unified data platform, modeling equipment and production data centrally, then layered predictive maintenance models to flag failures before they happen.",
    technology: ["PostgreSQL", "Python", "Airflow", "Predictive ML"],
    results: [
      { metric: "38%", label: "Reduction in unplanned downtime" },
      { metric: "22%", label: "Increase in throughput visibility" },
      { metric: "5x", label: "Faster root-cause analysis" },
    ],
    gallery: ["industrial", "network", "insight"],
  },
];

export function getCaseStudy(slug: string) {
  return portfolio.find((p) => p.slug === slug);
}
