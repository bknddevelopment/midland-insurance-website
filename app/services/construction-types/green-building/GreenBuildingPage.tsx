'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  SunIcon,
  ShieldCheckIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function GreenBuildingPage() {
  const trade = {
    name: 'Green Building',
    slug: 'green-building',
    description: 'Comprehensive insurance for sustainable construction and green building projects in Bergen County. LEED certification, solar installations, and energy-efficient construction require specialized coverage.',
    heroImage: '/photos/green-building-hero.jpg',
  };

  const requirements = [
    'General Liability with green building endorsements',
    'Professional liability for LEED certification',
    'Solar panel installation coverage',
    'Environmental impairment liability',
    'Equipment breakdown for green systems',
    'Green upgrade cost coverage',
  ];

  const commonRisks = [
    {
      risk: 'Certification Failures',
      description: 'Not achieving LEED or Energy Star certification',
    },
    {
      risk: 'New Technology Defects',
      description: 'Failures in solar, geothermal, or smart systems',
    },
    {
      risk: 'Performance Shortfalls',
      description: 'Systems not meeting energy efficiency targets',
    },
    {
      risk: 'Material Sourcing Issues',
      description: 'Sustainable materials unavailable or defective',
    },
    {
      risk: 'Green Roof Failures',
      description: 'Leaks or structural issues with living roofs',
    },
    {
      risk: 'Indoor Air Quality',
      description: 'VOC or ventilation system problems',
    },
  ];

  const coverageOptions = [
    {
      name: 'Green Building Coverage',
      description: 'Protection for sustainable construction methods',
      icon: SunIcon,
      href: '/business/construction/green-building',
    },
    {
      name: 'Professional Liability',
      description: 'LEED certification and design errors',
      icon: ChartBarIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Solar Installation',
      description: 'Coverage for photovoltaic system installation',
      icon: BoltIcon,
      href: '/business/construction/solar-coverage',
    },
    {
      name: 'Equipment Breakdown',
      description: 'Green technology system failures',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/equipment-breakdown',
    },
    {
      name: 'Environmental Liability',
      description: 'Sustainable material and IAQ issues',
      icon: BeakerIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Performance Bonds',
      description: 'Energy efficiency guarantee coverage',
      icon: ArrowPathIcon,
      href: '/business/construction/performance-bonds',
    },
  ];

  const industryStats = {
    averagePremium: '$10,000-$30,000',
    typicalLimits: '$2M/$4M GL',
    percentWithClaims: '14%',
    averageClaimSize: '$85,000',
  };

  const faqs = [
    {
      question: 'What special coverage is needed for LEED projects?',
      answer: 'LEED projects need professional liability for certification failures, green building property endorsements for sustainable materials, and often performance bonds for energy efficiency. We also recommend coverage for additional costs if green materials need replacement.',
    },
    {
      question: 'How does insurance cover solar panel installations?',
      answer: 'Solar installations require specialized coverage including installation floater for panels during installation, professional liability for system design, and coverage for roof penetrations. Many carriers now offer specific solar installation endorsements.',
    },
    {
      question: 'What if sustainable materials cost more to replace?',
      answer: 'Green upgrade coverage pays the additional cost to replace damaged sustainable materials with equivalent green alternatives. This is important because eco-friendly materials often cost more than conventional options, and standard policies may not cover the difference.',
    },
    {
      question: 'Do I need special coverage for energy performance guarantees?',
      answer: 'Yes, if you guarantee energy savings or performance metrics, you need professional liability coverage and possibly performance bonds. Standard GL excludes performance guarantees. We can arrange specialized coverage for energy performance contracts.',
    },
  ];

  const localProjects = [
    'Hackensack LEED Platinum Office Tower',
    'Bergen Community College Solar Installation',
    'Ridgewood Net-Zero Homes Development',
    'Teaneck Green Roof Municipal Building',
    'Fort Lee Energy-Efficient High-Rise',
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