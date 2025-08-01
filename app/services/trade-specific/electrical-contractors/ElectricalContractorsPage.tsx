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

export default function ElectricalContractorsPage() {
  const trade = {
    name: 'Electrical Contractors',
    slug: 'electrical-contractors',
    description: 'Comprehensive insurance protection for electrical contractors in Bergen County. From residential service calls to commercial installations, we understand the unique risks electricians face every day.',
    heroImage: '/photos/electricians-hero.jpg',
  };

  const requirements = [
    'General Liability with electrical classification',
    'Workers Compensation for all employees',
    'Commercial Auto for service vehicles',
    'Tools & Equipment coverage',
    'Professional Liability for design work',
    'Completed operations coverage',
    'License bonds where required',
    'Cyber liability for smart home installations',
  ];

  const commonRisks = [
    {
      risk: 'Electrical Fires',
      description: 'Faulty wiring or connections causing property damage',
    },
    {
      risk: 'Shock/Electrocution',
      description: 'Injuries to third parties from electrical work',
    },
    {
      risk: 'Power Surges',
      description: 'Damage to customer equipment and appliances',
    },
    {
      risk: 'Code Violations',
      description: 'Work not meeting NEC or local code requirements',
    },
    {
      risk: 'Arc Flash Injuries',
      description: 'Severe burns and injuries from electrical arcs',
    },
    {
      risk: 'Underground Utility Damage',
      description: 'Hitting gas lines or other utilities during excavation',
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
      description: 'Coverage for meters, testers, and specialized tools',
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
      description: 'Errors in electrical system design or consulting',
      icon: BoltIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Cyber Liability',
      description: 'Protection for smart home and IoT installations',
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
    averagePremium: '$4,500-$12,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '14%',
    averageClaimSize: '$55,000',
  };

  const faqs = [
    {
      question: 'Why do electrical contractors pay higher insurance premiums?',
      answer: 'Electrical work carries inherent risks of fire, shock, and property damage. Insurance companies rate electrical contractors in higher risk categories due to the potential severity of claims. However, experienced contractors with good safety records can qualify for credits and competitive rates.',
    },
    {
      question: 'Do I need professional liability as an electrical contractor?',
      answer: 'If you provide electrical system design, energy audits, or consulting services, professional liability is essential. It covers errors in your professional advice or design work that general liability excludes. This is especially important for commercial and industrial projects.',
    },
    {
      question: 'What coverage do I need for solar panel installations?',
      answer: 'Solar work requires additional coverage for roof penetrations, system performance guarantees, and potential fire risks. Many insurers offer solar installation endorsements or specialized policies. Make sure your policy covers both the electrical and roofing aspects of solar work.',
    },
    {
      question: 'How can I reduce my electrical contractor insurance costs?',
      answer: 'Implement documented safety programs, maintain all required licenses and certifications, join professional associations like NECA, use proper testing equipment, and maintain a clean claims history. Many insurers offer discounts for OSHA training and continuing education.',
    },
  ];

  const localProjects = [
    'Bergen County LED Street Light Conversion',
    'Paramus Park Mall EV Charging Installation',
    'Englewood Hospital Electrical Upgrade',
    'Fort Lee Residential Tower Rewiring',
    'Hackensack Smart Building Systems',
    'Teaneck Data Center Power Infrastructure',
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