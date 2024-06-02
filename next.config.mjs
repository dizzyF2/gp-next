/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            },
            {
                protocol: 'https',
                hostname: 'v2.exercisedb.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'edamam-product-images.s3.amazonaws.com',
                port: '',
                },
        ],
    },
};

export default nextConfig;


