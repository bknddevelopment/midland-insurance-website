import RiskAssessment from './RiskAssessment';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Risk Assessment Tool | Identify & Evaluate Project Risks',
  description: 'Free construction risk assessment tool for Bergen County contractors. Identify, evaluate, and manage risks specific to your construction projects.',
  keywords: 'construction risk assessment, contractor risk management, project risk calculator, bergen county risk assessment',
  openGraph: {
    title: 'Construction Risk Assessment Tool',
    description: 'Identify and evaluate risks specific to your construction projects with our comprehensive assessment tool.',
    url: 'https://midlandinsurance.biz/tools/risk-assessment',
    images: [{
      url: '/og/risk-assessment.jpg',
      width: 1200,
      height: 630,
      alt: 'Risk Assessment Tool'
    }]
  },
  alternates: {
    canonical: '/tools/risk-assessment'
  }
};

export default function Page() {
  return <RiskAssessment />;
}