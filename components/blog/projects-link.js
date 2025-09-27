import Image from "next/image";
import Link from "next/link";

export default function BlogProjectsLink() {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto grid gap-10 px-6 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal/80">
            Continue Exploring
          </p>
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Want to see the systems behind these stories?
          </h3>
          <p className="text-base text-slate-300 md:text-lg">
            Head back to the projects hub for architecture diagrams, walkthroughs, and repo links.
          </p>

          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-white"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-900/70 shadow-xl">
          <div className="relative w-full aspect-[4/5] md:h-[320px]">
            <Image
              src="/ai.jpg"
              alt="Illustration of a data project storyboard"
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
