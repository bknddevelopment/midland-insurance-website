'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  FireIcon,
  CogIcon,
  ShieldCheckIcon,
  BeakerIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function HVACContractorsPage() {
  const trade = {
    name: 'HVAC Contractors',
    slug: 'hvac-contractors',
    description: 'Comprehensive insurance for heating, ventilation, and air conditioning contractors in Bergen County. From residential service to commercial installations, we protect against the unique risks of HVAC work.',
    heroImage: '/photos/hvac-work.jpg',
  };

  const requirements = [
    'General Liability with HVAC classification',
    'Workers Compensation for technicians',
    'Commercial Auto for service vehicles',
    'Tools & Equipment coverage',
    'Refrigerant/Pollution liability',
    'Installation floater coverage',
    'Professional liability for system design',
    'EPA certification compliance',
  ];

  const commonRisks = [
    {
      risk: 'Carbon Monoxide',
      description: 'Improper installation causing CO poisoning',
    },
    {
      risk: 'Refrigerant Leaks',
      description: 'Environmental damage and EPA violations',
    },
    {
      risk: 'Fire/Explosion',
      description: 'Gas furnace or electrical system failures',
    },
    {
      risk: 'Water Damage',
      description: 'Condensation leaks and drainage issues',
    },
    {
      risk: 'Equipment Failure',
      description: 'System breakdowns after installation',
    },
    {
      risk: 'Indoor Air Quality',
      description: 'Mold, bacteria, or contamination claims',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Protection for property damage and injuries',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Equipment Coverage',
      description: 'Tools, gauges, and recovery equipment protection',
      icon: CogIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Service vehicle and refrigerant transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Pollution Liability',
      description: 'Refrigerant leaks and environmental coverage',
      icon: BeakerIcon,
      href: '/business/construction/pollution-liability',
    },
    {
      name: 'Installation Floater',
      description: 'Coverage for equipment awaiting installation',
      icon: FireIcon,
      href: '/business/construction/installation-floater',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for technician injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$4,000-$10,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '15%',
    averageClaimSize: '$42,000',
  };

  const faqs = [
    {
      question: 'Why do HVAC contractors need pollution liability?',
      answer: 'HVAC work involves refrigerants that are regulated by the EPA. Accidental releases can result in environmental damage, cleanup costs, and regulatory fines. Pollution liability covers these exposures that general liability excludes, including Freon leaks and disposal issues.',
    },
    {
      question: 'What coverage do I need for carbon monoxide claims?',
      answer: 'CO poisoning claims can be severe. Ensure your general liability includes broad form coverage without pollution exclusions for CO. Consider higher limits and umbrella coverage. Proper installation documentation and CO detector requirements help defend against claims.',
    },
    {
      question: 'Do I need coverage for smart HVAC systems and IoT devices?',
      answer: 'Yes, smart thermostats and connected HVAC systems create cyber risks. If systems are hacked or malfunction, you could face liability. Add cyber liability coverage and ensure your professional liability covers technology-related errors.',
    },
    {
      question: 'How can HVAC contractors reduce insurance costs?',
      answer: 'Maintain EPA certifications, implement safety programs for ladder and electrical work, use combustion analyzers on every job, require maintenance agreements, and join professional associations like ACCA. Document all installations with photos and test results.',
    },
  ];

  const localProjects = [
    'Valley Hospital HVAC System Upgrade',
    'Bergen Town Center Climate Control Installation',
    'Hackensack Schools Energy Efficiency Retrofit',
    'Fort Lee Luxury Condos VRF Systems',
    'Paramus Corporate Park HVAC Renovation',
    'Englewood Health Center Air Quality Upgrade',
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