export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
};

export const posts: BlogPost[] = [
  {
    slug: "customer-churn-signal-lab",
    title: "Customer Churn Signal Lab",
    description:
      "How uplift modeling, experimentation design, and layered dashboards exposed retention levers for a streaming product.",
    date: "Feb 2025",
    readingTime: "8 min",
    category: "MLOps",
    image: "/artificial-intelligence.png",
  },
  {
    slug: "streaming-notebook-design",
    title: "Designing a Streaming Notebook for Real-Time Insights",
    description:
      "Building a Kafka + TimescaleDB notebook that lets analysts reason about high-volume event streams without losing context.",
    date: "Jan 2025",
    readingTime: "6 min",
    category: "Data Engineering",
    image: "/data-engineer.png",
  },
  {
    slug: "dashboard-playbook",
    title: "Dashboard Playbook: From Metric Friction to Adoption",
    description:
      "A repeatable framework for launching dashboards that teams actually depend on—from discovery interviews to UX polish.",
    date: "Dec 2024",
    readingTime: "10 min",
    category: "Analytics",
    image: "/web.jpg",
  },
  {
    slug: "vertex-pipelines-guardrails",
    title: "Vertex Pipelines: Shipping Experiments with Guardrails",
    description:
      "Reference architecture and IaC snippets that kept our research-to-prod loop under 30 minutes with Vertex AI.",
    date: "Nov 2024",
    readingTime: "7 min",
    category: "DevOps",
    image: "/stock.jpg",
  },
];
