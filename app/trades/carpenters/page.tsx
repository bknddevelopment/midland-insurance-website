import CarpentersPage from './CarpentersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpenter Insurance Bergen County NJ | Carpentry Contractor Coverage',
  description: 'Insurance for carpenters and carpentry contractors in Bergen County. Coverage for woodworking, framing, finish work. Tools and liability protection.',
  keywords: 'carpenter insurance nj, carpentry contractor insurance bergen county, woodworking insurance, framing contractor coverage',
  openGraph: {
    title: 'Carpenter Insurance Bergen County NJ | Carpentry Contractors',
    description: 'Complete insurance coverage for carpentry professionals. From rough framing to custom cabinets, protect your woodworking business.',
    url: 'https://midlandinsurance.biz/trades/carpenters',
    images: [{
      url: '/og/carpenters-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Carpenter Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/carpenters'
  }
};

export default function Page() {
  return <CarpentersPage />;
}