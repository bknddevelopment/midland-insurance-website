'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  BoltIcon,
  FireIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function ElectriciansPage() {
  const trade = {
    name: 'Electricians',
    slug: 'electricians',
    description: 'Comprehensive insurance protection for electrical contractors in Bergen County. From residential service calls to commercial installations, we understand the unique risks electricians face.',
    heroImage: '/photos/electricians-hero.jpg',
  };

  const requirements = [
    'General Liability with electrical classification',
    'Workers Compensation for all employees',
    'Commercial Auto for service vehicles',
    'Tools & Equipment coverage',
    'License bonds where required',
    'Completed operations coverage essential',
  ];

  const commonRisks = [
    {
      risk: 'Electrical Fires',
      description: 'Faulty wiring or connections causing fire damage',
    },
    {
      risk: 'Shock Injuries',
      description: 'Third-party electrocution or shock claims',
    },
    {
      risk: 'Power Surges',
      description: 'Damage to customer equipment from electrical work',
    },
    {
      risk: 'Code Violations',
      description: 'Work not meeting electrical code requirements',
    },
    {
      risk: 'Tool Theft',
      description: 'Expensive meters and tools stolen from vehicles',
    },
    {
      risk: 'Underground Utilities',
      description: 'Damage to buried cables or pipes during work',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Protection for electrical fires and shock injuries',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Tools & Equipment',
      description: 'Coverage for meters, testers, and hand tools',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Service vehicle and mobile equipment coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Professional Liability',
      description: 'Errors in design or code compliance',
      icon: BoltIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Cyber Liability',
      description: 'Protection for smart home system hacks',
      icon: FireIcon,
      href: '/business/cyber-liability',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for employee electrical injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$3,500-$8,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '12%',
    averageClaimSize: '$45,000',
  };

  const faqs = [
    {
      question: 'What makes electrician insurance different from general contractor coverage?',
      answer: 'Electrician insurance is specifically rated for electrical work risks like fires, shocks, and power surges. Your classification code reflects these higher hazards, but specialized carriers understand your business and offer competitive rates with proper coverage.',
    },
    {
      question: 'Do I need professional liability as an electrician?',
      answer: 'If you design electrical systems, provide engineering services, or offer consultations, professional liability is important. It covers errors in your professional advice or design work that general liability excludes.',
    },
    {
      question: 'How can I reduce my electrician insurance premiums?',
      answer: 'Safety programs, continuing education, proper licensing, and membership in professional associations can reduce premiums. Using circuit testers, lockout/tagout procedures, and maintaining a clean claims history also help lower costs.',
    },
    {
      question: 'What about coverage for solar panel installations?',
      answer: 'Solar work often requires additional coverage due to roof work and new technology risks. We can add solar installation endorsements to your policy or arrange specialized coverage for this growing market segment.',
    },
  ];

  const localProjects = [
    'Bergen County Courthouse LED Retrofit',
    'Paramus Mall EV Charging Stations',
    'Hackensack University Medical Center Expansion',
    'Fort Lee Residential Tower Wiring',
    'Ridgewood Smart Home Installations',
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