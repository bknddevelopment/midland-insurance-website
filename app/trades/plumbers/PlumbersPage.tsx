'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  WrenchIcon,
  BeakerIcon,
  ShieldCheckIcon,
  TruckIcon,
  HomeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

export default function PlumbersPage() {
  const trade = {
    name: 'Plumbers',
    slug: 'plumbers',
    description: 'Tailored insurance solutions for plumbing contractors in Bergen County. From emergency repairs to new construction, we protect plumbers against water damage claims and liability risks.',
    heroImage: '/photos/plumbers-hero.jpg',
  };

  const requirements = [
    'General Liability with water damage coverage',
    'Workers Compensation for employees',
    'Commercial Auto for service vehicles',
    'Tools & Equipment coverage',
    'Pollution liability for sewage work',
    'Professional liability for design work',
  ];

  const commonRisks = [
    {
      risk: 'Water Damage',
      description: 'Burst pipes or faulty connections causing flooding',
    },
    {
      risk: 'Mold Growth',
      description: 'Water leaks leading to mold damage claims',
    },
    {
      risk: 'Sewage Backup',
      description: 'Blockages causing sewage damage to property',
    },
    {
      risk: 'Gas Line Work',
      description: 'Errors in gas fitting causing leaks or explosions',
    },
    {
      risk: 'Frozen Pipes',
      description: 'Winter pipe bursts in vacant properties',
    },
    {
      risk: 'Underground Utilities',
      description: 'Damage to buried pipes or cables during excavation',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Essential coverage for water damage and bodily injury',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Pollution Liability',
      description: 'Coverage for sewage backup and contamination',
      icon: BeakerIcon,
      href: '/business/environmental',
    },
    {
      name: 'Tools & Equipment',
      description: 'Protect pipe cameras, tools, and machinery',
      icon: WrenchIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Service trucks and van coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Installation Floater',
      description: 'Coverage for fixtures before installation',
      icon: HomeIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Umbrella Policy',
      description: 'Extra protection for large water damage claims',
      icon: ExclamationCircleIcon,
      href: '/business/umbrella',
    },
  ];

  const industryStats = {
    averagePremium: '$3,000-$7,500',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '18%',
    averageClaimSize: '$55,000',
  };

  const faqs = [
    {
      question: 'Why is plumber insurance more expensive than some other trades?',
      answer: 'Water damage claims can be extensive and expensive. A small leak can cause hundreds of thousands in damage if not caught quickly. Insurance reflects this higher risk, but proper coverage protects your business from devastating claims.',
    },
    {
      question: 'Do I need pollution liability for residential plumbing?',
      answer: 'If you work on septic systems, sewage lines, or do any excavation work, pollution liability is important. Standard GL policies often exclude pollution claims, leaving a significant coverage gap for plumbers.',
    },
    {
      question: 'What about coverage for work in high-rise buildings?',
      answer: 'High-rise work may require higher liability limits due to the potential for water damage to multiple floors. Some carriers also have height restrictions. We work with carriers experienced in commercial plumbing risks.',
    },
    {
      question: 'How can I reduce my plumbing insurance costs?',
      answer: 'Written contracts, pressure testing procedures, proper winterization protocols, and avoiding certain high-risk work (like swimming pools) can reduce premiums. Safety training and water damage prevention programs also help.',
    },
  ];

  const localProjects = [
    'Hackensack Water Main Replacement',
    'Bergen County Jail Plumbing Retrofit',
    'Paramus Shopping Centers Upgrades',
    'Fort Lee High-Rise Repipe Projects',
    'Ridgewood Restaurant Renovations',
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