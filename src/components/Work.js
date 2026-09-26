"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAssetPath } from "../utils/paths";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const experience = [
    {
        company: "1Password",
        role: "Software Engineer Intern",
        period: "Jan 2026 to Apr 2026",
        logo: "/1password_logo.png",
        summary:
            "Built release infrastructure and internal tooling used across browser engineering workflows.",
        outcomes: [
            "Engineered a Go release automation service supporting more than 12 releases each month and reduced preparation time by 90%.",
            "Built a React release dashboard that reduced release-status inquiries by 80%.",
            "Created a TypeScript GitHub App that reduced manual pull-request handling by 95%.",
        ],
        stack: "Go, TypeScript, React, GitHub Actions, Kubernetes, Datadog",
    },
    {
        company: "Trulioo",
        role: "Software QA Engineer Intern",
        period: "Jan 2025 to Aug 2025",
        logo: "/trulioo_logo.jpeg",
        summary:
            "Modernized API automation and CI feedback loops across identity verification products.",
        outcomes: [
            "Migrated API automation from Postman to Cypress across three core products, saving $6,600 each year.",
            "Raised automated coverage to 95% across four core features and reduced manual QA by more than 15 hours each week.",
            "Reduced average daily pipeline failures from seven to two through failure analysis and observability.",
        ],
        stack: "TypeScript, Cypress, GitLab CI/CD, Grafana, API testing",
    },
    {
        company: "FPT Software",
        role: "Full-stack Developer Intern",
        period: "May 2024 to Sep 2024",
        logo: "/fpt_logo.png",
        summary:
            "Delivered Azure-backed product workflows for an AI presentation platform used by sales teams.",
        outcomes: [
            "Enabled more than 150 users to generate sales presentations with an AI-assisted platform.",
            "Designed an asynchronous Azure workflow that kept long-running AI requests from blocking the client.",
            "Optimized Spring Boot APIs handling more than 5,000 daily requests and improved response time by 36%.",
        ],
        stack: "Java, Spring Boot, React, Azure Functions, Service Bus",
    },
    {
        company: "SFU Blueprint",
        role: "Software Developer",
        period: "Nov 2025 to Present",
        logo: null,
        summary:
            "Building pro bono software for a community organization serving more than 50 members.",
        outcomes: [
            "Developing a full-stack subscription platform for Poverty Coalition.",
            "Implementing recurring payments, subscription management, and PostgreSQL-backed member data.",
        ],
        stack: "Next.js, Supabase, Stripe, PostgreSQL",
    },
];


function CompanyMark({ item }) {
    if (!item.logo) {
        return (
            <div className="flex size-14 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-black text-white">
                SB
            </div>
        );
    }

    return (
        <div className="relative size-14 overflow-hidden rounded-full border border-black/10 bg-white">
            <Image
                src={getAssetPath(item.logo)}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
            />
        </div>
    );
}

export default function Work() {
    const section = useRef(null);

    useGSAP(
        () => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
            }

            const media = gsap.matchMedia();
            media.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: "[data-work-grid]",
                    start: "top 112px",
                    end: "bottom bottom-=120",
                    pin: "[data-work-heading]",
                    pinSpacing: false,
                });
            });

            return () => media.revert();
        },
        { scope: section }
    );


    return (
        <section id="work" ref={section} className="personal-section section-shell">
            <div>
                <div data-work-grid className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                    <div data-work-heading className="self-start">
                        <h2 className="section-heading">Where I’ve<br />been building.</h2>
                        <p className="mt-8 max-w-md text-lg leading-relaxed text-black/60">
                            A few teams I’ve learned from, and the things I’ve helped them build.
                        </p>
                    </div>

                    <div className="border-t border-black/15">
                        {experience.map((item) => (
                            <article
                                key={item.company}
                                className="border-b border-black/15 py-12 sm:py-16"
                            >
                                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex items-center gap-4">
                                        <CompanyMark item={item} />
                                        <div>
                                            <h3 className="text-3xl font-bold tracking-[-0.04em]">
                                                {item.company}
                                            </h3>
                                            <p className="text-black/55">{item.role}</p>
                                        </div>
                                    </div>
                                    <p className="shrink-0 font-medium text-black/50">{item.period}</p>
                                </div>
                                <p className="mt-8 text-xl font-medium leading-relaxed">
                                    {item.summary}
                                </p>
                                <ul className="mt-6 grid gap-3 text-base text-black/65">
                                    {item.outcomes.map((outcome) => (
                                        <li key={outcome} className="grid grid-cols-[0.7rem_1fr] gap-4">
                                            <span className="mt-2.5 size-2 rounded-full bg-[var(--accent)]" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 border-l-2 border-[var(--accent)] pl-4 text-sm font-medium text-black/60">
                                    {item.stack}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
