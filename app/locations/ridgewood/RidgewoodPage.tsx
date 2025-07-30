'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import {
  HomeIcon,
  BuildingLibraryIcon,
  PaintBrushIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function RidgewoodPage() {
  const location = {
    name: 'Ridgewood',
    slug: 'ridgewood',
    county: 'Bergen County',
    state: 'NJ',
    description: 'Premier construction insurance for Ridgewood\'s historic village and custom home market. From Victorian restorations to modern mansions, we protect contractors working on Ridgewood\'s finest properties.',
    heroImage: '/photos/ridgewood-hero.jpg',
    coordinates: {
      lat: 40.9793,
      lng: -74.1166,
    },
    serviceRadius: 10,
  };

  const stats = {
    population: '26,000',
    contractors: '185+',
    projects: '$225M',
    growth: '6%',
  };

  const projects = [
    {
      name: 'Downtown CBD Revitalization',
      type: 'Commercial Renovation',
      description: 'Historic downtown business district improvements',
    },
    {
      name: 'Valley Hospital Expansion',
      type: 'Medical Facility',
      description: 'Major hospital modernization project',
    },
    {
      name: 'Historic Home Restorations',
      type: 'Residential Preservation',
      description: 'Victorian and colonial home renovations',
    },
  ];

  const services = [
    {
      name: 'Historic Renovation',
      description: 'Specialized coverage for historic properties',
      href: '/business/construction/general-liability',
      icon: BuildingLibraryIcon,
    },
    {
      name: 'Custom Home Building',
      description: 'High-value residential construction',
      href: '/business/construction/builders-risk',
      icon: HomeIcon,
    },
    {
      name: 'Artisan Contractors',
      description: 'Coverage for specialty trades',
      href: '/business/construction/general-liability',
      icon: PaintBrushIcon,
    },
    {
      name: 'Green Building',
      description: 'Sustainable construction coverage',
      href: '/business/construction/professional-liability',
      icon: SparklesIcon,
    },
    {
      name: 'School Projects',
      description: 'Educational facility construction',
      href: '/business/construction/bonds',
      icon: AcademicCapIcon,
    },
    {
      name: 'High-Value Property',
      description: 'Luxury home protection',
      href: '/business/construction/builders-risk',
      icon: ShieldCheckIcon,
    },
  ];

  const nearbyAreas = [
    'Glen Rock',
    'Wyckoff',
    'Ho-Ho-Kus',
    'Waldwick',
    'Midland Park',
    'Fair Lawn',
  ];

  const localInfo = {
    permitOffice: {
      name: 'Ridgewood Building Department',
      address: '131 N Maple Avenue, Ridgewood, NJ 07450',
      phone: '(201) 670-5500',
      website: 'https://www.ridgewoodnj.net',
    },
    majorEmployers: [
      'Valley Hospital',
      'Ridgewood Board of Education',
      'Village of Ridgewood',
      'Ridgewood YMCA',
      'Downtown Business District',
    ],
    constructionHighlights: [
      'Strict historic preservation requirements',
      'High-end custom home market',
      'Architectural review board oversight',
      'Premium property values',
      'Active downtown development',
      'Green building initiatives',
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