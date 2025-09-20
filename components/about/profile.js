import Image from "next/image";
import { Mail } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="bg-grey py-16">
      <div className="container mx-auto px-6">
        {/* 1) Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-teal text-center mb-10">
          Who I am
        </h2>

        {/* 2) Picture with gradient shape + hover color swap */}
        <div className="flex justify-center mb-8">
          <div className="group relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] 
                          rounded-[2rem] p-[6px]
                          bg-gradient-to-tr from-purple to-teal
                          transition-colors duration-700 
                          hover:from-teal hover:to-purple">
            {/* Inner “frame” to match page background so the gradient looks like a border */}
            <div className="w-full h-full rounded-[1.8rem] bg-grey flex items-center justify-center">
              <Image
                src="/Nayelly-Zurita.jpg" // put your image in /public
                alt="Nayelly Zurita"
                width={360}
                height={360}
                className="rounded-[1.6rem] object-cover w-[94%] h-[94%]
                           transition-transform duration-500 ease-out 
                           group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3) Biography */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            I’m <span className="font-semibold">Nayelly Zurita</span>, a Data Engineer and Data Scientist
            with a foundation in economics and computer science. I design and
            operate scalable data systems—streaming pipelines, cloud-native
            infrastructure, and analytical models—that turn raw information into
            clear, reliable decisions. My toolkit includes <span className="font-semibold">Python, SQL,
            AWS, Kafka, Docker, Kubernetes, and SQL Server</span>, plus modern web
            tech like <span className="font-semibold">Next.js</span> for data-centric experiences. I’ve built
            real-time monitoring dashboards, optimized time-series storage with
            TimescaleDB, and automated CI/CD workflows to improve reliability and
            speed. I love collaborating across teams, mentoring, and shipping
            systems that are robust, observable, and easy to evolve.
          </p>

          {/* Email */}
          <div className="flex items-center justify-center gap-3 text-gray-900">
            <Mail className="w-6 h-6 text-teal" />
            <a
              href="mailto:nayelly.zurita@gmail.com"
              className="text-lg md:text-xl text-teal hover:underline"
            >
              nayelly.zurita@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
