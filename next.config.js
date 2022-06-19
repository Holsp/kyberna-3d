/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.imgur.com','localhost','s3.amazonaws.com','kyberna-three-dee.s3.eu-central-1.amazonaws.com'],
  },
}

module.exports = nextConfig
