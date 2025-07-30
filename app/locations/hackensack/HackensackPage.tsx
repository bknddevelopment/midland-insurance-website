'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import {
  BuildingLibraryIcon,
  HeartIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  ScaleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

export default function HackensackPage() {
  const location = {
    name: 'Hackensack',
    slug: 'hackensack',
    county: 'Bergen County',
    state: 'NJ',
    description: 'Comprehensive construction insurance for Hackensack contractors. As the Bergen County seat and home to major medical facilities, Hackensack\'s diverse construction market demands specialized insurance solutions.',
    heroImage: '/photos/hackensack-hero.jpg',
    coordinates: {
      lat: 40.8859,
      lng: -74.0435,
    },
    serviceRadius: 15,
  };

  const stats = {
    population: '46,000',
    contractors: '425+',
    projects: '$750M',
    growth: '15%',
  };

  const projects = [
    {
      name: 'Hackensack Meridian Medical Center',
      type: 'Healthcare Expansion',
      description: 'Major hospital campus modernization and expansion',
    },
    {
      name: 'Downtown Rehabilitation Zone',
      type: 'Mixed-Use Development',
      description: 'Urban renewal with residential and commercial projects',
    },
    {
      name: 'Bergen County Courthouse Complex',
      type: 'Government Construction',
      description: 'Ongoing courthouse renovations and improvements',
    },
  ];

  const services = [
    {
      name: 'Medical Facility Construction',
      description: 'Specialized coverage for healthcare projects',
      href: '/business/construction/general-liability',
      icon: HeartIcon,
    },
    {
      name: 'Government Project Bonds',
      description: 'Required bonds for public works',
      href: '/business/construction/bonds',
      icon: BuildingLibraryIcon,
    },
    {
      name: 'High-Rise Construction',
      description: 'Coverage for vertical construction',
      href: '/business/construction/general-liability',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Professional Liability',
      description: 'E&O for complex projects',
      href: '/business/construction/professional-liability',
      icon: AcademicCapIcon,
    },
    {
      name: 'Workers Compensation',
      description: 'Required coverage for all contractors',
      href: '/business/construction/workers-comp',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Prevailing Wage Compliance',
      description: 'Coverage for public projects',
      href: '/business/construction/bonds',
      icon: ScaleIcon,
    },
  ];

  const nearbyAreas = [
    'Teaneck',
    'Bogota',
    'River Edge',
    'Maywood',
    'Rochelle Park',
    'Hasbrouck Heights',
  ];

  const localInfo = {
    permitOffice: {
      name: 'Hackensack Building Department',
      address: '65 Central Avenue, Hackensack, NJ 07601',
      phone: '(201) 646-3980',
      website: 'https://www.hackensack.org',
    },
    majorEmployers: [
      'Hackensack Meridian Health',
      'Bergen County Government',
      'Hackensack Board of Education',
      'Quest Diagnostics',
      'Riverside Square Mall',
    ],
    constructionHighlights: [
      'Major medical construction market',
      'County government center projects',
      'Downtown revitalization ongoing',
      'Transit-oriented development',
      'Historic preservation requirements',
      'Diverse project types and sizes',
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