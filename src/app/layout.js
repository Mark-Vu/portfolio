import localFont from "next/font/local";
import "./globals.css";

const siteUrl = "https://mark-vu.github.io/portfolio/";

const cabinet = localFont({
    src: [
        { path: "../../public/fonts/cabinet-grotesk-regular.woff2", weight: "400" },
        { path: "../../public/fonts/cabinet-grotesk-medium.woff2", weight: "500" },
        { path: "../../public/fonts/cabinet-grotesk-bold.woff2", weight: "700" },
        { path: "../../public/fonts/cabinet-grotesk-extrabold.woff2", weight: "800" },
        { path: "../../public/fonts/cabinet-grotesk-black.woff2", weight: "900" },
    ],
    variable: "--font-cabinet",
    display: "swap",
});

export const metadata = {
    metadataBase: new URL("https://mark-vu.github.io"),
    title: "Mark Vu | Software Engineer in Vancouver",
    description:
        "Mark Vu is a Vancouver software engineer and SFU computer science student building reliable backend systems, developer tooling, and cloud products.",
    keywords: [
        "Mark Vu",
        "software engineer Vancouver",
        "SFU computer science",
        "backend engineer",
        "cloud engineer",
        "DevOps engineer",
    ],
    authors: [{ name: "Mark Vu", url: siteUrl }],
    creator: "Mark Vu",
    alternates: { canonical: siteUrl },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Mark Vu | Software Engineer in Vancouver",
        description:
            "Backend systems, developer tooling, cloud infrastructure, and products built by Mark Vu.",
        siteName: "Mark Vu Portfolio",
        images: [
            {
                url: "/portfolio/projects/fino.png",
                width: 1200,
                height: 630,
                alt: "Selected software engineering work by Mark Vu",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mark Vu | Software Engineer in Vancouver",
        description:
            "Backend systems, developer tooling, cloud infrastructure, and products built by Mark Vu.",
        images: ["/portfolio/projects/fino.png"],
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={cabinet.variable}>{children}</body>
        </html>
    );
}
