/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lai.iside.space',
            },
            {
                protocol: 'https',
                hostname: 'lai.api.iside.space',
            },
        ],
    },
};

export default nextConfig;
