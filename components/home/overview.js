import Link from "next/link";

export default function SectionsOverview() {
  const items = [
    {
      id: "about",
      title: "About",
      blurb:
        "Who I am and what I do: data engineering, analytics, and ML. A quick story of my journey, the tools I use, and the problems I love solving.",
      iconSrc: "/accept.png",
      href: "/about",
      bg: "/security.png",
    },
    {
      id: "projects",
      title: "Projects",
      blurb:
        "Hands-on builds across data engineering, data science, and ML: streaming pipelines, cloud data platforms, model training, and dashboards.",
      iconSrc: "/artificial-intelligence.png",
      href: "/projects",
      bg: "/ai.jpg",
    },
    {
      id: "blog",
      title: "Blog",
      blurb:
        "Short write-ups on experiments, notes from what I’m learning, and deep dives into performance, reliability, and MLOps.",
      iconSrc: "/blogging.png",
      href: "/blog",
      bg: "/geo.jpg",
    },
  ];

  return (
    <section id="overview" className="relative isolate bg-grey text-white">
      {/* Intro header */}
      <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-dark">
          What you will find here
        </h2>
        <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-purple">
          A quick tour of the core sections—my background, hands-on builds, and writing.
        </p>
        <div className="mt-8 flex flex-col items-center gap-6">
          <span className="text-[10px] text-purple tracking-[0.45em] uppercase">
            Scroll to Explore
          </span>
          <span className="h-10 w-px animate-pulse rounded bg-purple" />
        </div>
      </div>

      {/* Sections */}
      <div id="overview-list" className="relative">
        {items.map((item) => (
          <article key={item.id} className="relative min-h-[30vh]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url(${item.bg})` }}
              aria-hidden="true"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-24">
              <div className="flex flex-col md:flex-row items-start item-center gap-8 md:gap-12">
                {/* Icon */}
                <img
                  src={item.iconSrc}
                  alt={`${item.title} icon`}
                  className="h-16 w-14 flex-none shrink-0 object-contain invert brightness-0"
                  loading="lazy"
                />

                {/* Text + CTA */}
                <div className="max-w-4xl">
                  <Link href={item.href} className="group block">
                    <h3 className="text-4xl font-semibold sm:text-5xl md:text-6xl group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed sm:text-base md:text-lg text-grey">
                      {item.blurb}
                    </p>
                  </Link>

                  <Link
                    href={item.href}
                    className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white/90 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent/60"
                    aria-label={`Go to ${item.title}`}
                  >
                    <span className="text-2xl leading-none">+</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
