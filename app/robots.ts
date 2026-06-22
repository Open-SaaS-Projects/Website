import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/test-email', '/api'],
      },
    ],
    sitemap: 'https://makkn.com/sitemap.xml',
  }
}
