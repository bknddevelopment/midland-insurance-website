import { COMPANY_INFO } from '@/lib/utils/constants';

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: 'Construction Insurance' | 'Business Insurance' | 'Personal Insurance';
  description: string;
  provider?: string;
  areaServed?: string[];
  hasOfferCatalog?: {
    name: string;
    description: string;
  }[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export default function ServiceSchema({
  serviceName,
  serviceType,
  description,
  provider = COMPANY_INFO.name,
  areaServed = ['Bergen County', 'New Jersey'],
  hasOfferCatalog,
  aggregateRating,
}: ServiceSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://midlandinsurance.biz';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: serviceType,
    description: description,
    provider: {
      '@type': 'InsuranceAgency',
      name: provider,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.street,
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        postalCode: COMPANY_INFO.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: areaServed.map(area => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    ...(hasOfferCatalog && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${serviceName} Options`,
        itemListElement: hasOfferCatalog.map((offer, index) => ({
          '@type': 'Offer',
          position: index + 1,
          name: offer.name,
          description: offer.description,
        })),
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
    }),
    url: `${baseUrl}/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    potentialAction: {
      '@type': 'GetQuote',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/quote?service=${encodeURIComponent(serviceName)}`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Quotation',
        name: `${serviceName} Quote`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}