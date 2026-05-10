import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.inovaloc.com.br',
      lastModified: new Date('2025-05-10'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.inovaloc.com.br/politica-de-privacidade',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
