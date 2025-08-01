'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  GlobeAmericasIcon,
  BeakerIcon,
  ShieldCheckIcon,
  TruckIcon,
  CloudIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function LandscapingContractorsPage() {
  const trade = {
    name: 'Landscaping Contractors',
    slug: 'landscaping-contractors',
    description: 'Tailored insurance for landscaping contractors throughout Bergen County. From lawn maintenance to hardscaping and snow removal, we protect against pesticide liability, property damage, and seasonal risks.',
    heroImage: '/photos/landscaping-project.jpg',
  };

  const requirements = [
    'General Liability with landscaping classification',
    'Workers Compensation for crews',
    'Commercial Auto for trucks and trailers',
    'Equipment coverage for mowers and tools',
    'Pesticide/herbicide liability',
    'Snow removal coverage (seasonal)',
    'Tree work liability endorsement',
    'Completed operations coverage',
  ];

  const commonRisks = [
    {
      risk: 'Pesticide Drift',
      description: 'Chemical overspray damaging neighboring properties',
    },
    {
      risk: 'Tree Damage',
      description: 'Falling branches or trees hitting structures',
    },
    {
      risk: 'Property Damage',
      description: 'Mower strikes to windows, cars, or utilities',
    },
    {
      risk: 'Slip and Fall',
      description: 'Ice-related injuries during snow removal',
    },
    {
      risk: 'Underground Utilities',
      description: 'Hitting gas, water, or cable lines',
    },
    {
      risk: 'Equipment Theft',
      description: 'Expensive mowers and tools stolen from sites',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Property damage and bodily injury protection',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Pesticide Liability',
      description: 'Chemical application and drift coverage',
      icon: BeakerIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Commercial Auto',
      description: 'Trucks, trailers, and equipment transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Equipment Coverage',
      description: 'Mowers, trimmers, and tool protection',
      icon: GlobeAmericasIcon,
      href: '/business/construction/equipment',
    },
    {
      name: 'Snow Removal',
      description: 'Slip/fall and snow damage liability',
      icon: CloudIcon,
      href: '/business/snow-removal-insurance',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for crew member injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$3,500-$8,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '13%',
    averageClaimSize: '$28,000',
  };

  const faqs = [
    {
      question: 'Do I need separate coverage for snow removal services?',
      answer: 'Yes, snow removal significantly increases your liability exposure. Many GL policies exclude or limit snow/ice operations. You need specific snow removal endorsements or a separate policy, especially for slip-and-fall claims which can be severe in Bergen County winters.',
    },
    {
      question: 'What insurance covers pesticide and fertilizer applications?',
      answer: 'Pesticide/herbicide liability coverage is essential if you apply any chemicals. This includes fertilizers with weed control. Standard GL often excludes pollution claims. You need specialized coverage that includes drift, overspray, and groundwater contamination.',
    },
    {
      question: 'Am I covered for tree work and removal?',
      answer: 'Limited tree trimming may be covered under landscaping GL, but tree removal, work above 15 feet, or near power lines requires additional coverage. Consider arborist liability endorsements or a separate tree care policy for this higher-risk work.',
    },
    {
      question: 'How can landscapers reduce insurance premiums?',
      answer: 'Maintain pesticide licenses, avoid tree work over 15 feet, use written contracts for snow removal with hold-harmless agreements, implement equipment maintenance programs, and join associations like NJLCA. Separating high-risk services into different entities can also help.',
    },
  ];

  const localProjects = [
    'Bergen County Parks Maintenance Contract',
    'Ridgewood Downtown Beautification',
    'Corporate Park Landscape Management - Paramus',
    'Fort Lee Residential HOA Services',
    'Hackensack Riverwalk Development',
    'Tenafly Nature Center Trail Restoration',
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