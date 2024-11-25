/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          port: '', // Leave empty unless the domain uses a specific port
          pathname: '/t/p/original/**', // Allow specific path patterns
        },
      ],
    },
  };
  
  export default nextConfig;
  