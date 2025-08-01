import CheapInsurancePage from './CheapInsurancePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheap Car Insurance Bergen County NJ | Affordable Auto Insurance | Midland',
  description: 'Find cheap car insurance in Bergen County, NJ. Compare rates from 20+ carriers, save up to 40%. Serving all 70 Bergen County towns with affordable coverage.',
  keywords: 'cheap car insurance bergen county, affordable insurance bergen county, cheap auto insurance bergen county nj, bergen county cheap car insurance, discount auto insurance bergen county',
  openGraph: {
    title: 'Cheap Car Insurance Bergen County | Save up to 40% on Auto Coverage',
    description: 'Get the cheapest car insurance rates in Bergen County. Local agents, multiple carriers, and exclusive discounts for all 70 municipalities.',
    url: 'https://midlandinsurance.biz/cheap-car-insurance-bergen-county',
    images: [{
      url: '/og/cheap-bergen-county-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Cheap Car Insurance Bergen County NJ'
    }],
  },
  alternates: {
    canonical: '/cheap-car-insurance-bergen-county'
  }
};

export default function Page() {
  return <CheapInsurancePage />;
}