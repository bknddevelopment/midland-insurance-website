'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  Cog6ToothIcon,
  FireIcon,
  BeakerIcon,
  TruckIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

export default function HVACContractorsPage() {
  const trade = {
    name: 'HVAC Contractors',
    slug: 'hvac-contractors',
    description: 'Comprehensive insurance for heating, ventilation, and air conditioning contractors in Bergen County. From residential service to commercial installations, we protect HVAC professionals.',
    heroImage: '/photos/hvac-contractors-hero.jpg',
  };

  const requirements = [
    'General Liability with HVAC classification',
    'Workers Compensation for technicians',
    'Commercial Auto for service vehicles',
    'Tools & Equipment coverage',
    'Pollution liability for refrigerants',
    'Professional liability for system design',
  ];

  const commonRisks = [
    {
      risk: 'Carbon Monoxide',
      description: 'Faulty installation causing CO poisoning',
    },
    {
      risk: 'Refrigerant Leaks',
      description: 'Environmental damage from refrigerant release',
    },
    {
      risk: 'Fire Damage',
      description: 'Furnace or electrical fires from HVAC work',
    },
    {
      risk: 'Water Damage',
      description: 'Condensation leaks or frozen coils',
    },
    {
      risk: 'Equipment Failure',
      description: 'System failures after installation/repair',
    },
    {
      risk: 'Indoor Air Quality',
      description: 'Mold or contamination from poor ventilation',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Coverage for property damage and injuries',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Pollution Liability',
      description: 'Refrigerant leak and environmental coverage',
      icon: BeakerIcon,
      href: '/business/environmental',
    },
    {
      name: 'Professional Liability',
      description: 'System design and efficiency guarantees',
      icon: Cog6ToothIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Commercial Auto',
      description: 'Service trucks with equipment coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Installation Floater',
      description: 'Equipment coverage before installation',
      icon: FireIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Cyber Liability',
      description: 'Smart HVAC system hacking protection',
      icon: BoltIcon,
      href: '/business/cyber-liability',
    },
  ];

  const industryStats = {
    averagePremium: '$4,000-$10,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '15%',
    averageClaimSize: '$40,000',
  };

  const faqs = [
    {
      question: 'Do I need pollution liability for HVAC work?',
      answer: 'Yes, especially if you work with refrigerants. EPA regulations make you liable for environmental damage from refrigerant releases. Standard GL policies exclude pollution, so this separate coverage is essential for HVAC contractors.',
    },
    {
      question: 'What about coverage for energy efficiency guarantees?',
      answer: 'If you guarantee energy savings or system performance, you need professional liability. General liability won\'t cover claims that your system didn\'t deliver promised efficiency. This is increasingly important with green building requirements.',
    },
    {
      question: 'How does seasonal work affect HVAC insurance?',
      answer: 'Insurance premiums are typically based on annual revenue, so seasonal fluctuations are already factored in. However, you may be able to adjust coverage during slow seasons. We can structure policies to match your business cycle.',
    },
    {
      question: 'What safety measures reduce HVAC insurance costs?',
      answer: 'EPA certification, NATE certification, carbon monoxide detectors during furnace work, refrigerant recovery procedures, and documented maintenance programs all help reduce premiums. Safety training specific to HVAC risks is particularly valuable.',
    },
  ];

  const localProjects = [
    'Bergen County Courthouse HVAC Upgrade',
    'Paramus Mall Climate Control Systems',
    'Hackensack Medical Center Ventilation',
    'Fort Lee Residential Tower Installations',
    'Ridgewood Schools Energy Efficiency Retrofit',
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