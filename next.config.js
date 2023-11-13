/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_SOCKET_URL: 'wss://ws.eodhistoricaldata.com/ws',
        API_TOKEN: 'demo'
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
