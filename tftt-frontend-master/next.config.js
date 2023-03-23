/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
  	domains	: ['tailwindui.com','lh3.googleusercontent.com' , 'img.youtube.com']
  	},
  env: {
    FRONTEND_BASE_URL : process.env.FRONTEND_BASE_URL,
    BACKEND_BASE_URL : process.env.BACKEND_BASE_URL,
  },
}

module.exports = nextConfig

