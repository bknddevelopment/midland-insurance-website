import GeneralLiabilityPage from './GeneralLiabilityPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Liability Insurance for Contractors | Bergen County NJ | Midland Associates',
  description: 'Protect your construction business with general liability insurance. Coverage for third-party injuries, property damage, completed operations. Get instant quotes.',
  keywords: 'general liability insurance contractors, GL insurance construction, contractor liability coverage bergen county, construction insurance nj',
  openGraph: {
    title: 'General Liability Insurance for Contractors | Bergen County NJ',
    description: 'Essential liability protection for construction businesses. Coverage for bodily injury, property damage, and completed operations. Free quotes in 15 minutes.',
    url: 'https://midlandinsurance.biz/business/construction/general-liability',
    images: [{
      url: '/og/general-liability-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'General Liability Insurance for Contractors'
    }]
  },
  alternates: {
    canonical: '/business/construction/general-liability'
  }
};

export default function Page() {
  return <GeneralLiabilityPage />;
}