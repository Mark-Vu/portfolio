import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { getAssetPath } from "../utils/paths";

const technologyColors = {
    "API Gateway": { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    "ASP.NET": { color: "#512bd4", background: "#f3efff", border: "#c4b5fd" },
    "AWS Lambda": { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    Docker: { color: "#086dd7", background: "#eef7ff", border: "#93c5fd" },
    ElevenLabs: { color: "#111111", background: "#ffffff", border: "#9ca3af" },
    ECS: { color: "#b45309", background: "#fff7ed", border: "#fdba74" },
    Gemini: { color: "#2563eb", background: "#eff6ff", border: "#93c5fd" },
    GKE: { color: "#326ce5", background: "#eff6ff", border: "#93c5fd" },
    Glue: { color: "#c2410c", background: "#fff7ed", border: "#fdba74" },
    Go: { color: "#007d9c", background: "#ecfeff", border: "#67e8f9" },
    Java: { color: "#217346", background: "#ecfdf5", border: "#86efac" },
    Jaeger: { color: "#b4237a", background: "#fdf2f8", border: "#f9a8d4" },
    Kubernetes: { color: "#2852a5", background: "#eff6ff", border: "#93c5fd" },
    "Next.js": { color: "#111111", background: "#ffffff", border: "#9ca3af" },
    "Pixi.js": { color: "#c026d3", background: "#fdf4ff", border: "#f0abfc" },
    PostgreSQL: { color: "#336791", background: "#eff6ff", border: "#93c5fd" },
    React: { color: "#087ea4", background: "#ecfeff", border: "#67e8f9" },
    S3: { color: "#15803d", background: "#f0fdf4", border: "#86efac" },
    "Spring Boot": { color: "#2f855a", background: "#f0fdf4", border: "#86efac" },
    Terraform: { color: "#654ff0", background: "#f5f3ff", border: "#c4b5fd" },
    Tilt: { color: "#c02648", background: "#fff1f2", border: "#fda4af" },
    "Web Bluetooth": { color: "#155eae", background: "#eff6ff", border: "#93c5fd" },
};

const projects = [
    {
        title: "InterVu",
        category: "AI interview platform",
        outcome: "StormHacks 2025 winner",
        description:
            "Four unemployed students built an AI interviewer. By the time we were done, all four of us had jobs. InterVu is taking full credit.",
        technologies: ["Go", "Gemini", "ElevenLabs", "Next.js"],
        image: "/projects/intervu.webp",
        source: "https://devpost.com/software/intervu-852wre",
        sourceLabel: "Devpost",
        website: "https://www.intervuai.tech/",
    },
    {
        title: "Fino",
        category: "Document processing system",
        outcome: "10,000+ statements processed",
        description:
            "A friend told me every statement-conversion tool online sucked, so I built a custom one. It has now processed 10,000+ statements, which feels like a convincing product review.",
        technologies: ["ASP.NET", "Next.js", "AWS", "Terraform"],
        image: "/fino-architecture.png",
        imageAlt: "Fino architecture showing the Next.js frontend, FastEndpoints API, PostgreSQL, Amazon SQS, ECS workers, S3, and a dead-letter queue",
        source: "https://github.com/Mark-Vu/fino-backend",
        sourceLabel: "GitHub",
        website: "https://finotools.app/",
    },
    {
        title: "Simple Uber Clone",
        category: "Microservices ride-sharing platform",
        outcome: "$300 Kubernetes lesson",
        description:
            "Built to learn how to develop microservices locally and deploy them to Kubernetes. I had a lot of fun—the cluster bill was $300.",
        technologies: ["Go", "Kubernetes", "Docker", "GKE", "Tilt", "Jaeger"],
        image: "/projects/simple-uber-clone.png",
        imageAlt: "Architecture diagram for a Go microservices ride-sharing platform deployed on Kubernetes",
        source: "https://github.com/Mark-Vu/go-microservices-kubernetes/blob/main/README.md",
        sourceLabel: "GitHub",
    },
    {
        title: "JobHub",
        category: "Co-op job discovery",
        outcome: "Less tab-hopping. More applying.",
        description:
            "We were all unemployed first-year students, so we built one place to find co-op roles instead of repeating the same searches across four job boards every day.",
        technologies: ["Next.js", "AWS Lambda", "API Gateway", "ECS", "S3", "Glue", "PostgreSQL", "Docker"],
        image: "/job_hub_architecture.png",
        imageAlt: "JobHub's proposed AWS architecture connecting job-board scrapers, S3, Glue, PostgreSQL, Lambda, and a Next.js frontend",
        source: "https://github.com/jobless-devs/Jobhub",
        sourceLabel: "GitHub",
    },
    {
        title: "Handora",
        category: "Accessible rehabilitation",
        outcome: "Best Social Impact at natHacks",
        description:
            "We drove roughly 1,160 km from Vancouver to Edmonton for a three-day hackathon, because apparently sleep deprivation needed a road trip. Then we built a Bluetooth rehabilitation glove.",
        technologies: ["Next.js", "Pixi.js", "Web Bluetooth"],
        image: "/projects/handora.png",
        source: "https://devpost.com/software/handora",
        sourceLabel: "Devpost",
    },
    {
        title: "FIC-Check",
        category: "Real-time attendance",
        outcome: "60% faster check-in",
        description:
            "Built for a Fraser International College professor who was tired of checking attendance manually. Now a seat map and WebSockets do the roll call.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React"],
        image: "/projects/fic-check.png",
        source: "https://github.com/PaulCompSci/FIC-Check",
        sourceLabel: "GitHub",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="personal-section section-shell">
            <div className="project-heading">
                <h2 className="section-heading">Some things<br />I’ve made.</h2>
                <p>Weekend ideas, hackathon experiments, and projects that found their way into someone’s workflow.</p>
            </div>
            <div className="personal-projects">
                {projects.map((project) => (
                    <article key={project.title} className={`personal-project group${project.featured ? " project-wide" : ""}`}>
                        <a href={project.website || project.source} target="_blank" rel="noopener noreferrer" className="project-image" aria-label={`Explore ${project.title}`}>
                            <Image src={getAssetPath(project.image)} alt={project.imageAlt || `${project.title} project screenshot`} fill className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-5" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                            <span className="project-image-arrow"><ArrowUpRight size={18} /></span>
                        </a>
                        <div className="project-details">
                        <div className="project-title-row"><h3>{project.title}</h3><span>{project.category}</span></div>
                        <p className="project-outcome">{project.outcome}</p>
                        <p className="project-description">{project.description}</p>
                        <div className="project-stack" aria-label={`Technologies used for ${project.title}`}>
                            <span className="project-stack-label">Tech</span>
                            <ul className="project-tech-list">
                                {project.technologies.map((technology) => (
                                    <li
                                        key={technology}
                                        className="project-tech"
                                        style={technologyColors[technology]}
                                    >
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-3 flex gap-5 text-sm">
                            <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-link">{project.sourceLabel} {project.sourceLabel === "GitHub" ? <Github size={16} /> : <ArrowUpRight size={16} />}</a>
                            {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-link">Visit site <ArrowUpRight size={16} /></a>}
                        </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
