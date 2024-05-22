/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "example.com",
      "https://nextjs.org/",
      "encrypted-tbn0.gstatic.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },

      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
};

export default nextConfig;
