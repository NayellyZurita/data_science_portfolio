import Image from "next/image";
import Link from "next/link";

const TRACKS = [
  {
    id: "data-science",
    title: "Data Science",
    blurb: "Analytics experimentation, causal inference, and insight automation.",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    blurb: "Pipelines, orchestration, and resilient data infrastructure.",
  },
  {
    id: "machine-learning",
    title: "ML",
    blurb: "Model development, evaluation, and real-time inference.",
  },
  {
    id: "developer",
    title: "Developer",
    blurb: "Full-stack products that ship research to production.",
  },
];

const PROJECT_GROUPS = {
  "data-science": [
    {
      title: "Customer Churn Signal Lab",
      description: "Segmented churn drivers with uplift modeling and experiment design dashboards.",
      href: "#data-science",
      image: "/ai.jpg",
      imageAlt: "Abstract visualization of data science experimentation",
    },
    {
      title: "Demand Forecasting Notebook",
      description: "Hierarchical Prophet + XGBoost ensemble delivering SKU-level forecast lifts.",
      href: "https://github.com/nayellyzurita",
      external: true,
      image: "/stock.jpg",
      imageAlt: "Forecasting chart for retail demand",
    },
  ],
  "data-engineer": [
    {
      title: "Event Streaming Platform",
      description: "Kafka to warehouse pipeline with CDC, observability SLIs, and IaC guardrails.",
      href: "#data-engineer",
      image: "/data-engineer.png",
      imageAlt: "Data engineering pipeline illustration",
    },
    {
      title: "Analytics Lakehouse",
      description: "dbt + Iceberg stack powering BI and ML feature freshness across domains.",
      href: "https://www.linkedin.com/in/nayelly-zurita",
      external: true,
      image: "/web.jpg",
      imageAlt: "Modern analytics workspace",
    },
  ],
  "machine-learning": [
    {
      title: "Anomaly Detection Mesh",
      description: "Streaming anomaly service using isolation forests and adaptive thresholds.",
      href: "#machine-learning",
      image: "/artificial-intelligence.png",
      imageAlt: "Machine learning neural network graphic",
    },
    {
      title: "MLOps Benchmark",
      description: "End-to-end vertex pipeline with CI/CD, model registry, and drift alerting.",
      href: "https://github.com/nayellyzurita",
      external: true,
      image: "/security.png",
      imageAlt: "MLOps security and monitoring visuals",
    },
  ],
  developer: [
    {
      title: "Portfolio Platform",
      description: "Next.js site with modular sections for data storytelling and project demos.",
      href: "#developer",
      image: "/pro.jpg",
      imageAlt: "Developer working on a portfolio interface",
    },
    {
      title: "Realtime Ops Dashboard",
      description: "Socket-powered dashboard surfacing ops metrics with granular permissions.",
      href: "https://nayelly.dev",
      external: true,
      image: "/geo.jpg",
      imageAlt: "Dashboard showing realtime operational metrics",
    },
  ],
};

function ProjectLink({ project }) {
  const isExternal = Boolean(project.external);
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer", href: project.href }
    : { href: project.href, scroll: true };

  const Wrapper = isExternal ? "a" : Link;

  return (
    <Wrapper
      {...linkProps}
      className="group block h-full rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 transition-colors hover:border-teal/70 hover:bg-slate-900/90"
    >
      <div className="flex h-full flex-col gap-4">
        <div className="overflow-hidden rounded-xl bg-slate-800/60">
          {project.image ? (
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.imageAlt ?? `${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Visual coming soon
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <p className="text-lg font-semibold text-slate-100 group-hover:text-teal">
            {project.title}
          </p>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:text-white">
            {isExternal ? "View case study" : "Jump to section"}
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default function ResearchProjectsSection() {
  return (
    <section className="bg-dark text-slate-100" id="top">
      <div className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden">
        <Image
          src="/pro.jpg"
          alt="Collage representing professional projects"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal/80">
            Projects & Research
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            This portfolio includes projects based on experiencia and education projects, blending
            research, analytics, and engineering craft.
          </h2>
          <p className="mt-4 text-base text-slate-200 md:text-lg">
            Explore by practice area and deep dive into walkthroughs or external case studies.
          </p>
        </div>
      </div>

      <div className="w-full bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col px-6 py-10 md:flex-row md:items-stretch md:divide-x md:divide-slate-800">
          {TRACKS.map((track, idx) => (
            <a
              key={track.id}
              href={`#${track.id}`}
              className={`flex-1 px-4 py-6 text-center transition-colors hover:bg-slate-900/70 md:px-6 ${
                idx !== 0 ? "border-t border-slate-800 md:border-t-0" : ""
              }`}
            >
              <h3 className="text-lg font-semibold uppercase tracking-wide text-teal">
                {track.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{track.blurb}</p>
              <span className="mt-4 inline-flex items-center justify-center gap-1 text-xs font-semibold text-slate-400">
                Jump to projects
                <span aria-hidden="true">↓</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        {TRACKS.map((track) => (
          <section key={track.id} id={track.id} className="scroll-mt-24">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal/70">
                  {track.title}
                </p>
                <h3 className="mt-2 text-3xl font-bold text-white">{track.title} Projects</h3>
                <p className="mt-2 max-w-2xl text-sm text-slate-300">{track.blurb}</p>
              </div>
              <a
                href="#top"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-teal md:mt-0"
              >
                Back to top ↥
              </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {PROJECT_GROUPS[track.id].map((project) => (
                <ProjectLink key={project.title} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
