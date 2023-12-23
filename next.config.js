/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.126.83.194",
      },
      {
        protocol: "https",
        hostname: "13.126.83.194",
      },
      {
        protocol: "https",
        hostname: "alhn.dev",
      },
    ],
  },
};

module.exports = nextConfig;
