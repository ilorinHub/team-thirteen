/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  ...nextConfig
}
