'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  BuildingOfficeIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  UsersIcon,
  TruckIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function GeneralContractorsPage() {
  const trade = {
    name: 'General Contractors',
    slug: 'general-contractors',
    description: 'Complete insurance solutions for general contractors managing construction projects throughout Bergen County. From residential renovations to commercial developments, we protect every aspect of your business.',
    heroImage: '/photos/construction-site.jpg',
  };

  const requirements = [
    'General Liability with products/completed operations',
    'Builders Risk for active projects',
    'Commercial Property for offices and storage',
    'Commercial Auto for company vehicles',
    'Workers Compensation for all employees',
    'Umbrella policy for additional protection',
    'Professional Liability for design-build projects',
    'Performance and Payment Bonds when required',
  ];

  const commonRisks = [
    {
      risk: 'Subcontractor Issues',
      description: 'Liability from uninsured or underinsured subcontractors',
    },
    {
      risk: 'Project Delays',
      description: 'Financial losses from weather, material shortages, or labor issues',
    },
    {
      risk: 'Construction Defects',
      description: 'Claims arising from faulty workmanship or materials',
    },
    {
      risk: 'Jobsite Injuries',
      description: 'Worker injuries and third-party accidents on construction sites',
    },
    {
      risk: 'Property Damage',
      description: 'Damage to existing structures during renovation work',
    },
    {
      risk: 'Contract Disputes',
      description: 'Legal costs from project disagreements and change orders',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Comprehensive protection for bodily injury and property damage',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Builders Risk',
      description: 'Coverage for projects under construction',
      icon: BuildingOfficeIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'Commercial Auto',
      description: 'Fleet coverage for trucks and equipment transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Workers Compensation',
      description: 'Required coverage for employee injuries',
      icon: UsersIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Performance Bonds',
      description: 'Guarantee project completion for clients',
      icon: DocumentCheckIcon,
      href: '/business/construction/bonds',
    },
    {
      name: 'Professional Liability',
      description: 'Errors & omissions for design-build services',
      icon: ScaleIcon,
      href: '/business/construction/professional-liability',
    },
  ];

  const industryStats = {
    averagePremium: '$15,000-$50,000',
    typicalLimits: '$2M/$4M GL',
    percentWithClaims: '18%',
    averageClaimSize: '$85,000',
  };

  const faqs = [
    {
      question: 'What insurance is required for general contractors in New Jersey?',
      answer: 'New Jersey requires workers compensation for all employees and general liability is typically required by clients and property owners. Most projects also require performance bonds and additional insured endorsements. Bergen County municipalities may have specific insurance requirements for permits.',
    },
    {
      question: 'How can I protect myself from subcontractor claims?',
      answer: 'Require certificates of insurance from all subs showing adequate general liability and workers comp coverage. Add subcontractor default insurance or contingent liability coverage to your policy. Use written contracts with hold harmless agreements and maintain additional insured status on their policies.',
    },
    {
      question: 'Do I need builders risk insurance for every project?',
      answer: 'Builders risk is essential for new construction and major renovations. For smaller projects, your general liability may provide some coverage, but builders risk offers superior protection for materials, equipment, and the structure itself during construction.',
    },
    {
      question: 'How are general contractor insurance premiums calculated?',
      answer: 'Premiums are based on annual revenue, payroll, types of projects, claims history, and safety programs. Residential work typically costs less than commercial. Having proper contracts, safety protocols, and experienced staff can significantly reduce your rates.',
    },
  ];

  const localProjects = [
    'The Modern Englewood - Luxury Condominiums',
    'Bergen County Justice Center Renovation',
    'Hackensack Meridian Health Expansion',
    'Fort Lee High School Addition',
    'Ridgewood Shopping District Redevelopment',
    'Teaneck Community Center Construction',
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