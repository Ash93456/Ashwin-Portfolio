/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Allows exporting to static HTML or hosting on GitHub Pages / Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
