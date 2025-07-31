import BlogPost from './BlogPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prioritizing Coverage Over Price | Why Cheap Insurance Costs More',
  description: 'Discover why choosing insurance based on price alone is dangerous. Learn how to evaluate coverage properly and avoid costly gaps that could bankrupt you.',
  keywords: 'insurance coverage vs price, cheap insurance risks, proper insurance coverage, insurance value, coverage gaps, insurance mistakes',
  openGraph: {
    title: 'Prioritizing Coverage Over Price: Why Cheap Insurance Can Cost You Everything',
    description: 'The hidden dangers of choosing insurance based on price alone.',
    url: 'https://midlandinsurance.biz/blog/coverage-over-price-guide',
    type: 'article',
    images: [{
      url: '/og/coverage-over-price.jpg',
      width: 1200,
      height: 630,
      alt: 'Coverage Over Price Guide'
    }]
  },
  alternates: {
    canonical: '/blog/coverage-over-price-guide'
  }
};

export default function Page() {
  return <BlogPost />;
}