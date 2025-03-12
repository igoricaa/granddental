import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    GOOGLE_MAPS_API_KEY: 'AIzaSyBQlagxaq90oXM_y4WjMw0_MsqoxPm-zAg',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
