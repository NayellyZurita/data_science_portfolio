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
                src="/nayelly-zurita-portfolio-photo.jpg"
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
            <p className="mt-4 text-lg font-semibold uppercase tracking-[0.45em] text-purple md:text-xl">
              Data Science | Data Engineer
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl space-y-4 text-justify text-lg leading-relaxed text-slate-900 md:text-xl md:leading-[1.48]">
          <p className="text-dark/90">
            Nayelly Zurita is a data scientist and engineer with a foundation in economics and computer science,
            dedicated to transforming raw datasets into actionable insights and resilient systems. She is currently
            completing her Data Science degree at Ensign College, where she also serves as a Computer Science
            tutor, teaching Python, SQL, Java, cloud computing, and networking fundamentals.
          </p>
          <p className="text-dark/90">
            At Ensign College’s Tech Lab, Nayelly designed and deployed a Kafka → TimescaleDB streaming
            architecture on AWS EC2, fortified with TLS encryption and Vault-backed secrets, and integrated Grafana
            dashboards to monitor student virtual machines in real time. This system reduced incident detection time
            by more than 70% and significantly improved lab uptime, becoming a reference project for the college’s
            data infrastructure initiatives.
          </p>
          <p className="text-dark/90">
            Her professional portfolio also includes work with The Finance Consulting Group, where she supported the
            modernization of its digital presence by delivering responsive web applications, implementing analytics
            instrumentation, and facilitating collaborative design sprints with Figma to align stakeholders from
            discovery through launch.
          </p>
          <p className="text-dark/90">
            Nayelly’s technical expertise spans Python, SQL, AWS, Kafka, Docker, and TimescaleDB, paired with
            visualization tools such as Tableau and Power BI, and full-stack frameworks like Next.js. She thrives at
            the intersection of data pipelines, analytics, and communication—building systems that are secure,
            maintainable, and ready for iteration.
          </p>
          <p className="text-dark/90">
            In addition to her technical work, she is passionate about mentorship and collaboration, partnering with
            faculty, analysts, and developers to model data, embed observability from day one, and document sustainable
            workflows. Her career goal is to continue bridging data engineering and analytics with machine learning
            applications, empowering teams to make informed, real-time decisions.
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
