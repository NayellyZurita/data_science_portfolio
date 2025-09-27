import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    id: "post-ml-observability",
    title: "Building ML Observability That Actually Scales",
    description:
      "Lessons from instrumenting feature pipelines, drift monitors, and feedback loops across fast shipping teams.",
    date: "Feb 2025",
    readingTime: "8 min",
    category: "MLOps",
    image: "/artificial-intelligence.png",
    href: "https://github.com/nayellyzurita",
    external: true,
  },
  {
    id: "post-streaming-notebook",
    title: "Designing a Streaming Notebook for Real-Time Insights",
    description:
      "How I prototyped a Kafka + TimescaleDB notebook that helps analysts reason about high-volume event streams.",
    date: "Jan 2025",
    readingTime: "6 min",
    category: "Data Engineering",
    image: "/data-engineer.png",
    href: "/projects#data-engineer",
  },
  {
    id: "post-dashboard-playbook",
    title: "Dashboard Playbook: From Metric Friction to Adoption",
    description:
      "A framework for landing dashboards that teams actually depend on—covering stakeholder interviews to UX polish.",
    date: "Dec 2024",
    readingTime: "10 min",
    category: "Analytics",
    image: "/web.jpg",
    href: "https://www.linkedin.com/in/nayelly-zurita",
    external: true,
  },
  {
    id: "post-vertex-devops",
    title: "Vertex Pipelines: Shipping Experiments with Guardrails",
    description:
      "Reference architecture and IaC snippets that kept our research-to-prod loop under 30 minutes.",
    date: "Nov 2024",
    readingTime: "7 min",
    category: "DevOps",
    image: "/stock.jpg",
    href: "/projects#machine-learning",
  },
];

function BlogCard({ post }) {
  const isExternal = Boolean(post.external);
  const Wrapper = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href: post.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: post.href };

  return (
    <Wrapper
      {...linkProps}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-teal/60 hover:bg-white/10"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          <span className="rounded-full bg-black/40 px-3 py-1">{post.category}</span>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6 py-6 text-slate-100">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-teal/80">
          <span>{post.readingTime}</span>
          <span className="h-px w-8 bg-teal/40" aria-hidden="true" />
          <span>{isExternal ? "External" : "Read"}</span>
        </div>
        <h3 className="text-xl font-bold leading-tight md:text-2xl">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {post.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:text-white">
          {isExternal ? "Visit article" : "Open detail"}
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Wrapper>
  );
}

export default function BlogSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-night via-midnight to-night py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-purple/30 blur-[110px]" aria-hidden="true" />
        <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-teal/20 blur-[140px]" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal/80">
            Ideas & Playbooks
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">The Blog</h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Deep dives, retrospectives, and working notes from the systems I build. Expect plenty of
            architecture sketches, performance experiments, data storytelling, and the occasional
            career reflection.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <footer className="flex flex-col items-center gap-6 text-center text-sm text-slate-300 md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="text-base font-semibold text-slate-100">Stay in the flow</h3>
            <p className="mt-2 max-w-xl text-slate-400">
              Subscribe or check back often—new experimentation notes, case studies, and templates drop
              every few weeks.
            </p>
          </div>
          <Link
            href="mailto:nayelly.zurita@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal hover:text-teal"
          >
            Join the mailing list
            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
