/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',  // Replace '/home' with your desired route
            permanent: true,
          },
        ]
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            // port: '1337',
            // pathname: '/uploads/**',
          },
        ],
      },
      // images: {
      //   remotePatterns: [
      //     {
      //       protocol: 'http',
      //       hostname: '157.173.221.73',
      //       port: '1337',
      //       pathname: '/uploads/**',
      //     },
      //   ],
      // },
};

export default nextConfig;
