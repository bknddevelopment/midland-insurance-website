import TermsPage from './TermsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Midland Associates Insurance Services',
  description: 'Read our terms of service for using midlandinsurance.biz and our construction insurance services. Legal agreement for Bergen County contractors.',
  keywords: 'terms of service, legal terms, insurance terms, midland associates terms',
  openGraph: {
    title: 'Terms of Service | Midland Associates',
    description: 'Our agreement with you. Terms for using our website and insurance services.',
    url: 'https://midlandinsurance.biz/terms',
    images: [{
      url: '/og/terms-service.jpg',
      width: 1200,
      height: 630,
      alt: 'Terms of Service'
    }]
  },
  alternates: {
    canonical: '/terms'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <TermsPage />;
}