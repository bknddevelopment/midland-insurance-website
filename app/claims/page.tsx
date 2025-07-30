import ClaimsPage from './ClaimsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claims Center | 24/7 Construction Insurance Claims Support',
  description: 'File construction insurance claims quickly. 24/7 support for contractors in Bergen County. Step-by-step guidance and carrier contacts.',
  keywords: 'construction insurance claims, file contractor claim, workers comp claims, general liability claims, claims center bergen county',
  openGraph: {
    title: 'Claims Center | Midland Associates Insurance',
    description: '24/7 claims support for construction contractors. We guide you through every step.',
    url: 'https://midlandinsurance.biz/claims',
    images: [{
      url: '/og/claims-center.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Claims Center'
    }]
  },
  alternates: {
    canonical: '/claims'
  }
};

export default function Page() {
  return <ClaimsPage />;
}