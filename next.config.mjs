/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/portfolio',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
