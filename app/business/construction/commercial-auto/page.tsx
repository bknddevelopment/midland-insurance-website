import CommercialAutoPage from './CommercialAutoPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance Construction | Fleet Insurance Bergen County NJ',
  description: 'Commercial auto insurance for construction vehicles and fleets. Cover trucks, vans, trailers, and equipment. Liability, collision, comprehensive coverage.',
  keywords: 'commercial auto insurance construction, fleet insurance contractors nj, construction truck insurance, commercial vehicle coverage bergen county',
  openGraph: {
    title: 'Commercial Auto Insurance for Construction | Bergen County NJ',
    description: 'Protect your construction vehicles with comprehensive commercial auto coverage. Fleet discounts, flexible coverage, competitive rates.',
    url: 'https://midlandinsurance.biz/business/construction/commercial-auto',
    images: [{
      url: '/og/commercial-auto-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Commercial Auto Insurance Construction'
    }]
  },
  alternates: {
    canonical: '/business/construction/commercial-auto'
  }
};

export default function Page() {
  return <CommercialAutoPage />;
}