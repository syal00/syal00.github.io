/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
      },
    ],
  },
  // For GitHub Pages root domain (syal00.github.io), basePath should be empty
  assetPrefix: '',
  basePath: '',
}

module.exports = nextConfig
