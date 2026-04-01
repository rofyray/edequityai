const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^\/api\/curriculum\/module\/.+/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'curriculum-modules',
        expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 }
      }
    },
    {
      urlPattern: /^\/api\/student\/profile/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'student-profile',
        networkTimeoutSeconds: 3
      }
    }
  ]
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA(nextConfig)
