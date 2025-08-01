import IndustrialConstructionPage from './IndustrialConstructionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Construction Insurance Bergen County NJ | Manufacturing & Warehouse',
  description: 'Specialized insurance for industrial construction projects. Manufacturing facilities, warehouses, distribution centers. High-limit coverage for complex projects.',
  keywords: 'industrial construction insurance nj, manufacturing facility insurance, warehouse construction coverage, bergen county industrial insurance',
  openGraph: {
    title: 'Industrial Construction Insurance Bergen County NJ',
    description: 'Comprehensive coverage for industrial construction projects. Heavy equipment, environmental liability, specialized systems. Expert NJ protection.',
    url: 'https://midlandinsurance.biz/services/construction-types/industrial-construction',
    images: [{
      url: '/og/industrial-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Industrial Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/industrial-construction'
  }
};

export default function Page() {
  return <IndustrialConstructionPage />;
}