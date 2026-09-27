import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { getAssetPath } from "../utils/paths";

const projects = [
    {
        title: "InterVu",
        category: "AI interview platform",
        outcome: "StormHacks 2025 winner",
        description:
            "Built in a four-person team, InterVu uses Go, Gemini, and ElevenLabs to generate and conduct adaptive behavioral and technical interviews.",
        technologies: "Go, Gemini, ElevenLabs, Next.js",
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
            "An event-driven bank-statement pipeline using AWS SQS, Textract, ECS workers, PostgreSQL, and fault-tolerant job execution.",
        technologies: "ASP.NET, Next.js, AWS, Terraform",
        image: "/projects/fino.png",
        source: "https://github.com/Mark-Vu/fino-backend",
        sourceLabel: "GitHub",
        website: "https://finotools.app/",
    },
    {
        title: "FIC-Check",
        category: "Real-time attendance",
        outcome: "60% faster check-in",
        description:
            "A seat-based attendance system using WebSockets to deliver live occupancy updates between a Dockerized Java backend and React frontend.",
        technologies: "Spring Boot, PostgreSQL, Docker, React",
        image: "/projects/fic-check.png",
        source: "https://github.com/PaulCompSci/FIC-Check",
        sourceLabel: "GitHub",
    },
    {
        title: "Handora",
        category: "Accessible rehabilitation",
        outcome: "Best Social Impact at natHacks",
        description:
            "A rehabilitation glove that converts hand motion into therapeutic games, combining browser-based Bluetooth with responsive game interactions.",
        technologies: "Next.js, Pixi.js, Web Bluetooth",
        image: "/projects/handora.png",
        source: "https://devpost.com/software/handora",
        sourceLabel: "Devpost",
    },
    {
        title: "JobHub",
        category: "Co-op job discovery",
        outcome: "Less tab-hopping. More applying.",
        description:
            "A team project to bring co-op and internship listings from multiple job boards into one place. Built around a familiar student problem: searching the same eight job titles on four different websites, every single day.",
        technologies: "Planned architecture: Next.js, AWS Lambda, API Gateway, ECS, S3, Glue, PostgreSQL, Docker",
        image: "/job_hub_architecture.png",
        imageAlt: "JobHub's proposed AWS architecture connecting job-board scrapers, S3, Glue, PostgreSQL, Lambda, and a Next.js frontend",
        source: "https://github.com/jobless-devs/Jobhub",
        sourceLabel: "GitHub",
        featured: true,
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
                            <Image src={getAssetPath(project.image)} alt={project.imageAlt || `${project.title} project screenshot`} fill className="object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-8" sizes="(max-width: 767px) 100vw, 50vw" />
                            <span className="project-image-arrow"><ArrowUpRight size={22} /></span>
                        </a>
                        <div className="project-details">
                        <div className="project-title-row"><h3>{project.title}</h3><span>{project.category}</span></div>
                        <p className="project-outcome">{project.outcome}</p>
                        <p className="project-description">{project.description}</p>
                        <p className="project-stack">{project.technologies}</p>
                        <div className="mt-5 flex gap-6">
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
