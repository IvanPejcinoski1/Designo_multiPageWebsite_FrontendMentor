import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's strict mode
  sassOptions: {
    // Use Dart Sass explicitly
    implementation: require("sass"),
  },
};

export default nextConfig;
