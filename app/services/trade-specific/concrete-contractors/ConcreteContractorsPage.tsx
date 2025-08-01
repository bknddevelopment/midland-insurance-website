'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  CubeIcon,
  CogIcon,
  ShieldCheckIcon,
  TruckIcon,
  HomeIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function ConcreteContractorsPage() {
  const trade = {
    name: 'Concrete Contractors',
    slug: 'concrete-contractors',
    description: 'Comprehensive insurance for concrete and foundation contractors in Bergen County. From residential driveways to commercial foundations, we protect against structural risks and heavy equipment exposures.',
    heroImage: '/photos/concrete-foundation.jpg',
  };

  const requirements = [
    'General Liability with concrete classification',
    'Workers Compensation for crew members',
    'Commercial Auto for mixer trucks',
    'Heavy equipment coverage',
    'Completed operations (10+ years)',
    'Professional liability for design work',
    'Environmental/pollution coverage',
    'Subsidence and earth movement coverage',
  ];

  const commonRisks = [
    {
      risk: 'Foundation Failure',
      description: 'Structural defects causing building damage',
    },
    {
      risk: 'Concrete Spills',
      description: 'Property damage from mixer truck spills',
    },
    {
      risk: 'Cracking/Settlement',
      description: 'Long-term structural movement claims',
    },
    {
      risk: 'Equipment Accidents',
      description: 'Pump truck boom strikes and tip-overs',
    },
    {
      risk: 'Form Collapse',
      description: 'Formwork failure during concrete pours',
    },
    {
      risk: 'Underground Damage',
      description: 'Utility strikes during excavation',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Long-term completed operations coverage',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Equipment Coverage',
      description: 'Pumps, mixers, and heavy machinery protection',
      icon: CogIcon,
      href: '/business/construction/equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Mixer trucks and equipment transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Professional Liability',
      description: 'Foundation design and engineering errors',
      icon: HomeIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Pollution Liability',
      description: 'Concrete washout and environmental claims',
      icon: CubeIcon,
      href: '/business/construction/pollution-liability',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for heavy labor injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$8,000-$20,000',
    typicalLimits: '$2M/$4M GL',
    percentWithClaims: '19%',
    averageClaimSize: '$95,000',
  };

  const faqs = [
    {
      question: 'Why do concrete contractors need extended completed operations?',
      answer: 'Concrete and foundation problems often appear years after completion. Cracking, settlement, and structural failures can result in massive claims. Extended completed operations (10+ years) protects against these long-tail exposures that standard policies might not cover.',
    },
    {
      question: 'What coverage do I need for concrete pumping?',
      answer: 'Concrete pumping requires specialized coverage for boom strikes, tip-overs, and high-pressure line bursts. Ensure your equipment coverage includes pumps and your liability covers third-party property damage from concrete spray or spills.',
    },
    {
      question: 'Do I need professional liability for foundation work?',
      answer: 'If you design foundations, recommend specifications, or provide engineering advice, professional liability is essential. It covers errors in judgment that general liability excludes. This is especially important for commercial and complex residential projects.',
    },
    {
      question: 'How can concrete contractors reduce insurance premiums?',
      answer: 'Document concrete mix designs and testing, use written contracts with clear specifications, implement equipment maintenance programs, and maintain ACI certifications. Avoiding high-risk work like caissons or underpinning can also reduce rates.',
    },
  ];

  const localProjects = [
    'MetLife Stadium Foundation Reinforcement',
    'Hudson River Waterfront Infrastructure',
    'Route 4 Bridge Replacement Project',
    'Bergen County Parking Structures',
    'Hackensack Medical Center Expansion Foundation',
    'Fort Lee High-Rise Foundation Systems',
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