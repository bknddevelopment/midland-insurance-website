'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  MapIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

export default function InfrastructureProjectsPage() {
  const trade = {
    name: 'Infrastructure Projects',
    slug: 'infrastructure-projects',
    description: 'Comprehensive insurance for infrastructure and public works projects in Bergen County. Roads, bridges, utilities, and municipal projects require specialized coverage and compliance expertise.',
    heroImage: '/photos/infrastructure-projects-hero.jpg',
  };

  const requirements = [
    'Performance and payment bonds',
    'Public entity additional insured status',
    'Prevailing wage compliance',
    'OCIP/CCIP participation capability',
    'Environmental impairment liability',
    'Professional liability for design elements',
  ];

  const commonRisks = [
    {
      risk: 'Underground Utility Strikes',
      description: 'Damage to existing gas, water, or electrical lines',
    },
    {
      risk: 'Traffic Control Incidents',
      description: 'Accidents in work zones affecting public safety',
    },
    {
      risk: 'Environmental Impact',
      description: 'Stormwater runoff, erosion, or habitat disruption',
    },
    {
      risk: 'Public Inconvenience Claims',
      description: 'Business interruption or access issues',
    },
    {
      risk: 'Design Defects',
      description: 'Engineering errors in public infrastructure',
    },
    {
      risk: 'Weather Delays',
      description: 'Extended project timelines affecting public services',
    },
  ];

  const coverageOptions = [
    {
      name: 'Contract Bonds',
      description: 'Performance and payment bonds for public projects',
      icon: DocumentTextIcon,
      href: '/business/construction/surety-bonds',
    },
    {
      name: 'Railroad Protective',
      description: 'Coverage for work near rail corridors',
      icon: MapIcon,
      href: '/business/construction/railroad-protective',
    },
    {
      name: 'Builders Risk',
      description: 'Coverage for infrastructure under construction',
      icon: BuildingLibraryIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'Professional Liability',
      description: 'Design and engineering error coverage',
      icon: GlobeAmericasIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Pollution Liability',
      description: 'Environmental damage and cleanup coverage',
      icon: ExclamationTriangleIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Excess Liability',
      description: 'High limits for catastrophic claims',
      icon: ShieldCheckIcon,
      href: '/business/construction/umbrella',
    },
  ];

  const industryStats = {
    averagePremium: '$30,000-$150,000+',
    typicalLimits: '$5M/$10M GL minimum',
    percentWithClaims: '25%',
    averageClaimSize: '$350,000',
  };

  const faqs = [
    {
      question: 'What bonds are required for public infrastructure projects?',
      answer: 'Most public projects require bid bonds (1-5% of bid amount), performance bonds (100% of contract value), and payment bonds (100% of contract value). Some projects also require maintenance bonds covering 1-2 years after completion.',
    },
    {
      question: 'How do OCIP and CCIP programs work?',
      answer: 'Owner Controlled Insurance Programs (OCIP) and Contractor Controlled Insurance Programs (CCIP) provide centralized insurance for all project participants. These wrap-up programs can reduce costs and ensure consistent coverage but require careful administration.',
    },
    {
      question: 'What special coverage is needed for utility work?',
      answer: 'Utility infrastructure requires specialized coverage including underground utility locate protection, service interruption liability, and often railroad protective liability. Environmental coverage is essential for work near water supplies or contaminated sites.',
    },
    {
      question: 'How does prevailing wage affect insurance requirements?',
      answer: 'Prevailing wage projects require certified payroll and strict workers compensation compliance. Your insurance must reflect the higher wage rates, and you need coverage for wage and hour violations. We help ensure proper classification and coverage.',
    },
  ];

  const localProjects = [
    'Route 4/17 Interchange Improvements',
    'Hackensack River Bridge Rehabilitation',
    'Bergen County Sewer System Upgrade',
    'NJ Transit Station Modernization',
    'Meadowlands Flood Control Project',
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