import Image from "next/image";
import { Mail } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="bg-grey py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="group relative h-[320px] w-[320px] rounded-[2rem] p-[6px] bg-gradient-to-tr from-purple to-teal transition-colors duration-700 hover:from-teal hover:to-purple md:h-[360px] md:w-[360px]">
            <div className="flex h-full w-full items-center justify-center rounded-[1.8rem] bg-grey">
              <Image
                src="/Nayelly-Zurita.jpg"
                alt="Portrait of Nayelly Zurita"
                width={360}
                height={360}
                className="h-[94%] w-[94%] rounded-[1.6rem] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-dark md:text-5xl">Nayelly Zurita</h2>
            <p className="mt-2 text-lg font-semibold uppercase tracking-[0.45em] text-purple md:text-xl">
              Data Science | Data Engineer
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-6 text-left text-lg leading-relaxed text-slate-900 md:text-xl md:leading-[1.9]">
          <p className="text-dark/90">
            I’m a data engineer grounded in economics and computer science, usually found untangling raw datasets
            and turning them into tools teams can act on. At Ensign College’s Tech Lab I launched a Kafka →
            TimescaleDB streaming stack on AWS, hardened it with TLS and Vault-backed secrets, and wired in
            Grafana to surface real-time infrastructure health for faculty and ops leaders.
          </p>
          <p className="text-dark/90">
            Before that, I was helping The Finance Consulting Group refresh its digital presence—shipping
            responsive sites, rolling out analytics instrumentation, and coordinating Figma-led sprints so
            stakeholders stayed aligned from discovery to launch. I combine Python, SQL, AWS, Kafka, and Docker
            with Tableau, Power BI, and custom Next.js experiences to bridge data discovery and storytelling.
          </p>
          <p className="text-dark/90">
            Collaboration is core to my work. I partner closely with PMs, analysts, and developers to model data,
            design observability from day one, and document the path forward. Whether the project is a streaming
            pipeline, an ML experiment, or an internal dashboard, I aim to deliver systems that are secure,
            maintainable, and ready for the next iteration.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-dark">
          <Mail className="h-6 w-6 text-teal" />
          <a
            href="mailto:nayelly.zurita@gmail.com"
            className="text-lg font-semibold text-teal hover:underline md:text-xl"
          >
            nayelly.zurita@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
