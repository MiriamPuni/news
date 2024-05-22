// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {

//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'cdn.pixabay.com'
                
//             }
//         ]
//     }
// };


//         domains: ['example.com', 'https://nextjs.org/','encrypted-tbn0.gstatic.com'],
//       },
// };
// // export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
            },
            {
                protocol: 'https',
                hostname: 'example.com'
            },
            {
                protocol: 'https',
                hostname: 'nextjs.org'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com'
            },
        ]
    },

    // domains: ['example.com', 'https://nextjs.org/', 'encrypted-tbn0.gstatic.com'],
};
export default nextConfig;
