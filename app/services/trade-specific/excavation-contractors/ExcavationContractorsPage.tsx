'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  TruckIcon,
  CogIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

export default function ExcavationContractorsPage() {
  const trade = {
    name: 'Excavation Contractors',
    slug: 'excavation-contractors',
    description: 'Comprehensive insurance for excavation contractors in Bergen County. From utility work to site preparation, we protect against underground damage, earth movement, and heavy equipment risks.',
    heroImage: '/photos/construction-excavation.jpg',
  };

  const requirements = [
    'General Liability with XCU coverage',
    'Workers Compensation for operators',
    'Commercial Auto for dump trucks',
    'Heavy equipment coverage',
    'Underground utility damage protection',
    'Subsidence and collapse coverage',
    'Environmental/pollution liability',
    'Blasting coverage (if applicable)',
  ];

  const commonRisks = [
    {
      risk: 'Utility Strikes',
      description: 'Hitting gas, electric, water, or fiber optic lines',
    },
    {
      risk: 'Cave-ins/Collapse',
      description: 'Trench collapse causing injuries or death',
    },
    {
      risk: 'Property Subsidence',
      description: 'Adjacent building foundation damage',
    },
    {
      risk: 'Equipment Accidents',
      description: 'Excavator strikes and tip-overs',
    },
    {
      risk: 'Environmental Damage',
      description: 'Soil contamination and erosion issues',
    },
    {
      risk: 'Road Damage',
      description: 'Heavy equipment damaging streets',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'XCU (explosion, collapse, underground) coverage',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Equipment Coverage',
      description: 'Excavators, loaders, and heavy machinery',
      icon: CogIcon,
      href: '/business/construction/equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Dump trucks and equipment transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Underground Coverage',
      description: 'Utility damage and subsidence protection',
      icon: GlobeAmericasIcon,
      href: '/business/construction/underground',
    },
    {
      name: 'Environmental Liability',
      description: 'Contamination and pollution coverage',
      icon: FireIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Workers Compensation',
      description: 'High-risk occupation coverage',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$10,000-$30,000',
    typicalLimits: '$2M/$4M GL',
    percentWithClaims: '24%',
    averageClaimSize: '$125,000',
  };

  const faqs = [
    {
      question: 'What is XCU coverage and why is it critical for excavators?',
      answer: 'XCU (Explosion, Collapse, Underground) coverage is essential for excavation work. Standard GL policies often exclude these hazards. XCU coverage protects against gas line explosions, trench collapses, and underground utility damage - the most common and severe excavation claims.',
    },
    {
      question: 'How much does hitting a fiber optic line typically cost?',
      answer: 'Fiber optic strikes can result in claims exceeding $500,000 due to service interruption and repair costs. Always call 811 before digging, use ground penetrating radar when needed, and maintain adequate liability limits. Consider excess liability coverage for catastrophic losses.',
    },
    {
      question: 'Do I need environmental liability coverage?',
      answer: 'Yes, excavation often encounters contaminated soil, underground tanks, or creates erosion issues. Environmental liability covers cleanup costs, third-party damages, and regulatory fines. This is especially important in Bergen County\'s developed areas with industrial history.',
    },
    {
      question: 'How can excavation contractors reduce insurance costs?',
      answer: 'Always call 811, use trench boxes and shoring systems, maintain equipment safety features, implement daily inspection protocols, and avoid high-risk work like blasting. GPS machine control and operator training programs can qualify for significant premium credits.',
    },
  ];

  const localProjects = [
    'Route 17 Infrastructure Improvement',
    'Hackensack River Cleanup Excavation',
    'Bergen County Utilities Modernization',
    'Meadowlands Development Site Prep',
    'Fort Lee Water Main Replacement',
    'Teterboro Airport Expansion Earthwork',
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