import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // "/" এলে বাংলা সংস্করণে পাঠায়
  async redirects() {
    return [{ source: '/', destination: '/bn', permanent: false }];
  },
};

export default nextConfig;
