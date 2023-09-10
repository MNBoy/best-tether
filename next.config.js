/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_END_POINT: 'https://bot.cilab.tech/api/v1',
  },
};

module.exports = nextConfig;
