"use client";

import {
    getSectionClasses,
    getContainerClasses,
    FONT_SIZES,
} from "../config/layout";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className={getSectionClasses("contact")}>
            <div className={getContainerClasses("contact")}>
                <motion.div
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Left side - Let's Connect */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className={`${FONT_SIZES.sectionTitle} font-black`}>
                            Let&apos;s Connect
                        </h2>
                        <motion.div
                            className="w-36 h-1 bg-gradient-to-r from-black to-gray-400 mt-4"
                            initial={{ width: 0 }}
                            whileInView={{ width: 144 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>

                    {/* Right side - Social Icons */}
                    <motion.div
                        className="lg:w-2/3 flex justify-center lg:justify-start items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div
                            className="flex gap-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
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
                                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.8 + index * 0.1,
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
                                    <social.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
