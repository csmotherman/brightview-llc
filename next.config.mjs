/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old "Our Work" URL now lives at /gallery; keep old links and bookmarks working.
  async redirects() {
    return [{ source: "/our-work", destination: "/gallery", permanent: true }];
  },
  images: {
    // Smaller modern formats for the large project photographs.
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
