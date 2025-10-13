import Image from "next/image";
import Link from "next/link";

export default function BlogCta() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 p-[1px]">
      <div className="flex flex-col gap-8 rounded-[30px] bg-gradient-to-br from-white via-grey px-8 py-10 shadow-xl backdrop-blur md:flex-row md:items-center md:gap-12">
        <div className="relative order-2 mx-auto w-full max-w-xs overflow-hidden rounded-3xl bg-slate-900/60 md:order-1 md:max-w-sm">
          <div className="aspect-[4/5]">
            <Image
              src="/futuristic-smart-city-with-5g-global-network-technology.jpg"
              alt="Illustration of blogging and storytelling"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex-1 text-center text-dark md:order-2 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal/80">
            Keep Exploring
          </p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            Dive into walkthroughs, notes, and playbooks in the blog.
          </h3>
          <p className="mt-3 text-sm  md:max-w-xl">
            I document project retrospectives, research deep dives, and the engineering lessons that
            make data systems resilient. Fresh posts drop every month.
          </p>

          <div className="mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-white"
            >
              Visit the blog
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
