/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resource.flomoapp.com',
        port: '',
        pathname: '/home/**',
      },
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/data/products/**/**',
      },
    ],
  },
}

module.exports = nextConfig
