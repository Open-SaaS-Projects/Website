/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  output: "standalone",
  webpack: (config, { isServer }) => {
    // Suppress webpack cache serialization warnings
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

export default nextConfig;
