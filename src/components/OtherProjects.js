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
        <section id="other-projects" className="pb-8 md:pb-12">
            <div className="section-shell">
                <div className="border-t border-black/20 pt-10">
                    <h2 className="text-2xl font-bold tracking-[-0.03em]">Other Projects</h2>
                    <div className="mt-8 border-t border-black/15">
                        {projects.map((project) => (
                            <a
                                key={project.name}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-8 border-b border-black/15 py-7"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
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
