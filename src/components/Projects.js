"use client";

import Image from "next/image";
import {
    getSectionClasses,
    getContainerClasses,
    LAYOUT_CONFIG,
    FONT_SIZES,
} from "../config/layout";
import Badge from "./Badge";
import { motion } from "framer-motion";
import { getAssetPath } from "../utils/paths";

export default function Projects() {
    const projects = [
        {
            title: "Fino",
            subtitle: "Financial Tools Platform",
            description:
                "Solo developed a financial tools platform that processes 100+ PDF statements/receipts each week into CSVs, adopted by a former KPMG team and a medium-sized manufacturer. My parents still ask me to explain what it does every time they see it running.",
            image: "/projects/fino.png",
            technologies: [
                "ASP.NET",
                "Next.js",
                "TypeScript",
                "C#",
                "AWS S3",
                "AWS SQS",
                "AWS EC2",
                "AWS Textract",
                "PostgreSQL",
                "Terraform",
                "Docker",
            ],
            githubLink: "https://github.com/Mark-Vu/fino-backend",
            websiteLink: "https://finotools.app/",
        },
        {
            title: "WhatYaSay",
            subtitle: "NwHacks 2024",
            description:
                "Developed a real-time transcription web app at NwHacks 2024 that turns your rambling thoughts into organized notes using GPT-4. Perfect for lectures where professors speak faster than I can type, which is unfortunately most of them",
            image: null,
            whyNoImageText: "Screenshots coming soon (I promise it worked)",
            technologies: [
                "Python",
                "FastAPI",
                "Google Cloud API",
                "OpenAI API",
                "WebSocket",
                "Next.js",
            ],
            githubLink: "https://github.com/thedarianwong/WhatYaSay",
        },
        {
            title: "FIC-Check",
            subtitle: "Attendance Management System",
            description:
                "Developed an attendance management app for Fraser International College. Features real-time WebSocket attendance taking, because apparently raising your hand takes too much effort. Built with Java Spring Boot and Clean Architecture",
            image: "/projects/fic-check.png",
            technologies: [
                "Java Spring Boot",
                "PostgreSQL",
                "WebSockets",
                "JavaScript",
                "HTML",
                "CSS",
                "Clean Architecture",
            ],
            githubLink: "https://github.com/Thachsaudoi/FIC-Check",
        },
        {
            title: "JobHub",
            subtitle: "Job Search Platform",
            description:
                "Built a job search platform with Python microservices on AWS Lambda because apparently finding a job wasn't hard enough already.",
            image: "/projects/jobhub.png",
            technologies: [
                "Python",
                "AWS S3",
                "AWS ECS",
                "AWS Lambda",
                "AWS API Gateway",
                "AWS Glue",
                "React",
                "TypeScript",
                "Docker",
            ],
            githubLink: "https://github.com/jobless-devs/Jobhub",
        },
    ];

    return (
        <section id="projects" className={getSectionClasses("projects")}>
            <div className={getContainerClasses("projects")}>
                {/* Section title on its own line */}
                <motion.div
                    className="mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className={`${FONT_SIZES.sectionTitle} font-black`}>
                        Projects
                    </h2>
                    <motion.div
                        className="w-28 h-1 bg-gradient-to-r from-black to-gray-400 mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 112 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                {/* Projects list below */}
                <div className="space-y-16 lg:space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                                index < projects.length - 1
                                    ? "pb-16 lg:pb-20 border-b border-gray-200"
                                    : ""
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                        >
                            {/* Project text content on the left */}
                            <div className="flex-1 lg:flex-[2] space-y-6">
                                <div className="flex items-start gap-6">
                                    <span
                                        className={`${FONT_SIZES.contentTitle} font-bold text-gray-400 mt-1`}
                                    >
                                        ({String(index + 1).padStart(2, "0")})
                                    </span>
                                    <div className="flex-1">
                                        <h3
                                            className={`${FONT_SIZES.contentTitle} font-bold mb-2`}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className={`${FONT_SIZES.bodyMedium} text-gray-700 mb-6 leading-relaxed`}
                                        >
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech}
                                                        text={tech}
                                                        variant="filled"
                                                    />
                                                )
                                            )}
                                        </div>

                                        {/* Project Links */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </a>
                                            {project.websiteLink && (
                                                <a
                                                    href={project.websiteLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
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
                                </div>
                            </div>

                            {/* Project Image on the right */}
                            <div className="flex-1">
                                <div
                                    className={`relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] ${
                                        project.image ? "shadow-lg" : ""
                                    }`}
                                >
                                    {!project.image ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="relative">
                                                <Image
                                                    src={getAssetPath(
                                                        "/bitmoji-hehe.png"
                                                    )}
                                                    alt="Disappointed bitmoji"
                                                    width={150}
                                                    height={150}
                                                    className="object-contain"
                                                />
                                                {project.whyNoImageText && (
                                                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center w-70">
                                                        <p className="text-black text-xl font-medium px-3">
                                                            {
                                                                project.whyNoImageText
                                                            }
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <Image
                                            src={getAssetPath(project.image)}
                                            alt={`${project.title} screenshot`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
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
