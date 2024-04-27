/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/originals/**/**',
      },
      {
        protocol: 'https',
        hostname: 'image.api.playstation.com',
        port: '',
        // pathname: '/originals/**/**',
      },
      {
        protocol: 'https',
        hostname: 'images6.alphacoders.com',
        port: '',
        // pathname: '/originals/**/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.xboxservices.com',
        port: '',
        // pathname: '/originals/**/**',
      },
      {
        protocol: 'https',
        hostname: 'store-images.s-microsoft.com',
        port: '',
        // pathname: '/originals/**/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        // pathname: '/originals/**/**',
      }
    ],
  },
};

export default nextConfig;