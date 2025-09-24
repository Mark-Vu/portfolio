import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Projects from "../components/Projects";
import OtherProjects from "../components/OtherProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="bg-white min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Work />
            <Projects />
            <OtherProjects />
            <Contact />
            <Footer />
        </main>
    );
}
