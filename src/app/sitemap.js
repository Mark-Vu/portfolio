export const dynamic = "force-static";

export default function sitemap() {
    return [
        {
            url: "https://mark-vu.github.io/portfolio/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
