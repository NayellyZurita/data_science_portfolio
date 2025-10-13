/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: undefined,
  },
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
