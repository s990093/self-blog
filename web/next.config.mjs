// eslint-disable-next-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
const nextConfig = {
    enabled: process.env.ANALYZE === 'true',

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
    exportTrailingSlash: true,
};

export default nextConfig;
