'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  TruckIcon,
  UsersIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function BergenCountyPage() {
  const location = {
    name: 'Bergen County',
    slug: 'bergen-county',
    state: 'NJ',
    description: 'Comprehensive construction insurance services throughout Bergen County, New Jersey. As the most populous county in NJ with over 950,000 residents, Bergen County has a thriving construction industry we\'ve proudly served since 1990.',
    heroImage: '/photos/bergen-county-hero.jpg',
    coordinates: {
      lat: 40.9263,
      lng: -74.0770,
    },
    serviceRadius: 25,
  };

  const stats = {
    population: '955,000+',
    contractors: '2,500+',
    projects: '$1.2B',
    growth: '8.5%',
  };

  const projects = [
    {
      name: 'American Dream Mall',
      type: 'Commercial Development',
      description: 'Massive retail and entertainment complex in East Rutherford',
    },
    {
      name: 'Hackensack Meridian Health',
      type: 'Medical Facility',
      description: 'Major hospital expansion and modernization project',
    },
    {
      name: 'Fort Lee High-Rise Boom',
      type: 'Residential Development',
      description: 'Multiple luxury residential towers along Hudson River',
    },
  ];

  const services = [
    {
      name: 'General Liability',
      description: 'Essential coverage for all Bergen County contractors',
      href: '/business/construction/general-liability',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Builder\'s Risk',
      description: 'Protect active construction projects county-wide',
      href: '/business/construction/builders-risk',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Workers\' Compensation',
      description: 'Required coverage with NJ state compliance',
      href: '/business/construction/workers-comp',
      icon: UsersIcon,
    },
    {
      name: 'Commercial Auto',
      description: 'Fleet coverage for Bergen County roads',
      href: '/business/construction/commercial-auto',
      icon: TruckIcon,
    },
    {
      name: 'Contractor Bonds',
      description: 'Municipal bonds for Bergen County projects',
      href: '/business/construction/bonds',
      icon: DocumentTextIcon,
    },
    {
      name: 'Equipment Coverage',
      description: 'Protect tools at Bergen County job sites',
      href: '/business/construction/tools-equipment',
      icon: CurrencyDollarIcon,
    },
  ];

  const nearbyAreas = [
    'Hackensack',
    'Fort Lee',
    'Paramus',
    'Ridgewood',
    'Teaneck',
    'Englewood',
    'Fair Lawn',
    'Garfield',
  ];

  const localInfo = {
    permitOffice: {
      name: 'Bergen County Planning & Engineering',
      address: 'One Bergen County Plaza, Hackensack, NJ 07601',
      phone: '(201) 336-6400',
      website: 'https://www.bergencountynj.gov',
    },
    majorEmployers: [
      'Hackensack Meridian Health',
      'Valley Health System',
      'Bergen County Government',
      'Quest Diagnostics',
      'Samsung Electronics America',
      'Unilever United States',
    ],
    constructionHighlights: [
      'Highest income county in New Jersey',
      'Major NYC suburb with constant development',
      'Strong commercial and residential markets',
      'Multiple hospital and medical facilities',
      'Extensive infrastructure improvements ongoing',
      'Green building initiatives county-wide',
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