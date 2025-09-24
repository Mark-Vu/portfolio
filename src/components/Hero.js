"use client";

import {
    getSectionClasses,
    getContainerClasses,
    FONT_SIZES,
} from "../config/layout";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);

    return (
        <section className={getSectionClasses("hero")}>
            <div className={getContainerClasses("hero")}>
                {/* First flex: MARK | bitmoji | VU */}
                <motion.div
                    className="flex items-end justify-between"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className={`text-black font-black leading-none ${FONT_SIZES.heroName}`}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        MARK
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center justify-end pb-9"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.div
                            className="w-60"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src="/bitmoji-smile-thumbs-up.png"
                                alt="Mark's Bitmoji"
                                width={256}
                                height={256}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                    <motion.h1
                        className={`text-black font-black leading-none ${FONT_SIZES.heroName}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        VU
                    </motion.h1>
                </motion.div>

                {/* Second flex: SFU CS Student | Software Engineer */}
                <motion.div
                    className={`flex justify-between ${FONT_SIZES.heroSubtitle} text-gray-700`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        SFU CS Student
                    </motion.div>
                    <motion.div
                        key={currentRole}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="font-medium"
                    >
                        Software Engineer
                    </motion.div>
                </motion.div>

                {/* Third flex: Bio | Social Icons */}
                <motion.div
                    className="mt-16 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.p
                        className={`${FONT_SIZES.heroBio} text-gray-800 leading-snug lg:max-w-2xl`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 1.4 }}
                    >
                        Third-year CS student at Simon Fraser University
                        passionate about building full-stack applications and
                        automating the boring stuff. Always looking for
                        opportunities to learn, grow, and write code that works
                        on the first try (occasionally).
                    </motion.p>
                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        {[
                            {
                                href: "https://github.com/Mark-Vu",
                                label: "GitHub",
                                icon: Github,
                            },
                            {
                                href: "https://www.linkedin.com/in/markvu03",
                                label: "LinkedIn",
                                icon: Linkedin,
                            },
                            {
                                href: "mailto:mdv2@sfu.ca",
                                label: "Email",
                                icon: Mail,
                            },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={
                                    social.label !== "Email"
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    social.label !== "Email"
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={social.label}
                                className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 1.8 + index * 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
