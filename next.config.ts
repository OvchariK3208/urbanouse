import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	allowedDevOrigins: ["192.168.31.140"],
	images: {
		domains: ["images.unsplash.com", "randomuser.me"],
	},
}

export default nextConfig