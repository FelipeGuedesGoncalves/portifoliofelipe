import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                     // para gerar site estático
  reactCompiler: true,
  images: { unoptimized: true },        // se usar next/image
  basePath: process.env.NODE_ENV === "production" ? "/SEU-REPO" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/SEU-REPO/" : "",
  trailingSlash: true,                  // ajuda no GitHub Pages
};

export default nextConfig;
