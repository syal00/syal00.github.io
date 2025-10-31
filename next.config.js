/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // For static export (if needed for GitHub Pages)
  // output: 'export',
  // trailingSlash: true,
};

module.exports = nextConfig;
