/** @type {import('next').NextConfig} */

const { resolve } = require('path');
const remarkGfm = require('remark-gfm');
const remarkSectionize = require('remark-sectionize');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkSectionize],
  },
});

module.exports = withMDX({
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

    return config;
  },
});
