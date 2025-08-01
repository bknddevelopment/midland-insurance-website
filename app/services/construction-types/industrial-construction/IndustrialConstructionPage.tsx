'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  CogIcon,
  ShieldCheckIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  FireIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline';

export default function IndustrialConstructionPage() {
  const trade = {
    name: 'Industrial Construction',
    slug: 'industrial-construction',
    description: 'Specialized insurance for industrial construction projects in Bergen County. Manufacturing facilities, warehouses, and specialized industrial buildings require unique coverage solutions.',
    heroImage: '/photos/industrial-construction-hero.jpg',
  };

  const requirements = [
    'High-limit General Liability coverage',
    'Builders Risk with equipment breakdown',
    'Environmental liability protection',
    'Professional liability for design-build',
    'Riggers liability for heavy equipment',
    'OSHA compliance documentation',
  ];

  const commonRisks = [
    {
      risk: 'Heavy Equipment Accidents',
      description: 'Crane collapses, rigging failures, equipment damage',
    },
    {
      risk: 'Environmental Exposure',
      description: 'Contamination, spills, or hazardous material handling',
    },
    {
      risk: 'Specialized System Failures',
      description: 'HVAC, electrical, or process system malfunctions',
    },
    {
      risk: 'Business Interruption',
      description: 'Delays causing client production losses',
    },
    {
      risk: 'Technical Specifications',
      description: 'Failure to meet precise industrial standards',
    },
    {
      risk: 'Worker Safety Incidents',
      description: 'High-risk environment injuries and OSHA violations',
    },
  ];

  const coverageOptions = [
    {
      name: 'Builders Risk Plus',
      description: 'Enhanced coverage for complex industrial projects',
      icon: CogIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'Environmental Liability',
      description: 'Pollution and contamination coverage',
      icon: BeakerIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Professional Liability',
      description: 'Design-build and engineering errors',
      icon: GlobeAmericasIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Equipment Breakdown',
      description: 'Specialized machinery and system coverage',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/equipment-breakdown',
    },
    {
      name: 'Excess Liability',
      description: 'High limits for catastrophic losses',
      icon: ShieldCheckIcon,
      href: '/business/construction/umbrella',
    },
    {
      name: 'Riggers Liability',
      description: 'Coverage for lifting and moving operations',
      icon: TruckIcon,
      href: '/business/construction/riggers-liability',
    },
  ];

  const industryStats = {
    averagePremium: '$25,000-$100,000+',
    typicalLimits: '$5M/$10M GL + Excess',
    percentWithClaims: '22%',
    averageClaimSize: '$275,000',
  };

  const faqs = [
    {
      question: 'Why is industrial construction insurance more expensive?',
      answer: 'Industrial construction involves higher risks due to specialized equipment, environmental exposures, complex systems, and potential for catastrophic losses. The technical nature of industrial facilities and strict compliance requirements also increase insurance costs.',
    },
    {
      question: 'What is riggers liability and do I need it?',
      answer: 'Riggers liability covers damage that occurs while lifting, moving, or installing heavy equipment or materials. If your industrial projects involve cranes, hoists, or moving large machinery, this coverage is essential to protect against dropping or damaging expensive equipment.',
    },
    {
      question: 'How does environmental liability apply to industrial construction?',
      answer: 'Industrial sites often have existing contamination or use hazardous materials during construction. Environmental liability covers cleanup costs, third-party damages, and regulatory fines. This is especially important for brownfield redevelopment or chemical facility construction.',
    },
    {
      question: 'What about coverage for specialized industrial equipment installation?',
      answer: 'Installation of specialized equipment like manufacturing lines, clean rooms, or process systems requires installation floater coverage. This protects the equipment during transport, storage, and installation until the owner accepts it.',
    },
  ];

  const localProjects = [
    'Meadowlands Industrial Park Development',
    'Port Authority Warehouse Complex',
    'Bergen County Water Treatment Facility',
    'Teterboro Airport Hangar Construction',
    'Hackensack River Distribution Center',
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