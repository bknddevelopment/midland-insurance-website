'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import {
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function ParamusPage() {
  const location = {
    name: 'Paramus',
    slug: 'paramus',
    county: 'Bergen County',
    state: 'NJ',
    description: 'Construction insurance for Paramus contractors working in the retail capital of America. With major shopping centers and constant commercial development, Paramus contractors need specialized coverage we provide.',
    heroImage: '/photos/paramus-hero.jpg',
    coordinates: {
      lat: 40.9445,
      lng: -74.0707,
    },
    serviceRadius: 10,
  };

  const stats = {
    population: '26,000',
    contractors: '350+',
    projects: '$500M',
    growth: '12%',
  };

  const projects = [
    {
      name: 'Garden State Plaza Expansion',
      type: 'Retail Development',
      description: 'Ongoing renovations and new store buildouts',
    },
    {
      name: 'Paramus Park Redevelopment',
      type: 'Commercial Renovation',
      description: 'Major mall modernization and tenant improvements',
    },
    {
      name: 'Route 17 Corridor Projects',
      type: 'Mixed Use Development',
      description: 'New retail and office construction along Route 17',
    },
  ];

  const services = [
    {
      name: 'Retail Construction Insurance',
      description: 'Specialized coverage for mall and store projects',
      href: '/business/construction/general-liability',
      icon: BuildingStorefrontIcon,
    },
    {
      name: 'Tenant Improvement Coverage',
      description: 'Protection for interior buildout work',
      href: '/business/construction/general-liability',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Commercial Auto',
      description: 'Coverage for Paramus traffic and parking',
      href: '/business/construction/commercial-auto',
      icon: TruckIcon,
    },
    {
      name: 'Builder\'s Risk',
      description: 'Project coverage for retail construction',
      href: '/business/construction/builders-risk',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Performance Bonds',
      description: 'Required for major retail projects',
      href: '/business/construction/bonds',
      icon: DocumentTextIcon,
    },
    {
      name: 'Equipment Insurance',
      description: 'Protect tools at busy retail sites',
      href: '/business/construction/tools-equipment',
      icon: CurrencyDollarIcon,
    },
  ];

  const nearbyAreas = [
    'Ridgewood',
    'Rochelle Park',
    'Fair Lawn',
    'River Edge',
    'Maywood',
    'Oradell',
  ];

  const localInfo = {
    permitOffice: {
      name: 'Paramus Building Department',
      address: '1 W Jockish Square, Paramus, NJ 07652',
      phone: '(201) 265-2100',
      website: 'https://www.paramusborough.org',
    },
    majorEmployers: [
      'Westfield Garden State Plaza',
      'Paramus Park Mall',
      'Bergen Town Center',
      'Valley Health System',
      'Stop & Shop Corporate',
    ],
    constructionHighlights: [
      'Retail capital with 30+ million annual visitors',
      'Blue laws create unique construction scheduling',
      'Major mall renovation projects ongoing',
      'High-end retail construction standards',
      'Heavy traffic requires special logistics',
      'Strict sign and facade regulations',
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