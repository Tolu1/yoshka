/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false
    }
    return config
  },
  images: {
    domains: ['horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app', 'cdn.openart.ai'],
  },
}

module.exports = nextConfig
