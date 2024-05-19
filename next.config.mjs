/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com', 'https://nextjs.org/','encrypted-tbn0.gstatic.com'],
      },
};

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
                
            }
        ]
    }



export default nextConfig;
