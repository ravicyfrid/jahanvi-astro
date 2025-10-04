/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.jahanviastro.com', 'placehold.co'],
  },
  typescript: {
		ignoreBuildErrors: true
	},
  async redirects() {
    return [
      {
        source: '/',       // when user visits root
        destination: '/login',  // redirect here
        permanent: false,  // use true if it's a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
