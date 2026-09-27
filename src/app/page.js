import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Projects from "../components/Projects";
import OtherProjects from "../components/OtherProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PortfolioMotion from "../components/PortfolioMotion";

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Vu",
    url: "https://mark-vu.github.io/portfolio/",
    email: "mailto:mdv2@sfu.ca",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        addressCountry: "CA",
    },
    affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Simon Fraser University",
    },
    sameAs: [
        "https://github.com/Mark-Vu",
        "https://www.linkedin.com/in/markvu03",
    ],
    jobTitle: "Software Engineer",
    knowsAbout: [
        "Go",
        "TypeScript",
        "Java",
        "AWS",
        "Kubernetes",
        "Terraform",
        "CI/CD",
    ],
};

export default function Home() {
    return (
        <main className="w-full max-w-full overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <PortfolioMotion>
            <Navigation />
            <div className="intro-surface">
                <Hero />
                <div className="chapter-surface chapter-about">
                    <About />
                </div>
            </div>
            <div className="chapter-surface chapter-work">
                <Work />
            </div>
            <div className="chapter-surface chapter-projects">
                <Projects />
                <OtherProjects />
            </div>
            <div className="chapter-surface chapter-contact">
                <Contact />
                <Footer />
            </div>
            </PortfolioMotion>
        </main>
    );
}
