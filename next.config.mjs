/** @type {import('next').NextConfig} */
const nextConfig = {
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
