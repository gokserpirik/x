/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  staticPageGenerationTimeout: 300,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com'],
  },
}



module.exports = nextConfig
/* module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  reactStrictMode: true,
} */