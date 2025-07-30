import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Costly Insurance Mistakes Bergen County Contractors Make',
  description: 'Avoid these common contractor insurance mistakes that cost Bergen County builders thousands. Learn about coverage gaps, class codes, and proper protection.',
  keywords: 'contractor insurance mistakes, bergen county contractor tips, construction insurance errors, avoid insurance mistakes nj',
  openGraph: {
    title: '5 Insurance Mistakes Costing Bergen County Contractors Thousands',
    description: 'Don\'t make these costly insurance errors. Expert tips for Bergen County contractors on proper coverage.',
    url: 'https://midlandinsurance.biz/blog/contractor-insurance-mistakes-bergen-county',
    type: 'article',
    publishedTime: '2025-01-30',
    authors: ['Midland Associates'],
    tags: ['Construction Insurance', 'Risk Management', 'Contractor Tips'],
    images: [{
      url: '/og/contractor-insurance-mistakes.jpg',
      width: 1200,
      height: 630,
      alt: 'Contractor Insurance Mistakes'
    }]
  },
  alternates: {
    canonical: '/blog/contractor-insurance-mistakes-bergen-county'
  }
};

export default function Page() {
  return <BlogPost />;
}