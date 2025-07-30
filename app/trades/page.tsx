import TradesIndex from './TradesIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Trade Insurance | All Trades Coverage Bergen County NJ',
  description: 'Specialized insurance for all construction trades in Bergen County. From electricians to roofers, get coverage tailored to your specific trade risks.',
  keywords: 'trade contractor insurance, construction trades insurance bergen county, specialty contractor coverage, trade specific insurance nj',
  openGraph: {
    title: 'Insurance for All Construction Trades | Bergen County NJ',
    description: 'Find specialized insurance coverage for your construction trade. Expert solutions for electricians, plumbers, roofers, HVAC, and more.',
    url: 'https://midlandinsurance.biz/trades',
    images: [{
      url: '/og/trades-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Trades Insurance'
    }]
  },
  alternates: {
    canonical: '/trades'
  }
};

export default function Page() {
  return <TradesIndex />;
}