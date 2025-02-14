/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gqkxxmoklignzqbjofsz.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
