/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    secret: process.env.secret,
  },
}

module.exports = nextConfig
