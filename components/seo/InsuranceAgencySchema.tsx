import { COMPANY_INFO } from '@/lib/utils/constants';

interface InsuranceAgencySchemaProps {
  pageName?: string;
  pageUrl?: string;
}

export default function InsuranceAgencySchema({ pageName, pageUrl }: InsuranceAgencySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://midlandinsurance.biz'}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: 'Midland Associates Insurance',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://midlandinsurance.biz',
    logo: {
      '@type': 'ImageObject',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://midlandinsurance.biz'}/photos/logo/PNG_Transparent_High-Resolution_300-_Dpi-002.webp`,
      width: 300,
      height: 100,
    },
    image: {
      '@type': 'ImageObject',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://midlandinsurance.biz'}/photos/office-exterior.jpg`,
      width: 1200,
      height: 630,
    },
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
        description: 'By appointment only',
      },
    ],
    sameAs: [
      COMPANY_INFO.socialMedia.facebook,
      COMPANY_INFO.socialMedia.linkedin,
      COMPANY_INFO.socialMedia.twitter,
    ].filter(Boolean),
    areaServed: [
      {
        '@type': 'State',
        name: 'New Jersey',
        containsPlace: {
          '@type': 'County',
          name: 'Bergen County',
          containsPlace: [
            'Upper Saddle River',
            'Mahwah',
            'Ramsey',
            'Allendale',
            'Paramus',
            'Ridgewood',
            'Fort Lee',
            'Hackensack',
            'Englewood',
            'Teaneck',
            'Fair Lawn',
            'Wyckoff',
            'Franklin Lakes',
          ].map(city => ({
            '@type': 'City',
            name: city,
          })),
        },
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Construction Insurance',
          description: 'Comprehensive insurance solutions for contractors and construction businesses in Bergen County, NJ',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Insurance',
          description: 'Commercial insurance including general liability, property, workers compensation, and more',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Insurance',
          description: 'Auto, home, life, and personal umbrella insurance for New Jersey residents',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}