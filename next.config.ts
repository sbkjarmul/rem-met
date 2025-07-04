import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/o-nas",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/polityka-prywatnosci",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
