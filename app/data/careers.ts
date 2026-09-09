export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description:
      'Design and ship production AI systems — from model integration to agentic pipelines — for enterprise clients.',
    responsibilities: [
      'Build and fine-tune models for client-specific use cases',
      'Design RAG and agentic pipelines for production use',
      'Partner with engineering to ship AI features end-to-end',
    ],
    requirements: [
      '3+ years building production ML/AI systems',
      'Strong Python fundamentals',
      'Experience with LLM APIs and vector databases',
    ],
  },
  {
    id: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description:
      'Build premium, performant web applications spanning React frontends and scalable backend systems.',
    responsibilities: [
      'Build responsive, accessible interfaces with React and TypeScript',
      'Design APIs and backend services that scale',
      'Collaborate closely with design and AI engineering teams',
    ],
    requirements: [
      '4+ years professional full-stack experience',
      'Deep knowledge of React, TypeScript, and Node.js',
      'Experience with cloud infrastructure and CI/CD',
    ],
  },
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Own the full lifecycle of ML models — from data pipelines to training, evaluation, and deployment.',
    responsibilities: [
      'Design data pipelines and feature engineering workflows',
      'Train, evaluate, and deploy models to production',
      'Monitor model performance and drift over time',
    ],
    requirements: [
      '3+ years in applied machine learning',
      'Strong grasp of statistics and model evaluation',
      'Experience with PyTorch or TensorFlow',
    ],
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description:
      'Craft polished, animated, high-performance interfaces for enterprise AI products.',
    responsibilities: [
      'Implement pixel-perfect, animated UI from design specs',
      'Optimize performance across devices and browsers',
      'Champion accessibility and design-system consistency',
    ],
    requirements: [
      '3+ years frontend engineering experience',
      'Expertise with React, TypeScript, and Tailwind CSS',
      'Experience with motion/animation libraries',
    ],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description:
      'Design premium, enterprise-grade product experiences across web and AI-native interfaces.',
    responsibilities: [
      'Lead end-to-end design for client and internal products',
      'Build and maintain design systems and component libraries',
      'Partner with engineering to ensure high-fidelity delivery',
    ],
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio of enterprise or SaaS product work',
      'Proficiency in Figma and motion design principles',
    ],
  },
  {
    id: 'growth-specialist',
    title: 'Growth Specialist',
    department: 'Growth',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Drive pipeline growth through strategic partnerships, content, and outbound programs.',
    responsibilities: [
      'Develop and execute growth strategies across channels',
      'Build and manage the outbound and partnership pipeline',
      'Analyze funnel performance and optimize continuously',
    ],
    requirements: [
      '3+ years in B2B growth or demand generation',
      'Experience in technology or enterprise software',
      'Strong analytical and communication skills',
    ],
  },
]
