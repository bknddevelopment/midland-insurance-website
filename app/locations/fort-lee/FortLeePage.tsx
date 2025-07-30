'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import {
  BuildingOffice2Icon,
  HomeModernIcon,
  GlobeAmericasIcon,
  ShieldExclamationIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function FortLeePage() {
  const location = {
    name: 'Fort Lee',
    slug: 'fort-lee',
    county: 'Bergen County',
    state: 'NJ',
    description: 'Specialized construction insurance for Fort Lee\'s high-rise boom. With Manhattan views and luxury developments, Fort Lee contractors need coverage that matches the sophistication of their projects.',
    heroImage: '/photos/fort-lee-hero.jpg',
    coordinates: {
      lat: 40.8509,
      lng: -73.9701,
    },
    serviceRadius: 10,
  };

  const stats = {
    population: '40,000',
    contractors: '275+',
    projects: '$1.5B',
    growth: '22%',
  };

  const projects = [
    {
      name: 'Modern Fort Lee',
      type: 'Luxury Residential Tower',
      description: '47-story luxury residential development with NYC views',
    },
    {
      name: 'The Pinnacle at Fort Lee',
      type: 'Mixed-Use High-Rise',
      description: 'Twin tower development with retail and residences',
    },
    {
      name: 'Hudson Lights Complex',
      type: 'Waterfront Development',
      description: 'Multiple residential towers along the Hudson River',
    },
  ];

  const services = [
    {
      name: 'High-Rise Construction',
      description: 'Specialized coverage for vertical construction',
      href: '/business/construction/general-liability',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Luxury Residential',
      description: 'High-limit coverage for upscale projects',
      href: '/business/construction/general-liability',
      icon: HomeModernIcon,
    },
    {
      name: 'Frame & Wrap-Up',
      description: 'Master policies for large developments',
      href: '/business/construction/builders-risk',
      icon: SparklesIcon,
    },
    {
      name: 'International Coverage',
      description: 'For international developers and contractors',
      href: '/business/construction/general-liability',
      icon: GlobeAmericasIcon,
    },
    {
      name: 'Excess Liability',
      description: 'High limits for catastrophic claims',
      href: '/business/umbrella',
      icon: ShieldExclamationIcon,
    },
    {
      name: 'Builder\'s Risk',
      description: 'Coverage for $100M+ projects',
      href: '/business/construction/builders-risk',
      icon: CurrencyDollarIcon,
    },
  ];

  const nearbyAreas = [
    'Edgewater',
    'Cliffside Park',
    'Englewood Cliffs',
    'Palisades Park',
    'Leonia',
    'Tenafly',
  ];

  const localInfo = {
    permitOffice: {
      name: 'Fort Lee Building Department',
      address: '309 Main Street, Fort Lee, NJ 07024',
      phone: '(201) 592-3500',
      website: 'https://www.fortleenj.org',
    },
    majorEmployers: [
      'LG Electronics USA',
      'Unilever North America',
      'Holy Name Medical Center',
      'iPark (Fort Lee Studios)',
      'Modern Luxury Development',
    ],
    constructionHighlights: [
      'Highest concentration of high-rises in NJ',
      'Luxury residential market boom',
      'International developer presence',
      'NYC bedroom community growth',
      'George Washington Bridge proximity',
      'Film industry infrastructure',
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