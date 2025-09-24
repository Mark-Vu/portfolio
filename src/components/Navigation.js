"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FONT_SIZES } from "../config/layout";
import Image from "next/image";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const links = [
        { name: "About", hash: "#about" },
        { name: "Work", hash: "#work" },
        { name: "Projects", hash: "#projects" },
        { name: "Contact", hash: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-5 z-50 my-5 flex items-center justify-between sm:top-10 sm:my-10 sm:mx-auto sm:max-w-2xl sm:rounded-full sm:border sm:border-gray-200 sm:bg-white/80 px-6 sm:py-4 sm:backdrop-blur-sm"
        >
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 backdrop-blur-sm sm:hidden"
            >
                <span className={FONT_SIZES.navLinks}>Menu</span>
                {isOpen ? (
                    <X className="size-4" />
                ) : (
                    <Menu className="size-4" />
                )}
            </button>

            {/* Brand */}
            <div className={`${FONT_SIZES.navBrand} font-black sm:hidden`}>
                m.v © 2025{" "}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex sm:w-full sm:justify-between sm:items-center">
                <div
                    className={`${FONT_SIZES.navBrand} font-black flex  gap-2`}
                >
                    M.Vu © 2025{" "}
                </div>
                <ul className="flex gap-1">
                    {links.map(({ name, hash }) => (
                        <li key={name}>
                            <a
                                href={hash}
                                className={`relative px-4 py-2 transition-colors hover:text-gray-600 ${FONT_SIZES.navLinks} font-medium`}
                                onClick={() => setActiveSection(name)}
                            >
                                {name}
                                {name === activeSection && (
                                    <motion.span
                                        className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 right-0 mx-4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg sm:hidden"
                >
                    <nav>
                        <ul className="space-y-2">
                            {links.map(({ name, hash }) => (
                                <li key={name}>
                                    <a
                                        href={hash}
                                        className={`block py-3 px-4 rounded-lg transition-colors hover:bg-gray-50 ${FONT_SIZES.navLinks} font-medium`}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setActiveSection(name);
                                        }}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}
