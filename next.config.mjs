/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.jahanviastro.com', 'placehold.co'],
  },
  typescript: {
		ignoreBuildErrors: true
	}

};

export default nextConfig;
