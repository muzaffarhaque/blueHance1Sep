/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',  // Replace '/home' with your desired route
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
