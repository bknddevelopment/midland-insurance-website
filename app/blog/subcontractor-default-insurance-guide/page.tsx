import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subcontractor Default Insurance vs Performance Bonds | NJ Guide',
  description: 'Complete guide to subcontractor default insurance (SDI) for New Jersey contractors. Compare SDI vs bonds, costs, benefits, and when each makes sense.',
  keywords: 'subcontractor default insurance nj, sdi vs bonds, contractor default insurance, performance bonds construction',
  openGraph: {
    title: 'Subcontractor Default Insurance: Is It Worth It?',
    description: 'Expert analysis of SDI vs performance bonds for NJ contractors. Learn costs, benefits, and which option fits your business.',
    url: 'https://midlandinsurance.biz/blog/subcontractor-default-insurance-guide',
    type: 'article',

    publishedTime: '2025-01-30',
    authors: ['Midland Associates'],
    tags: ['Subcontractor Insurance', 'Surety Bonds', 'Risk Management'],
    images: [{
      url: '/og/subcontractor-default-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Subcontractor Default Insurance'
    }]
  },
  alternates: {
    canonical: '/blog/subcontractor-default-insurance-guide'
  }
};

export default function Page() {
  return <BlogPost />;
}