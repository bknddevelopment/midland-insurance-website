import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Winter Construction Insurance in Bergen County | Cold Weather Coverage',
  description: 'Protect your Bergen County construction project from winter weather risks. Learn about freeze damage coverage, weather delays, and cold-weather construction insurance.',
  keywords: 'winter construction insurance nj, cold weather construction coverage, freeze damage insurance, bergen county winter construction',
  openGraph: {
    title: 'Winter Construction in Bergen County: Insurance Protection Guide',
    description: 'Essential insurance coverage for winter construction projects. Protect against freeze damage, weather delays, and cold-weather risks.',
    url: 'https://midlandinsurance.biz/blog/winter-construction-insurance-bergen-county',
    type: 'article',

    publishedTime: '2025-01-30',
    authors: ['Midland Associates'],
    tags: ['Construction Insurance', 'Winter Construction', 'Bergen County'],
    images: [{
      url: '/og/winter-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Winter Construction Insurance'
    }]
  },
  alternates: {
    canonical: '/blog/winter-construction-insurance-bergen-county'
  }
};

export default function Page() {
  return <BlogPost />;
}