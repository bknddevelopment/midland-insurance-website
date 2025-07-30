import SpringConstructionPost from './SpringConstructionPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spring Construction Season: Insurance Preparation Checklist | Midland',
  description: 'Get your Bergen County construction business ready for spring with our comprehensive insurance checklist. Policy reviews, equipment coverage, and safety tips.',
  keywords: 'spring construction insurance, contractor insurance checklist, bergen county construction season, spring safety construction',
  openGraph: {
    title: 'Spring Construction Season: Insurance Preparation Checklist',
    description: 'Essential insurance preparation steps for contractors gearing up for the busy spring construction season in Bergen County.',
    url: 'https://midlandinsurance.biz/blog/spring-construction-insurance-prep',
    images: [{
      url: '/og/spring-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Spring Construction Insurance Preparation'
    }],
    type: 'article',

    publishedTime: '2024-03-15',
    authors: ['Midland Associates'],
    tags: ['construction insurance', 'spring', 'safety', 'bergen county'],
  },
  alternates: {
    canonical: '/blog/spring-construction-insurance-prep'
  }
};

export default function Page() {
  return <SpringConstructionPost />;
}