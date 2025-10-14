/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true,
    domains: ['drive.google.com'],
   },
};

module.exports = nextConfig;
