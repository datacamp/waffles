const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    config.resolve.alias['@datacamp/waffles'] = resolve(__dirname, '../dist');

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.mdx$/,
      use: [{ loader: 'xdm/webpack.cjs', options: {} }],
    });

    return config;
  },
};
