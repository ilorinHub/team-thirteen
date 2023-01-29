/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

// module.exports = {
//   nextConfig,
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   }
// }

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  ...nextConfig,
};
