/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactCompiler: true,
  images: { unoptimized: true },

  basePath: process.env.NODE_ENV === "production" ? "/portifoliofelipe" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portifoliofelipe/" : "",

  trailingSlash: true,
};

export default nextConfig;
