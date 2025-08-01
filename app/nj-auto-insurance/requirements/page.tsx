import RequirementsPage from './RequirementsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NJ Auto Insurance Requirements 2024 | Minimum Coverage Laws | Midland',
  description: 'Complete guide to New Jersey auto insurance requirements. Learn about minimum coverage, PIP requirements, penalties, and how to meet NJ state laws.',
  keywords: 'nj auto insurance requirements, nj minimum car insurance, new jersey car insurance laws, nj pip requirements, nj liability insurance minimums, nj insurance requirements',
  openGraph: {
    title: 'NJ Auto Insurance Requirements | State Minimums & Laws Guide',
    description: 'Everything you need to know about New Jersey auto insurance requirements. State minimums, PIP coverage, penalties, and expert advice.',
    url: 'https://midlandinsurance.biz/nj-auto-insurance/requirements',
    images: [{
      url: '/og/nj-requirements.jpg',
      width: 1200,
      height: 630,
      alt: 'NJ Auto Insurance Requirements'
    }],
  },
  alternates: {
    canonical: '/nj-auto-insurance/requirements'
  }
};

export default function Page() {
  return <RequirementsPage />;
}