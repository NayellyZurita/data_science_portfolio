"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HOBBIES = [
  {
    src: "/city-race.jpeg",
    alt: "City skyline at dusk",
    caption: " Urban exploration and cityscape photography.",
  },
  {
    src: "/alta-race.jpeg",
    alt: "Exploring outdoor landscapes",
    caption: "Weekend hikes and scouting new landscape photography spots.",
  },
  {
    src: "/snow-hike.jpeg",
    alt: "hiking in snowy mountains",
    caption: "Finding serenity in snowy mountain hikes and nature walks.",
  },
  {
    src: "/flowers.jpeg",
    alt: "Close-up of flowers in a garden",
    caption: "Macro photography of nature's intricate details.",
  },
  {
    src: "/running.jpeg",
    alt: "Running along a mountain trail",
    caption: "Trail running to clear the mind and energize the body.",
  },
];

export default function HobbiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOBBIES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-grey py-0">
      <div className="space-y-0">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-grey to-white text-dark">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(142,114,238,0.25),_transparent_65%)]" />
          </div>
          <div className="relative z-10 flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16">
            <div className="max-w-2xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple">
                Explore Projects
              </p>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Dive into builds that blend engineering, analytics, and ML experimentation.
              </h2>
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                Each project surfaces the workflows, architecture diagrams, and outcomes that shaped
                the portfolio. See the systems, dashboards, and models powering real-world insights.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-grey shadow-lg transition hover:scale-105 hover:bg-purple"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900/80 shadow-xl">
            <div className="relative aspect-[4/5]">
              <Image
                src="/pro.jpg"
                alt="Showcase of highlighted projects"
                fill
                sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-midnight via-dark to-ink text-grey">
          <div className="absolute inset-0 opacity-40" aria-hidden="true">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(0,215,210,0.25),_transparent_60%)]" />
          </div>
          <div className="relative z-10 flex min-h-screen w-full flex-col gap-10 px-6 py-20 lg:px-16">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal/80">
                Beyond the keyboard
              </p>
              <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Hobbies that recharge the craft.
              </h3>
              <p className="text-base leading-relaxed text-slate-200 md:text-lg">
                Away from data pipelines and dashboards, I find balance through outdoor adventures,
                reading time, and trail running. These pursuits fuel my creativity and keep me
                energized for complex problem-solving.
              </p>
              <p className="text-sm text-slate-300">
                Currently showing: <span className="font-semibold text-white">{HOBBIES[activeIndex].caption}</span>
              </p>
            </div>

            <div className="mx-auto flex max-w-sm justify-center gap-2">
              {HOBBIES.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-teal" : "bg-white/30"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/80 shadow-2xl">
            <div className="relative aspect-[16/9]">
              {HOBBIES.map((hobby, idx) => (
                <Image
                  key={hobby.src}
                  src={hobby.src}
                  alt={hobby.alt}
                  fill
                  sizes="(min-width: 1280px) 70vw, (min-width: 768px) 80vw, 100vw"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    idx === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={idx === 0}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent p-4 text-right text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {`Frame ${activeIndex + 1} / ${HOBBIES.length}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
