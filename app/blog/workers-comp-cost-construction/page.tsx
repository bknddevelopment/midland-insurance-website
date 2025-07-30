import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The True Cost of Workers\' Comp Claims in Construction | NJ Guide',
  description: 'Understanding workers compensation claim costs for NJ construction. Learn about experience mods, claim prevention, and return-to-work programs.',
  keywords: 'workers comp claims construction, nj workers comp costs, construction injury costs, experience modification rate',
  openGraph: {
    title: 'The True Cost of Workers\' Comp Claims in Construction',
    description: 'How workers comp claims really impact your construction business. Prevention strategies and cost management guide.',
    url: 'https://midlandinsurance.biz/blog/workers-comp-cost-construction',
    type: 'article',

    publishedTime: '2025-01-30',
    authors: ['Midland Associates'],
    tags: ['Workers Compensation', 'Safety', 'Cost Management'],
    images: [{
      url: '/og/workers-comp-costs.jpg',
      width: 1200,
      height: 630,
      alt: 'Workers Comp Costs Construction'
    }]
  },
  alternates: {
    canonical: '/blog/workers-comp-cost-construction'
  }
};

export default function Page() {
  return <BlogPost />;
}