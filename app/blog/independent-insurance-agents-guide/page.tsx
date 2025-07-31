import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Essential Role of Independent Insurance Agents | Midland Associates',
  description: 'Learn why independent insurance agents provide better coverage and pricing than captive agents. Discover the benefits of working with an independent agency.',
  keywords: 'independent insurance agent, captive vs independent agent, insurance agent benefits, bergen county independent agent, insurance agency advantages',
  openGraph: {
    title: 'The Essential Role of Independent Insurance Agents',
    description: 'Why independent agents offer better coverage, pricing, and service than captive agents.',
    url: 'https://midlandinsurance.biz/blog/independent-insurance-agents-guide',
    type: 'article',
    images: [{
      url: '/og/independent-agents.jpg',
      width: 1200,
      height: 630,
      alt: 'Independent Insurance Agents Guide'
    }]
  },
  alternates: {
    canonical: '/blog/independent-insurance-agents-guide'
  }
};

export default function Page() {
  return <BlogPost />;
}