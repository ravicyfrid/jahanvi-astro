/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.jahanviastro.com', 'placehold.co','jahanvi-astro-apis-43rn.onrender.com'],
  },
  typescript: {
		ignoreBuildErrors: true
	}

};

export default nextConfig;
