/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      destination: "https://opentdb.com/:path*", // Proxy to Backend
      source: "/api/:path*",
    },
  ],
};

module.exports = nextConfig;
