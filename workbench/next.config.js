/** @type {import('next').NextConfig} */

const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@datacamp/waffles'] = resolve(__dirname, '../dist');

    return config;
  },
};
