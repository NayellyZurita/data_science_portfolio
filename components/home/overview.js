export default function SectionsOverview() {
  const items = [
    {
      id: "about",
      title: "About",
      blurb:
        "Who I am and what I do: data engineering, analytics, and ML. A quick story of my journey, the tools I use, and the problems I love solving.",
      iconSrc: "/accept.png",
      href: "#about",
      bg: "security.png",
    },
    {
      id: "projects",
      title: "Projects",
      blurb:
        "Hands‑on builds across data engineering, data science, and ML: streaming pipelines, cloud data platforms, model training, and dashboards.",
      iconSrc: "/artificial-intelligence.png",
      href: "#projects",
      bg: "ai.jpg",
    },
    {
      id: "blog",
      title: "Blog",
      blurb:
        "Short write‑ups on experiments, notes from what I’m learning, and deep dives into performance, reliability, and MLOps.",
      iconSrc: "/blogging.png",
      href: "#blog",
      bg: "geo.jpg",
    },
  ];

  return (
    <section id="overview" className="relative isolate bg-[#99B898] text-white">
      {/* Intro header */}
      <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white/85">
          What you’ll find here
        </h2>
        <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-white/85">
          A quick tour of the core sections—my background, hands‑on builds, and writing.
        </p>
        {/* Scroll to explore */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.45em] uppercase" >
            Scroll to Explore
          </span>
          <span className="h-10 w-px animate-pulse rounded bg-[#2A363B]" />
        </div>
      </div>

      {/* Full-screen sections with left-aligned layout like the reference */}
      <div id="overview-list" className="relative">
        {items.map((item) => (
          <article key={item.id} className="relative min-h-[40vh]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${item.bg})` }}
              aria-hidden="true"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-28">
              <div className="flex items-start gap-6">
                {/* Icon column */}
                <div className="relative h-[220px] w-[220px] hover:opacity-70 transition drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                  <img src={item.iconSrc} alt="" className="h-full w-full object-contain" />
                </div>

                {/* Text column */}
                <div>
                  <h3 className="text-4xl font-semibold sm:text-5xl md:text-6xl">{item.title}</h3>
                  <p className="mt-4 max-w-4xl text-sm leading-relaxed sm:text-base md:text-lg text-white/90">
                    {item.blurb}
                  </p>
                  <a
                    href={item.href}
                    className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E84A5F] text-white/90 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E84A5F]/60"
                    aria-label={`Go to ${item.title}`}
                  >
                    <span className="text-2xl leading-none">+</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
