/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
            port: '',
            
          },
        ],
      },
};

export default nextConfig;
