/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lai.iside.space',
            },
            {
                protocol: 'http',
                hostname: '49.213.238.75',
            },
        ],
    },
};

export default nextConfig;
