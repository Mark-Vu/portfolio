/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig = {
    output: "export",
    basePath,
    assetPrefix: basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
