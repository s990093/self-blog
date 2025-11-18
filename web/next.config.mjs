/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_ENV === "production" ? "/self-blog" : "", // 根據模式設置 basePath
    assetPrefix: process.env.NEXT_PUBLIC_ENV === "production" ? "/self-blog/" : "/", // 根據模式設置 assetPrefix
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;