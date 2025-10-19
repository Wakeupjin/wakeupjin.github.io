/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/wakeupjin.github.io',
  basePath: '/wakeupjin.github.io'
}

module.exports = nextConfig
