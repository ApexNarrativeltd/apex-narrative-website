import type { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';

// Query to fetch all published portfolio items – only if they have their own detail pages
// For now, we're not building individual detail pages, so we skip this.
// If we add detail pages later, uncomment this.

// const PORTFOLIO_SLUGS_QUERY = `*[_type == "portfolioItem" && defined(slug)] { slug }`;

// Static pages that exist in the app
const staticPages = [
  { path: '', priority: 1.0, changefreq: 'weekly' }, // home
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/real-estate-media', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/brand-marketing-films', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/event-coverage', priority: 0.7, changefreq: 'monthly' },
  { path: '/services/social-media-content-packages', priority: 0.7, changefreq: 'monthly' },
  { path: '/our-process', priority: 0.6, changefreq: 'monthly' },
  { path: '/who-we-work-with', priority: 0.7, changefreq: 'monthly' },
  { path: '/work', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
];

// Base URL – update when custom domain is purchased
// TODO: Replace with https://apexnarrativeltd.com once domain is live
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://apex-narrative-website.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Build sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: page.priority,
  }));

  // If we had dynamic portfolio detail pages, we'd fetch them here
  // For now, the Work page itself is already included above
  // and portfolio items are displayed there via Sanity.

  return [...staticEntries];
}