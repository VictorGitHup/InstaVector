import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/noticias/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
       {
        source: '/how-it-works',
        destination: '/como-funciona',
        permanent: true,
      },
      {
        source: '/data-policy',
        destination: '/politica-de-datos',
        permanent: true,
      }
    ]
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://convertsvg-fclo.onrender.com/convert/',
    NEXT_PUBLIC_GA_ID: 'G-6GJQLV40EQ',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
