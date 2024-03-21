/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    typescript: {
      ignoreBuildErrors: true,
    },
    domains: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
