import EmergencyRestorationPage from './EmergencyRestorationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Restoration Insurance Bergen County NJ | Fire & Water Damage Coverage',
  description: 'Insurance for emergency restoration contractors in Bergen County. Fire damage, water restoration, mold remediation. 24/7 response coverage with pollution liability.',
  keywords: 'restoration contractor insurance nj, emergency restoration insurance bergen county, water damage restoration coverage, fire damage contractor insurance',
  openGraph: {
    title: 'Emergency Restoration Insurance Bergen County NJ',
    description: 'Specialized coverage for restoration contractors. Pollution liability, bailee\'s coverage, emergency response protection. 24/7 operations covered.',
    url: 'https://midlandinsurance.biz/services/construction-types/emergency-restoration',
    images: [{
      url: '/og/emergency-restoration-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Emergency Restoration Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/emergency-restoration'
  }
};

export default function Page() {
  return <EmergencyRestorationPage />;
}