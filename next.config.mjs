/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pskwihdbzhlxchuwxken.supabase.co",
        port: "",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
