import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Navigating Insurance Rate Increases: A Comprehensive Guide | Midland Associates',
  description: 'Learn why insurance rates are increasing and discover 10 proven strategies to minimize premium increases while maintaining proper coverage.',
  keywords: 'insurance rate increases, rising insurance premiums, how to lower insurance costs, insurance inflation 2025, reduce insurance rates',
  openGraph: {
    title: 'Navigating Insurance Rate Increases: A Comprehensive Guide',
    description: 'Understanding and combating rising insurance premiums in 2025.',
    url: 'https://midlandinsurance.biz/blog/insurance-rate-increases-guide',
    type: 'article',
    images: [{
      url: '/og/rate-increases.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance Rate Increases Guide'
    }]
  },
  alternates: {
    canonical: '/blog/insurance-rate-increases-guide'
  }
};

export default function Page() {
  return <BlogPost />;
}