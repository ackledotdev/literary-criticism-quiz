/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	experimental: {
		turbopackFileSystemCacheForDev: true
	},
	reactCompiler: {
		compilationMode: 'infer'
	}
};

export default nextConfig;
