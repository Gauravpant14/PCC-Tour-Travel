/** @type {import('next').NextConfig} */
const nextConfig = {
  baseUrl: ".",
  paths: {
    "@components/*": ["components/*"],
    "@styles/*": ["styles/*"],
    // "@images/*": ["public/images/*"],
  },
  images: {
    domains: ["images.unsplash.com", "static.toiimg.com","images"],
  },
};

module.exports = nextConfig;
