import NJAutoInsurancePage from './NJAutoInsurancePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NJ Auto Insurance | Car Insurance New Jersey | Midland Insurance',
  description: 'Get affordable NJ auto insurance with comprehensive coverage. Auto insurance New Jersey quotes online. Car insurance NJ with local agents who understand New Jersey drivers.',
  keywords: 'nj auto insurance, auto insurance new jersey, car insurance nj, new jersey car insurance, nj car insurance quotes, auto insurance quotes nj, cheap car insurance nj, affordable auto insurance nj',
  openGraph: {
    title: 'NJ Auto Insurance | Affordable Car Insurance New Jersey',
    description: 'Find the best NJ auto insurance rates with local experts. Get car insurance quotes for New Jersey drivers. Coverage that protects you on Garden State roads.',
    url: 'https://midlandinsurance.biz/nj-auto-insurance',
    images: [{
      url: '/og/nj-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'NJ Auto Insurance - Car Insurance New Jersey'
    }]
  },
  alternates: {
    canonical: '/nj-auto-insurance'
  }
};

export default function Page() {
  return <NJAutoInsurancePage />;
}