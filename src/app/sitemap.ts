import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourlifeinseconds.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.5,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mission`,
      changeFrequency: 'monthly',
      priority: 0.5,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.5,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified: new Date(),
    },
  ]

  const toolPages: MetadataRoute.Sitemap = [
    '/tools/currency-converter',
    '/tools/budget-planner',
    '/tools/debt-accelerator',
    '/tools/child-affordability',
    '/tools/rent-vs-buy',
    '/tools/mortgage-payoff',
  ].map((slug) => ({
    url: `${baseUrl}${slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
    lastModified: new Date(),
  }))

  const articles: MetadataRoute.Sitemap = [
    '/where-your-life-actually-goes',
    '/psychology-of-work',
    '/school-trained-you',
    '/marriage-and-self',
    '/not-busy-misallocated',
    '/what-money-is',
    '/take-back-two-hours',
    '/designing-your-life',
    '/time-you-control',
    '/cost-of-distraction',
    '/life-in-weeks',
    '/running-out-of-time',
    '/not-a-time-problem',
    '/one-hour-shift',
  ].map((slug) => ({
    url: `${baseUrl}${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: new Date(),
  }))

  return [...staticPages, ...toolPages, ...articles]
}
