"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getAssetPath } from "../utils/paths";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const section = useRef(null);
    useGSAP(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.from("[data-intro]", { y: 28, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out" });
        gsap.from("[data-portrait]", { rotate: -7, y: 35, duration: 1.2, ease: "power3.out" });
        gsap.from(".name-underline path", { strokeDashoffset: 1, duration: 1.25, delay: 0.55, ease: "power2.inOut" });
    }, { scope: section });

    return (
        <section id="top" ref={section} className="personal-hero">
            <div className="hero-atmosphere" aria-hidden="true"><span /><span /></div>
            <div className="section-shell">
            <div data-intro className="hero-kicker">
                <span>Software engineer & CS student</span>
                <span>Vancouver, BC</span>
            </div>
            <div className="name-composition">
                <h1 data-intro className="personal-name w-full">Mark Vu<span className="name-period text-[var(--accent)]">.</span></h1>
                <svg className="name-underline" viewBox="0 0 600 34" fill="none" aria-hidden="true"><path pathLength="1" d="M5 24C140 3 360 2 592 17" /></svg>
                <div data-portrait className="hero-portrait group">
                    <div className="portrait-circle" />
                    <div className="portrait-orbit" aria-hidden="true" />
                    <Image src={getAssetPath("/bitmoji-smile-thumbs-up.png")} alt="Mark's illustrated avatar, smiling and giving a thumbs up" width={408} height={612} priority className="relative h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105" />
                    <span className="portrait-caption">Hey, that’s me.</span>
                </div>
            </div>
            <div data-intro className="hero-bottom">
                <div className="hero-introduction">
                    <p className="intro-greeting">Hi, I’m Mark!</p>
                    <p className="intro-role">I build automation tools and cloud infrastructure.</p>
                    <p className="intro-experience">
                        Previously at <mark className="company-highlight company-onepassword">1Password</mark>
                        {" & "}
                        <mark className="company-highlight company-trulioo">Trulioo</mark>.
                    </p>
                </div>
                <div className="hero-aside">
                    <div className="hero-actions flex flex-wrap items-center gap-x-6 gap-y-4">
                        <a className="text-link" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
                        <a className="text-link" href="mailto:mdv2@sfu.ca">
                            <span className="flex flex-col gap-1">
                                <span>Say hello</span>
                                <span className="text-sm font-normal text-[var(--muted)]">mdv2@sfu.ca</span>
                            </span>
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                    <div className="flex gap-5">
                        <a href="https://github.com/Mark-Vu" target="_blank" rel="noopener noreferrer" aria-label="Mark on GitHub" className="social-link"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/markvu03" target="_blank" rel="noopener noreferrer" aria-label="Mark on LinkedIn" className="social-link"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
