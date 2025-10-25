/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true,
    domains: ['drive.google.com'
      ,'raw.githubusercontent.com'
    ],
   },
   experimental: {
    serverMinification: false
  },
};

module.exports = nextConfig;
