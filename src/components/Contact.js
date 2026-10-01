import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "../utils/paths";

export default function Contact() {
    return (
        <section id="contact" className="personal-section section-shell">
            <div className="contact-layout">
                <div>
                    <h2 className="section-heading">Have something<br /><span className="marker-highlight">in mind?</span></h2>
                    <p className="contact-copy">A role, a project, or just a good conversation.<br />I’d love to hear from you.</p>
                    <a className="email-link" href="mailto:mdv2@sfu.ca">mdv2@sfu.ca <ArrowUpRight /></a>
                    <div className="mt-5 flex gap-7">
                        <a className="text-link" href="https://github.com/Mark-Vu" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
                        <a className="text-link" href="https://www.linkedin.com/in/markvu03" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
                    </div>
                </div>
                <div className="contact-portrait group">
                    <Image src={getAssetPath("/bitmoji-thumbs-up.png")} alt="Mark's illustrated avatar giving a thumbs up" width={408} height={612} className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105" />
                    <p>Thanks for stopping by.</p>
                </div>
            </div>
        </section>
    );
}
