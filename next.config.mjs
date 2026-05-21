/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  ...(isGithubPages
    ? {
        basePath: "/retailer",
        assetPrefix: "/retailer/"
      }
    : {})
};

export default nextConfig;
