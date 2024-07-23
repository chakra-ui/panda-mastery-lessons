/** @type {import('next').NextConfig} */
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias ??= {};
    config.resolve.alias['@mono/styled-system'] = path.resolve('styled-system');

    return config;
  },
};

export default nextConfig;
