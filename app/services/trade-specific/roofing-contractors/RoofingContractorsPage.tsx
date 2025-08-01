'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  HomeModernIcon,
  CloudArrowDownIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function RoofingContractorsPage() {
  const trade = {
    name: 'Roofing Contractors',
    slug: 'roofing-contractors',
    description: 'Specialized insurance for roofing contractors working throughout Bergen County. From residential repairs to commercial installations, we protect against the unique height-related and weather risks roofers face.',
    heroImage: '/photos/new-roof.jpg',
  };

  const requirements = [
    'General Liability with roofing classification',
    'Workers Compensation with height work coverage',
    'Commercial Auto including boom trucks',
    'Tools & Equipment coverage',
    'Completed operations coverage',
    'Weather damage protection',
    'Installation warranty coverage',
    'Fall protection compliance',
  ];

  const commonRisks = [
    {
      risk: 'Fall Injuries',
      description: 'Worker falls from roofs and ladder accidents',
    },
    {
      risk: 'Property Damage',
      description: 'Damage to building interiors during roof work',
    },
    {
      risk: 'Weather Events',
      description: 'Storm damage to incomplete roofing projects',
    },
    {
      risk: 'Roof Leaks',
      description: 'Water infiltration after installation',
    },
    {
      risk: 'Wind Damage',
      description: 'Shingles blowing off after installation',
    },
    {
      risk: 'Structural Damage',
      description: 'Roof collapse or structural failures',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Height work and property damage protection',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Workers Compensation',
      description: 'Enhanced coverage for height-related injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Commercial Auto',
      description: 'Coverage for trucks and material transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Tools & Equipment',
      description: 'Protection for ladders, hoists, and tools',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Weather Coverage',
      description: 'Protection for storm-damaged projects',
      icon: CloudArrowDownIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'Warranty Coverage',
      description: 'Protection for workmanship warranties',
      icon: HomeModernIcon,
      href: '/business/construction/warranty',
    },
  ];

  const industryStats = {
    averagePremium: '$6,000-$15,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '22%',
    averageClaimSize: '$65,000',
  };

  const faqs = [
    {
      question: 'Why is roofing insurance more expensive than other trades?',
      answer: 'Roofing involves significant height exposure, weather-related risks, and potential for severe property damage claims. Workers comp rates are higher due to fall risks. However, safety programs, proper equipment, and experience credits can substantially reduce premiums.',
    },
    {
      question: 'What coverage do I need for storm damage claims?',
      answer: 'You need completed operations coverage for work already finished and builders risk or installation floater for ongoing projects. Consider higher limits during storm season and ensure your policy covers additional living expenses if homeowners must relocate.',
    },
    {
      question: 'Do I need special coverage for solar panel installation?',
      answer: 'Yes, solar roofing requires additional coverage for electrical work, manufacturer warranties, and performance guarantees. Many insurers offer specific solar endorsements. Ensure your policy covers both roofing and electrical aspects of solar installations.',
    },
    {
      question: 'How can roofing contractors reduce insurance costs?',
      answer: 'Implement fall protection programs, use safety equipment consistently, maintain detailed project documentation, avoid steep-slope work if possible, and consider limiting work to certain heights. Many insurers offer credits for safety certifications and drug testing programs.',
    },
  ];

  const localProjects = [
    'Bergen County Courthouse Roof Replacement',
    'Riverside Square Mall Re-roofing Project',
    'Hackensack High School Roof Renovation',
    'Fort Lee Residential Complex Storm Repairs',
    'Englewood Hospital Flat Roof System',
    'Paramus Shopping Centers Hurricane Recovery',
  ];

  return (
    <TradePageTemplate
      trade={trade}
      requirements={requirements}
      commonRisks={commonRisks}
      coverageOptions={coverageOptions}
      industryStats={industryStats}
      faqs={faqs}
      localProjects={localProjects}
    />
  );
}