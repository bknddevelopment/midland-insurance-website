import QuotesPage from './QuotesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NJ Auto Insurance Quotes | Car Insurance Quotes New Jersey | Midland',
  description: 'Get instant auto insurance quotes in NJ. Compare rates from top carriers, save up to 40% on car insurance. Free quotes, no obligation, licensed NJ agents.',
  keywords: 'auto insurance quotes nj, nj car insurance quotes, new jersey auto insurance quotes, car insurance quotes new jersey, nj insurance quotes, cheap auto insurance quotes nj',
  openGraph: {
    title: 'Auto Insurance Quotes NJ | Compare & Save up to 40%',
    description: 'Get free auto insurance quotes from multiple carriers in New Jersey. Quick comparison, instant rates, and expert advice from local agents.',
    url: 'https://midlandinsurance.biz/nj-auto-insurance/quotes',
    images: [{
      url: '/og/nj-auto-quotes.jpg',
      width: 1200,
      height: 630,
      alt: 'NJ Auto Insurance Quotes'
    }],
  },
  alternates: {
    canonical: '/nj-auto-insurance/quotes'
  }
};

export default function Page() {
  return <QuotesPage />;
}