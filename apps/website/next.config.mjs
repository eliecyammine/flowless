'use strict';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ['@flowless/ui', '@flowless/tailwind-config'],
};

export default nextConfig;
