import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <--- Crucial: Turns your app into static HTML files
  images: {
    unoptimized: true, // <--- Crucial: Required because there is no server to process images
  },
};

export default nextConfig;
