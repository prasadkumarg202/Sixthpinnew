import type { NextConfig } from "next";

const isExport = process.env.CLOUDFLARE_BUILD === "true" || process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isExport
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
