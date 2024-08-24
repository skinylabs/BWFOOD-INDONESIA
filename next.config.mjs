/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-cgk1-2.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent-**.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
