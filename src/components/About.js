"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAssetPath } from "../utils/paths";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const statement = "It started with a game of Hangman. Now I build tools, untangle backend problems, and automate the things nobody wants to do twice.";
const certifications = [
    { title: "Kubernetes & Cloud Native Associate", issuer: "The Linux Foundation", image: "/certifications/kcna.png", href: "https://www.credly.com/badges/af6d4507-16e6-4a63-9b40-ce46d9a48e16/public_url" },
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", image: "/certifications/aws-cloud-practitioner.png", href: "https://www.credly.com/badges/62a56a80-a4be-4ea3-9fe4-8b104d38e2a6/public_url" },
];

export default function About() {
    const section = useRef(null);
    useGSAP(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.fromTo("[data-word]", { opacity: 0.2 }, {
            opacity: 1, stagger: 0.04, ease: "none",
            scrollTrigger: { trigger: "[data-story]", start: "top 85%", end: "bottom 55%", scrub: true },
        });
    }, { scope: section });
    return (
        <section id="about" ref={section} className="personal-section section-shell">
            <div className="about-layout">
                <div><h2 className="section-heading">A little<br />about me.</h2></div>
                <div>
                    <p data-story className="personal-story">
                        {statement.split(" ").map((word, index) => <span data-word className="inline-block" key={index}>{word}&nbsp;</span>)}
                    </p>
                    <div className="about-copy">
                        <p>I wrote my first game in high school, got way too excited when it worked, and decided to study computer science. That curiosity has taken me from web apps to release tooling, cloud infrastructure, and a Bluetooth rehabilitation glove.</p>
                        <p>I’m working toward my BSc at Simon Fraser University, graduating in September 2027. Outside internships, I build with SFU Blueprint, helping bring useful software to community organizations.</p>
                    </div>
                    <div className="toolbox">
                        <h3>Things I work with</h3>
                        <p>Go · TypeScript · Java · C# · Python · React · Next.js · PostgreSQL · AWS · Azure · Kubernetes · Terraform · Docker</p>
                    </div>
                    <div className="credential-grid">
                        {certifications.map((cert) => (
                            <a key={cert.title} href={cert.href} target="_blank" rel="noopener noreferrer" className="credential group">
                                <Image src={getAssetPath(cert.image)} alt={cert.title + " certification badge"} width={168} height={88} className="credential-image transition-transform duration-700 ease-out group-hover:scale-105" />
                                <div><h3>{cert.title}</h3><p>{cert.issuer}</p></div>
                                <ArrowUpRight size={18} className="shrink-0 text-[var(--accent)]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
