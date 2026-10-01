"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAssetPath } from "../utils/paths";

const certifications = [
    { title: "Kubernetes & Cloud Native Associate", issuer: "The Linux Foundation", image: "/certifications/kcna.png", href: "https://www.credly.com/badges/af6d4507-16e6-4a63-9b40-ce46d9a48e16/public_url" },
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", image: "/certifications/aws-cloud-practitioner.png", href: "https://www.credly.com/badges/62a56a80-a4be-4ea3-9fe4-8b104d38e2a6/public_url" },
];

const experience = [
    {
        company: "1Password",
        role: "Software Engineer Intern",
        period: "Jan–Apr 2026",
        logo: "/1password_logo.png",
        summary: "Built release infrastructure and internal tooling used across browser engineering workflows.",
        stack: "Go · TypeScript · React · GitHub Actions · Kubernetes · Datadog",
    },
    {
        company: "SFU Blueprint",
        role: "Software Developer",
        period: "Nov 2025–Present",
        logo: "/blueprint.png",
        summary: "Building pro bono software for a community organization serving more than 50 members.",
        stack: "Next.js · Supabase · Stripe · PostgreSQL",
    },
    {
        company: "Trulioo",
        role: "Software QA Engineer Intern",
        period: "Jan–Aug 2025",
        logo: "/trulioo_logo.jpeg",
        summary: "Modernized API automation and CI feedback loops across identity verification products.",
        stack: "TypeScript · Cypress · GitLab CI/CD · Grafana · API testing",
    },
    {
        company: "FPT Software",
        role: "Full-stack Developer Intern",
        period: "May–Sep 2024",
        logo: "/fpt_logo.png",
        summary: "Delivered Azure-backed product workflows for an AI presentation platform used by sales teams.",
        stack: "Java · Spring Boot · React · Azure Functions · Service Bus",
    },
];

function CompanyMark({ item }) {
    return (
        <div className="company-mark">
            <Image src={getAssetPath(item.logo)} alt="" fill className="object-cover" sizes="44px" />
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="personal-section section-shell">
            <div className="career-overview">
                <aside className="profile-summary">
                    <p className="section-eyebrow">About</p>
                    <h2 className="overview-heading">A builder who likes <span className="marker-highlight">useful systems.</span></h2>
                    <p className="overview-copy">
                        I enjoy building automation tools, cloud infrastructure, and backend systems. I’m always learning and open to the next challenge.
                    </p>

                    <div className="toolbox">
                        <h3>Core tools</h3>
                        <p>Go · TypeScript · Java · C# · React · PostgreSQL · AWS · Kubernetes · Terraform · Docker</p>
                    </div>

                    <div className="certifications">
                        <h3>Certifications</h3>
                        <div className="credential-grid">
                            {certifications.map((cert) => (
                                <a key={cert.title} href={cert.href} target="_blank" rel="noopener noreferrer" className="credential group">
                                    <Image src={getAssetPath(cert.image)} alt={cert.title + " certification badge"} width={120} height={64} className="credential-image transition-transform duration-500 group-hover:scale-105" />
                                    <div><h4>{cert.title}</h4><p>{cert.issuer}</p></div>
                                    <ArrowUpRight size={15} className="shrink-0 text-[var(--accent)]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>

                <div id="work" className="experience-column">
                    <div className="experience-heading">
                        <div>
                            <p className="section-eyebrow">Experience</p>
                            <h2 className="overview-heading">Where I’ve been building.</h2>
                        </div>
                        <p>Four teams, from product delivery to developer infrastructure.</p>
                    </div>

                    <div className="experience-list">
                        {experience.map((item) => (
                            <article key={item.company} className="experience-item">
                                <CompanyMark item={item} />
                                <div className="experience-details">
                                    <div className="experience-title-row">
                                        <div><h3>{item.company}</h3><p>{item.role}</p></div>
                                        <time>{item.period}</time>
                                    </div>
                                    <p className="experience-summary">{item.summary}</p>
                                    <p className="experience-stack">{item.stack}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
