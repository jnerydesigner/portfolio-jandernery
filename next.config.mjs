/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "sa-east-1.graphassets.com",
        pathname: "**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
