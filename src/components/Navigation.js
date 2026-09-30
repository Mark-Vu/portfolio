"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { name: "About", hash: "#about" },
    { name: "Work", hash: "#work" },
    { name: "Projects", hash: "#projects" },
    { name: "Contact", hash: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="personal-navigation">
            <div className="section-shell flex items-center justify-between py-3.5">
                <a
                    href="#top"
                    className="text-lg font-black tracking-[-0.04em]"
                    aria-label="Back to the top"
                >
                    M.Vu © 2025
                </a>

                <nav className="hidden sm:block" aria-label="Primary navigation">
                    <ul className="flex items-center gap-1">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.hash}
                                    className="block rounded-full px-4 py-2 text-sm font-medium text-black/65 transition-colors hover:bg-black/5 hover:text-[var(--accent)]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    type="button"
                    className="flex size-10 items-center justify-center rounded-full bg-white text-black sm:hidden"
                    onClick={() => setIsOpen((value) => !value)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? "Close navigation" : "Open navigation"}
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {isOpen && (
                <nav
                    id="mobile-navigation"
                    className="mx-5 mb-4 rounded-xl border border-black/10 bg-white p-3 sm:hidden"
                    aria-label="Mobile navigation"
                >
                    <ul className="grid gap-1">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.hash}
                                    className="block rounded-xl px-4 py-3 text-lg font-bold hover:bg-[#f4f2ed]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
