import Image from "next/image";
import { Calendar, Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    id: "exp-1",
    company: "Ensign College Tech-Lab",
    period: "2024 – 2025",
    image: "/Ensign_College.png",
    imageShape: "circle",
    roles: [
      { title: "Data Engineer" },
      { title: "Computer Science TA" },
      { title: "Computer Science Tutor" },
    ],
    highlights: [
      "Built Kafka → TimescaleDB streaming pipeline on AWS EC2 for real-time VM monitoring.",
      "Hardened stack with TLS (Let’s Encrypt) and centralized secrets via Vault.",
      "Deployed Grafana dashboards; reduced incident detection time and improved uptime.",
    ],
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL / TimescaleDB", level: 80 },
      { name: "AWS (EC2, IAM)", level: 75 },
      { name: "Kafka", level: 70 },
      { name: "Docker", level: 75 },
      { name: "Grafana", level: 80 },
      { name: "Kubernetes", level: 55 },
      { name: "Tableau", level: 65 },
      { name: "Power BI", level: 60 },
    ],
  },
  {
    id: "exp-2",
    company: "The Finance Consulting Group",
    period: "2024-2024",
    image: "/web-dev.jpg",
    imageShape: "rectangle",
    roles: [
      { title: "Web Developer" },
    ],
    highlights: [
      "Boosted mobile site performance 40% and met ADA checks.",
      "Led weekly Figma sprints to align stakeholders on UX and scope.",
      "Documented a maintenance playbook so content owners ship updates solo.",
    ],
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Databases", level: 70 },
      { name: "Git", level: 80 },
      { name: "Jira", level: 65 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between text-sm text-slate-200">
        <span>{name}</span>
        <span aria-hidden="true">{level}%</span>
      </div>
      <div
        className="mt-1 h-2 w-full rounded-full bg-slate-700"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div
          className="h-2 rounded-full bg-gradient-to-r from-purple to-teal"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function RolesTimeline({ roles, period }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 text-slate-200">
        <Briefcase className="w-4 h-4" />
        <p className="font-semibold tracking-wide">Roles</p>
      </div>
      <ol className="mt-2 border-l border-slate-600 pl-4 space-y-3">
        {roles.map((r, idx) => (
          <li key={idx} className="relative">
            <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal-400 shadow" />
            <p className="text-slate-100 font-medium">{r.title}</p>
            <p className="text-slate-300 text-sm">{r.dates}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex items-center gap-2 text-slate-300 text-sm">
        <Calendar className="w-4 h-4" />
        <span>{period}</span>
      </div>
    </div>
  );
}

function ExperienceItem({ exp, reverse = false }) {
  const isCircularImage = exp.imageShape === "circle";
  const circleSizeClasses = "h-64 w-64";

  const gradientFrameClasses = `relative bg-gradient-to-tr from-purple-600/70 to-teal-500/70 p-[6px] ${
    isCircularImage ? `rounded-full ${circleSizeClasses}` : "rounded-3xl"
  }`;

  const imageFrameClasses = `${
    isCircularImage ? "rounded-full bg-slate-900 p-3 h-full w-full" : "rounded-2xl bg-slate-900 p-2"
  }`;

  const imageClasses = `object-cover transition-transform duration-500 ease-out hover:scale-[1.02] ${
    isCircularImage ? "rounded-full h-full w-full" : "rounded-2xl w-full h-[280px] md:h-[360px]"
  }`;

  const imageDimensions = isCircularImage
    ? { width: 320, height: 320 }
    : { width: 720, height: 480 };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image side */}
      <div className={`relative ${isCircularImage ? "flex justify-center" : ""}`}>
        <div className={gradientFrameClasses}>
          <div className={imageFrameClasses}>
            <Image
              src={exp.image}
              alt={`${exp.company} visual`}
              width={imageDimensions.width}
              height={imageDimensions.height}
              className={imageClasses}
              priority
            />
          </div>
        </div>
      </div>

      {/* Content side */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
          {exp.company}
        </h3>
        <p className="text-slate-300">{exp.location}</p>

        <div className="mt-5">
          <RolesTimeline roles={exp.roles} period={exp.period} />
        </div>

        <div className="mt-4">
          <h4 className="text-slate-100 font-semibold mb-2">Highlights</h4>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-slate-100 font-semibold mb-2">Technical Skills</h4>
          {exp.skills.map((s, i) => (
            <SkillBar key={i} name={s.name} level={s.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-100 mb-14">
          Experience
        </h2>

        <div className="space-y-20">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceItem
              key={exp.id}
              exp={exp}
              reverse={idx % 2 === 1} // alternate sides
            />
          ))}
        </div>
      </div>
    </section>
  );
}
