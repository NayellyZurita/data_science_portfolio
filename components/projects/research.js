import Image from "next/image";
import Link from "next/link";

const TRACKS = [
  {
    id: "data-science",
    title: "Data Science",
    blurb: "Experimentation, modeling, and statistical insight loops.",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    blurb: "Streaming, orchestration, and resilient data infrastructure.",
  },
  {
    id: "machine-learning",
    title: "AI-ML",
    blurb: "Model evaluation, deployment, and feedback guardrails.",
  },
  {
    id: "analytics",
    title: "Analytics",
    blurb: "Dashboards, decision intelligence, and stakeholder storytelling.",
  },
];

const PROJECT_GROUPS = {
  "data-science": [
    {
      title: "Customer Churn Signal Lab",
      description:
        "Working on this project...",
      image: "/glowing-skyscrapers-illuminate-futuristic-cityscape-night-generated-by-ai.jpg",
      imageAlt: "Abstract visualization of data science experimentation",
      links: {
        project: "https://github.com/nayellyzurita",
        notes: "",
        blog: "/blog",
      },
    },
  ],
  "data-engineer": [
    {
      title: "Real-Time Data Pipeline",
      description:
        "Designed and optimized a Kafka-to-PostgreSQL/TimescaleDB streaming pipeline on AWS EC2 with PgBouncer and Grafana, achieving low-latency ingestion and real-time monitoring",
      image: "/Stream-data-arquitecture.jpg",
      imageAlt: "Streaming data architecture sketch",
      links: {
        project: "https://github.com/nayellyzurita",
        notes: "",
        blog: "/blog",
      },
    },
  ],
  "machine-learning": [
    {
      title: "Anomaly Detection Mesh",
      description:
        "Working on this project...",
      image: "/website-hosting-concept-with-circuits.jpg",
      imageAlt: "Machine learning neural network graphic",
      links: {
        project: "https://github.com/nayellyzurita",
        notes: "",
        blog: "/blog",
      },
    },
  ],
  analytics: [
    {
      title: "Executive Metrics Portal",
      description:
        "Working on this project...",
      image: "/web.jpg",
      imageAlt: "Analytics dashboard showcasing executive metrics",
      links: {
        project: "https://github.com/nayellyzurita",
        notes: "",
        blog: "/blog",
      },
    },
  ],
};

const RESOURCE_TABS = [
  { key: "project", label: "View Project" },
  { key: "notes", label: "Read Case Notes" },
  { key: "blog", label: "Read Blog" },
];

const TAB_STYLES = {
  project: {
    base: "bg-teal/15 text-teal",
    hover: "hover:bg-teal/30 hover:text-white",
  },
  notes: {
    base: "bg-purple/15 text-purple",
    hover: "hover:bg-purple/30 hover:text-white",
  },
  blog: {
    base: "bg-sand/20 text-sand",
    hover: "hover:bg-sand/40 hover:text-dark",
  },
};

function ProjectLink({ project }) {
  const tabs = RESOURCE_TABS.map((tab) => {
    const href = project.links?.[tab.key];
    if (!href) return null;

    const isExternal = /^https?:\/\//.test(href);
    const Component = isExternal ? "a" : Link;

    const props = isExternal
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { href };

    const style = TAB_STYLES[tab.key] ?? {
      base: "bg-slate-800/80 text-slate-200",
      hover: "hover:bg-slate-700/80 hover:text-white",
    };

    return (
      <Component
        key={tab.key}
        {...props}
        className={`group flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide transition ${style.base} ${style.hover}`}
      >
        <span className="inline-flex items-center justify-center gap-1">
          <span>{tab.label}</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </span>
      </Component>
    );
  }).filter(Boolean);

  return (
    <div className="h-full rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 transition-colors hover:border-teal/70 hover:bg-slate-900/90">
      <div className="flex h-full flex-col gap-4">
        <div className="overflow-hidden rounded-xl bg-slate-800/60">
          {project.image ? (
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.imageAlt ?? `${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 90vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Visual coming soon
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <p className="text-lg font-semibold text-slate-100">{project.title}</p>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
          {tabs.length > 0 && (
            <div className="mt-6 rounded-full border border-slate-700/70 bg-slate-800/60 p-1">
              <div className="flex flex-wrap gap-1">{tabs}</div>
            </div>
          )}
        </div>
      </div>
    </div>
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

      <div className="mx-auto max-w-6xl space-y-24 px-6 py-20">
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
