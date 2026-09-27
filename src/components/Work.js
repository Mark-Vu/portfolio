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
        quote: "Loved the tech. Loved the team. Fully remote, though, so the office snack budget was unfortunately just my grocery bill.",
        stack: "Go, TypeScript, React, GitHub Actions, Kubernetes, Datadog",
    },
    {
        company: "Trulioo",
        role: "Software QA Engineer Intern",
        period: "Jan 2025 to Aug 2025",
        logo: "/trulioo_logo.jpeg",
        summary:
            "Modernized API automation and CI feedback loops across identity verification products.",
        quote: "Great people, excellent office snacks. I took quality assurance seriously on both fronts.",
        stack: "TypeScript, Cypress, GitLab CI/CD, Grafana, API testing",
    },
    {
        company: "FPT Software",
        role: "Full-stack Developer Intern",
        period: "May 2024 to Sep 2024",
        logo: "/fpt_logo.png",
        summary:
            "Delivered Azure-backed product workflows for an AI presentation platform used by sales teams.",
        quote: "My manager believed in me when my experience section was mostly whitespace. Still grateful for that first real chance.",
        stack: "Java, Spring Boot, React, Azure Functions, Service Bus",
    },
    {
        company: "SFU Blueprint",
        role: "Software Developer",
        period: "Nov 2025 to Present",
        logo: "/blueprint.png",
        summary:
            "Building pro bono software for a community organization serving more than 50 members.",
        quote: "Still building. This quote is also technically a work in progress.",
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
                <div data-work-grid className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                    <div data-work-heading className="self-start">
                        <h2 className="section-heading">Where I’ve<br />been building.</h2>
                        <p className="mt-5 max-w-md text-lg leading-relaxed text-black/60">
                            A few teams I’ve learned from, and the things I’ve helped them build.
                        </p>
                    </div>

                    <div className="border-t border-black/15">
                        {experience.map((item) => (
                            <article
                                key={item.company}
                                className="border-b border-black/15 py-8 sm:py-10"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
                                <p className="mt-5 text-xl font-medium leading-relaxed">
                                    {item.summary}
                                </p>
                                <blockquote className="mt-4 text-base italic leading-relaxed text-[var(--muted)]">
                                    &ldquo;{item.quote}&rdquo;
                                </blockquote>
                                <p className="mt-5 border-l-2 border-[var(--accent)] pl-4 text-sm font-medium text-black/60">
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
