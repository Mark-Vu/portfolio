"use client";

import {
    getSectionClasses,
    getContainerClasses,
    LAYOUT_CONFIG,
    FONT_SIZES,
} from "../config/layout";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className={getSectionClasses("about")}>
            <div className={getContainerClasses("about")}>
                <motion.div
                    className={`flex flex-col lg:flex-row ${LAYOUT_CONFIG.spacing.sectionGap}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className={`${FONT_SIZES.sectionTitle} font-black`}>
                            About Me
                        </h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-black to-gray-400 mt-4"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>
                    <motion.div
                        className={`lg:w-2/3 space-y-8 ${FONT_SIZES.bodyMedium} leading-relaxed text-gray-800`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p
                            className={`${FONT_SIZES.contentTitle} font-bold text-black`}
                        >
                            I&apos;m a CS student at SFU who somehow convinced
                            others to let me write code for money.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
