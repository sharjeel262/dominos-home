// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thoughtful-desire-39b287e155.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thoughtful-desire-39b287e155.strapiapp.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // Enable static optimization
  output: 'standalone',
  // Enable image optimization
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
