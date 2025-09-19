/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://coffee.hairybulbs.com"
          }
        ]
      }
    ]
  }
};
