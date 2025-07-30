import BergenCountyBoomPost from './BergenCountyBoomPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bergen County Construction Boom: Major Projects Reshaping Our Region',
  description: 'Explore the major construction projects transforming Bergen County in 2024. From Fort Lee high-rises to Hackensack medical expansions.',
  keywords: 'bergen county construction projects, fort lee development, hackensack construction, paramus development, nj construction boom',
  openGraph: {
    title: 'Bergen County Construction Boom: Major Projects Reshaping Our Region',
    description: 'Major construction projects are transforming Bergen County. Learn about opportunities and insurance requirements for local contractors.',
    url: 'https://midlandinsurance.biz/blog/bergen-county-construction-boom',
    images: [{
      url: '/og/bergen-county-construction-boom.jpg',
      width: 1200,
      height: 630,
      alt: 'Bergen County Construction Projects'
    }],
    type: 'article',
    publishedTime: '2024-03-05',
    authors: ['Midland Associates'],
    tags: ['bergen county', 'construction projects', 'development', 'local news'],
  },
  alternates: {
    canonical: '/blog/bergen-county-construction-boom'
  }
};

export default function Page() {
  return <BergenCountyBoomPost />;
}