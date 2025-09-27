import Image from "next/image";
import Link from "next/link";

export default function ProjectsCta() {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-800/70 bg-slate-950/80 p-[1px] shadow-xl">
          <div className="relative flex h-full flex-col justify-between rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950 p-10">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal/80">
                Featured Work
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Explore the data stories, engineering builds, and ML experiments behind the portfolio.
              </h2>
              <p className="mt-4 text-sm text-slate-300 md:text-base">
                From streaming pipelines to experimentation platforms, dive into projects that blend
                analytics, infrastructure, and product thinking.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-white"
              >
                View projects
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-teal hover:text-teal"
              >
                Read case notes
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-900/70 shadow-xl">
          <div className="relative aspect-[4/5]">
            <Image
              src="/data-engineer.png"
              alt="Illustration of data projects and engineering workflows"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
