import ProfessionalLiabilityPage from './ProfessionalLiabilityPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Liability Insurance Construction | E&O Insurance Bergen County',
  description: 'Professional liability (E&O) insurance for design-build contractors, architects, engineers. Protect against errors, omissions, and design defects. Get quotes.',
  keywords: 'professional liability construction, errors omissions insurance contractors, design build insurance nj, contractors E&O bergen county',
  openGraph: {
    title: 'Professional Liability Insurance for Construction | E&O Coverage',
    description: 'Errors & omissions coverage for contractors providing design services. Protect against professional negligence claims. Essential for design-build projects.',
    url: 'https://midlandinsurance.biz/business/construction/professional-liability',
    images: [{
      url: '/og/professional-liability-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional Liability Insurance Construction'
    }]
  },
  alternates: {
    canonical: '/business/construction/professional-liability'
  }
};

export default function Page() {
  return <ProfessionalLiabilityPage />;
}