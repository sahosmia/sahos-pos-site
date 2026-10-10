import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // /bn/ ও /en/ ফোল্ডার + index.html — Apache/Hostinger-এ ঠিকমতো চলে
  trailingSlash: true,
};

export default nextConfig;
