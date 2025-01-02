import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rappel.conso.gouv.fr",
        port: "",
        pathname: "/image/**",
        search: "",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
