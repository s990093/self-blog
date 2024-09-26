// eslint-disable-next-line @typescript-eslint/no-var-requires
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
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
});

export default nextConfig;
