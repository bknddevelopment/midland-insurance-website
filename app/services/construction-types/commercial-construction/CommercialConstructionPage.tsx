'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function CommercialConstructionPage() {
  const trade = {
    name: 'Commercial Construction',
    slug: 'commercial-construction',
    description: 'Comprehensive insurance solutions for commercial construction projects in Bergen County. From office buildings to retail centers, we protect your business against the unique risks of commercial development.',
    heroImage: '/photos/commercial-construction-hero.jpg',
  };

  const requirements = [
    'General Liability minimum $1M/$2M',
    'Builders Risk for project value',
    'Commercial Auto for all vehicles',
    'Workers Compensation for all employees',
    'Umbrella policy for projects over $5M',
    'Subcontractor insurance certificates',
  ];

  const commonRisks = [
    {
      risk: 'Construction Defects',
      description: 'Structural issues or building envelope failures',
    },
    {
      risk: 'Schedule Delays',
      description: 'Weather, material shortages, or labor issues causing delays',
    },
    {
      risk: 'Third-Party Injuries',
      description: 'Injuries to visitors, tenants, or passersby',
    },
    {
      risk: 'Property Damage',
      description: 'Damage to existing structures or neighboring properties',
    },
    {
      risk: 'Contract Disputes',
      description: 'Claims related to scope changes or payment issues',
    },
    {
      risk: 'Environmental Liability',
      description: 'Pollution or contamination during construction',
    },
  ];

  const coverageOptions = [
    {
      name: 'Builders Risk',
      description: 'Coverage for buildings under construction',
      icon: BuildingOfficeIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'General Liability',
      description: 'Protection against third-party claims',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Professional Liability',
      description: 'Design-build and construction management errors',
      icon: ScaleIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Equipment Coverage',
      description: 'Cranes, excavators, and specialized equipment',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Fleet and specialized vehicle coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Excess Liability',
      description: 'Additional limits for large projects',
      icon: CurrencyDollarIcon,
      href: '/business/construction/umbrella',
    },
  ];

  const industryStats = {
    averagePremium: '$15,000-$50,000',
    typicalLimits: '$2M/$4M GL + Excess',
    percentWithClaims: '18%',
    averageClaimSize: '$125,000',
  };

  const faqs = [
    {
      question: 'What insurance do I need for commercial construction in Bergen County?',
      answer: 'Commercial construction requires comprehensive coverage including General Liability, Builders Risk, Workers Compensation, and Commercial Auto. Bergen County projects often require higher limits due to property values. We recommend umbrella coverage for projects over $5 million.',
    },
    {
      question: 'How is Builders Risk different from General Liability?',
      answer: 'Builders Risk covers the actual building under construction against damage from fire, weather, theft, and vandalism. General Liability covers third-party bodily injury and property damage claims. Both are essential for commercial construction projects.',
    },
    {
      question: 'Do I need to verify subcontractor insurance?',
      answer: 'Yes, always collect certificates of insurance from all subcontractors showing adequate General Liability and Workers Compensation. Without proper verification, you could be liable for their accidents. We can help set up a certificate tracking system.',
    },
    {
      question: 'What about coverage for green building projects?',
      answer: 'Green building and LEED projects may require specialized coverage for sustainable materials, certification costs, and environmental standards. We offer endorsements specifically designed for sustainable construction projects in New Jersey.',
    },
  ];

  const localProjects = [
    'The Modern Englewood - Mixed-Use Development',
    'Hackensack University Medical Center Pavilion',
    'Bergen Town Center Renovation',
    'Teaneck Corporate Center',
    'Fort Lee High-Rise Office Complex',
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