'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  ShieldCheckIcon,
  BeakerIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function PlumbingContractorsPage() {
  const trade = {
    name: 'Plumbing Contractors',
    slug: 'plumbing-contractors',
    description: 'Tailored insurance solutions for plumbing contractors serving Bergen County. From emergency repairs to new construction, we protect against water damage claims and the unique risks plumbers face.',
    heroImage: '/photos/construction-tools.jpg',
  };

  const requirements = [
    'General Liability with water damage coverage',
    'Workers Compensation for all employees',
    'Commercial Auto for service vehicles',
    'Tools & Equipment protection',
    'Service line coverage endorsement',
    'Pollution liability for sewage backups',
    'Professional liability for system design',
    'License bonds as required',
  ];

  const commonRisks = [
    {
      risk: 'Water Damage',
      description: 'Pipe bursts, leaks, and flooding causing property damage',
    },
    {
      risk: 'Sewage Backups',
      description: 'Contamination and property damage from sewage overflow',
    },
    {
      risk: 'Frozen Pipes',
      description: 'Winter pipe bursts in vacant or unheated properties',
    },
    {
      risk: 'Gas Line Damage',
      description: 'Accidental damage to gas lines during work',
    },
    {
      risk: 'Mold Growth',
      description: 'Long-term water leaks leading to mold claims',
    },
    {
      risk: 'Excavation Damage',
      description: 'Hitting utilities or causing foundation issues',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Water damage and property protection coverage',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Tools & Equipment',
      description: 'Coverage for pipe cameras, locators, and tools',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Service vehicle and equipment transport coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Pollution Liability',
      description: 'Protection for sewage and contamination claims',
      icon: BeakerIcon,
      href: '/business/construction/pollution-liability',
    },
    {
      name: 'Service Line Coverage',
      description: 'Underground pipe and utility line protection',
      icon: HomeIcon,
      href: '/business/construction/service-line',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for employee injuries and illnesses',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$3,000-$8,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '16%',
    averageClaimSize: '$35,000',
  };

  const faqs = [
    {
      question: 'Does general liability cover all water damage claims?',
      answer: 'Standard GL policies cover sudden and accidental water damage, but may exclude gradual leaks, mold, or workmanship issues. Make sure your policy includes broad form property damage coverage and consider adding specific water damage endorsements for complete protection.',
    },
    {
      question: 'Do I need pollution liability as a plumber?',
      answer: 'Yes, especially if you work on septic systems, sewage lines, or commercial properties. Pollution liability covers contamination from sewage backups, chemical releases, and biological hazards that general liability typically excludes.',
    },
    {
      question: 'What coverage do I need for hydro-jetting and drain cleaning?',
      answer: 'Hydro-jetting requires specific coverage due to the high pressure that can damage pipes. Make sure your GL policy doesn\'t exclude this work and consider equipment breakdown coverage for your jetting equipment. Service line coverage is also important.',
    },
    {
      question: 'How can plumbers reduce insurance premiums?',
      answer: 'Use water leak detection devices, maintain proper licensing, implement written contracts with limitation of liability clauses, require deposits for large jobs, and maintain detailed service records. Many insurers offer discounts for green plumbing certifications.',
    },
  ];

  const localProjects = [
    'Bergen Regional Medical Center Plumbing Upgrade',
    'Edgewater Waterfront Development',
    'Paramus Public Schools Water System Renovation',
    'Hackensack Water Main Replacement Project',
    'Fort Lee High-Rise Plumbing Retrofits',
    'Ridgewood Village Water Conservation Initiative',
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