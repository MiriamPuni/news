/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
                
            }
        ]
    }
};


        domains: ['example.com', 'https://nextjs.org/','encrypted-tbn0.gstatic.com'],
      },
};
export default nextConfig;
