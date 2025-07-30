import ToolsEquipmentPage from './ToolsEquipmentPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractors Tools & Equipment Insurance NJ | Inland Marine Coverage',
  description: 'Protect construction tools and equipment with inland marine insurance. Coverage for theft, damage, and loss. Mobile equipment, job site tools, leased machinery.',
  keywords: 'contractors equipment insurance, tools and equipment coverage nj, inland marine insurance bergen county, construction equipment insurance',
  openGraph: {
    title: 'Tools & Equipment Insurance for Contractors | Bergen County NJ',
    description: 'Comprehensive inland marine coverage for construction tools and equipment. Protect against theft, damage, and mysterious disappearance. Get a quote today.',
    url: 'https://midlandinsurance.biz/business/construction/tools-equipment',
    images: [{
      url: '/og/tools-equipment-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Contractors Tools & Equipment Insurance'
    }]
  },
  alternates: {
    canonical: '/business/construction/tools-equipment'
  }
};

export default function Page() {
  return <ToolsEquipmentPage />;
}