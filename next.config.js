/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    // Fix for private class fields in undici
    config.module.rules.push({
      test: /node_modules\/undici\/lib\/.*\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    });
    return config;
  },
};

module.exports = nextConfig;