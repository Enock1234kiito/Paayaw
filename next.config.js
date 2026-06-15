/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Allow event photo uploads (default is 1mb) through Server Actions.
    serverActions: {
      bodySizeLimit: '8mb',
    },
  },
}

module.exports = nextConfig
