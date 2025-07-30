import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NJ Independent Contractor Laws 2025 | Classification & Insurance Guide',
  description: 'Understanding New Jersey\'s contractor classification laws for 2025. Learn about worker classification tests, insurance implications, and compliance requirements.',
  keywords: 'nj independent contractor law 2025, contractor classification insurance, new jersey worker classification, construction compliance nj',
  openGraph: {
    title: 'New Jersey Contractor Classification Laws: 2025 Update',
    description: 'Essential guide to NJ\'s independent contractor laws. Avoid misclassification penalties and insurance issues.',
    url: 'https://midlandinsurance.biz/blog/nj-contractor-classification-laws-2025',
    type: 'article',

    publishedTime: '2025-01-30',
    authors: ['Midland Associates'],
    tags: ['Legal Compliance', 'Workers Compensation', 'Contractor Laws'],
    images: [{
      url: '/og/nj-contractor-laws.jpg',
      width: 1200,
      height: 630,
      alt: 'NJ Contractor Classification Laws'
    }]
  },
  alternates: {
    canonical: '/blog/nj-contractor-classification-laws-2025'
  }
};

export default function Page() {
  return <BlogPost />;
}