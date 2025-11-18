/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactCompiler: true,
  images: { unoptimized: true },

  basePath: "/portifoliofelipe",
  assetPrefix: "/portifoliofelipe",
  trailingSlash: true,
};

export default nextConfig;
