"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PortfolioMotion({ children }) {
    const root = useRef(null);

    useGSAP(() => {
        const media = gsap.matchMedia();
        media.add("(prefers-reduced-motion: no-preference)", () => {
            const select = gsap.utils.selector(root);
            gsap.to(select(".reading-progress"), {
                scaleX: 1,
                ease: "none",
                scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
            });
            select(".section-heading").forEach((heading) => {
                gsap.from(heading, {
                    y: 32, opacity: 0, duration: 0.85, ease: "power3.out",
                    scrollTrigger: { trigger: heading, start: "top 94%", once: true },
                });
            });
            select(".personal-project, .credential, #work article, .contact-copy, .email-link").forEach((item) => {
                gsap.from(item, {
                    y: 35, opacity: 0, duration: 0.85, ease: "power3.out",
                    scrollTrigger: { trigger: item, start: "top 96%", once: true },
                });
            });
            select(".project-image").forEach((image) => {
                gsap.from(image, {
                    scale: 0.95, duration: 1.1, ease: "power3.out",
                    scrollTrigger: { trigger: image, start: "top 95%", once: true },
                });
            });
        });

        media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
            const cleanups = [];
            root.current.querySelectorAll(".project-image").forEach((card) => {
                const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power2.out" });
                const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power2.out" });
                gsap.set(card, { transformPerspective: 1100 });
                const move = (event) => {
                    const bounds = card.getBoundingClientRect();
                    rotateX(((event.clientY - bounds.top) / bounds.height - 0.5) * -5);
                    rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
                };
                const leave = () => { rotateX(0); rotateY(0); };
                card.addEventListener("pointermove", move);
                card.addEventListener("pointerleave", leave);
                cleanups.push(() => {
                    card.removeEventListener("pointermove", move);
                    card.removeEventListener("pointerleave", leave);
                });
            });
            return () => cleanups.forEach((cleanup) => cleanup());
        });
        return () => media.revert();
    }, { scope: root });

    return (
        <div ref={root}>
            <div className="reading-progress" aria-hidden="true" />
            {children}
        </div>
    );
}
