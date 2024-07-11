/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        URL_PAINEL: process.env.URL_PAINEL,
      },
};

export default nextConfig;
