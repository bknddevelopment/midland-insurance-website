import TradeSpecificOverview from './TradeSpecificOverview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade-Specific Insurance Bergen County NJ | Specialized Contractor Coverage',
  description: 'Specialized insurance solutions for contractors by trade in Bergen County. From general contractors to specialty trades, get coverage tailored to your specific risks.',
  keywords: 'trade specific insurance nj, contractor insurance bergen county, specialized trade coverage, construction insurance by trade',
  openGraph: {
    title: 'Trade-Specific Insurance Solutions | Bergen County Contractors',
    description: 'Industry-specific insurance coverage for every trade. General contractors, electricians, plumbers, HVAC, and more. Local expertise, competitive rates.',
    url: 'https://midlandinsurance.biz/services/trade-specific',
    images: [{
      url: '/og/trade-specific-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Trade-Specific Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific'
  }
};

export default function Page() {
  return <TradeSpecificOverview />;
}