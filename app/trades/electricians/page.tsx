import ElectriciansPage from './ElectriciansPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrician Insurance Bergen County NJ | Electrical Contractor Coverage',
  description: 'Specialized insurance for electricians and electrical contractors in Bergen County. General liability, tools coverage, commercial auto. Fast quotes.',
  keywords: 'electrician insurance nj, electrical contractor insurance bergen county, electrician liability insurance, electrical business insurance',
  openGraph: {
    title: 'Electrician Insurance Bergen County NJ | Electrical Contractors',
    description: 'Complete insurance coverage for electrical contractors. Protect against shocks, fires, and property damage claims. Local NJ expertise.',
    url: 'https://midlandinsurance.biz/trades/electricians',
    images: [{
      url: '/og/electricians-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Electrician Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/electricians'
  }
};

export default function Page() {
  return <ElectriciansPage />;
}