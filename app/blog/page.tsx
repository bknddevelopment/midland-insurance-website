import BlogIndex from './BlogIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Blog | Bergen County Contractor Resources',
  description: 'Expert insights on construction insurance, contractor safety, Bergen County projects, and industry trends. Tips from 30+ years insuring NJ contractors.',
  keywords: 'construction insurance blog, contractor resources, bergen county construction news, insurance tips contractors',
  openGraph: {
    title: 'Construction Insurance Blog | Midland Associates',
    description: 'Stay informed with expert construction insurance insights, safety tips, and Bergen County industry news.',
    url: 'https://midlandinsurance.biz/blog',
    images: [{
      url: '/og/blog.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Blog'
    }]
  },
  alternates: {
    canonical: '/blog'
  }
};

export default function Page() {
  return <BlogIndex />;
}