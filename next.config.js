/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fahad9993.github.io',
          port: '',
          pathname: '/cv-new/assets/img/**',
        },
      ],
    },
  }
