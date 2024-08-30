/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/:x*",
        destination: "https://anirudha.pro",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
