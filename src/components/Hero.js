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
        <section id="top" ref={section} className="personal-hero section-shell">
            <div className="hero-atmosphere" aria-hidden="true"><span /><span /></div>
            <div data-intro className="hero-kicker">
                <span>Software engineer & CS student</span>
                <span>Vancouver, BC</span>
            </div>
            <div className="name-composition">
                <h1 data-intro className="personal-name w-full max-w-6xl">Mark Vu<span className="name-period text-[var(--accent)]">.</span></h1>
                <svg className="name-underline" viewBox="0 0 600 34" fill="none" aria-hidden="true"><path pathLength="1" d="M5 24C140 3 360 2 592 17" /></svg>
                <div data-portrait className="hero-portrait group">
                    <div className="portrait-circle" />
                    <div className="portrait-orbit" aria-hidden="true" />
                    <Image src={getAssetPath("/bitmoji-smile-thumbs-up.png")} alt="Mark's illustrated avatar, smiling and giving a thumbs up" width={408} height={612} priority className="relative h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105" />
                    <span className="portrait-caption">Hey, that’s me.</span>
                </div>
            </div>
            <div data-intro className="hero-bottom">
                <p className="hero-introduction">Hi, I’m Mark. I study computer science at SFU and build software that makes someone’s day a little easier.</p>
                <div className="hero-aside">
                    <p>Recently at <strong>1Password</strong>.<br />Previously at Trulioo & FPT Software.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                        <a className="text-link" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
                        <a className="text-link" href="mailto:mdv2@sfu.ca">Say hello <ArrowUpRight size={18} /></a>
                    </div>
                    <div className="flex gap-5">
                        <a href="https://github.com/Mark-Vu" target="_blank" rel="noopener noreferrer" aria-label="Mark on GitHub" className="social-link"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/markvu03" target="_blank" rel="noopener noreferrer" aria-label="Mark on LinkedIn" className="social-link"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
