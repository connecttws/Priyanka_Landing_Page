import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: [
    "192.168.29.211",
    "192.168.29.*",
    "192.168.*",
    "localhost",
  ],
};

export default nextConfig;
