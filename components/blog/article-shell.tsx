import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar";
import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";

type BlogArticleShellProps = {
  title: string;
  description: string;
  date?: string;
  readingTime?: string;
  category?: string;
  children: ReactNode;
};

const formatMeta = (values: (string | undefined)[]) =>
  values.filter((value): value is string => Boolean(value));

export default function BlogArticleShell({
  title,
  description,
  date,
  readingTime,
  category,
  children,
}: BlogArticleShellProps) {
  const meta = formatMeta([category, date, readingTime]);

  return (
    <div className="flex min-h-screen flex-col bg-grey text-slate-900">
      <NavigationBar />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-dark via-transparent to-teal/20 opacity-70" aria-hidden />
        <div className="absolute -top-40 right-12 h-80 w-80 rounded-full bg-grey blur-[180px]" aria-hidden />
        <div className="absolute bottom-[-4rem] left-[-6rem] h-96 w-96 rounded-full bg-grey blur-[200px]" aria-hidden />

        <div className="relative mx-auto max-w-4xl px-6 pb-28 pt-28 text-center text-slate-900">
          {meta.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-teal/80">
              {meta.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-dark/20 bg-white/60 px-3 py-1 text-[0.65rem] text-dark"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-dark sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-4 text-base text-white/80 md:text-lg">{description}</p>
        </div>
      </section>

      <div className="relative mx-auto w-full max-w-3xl -mt-16 px-2 pb-24">
        <div className="rounded-[30px] bg-grey p-8">
          <article className="prose prose-headings:tracking-tight prose-headings:text-dark prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-dark prose-code:rounded prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1">
            {children}
          </article>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
            <Link href="/blog" className="inline-flex items-center gap-2 hover:text-teal">
              <span aria-hidden>←</span>
              Back to all posts
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 hover:text-teal">
              Explore projects
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
