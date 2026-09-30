import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        name: "Algorithm Visualizer",
        detail: "Python and Pygame",
        href: "https://github.com/Mark-Vu/Algorithm-Visualizer",
    },
    {
        name: "Puzzle Slider",
        detail: "Java Swing, A*, BFS, and DFS",
        href: "https://github.com/Mark-Vu/PuzzleSlider",
    },
    {
        name: "Pomoly",
        detail: "Flask, React, and PostgreSQL",
        href: "https://github.com/Mark-Vu/Pomoly",
    },
];

export default function OtherProjects() {
    return (
        <section id="other-projects" className="pb-7 md:pb-9">
            <div className="section-shell">
                <div className="border-t border-black/20 pt-7">
                    <h2 className="text-2xl font-bold tracking-[-0.03em]">Other Projects</h2>
                    <div className="mt-5 border-t border-black/15">
                        {projects.map((project) => (
                            <a
                                key={project.name}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-8 border-b border-black/15 py-4"
                            >
                                <div>
                                    <h3 className="text-xl font-bold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                                        {project.name}
                                    </h3>
                                    <p className="mt-1 text-black/55">{project.detail}</p>
                                </div>
                                <ArrowUpRight className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
