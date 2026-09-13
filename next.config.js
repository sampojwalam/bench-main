const redirects = require('./config/legacy-redirects.json');
const exporting = process.env.BENCH_STATIC_EXPORT === '1';
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(exporting ? { output: 'export', distDir: 'out' } : {}),
  images: {
    loader: 'custom',
    loaderFile: './src/lib/static-image-loader.ts',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
  // Firebase serves the same redirect map for exported builds.
  ...(!exporting ? { async redirects() { return redirects; } } : {}),
};
