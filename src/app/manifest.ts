import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Your Life In Seconds',
    short_name: 'YLIS',
    description: 'See your life in real time. Calculate, measure, design.',
    theme_color: '#00d4aa',
    background_color: '#0a0e1a',
    display: 'standalone',
    start_url: '/',
    // TODO: ship real icons to /public/icons/ then re-add them here.
    // Icons intentionally omitted until assets exist, to avoid manifest 404s.
    icons: [],
    categories: ['productivity', 'lifestyle'],
    orientation: 'portrait-primary',
  }
}
