/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
            },
            {
                hostname: "www.now14.co.il"
            }
        ],
    


        domains: ['example.com', 'https://nextjs.org/','encrypted-tbn0.gstatic.com','mivzakim-icon.svg'],
      },
};
export default nextConfig;
