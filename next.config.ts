import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    // /products has no index page; send it to the first product.
    return [
      {
        source: "/products",
        destination: "/products/appraiser",
        permanent: false,
      },
    ];
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
