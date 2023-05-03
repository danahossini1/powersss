require('dotenv-safe').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    API_KEY: process.env.API_KEY,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    JWT_KEY: process.env.JWT_KEY,
    ADMIN1: process.env.ADMIN1,
    ADMIN2: process.env.ADMIN2
  },
  reactStrictMode: true,
}

module.exports = nextConfig
