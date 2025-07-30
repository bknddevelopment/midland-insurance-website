import { COMPANY_INFO } from '@/lib/utils/constants';

interface LocalBusinessSchemaProps {
  locationName: string;
  locationSlug: string;
  address?: {
    city: string;
    state: string;
    zip: string;
  };
  geo?: {
    lat: number;
    lng: number;
  };
  serviceRadius?: number;
  description?: string;
}

export default function LocalBusinessSchema({
  locationName,
  locationSlug,
  address,
  geo,
  serviceRadius = 25,
  description,
}: LocalBusinessSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://midlandinsurance.biz';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/locations/${locationSlug}#location`,
    name: `${COMPANY_INFO.name} - ${locationName}`,
    alternateName: `Midland Insurance ${locationName}`,
    description: description || `Insurance agency serving ${locationName} and surrounding areas in Bergen County, NJ. Specializing in construction, business, and personal insurance.`,
    url: `${baseUrl}/locations/${locationSlug}`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/photos/locations/${locationSlug}.jpg`,
      width: 1200,
      height: 630,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: address?.city || locationName,
      addressRegion: address?.state || 'NJ',
      postalCode: address?.zip || COMPANY_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: geo ? {
      '@type': 'GeoCoordinates',
      latitude: geo.lat,
      longitude: geo.lng,
    } : {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: geo?.lat || COMPANY_INFO.coordinates.lat,
        longitude: geo?.lng || COMPANY_INFO.coordinates.lng,
      },
      geoRadius: `${serviceRadius}mi`,
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
    priceRange: '$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'USD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Insurance',
            description: 'General liability, workers comp, builders risk for contractors',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Insurance',
            description: 'Commercial property, liability, auto, and umbrella coverage',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Insurance',
            description: 'Auto, home, life, and personal umbrella insurance',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}