import QuotePage from './QuotePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Construction Insurance Quote | Bergen County Contractors',
  description: 'Get competitive construction insurance quotes from 20+ carriers. Quick online quotes for general liability, workers comp, and more. Bergen County specialists.',
  keywords: 'construction insurance quote, contractor insurance quote bergen county, get construction coverage quote, builder insurance estimate nj',
  openGraph: {
    title: 'Get Your Construction Insurance Quote | Midland Associates',
    description: 'Quick quotes from multiple carriers. Specialized construction insurance for Bergen County contractors.',
    url: 'https://midlandinsurance.biz/quote',
    images: [{
      url: '/og/quote-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Get Construction Insurance Quote'
    }]
  },
  alternates: {
    canonical: '/quote'
  }
};

export default function Page() {
  return <QuotePage />;
} 