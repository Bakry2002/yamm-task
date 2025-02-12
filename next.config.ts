import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    transpilePackages: ['geist'],
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
