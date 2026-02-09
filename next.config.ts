import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    { source: '/how', destination: '/', permanent: false },
    { source: '/pilot', destination: '/', permanent: false },
    { source: '/about', destination: '/', permanent: false },
  ],
};

export default nextConfig;
