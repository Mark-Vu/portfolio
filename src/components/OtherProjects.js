"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    getSectionClasses,
    getContainerClasses,
    FONT_SIZES,
} from "../config/layout";
import Badge from "./Badge";

export default function OtherProjects() {
    const otherProjectsData = [
        {
            title: "Algorithm Visualizer",
            description:
                "An algorithm visualizing app built in Pygame during my first year when I thought sorting algorithms were the coolest thing.",
            technologies: ["Python", "Pygame"],
            image: "/projects/sorting-algo-visualizer.png",
            links: {
                github: "https://github.com/Mark-Vu/Algorithm-Visualizer",
            },
        },
        {
            title: "Puzzle Slider",
            description:
                "A Java Swing puzzle solver that can solve 15-puzzle problems. Features A*, BFS, and DFS algorithms because why choose one when you can have all three and confuse yourself even more.",
            technologies: [
                "Java",
                "Java Swing",
                "A* Algorithm",
                "BFS",
                "DFS",
                "MongoDB",
            ],
            image: "/projects/puzzle-slider.png",
            links: {
                github: "https://github.com/Mark-Vu/PuzzleSlider",
            },
        },
        {
            title: "Pomoly",
            description:
                "A task management app with Pomodoro timer, notes, and calendar functionality built to help me stay organized. Ironically, I spent more time building the app than actually using it to manage my tasks, but at least my procrastination was productive.",
            technologies: [
                "Python",
                "Flask",
                "React.js",
                "JavaScript",
                "PostgreSQL",
            ],
            image: "/projects/pomoly.png",
            links: {
                github: "https://github.com/Mark-Vu/Pomoly",
                website: "https://pomoly.vercel.app/",
            },
        },
    ];

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
            },
        }),
    };

    return (
        <section id="other-projects" className={getSectionClasses("projects")}>
            <div className={getContainerClasses("projects")}>
                {/* Section Heading */}
                <motion.div
                    className="mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.175 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`${FONT_SIZES.sectionTitle} font-black`}>
                        Other Projects
                    </h2>
                    <p
                        className={`${FONT_SIZES.bodyMedium} text-gray-600 mt-4`}
                    >
                        Additional projects and contributions I&apos;ve worked
                        on.
                    </p>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-black to-gray-400 mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {otherProjectsData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                            className="flex flex-col rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Project Image */}
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={project.title}
                                className="overflow-hidden rounded-lg mb-4"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={240}
                                    width={240}
                                    className="rounded-lg transition-transform hover:scale-105 w-full h-60 object-cover"
                                />
                            </a>

                            {/* Project Content */}
                            <div className="flex-1 flex flex-col">
                                <h3
                                    className={`${FONT_SIZES.contentTitle} font-bold mb-3`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`${FONT_SIZES.bodyMedium} text-gray-600 mb-4 flex-1`}
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            text={tech}
                                            variant="outline"
                                        />
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {project.links.website && (
                                        <a
                                            href={project.links.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
