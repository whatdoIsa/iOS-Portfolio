/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/iOS-Portfolio' : '',
  assetPrefix: isProd ? '/iOS-Portfolio/' : '',
};

module.exports = nextConfig;
