"use client";

import {
    getSectionClasses,
    getContainerClasses,
    LAYOUT_CONFIG,
    FONT_SIZES,
} from "../config/layout";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Badge from "./Badge";
import { motion } from "framer-motion";

export default function Work() {
    const workExperience = [
        {
            title: "Software Engineer Co-op (QA Automation)",
            company: "Trulioo",
            period: "Jan 2025 - Aug 2025",
            description: [
                "Engineered and refactored an internal testing npm package and Cypress automation tests, enabling 20+ engineers across 3 QA teams to accelerate automation development",
                "Built and migrated end-to-end tests from Postman to Cypress across 3 core products, boosting coverage to 95% and saving $6,600 annually in licensing costs",
                "Developed and maintained GitLab CI/CD pipelines for 2 customer portal features, orchestrating 1,000+ automated jobs weekly",
                "Resolved critical pipeline bottlenecks by troubleshooting flaky tests, reducing average daily failures from 7 to 2 and improving release velocity",
                "Mastered the office coffee machine and became a caffeine addict",
            ],
            tags: [
                "JavaScript",
                "TypeScript",
                "Cypress",
                "Postman",
                "GitLab CI/CD",
                "npm",
                "QA Automation",
                "End-to-End Testing",
            ],
            logo: "/trulioo_logo.jpeg",
        },
        {
            title: "Software Engineer Intern (Full-Stack Developer)",
            company: "FPT Software",
            period: "May 2024 - Sep 2024",
            description: [
                "Led a team of 4 interns to extend and launch an AI presentation generator, delivering production-ready slides for multiple business partners monthly",
                "Designed and implemented a Python slide context generation service from scratch, building the full flow from API Gateway through Message Queue to GPT-4 powered Azure Function",
                "Enhanced an open-source database drawing tool using ReactJS and IndexedDB, adopted by 4 teams (50+ engineers) to streamline database design workflows",
                "Developed RESTful endpoints in Java Spring Boot and built a frontend dashboard for food ordering tools with 1,000+ restaurants",
            ],
            tags: [
                "React",
                "TypeScript",
                "Python",
                "Java",
                "Spring Boot",
                "Azure Functions",
                "Message Queue",
                "IndexedDB",
                "RESTful APIs",
            ],
            logo: "/fpt_logo.png",
        },
    ];

    return (
        <section id="work" className={getSectionClasses("work")}>
            <div className={getContainerClasses("work")}>
                <motion.div
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Left side - Section title */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className={`${FONT_SIZES.sectionTitle} font-black`}>
                            Work Experience
                        </h2>
                        <motion.div
                            className="w-32 h-1 bg-gradient-to-r from-black to-gray-400 mt-4"
                            initial={{ width: 0 }}
                            whileInView={{ width: 128 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>

                    {/* Right side - Timeline */}
                    <motion.div
                        className="lg:w-2/3 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {workExperience.map((item, index) => (
                            <div
                                key={item.company}
                                className={`relative pl-8 ${
                                    index !== workExperience.length - 1
                                        ? "pb-12"
                                        : ""
                                }`}
                            >
                                {/* Timeline line and dot */}
                                <div className="absolute left-0 top-2.5 h-full w-[2px] bg-gray-300">
                                    <div className="absolute left-[-5px] top-0 size-3 rounded-full border-2 border-black bg-white" />
                                </div>

                                <div className="space-y-3">
                                    {/* Company name with icon */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-20 shrink-0 items-center justify-center rounded-md border border-gray-300 overflow-hidden">
                                            <Image
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                width={100}
                                                height={100}
                                                className="object-cover"
                                            />
                                        </div>
                                        <span
                                            className={`${FONT_SIZES.contentTitle} font-semibold`}
                                        >
                                            {item.company}
                                        </span>
                                    </div>

                                    {/* Job title and period */}
                                    <div>
                                        <h3
                                            className={`${FONT_SIZES.contentSubtitle} font-medium`}
                                        >
                                            {item.title}
                                        </h3>
                                        <div className="mt-1 flex items-center gap-2 text-md text-gray-600">
                                            <Calendar className="size-5 text-gray-400" />
                                            <span>{item.period}</span>
                                        </div>
                                    </div>

                                    {/* Description as bullet points */}
                                    <div className="space-y-2">
                                        {item.description.map(
                                            (point, pointIndex) => (
                                                <p
                                                    key={pointIndex}
                                                    className={`${FONT_SIZES.bodyMedium} text-gray-600 flex items-start`}
                                                >
                                                    <span className="text-gray-400 mr-2 mt-1 text-sm">
                                                        •
                                                    </span>
                                                    {point}
                                                </p>
                                            )
                                        )}
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tech) => (
                                            <Badge key={tech} text={tech} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
