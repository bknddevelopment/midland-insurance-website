import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://midlandinsurance.biz';
  const currentDate = new Date().toISOString();

  // Define all static pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/quote', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/claims', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/testimonials', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/case-studies', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  // Service pages - Construction Types
  const constructionTypes = [
    'commercial-construction',
    'residential-construction',
    'industrial-construction',
    'infrastructure-projects',
    'renovation-remodeling',
    'green-building',
    'specialty-construction',
    'emergency-restoration'
  ];

  // Service pages - Trade Specific
  const tradeSpecific = [
    'general-contractors',
    'electrical-contractors',
    'plumbing-contractors',
    'hvac-contractors',
    'roofing-contractors',
    'concrete-contractors',
    'painting-contractors',
    'flooring-contractors',
    'landscaping-contractors',
    'excavation-contractors'
  ];

  // Location pages
  const locations = [
    'bergen-county',
    'hackensack',
    'fort-lee',
    'paramus',
    'teaneck',
    'englewood'
  ];

  // Blog posts
  const blogPosts = [
    'construction-insurance-cost-factors-bergen-county-2025',
    'general-liability-vs-professional-liability-contractors-guide',
    'workers-compensation-requirements-new-jersey-contractors-2025'
  ];

  // Build sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [
    // Static pages
    ...staticPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),

    // Services main pages
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/construction-types`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/trade-specific`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Construction type service pages
    ...constructionTypes.map(type => ({
      url: `${baseUrl}/services/construction-types/${type}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Trade specific service pages
    ...tradeSpecific.map(trade => ({
      url: `${baseUrl}/services/trade-specific/${trade}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Location pages
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...locations.map(location => ({
      url: `${baseUrl}/locations/${location}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    ...blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Resources
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/construction-insurance-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return sitemapEntries;
}