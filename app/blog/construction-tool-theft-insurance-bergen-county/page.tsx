import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tool Theft Protection for Bergen County Contractors | Insurance Guide',
  description: 'Rising tool theft in Bergen County construction sites. Learn about equipment insurance coverage, prevention strategies, and claims process for stolen tools.',
  keywords: 'contractor tool insurance nj, equipment theft coverage, bergen county tool theft, construction equipment insurance',
  openGraph: {
    title: 'Tool Theft on the Rise: Protecting Your Construction Equipment',
    description: 'Essential guide to tool and equipment insurance for Bergen County contractors. Protect against rising theft rates.',
    url: 'https://midlandinsurance.biz/blog/construction-tool-theft-insurance-bergen-county',
    type: 'article',
    publishedTime: '2025-01-30',
    authors: ['Midland Associates'],
    tags: ['Equipment Insurance', 'Tool Theft', 'Risk Management'],
    images: [{
      url: '/og/tool-theft-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Tool Theft Insurance'
    }]
  },
  alternates: {
    canonical: '/blog/construction-tool-theft-insurance-bergen-county'
  }
};

export default function Page() {
  return <BlogPost />;
}