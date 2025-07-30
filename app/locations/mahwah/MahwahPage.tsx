'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import {
  BuildingOfficeIcon,
  AcademicCapIcon,
  TruckIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

export default function MahwahPage() {
  const location = {
    name: 'Mahwah',
    slug: 'mahwah',
    county: 'Bergen County',
    state: 'NJ',
    description: 'Construction insurance for Mahwah\'s thriving commercial corridor. From corporate campuses to Route 17 developments, we provide comprehensive coverage for contractors in this strategic business location.',
    heroImage: '/photos/mahwah-hero.jpg',
    coordinates: {
      lat: 41.0887,
      lng: -74.1438,
    },
    serviceRadius: 15,
  };

  const stats = {
    population: '27,000',
    contractors: '165+',
    projects: '$350M',
    growth: '10%',
  };

  const projects = [
    {
      name: 'Corporate Campus Developments',
      type: 'Commercial Office',
      description: 'Multiple corporate headquarters and office parks',
    },
    {
      name: 'Ramapo College Expansion',
      type: 'Educational Facility',
      description: 'Ongoing campus improvements and new buildings',
    },
    {
      name: 'Route 17 Commercial Corridor',
      type: 'Retail Development',
      description: 'Strip malls and commercial properties along Route 17',
    },
  ];

  const services = [
    {
      name: 'Corporate Campus Coverage',
      description: 'Large-scale commercial project insurance',
      href: '/business/construction/general-liability',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Educational Facilities',
      description: 'College and school construction',
      href: '/business/construction/bonds',
      icon: AcademicCapIcon,
    },
    {
      name: 'Infrastructure Projects',
      description: 'Roads, utilities, and site work',
      href: '/business/construction/general-liability',
      icon: MapIcon,
    },
    {
      name: 'International Business',
      description: 'Coverage for global companies',
      href: '/business/construction/professional-liability',
      icon: GlobeAmericasIcon,
    },
    {
      name: 'Fleet Insurance',
      description: 'Commercial vehicle coverage',
      href: '/business/construction/commercial-auto',
      icon: TruckIcon,
    },
    {
      name: 'Wrap-Up Programs',
      description: 'Owner-controlled insurance programs',
      href: '/business/construction/general-liability',
      icon: ShieldCheckIcon,
    },
  ];

  const nearbyAreas = [
    'Ramsey',
    'Upper Saddle River',
    'Franklin Lakes',
    'Oakland',
    'Wyckoff',
    'Allendale',
  ];

  const localInfo = {
    permitOffice: {
      name: 'Mahwah Building Department',
      address: '475 Corporate Drive, Mahwah, NJ 07430',
      phone: '(201) 529-5757',
      website: 'https://www.mahwah.gov',
    },
    majorEmployers: [
      'Konica Minolta',
      'Sharp Electronics',
      'Stryker Orthopedics',
      'Ramapo College',
      'UPS Distribution Center',
    ],
    constructionHighlights: [
      'Major corporate presence',
      'Strategic NY/NJ border location',
      'University expansion projects',
      'Route 17 & 287 intersection',
      'Distribution center development',
      'Green building requirements',
    ],
  };

  return (
    <LocationPageTemplate
      location={location}
      stats={stats}
      projects={projects}
      services={services}
      nearbyAreas={nearbyAreas}
      localInfo={localInfo}
    />
  );
}