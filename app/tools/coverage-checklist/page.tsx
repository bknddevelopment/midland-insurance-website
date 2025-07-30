import CoverageChecklist from './CoverageChecklist';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Coverage Checklist | Bergen County Requirements',
  description: 'Complete checklist of required and recommended construction insurance coverages for Bergen County contractors. Download our free PDF checklist.',
  keywords: 'construction insurance checklist, contractor coverage requirements, bergen county insurance checklist, construction insurance audit',
  openGraph: {
    title: 'Construction Insurance Coverage Checklist',
    description: 'Ensure you have all necessary construction insurance coverages with our comprehensive checklist.',
    url: 'https://midlandinsurance.biz/tools/coverage-checklist',
    images: [{
      url: '/og/coverage-checklist.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance Coverage Checklist'
    }]
  },
  alternates: {
    canonical: '/tools/coverage-checklist'
  }
};

export default function Page() {
  return <CoverageChecklist />;
}