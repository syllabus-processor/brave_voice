/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:5000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'dev-secret-key',
  },
}

module.exports = nextConfig