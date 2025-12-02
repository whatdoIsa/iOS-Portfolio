/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/iOS-Portfolio',
  assetPrefix: '/iOS-Portfolio/',
};

module.exports = nextConfig;
