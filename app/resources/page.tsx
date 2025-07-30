import ResourcesIndex from './ResourcesIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Resources | Guides & Tools for Bergen County Contractors',
  description: 'Free construction insurance resources, guides, and tools for Bergen County contractors. Learn about coverage, claims, safety, and more.',
  keywords: 'construction insurance resources, contractor guides bergen county, insurance tools, construction safety resources, contractor education nj',
  openGraph: {
    title: 'Construction Insurance Resources | Bergen County Contractors',
    description: 'Access free guides, tools, and resources to help manage your construction insurance and reduce risks.',
    url: 'https://midlandinsurance.biz/resources',
    images: [{
      url: '/og/construction-resources.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Resources'
    }]
  },
  alternates: {
    canonical: '/resources'
  }
};

export default function Page() {
  return <ResourcesIndex />;
}