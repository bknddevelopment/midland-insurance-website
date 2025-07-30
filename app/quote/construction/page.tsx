import ConstructionQuotePage from './ConstructionQuotePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Quote | Bergen County Contractor Insurance',
  description: 'Get a free construction insurance quote for your contracting business. General liability, workers comp, commercial auto, tools coverage. Save up to 30% with multiple carriers.',
  keywords: 'construction insurance quote, contractor insurance bergen county, builder insurance quote nj, construction liability quote, contractor workers comp quote',
  openGraph: {
    title: 'Get Your Construction Insurance Quote | Save up to 30%',
    description: 'Free construction insurance quotes for Bergen County contractors. Compare multiple carriers and save. Get covered in 24 hours.',
    url: 'https://midlandinsurance.biz/quote/construction',
    images: [{
      url: '/og/construction-quote.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Quote'
    }]
  },
  alternates: {
    canonical: '/quote/construction'
  }
};

export default function Page() {
  return <ConstructionQuotePage />;
}