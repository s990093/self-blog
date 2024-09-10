/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lai.iside.space',
            },
        ],
    },
};

export default nextConfig;
