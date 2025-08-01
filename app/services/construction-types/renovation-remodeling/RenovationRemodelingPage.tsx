'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  HomeModernIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';

export default function RenovationRemodelingPage() {
  const trade = {
    name: 'Renovation & Remodeling',
    slug: 'renovation-remodeling',
    description: 'Specialized insurance for renovation and remodeling contractors in Bergen County. From kitchen updates to whole-house renovations, we protect your business against the unique risks of working in occupied homes.',
    heroImage: '/photos/renovation-remodeling-hero.jpg',
  };

  const requirements = [
    'General Liability with remodeling classification',
    'Property damage coverage for existing structures',
    'Workers Compensation for all employees',
    'NJ Home Improvement Contractor license bond',
    'Commercial Auto for service vehicles',
    'Care, custody, and control coverage',
  ];

  const commonRisks = [
    {
      risk: 'Existing Structure Damage',
      description: 'Damage to original building during renovation',
    },
    {
      risk: 'Discovery of Hidden Issues',
      description: 'Mold, asbestos, or structural problems uncovered',
    },
    {
      risk: 'Personal Property Claims',
      description: 'Damage to homeowner\'s furniture or belongings',
    },
    {
      risk: 'Dust and Debris',
      description: 'Damage from construction dust to HVAC or finishes',
    },
    {
      risk: 'Living Space Disruption',
      description: 'Claims for loss of use or temporary housing',
    },
    {
      risk: 'Matching Issues',
      description: 'Unable to match existing materials or finishes',
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
      name: 'Installation Floater',
      description: 'Coverage for materials and fixtures',
      icon: HomeModernIcon,
      href: '/business/construction/installation-floater',
    },
    {
      name: 'Tools & Equipment',
      description: 'Protection for specialized renovation tools',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Professional Liability',
      description: 'Design errors and omissions coverage',
      icon: PaintBrushIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Pollution Liability',
      description: 'Mold, lead, and asbestos coverage',
      icon: ExclamationTriangleIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Commercial Auto',
      description: 'Vehicle and mobile equipment coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
  ];

  const industryStats = {
    averagePremium: '$5,000-$15,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '20%',
    averageClaimSize: '$35,000',
  };

  const faqs = [
    {
      question: 'How is renovation insurance different from new construction?',
      answer: 'Renovation work involves unique risks like damage to existing structures, discovering hidden problems, and working around personal property. Your insurance needs specific coverage for care, custody, and control of the existing property, plus protection for mold or asbestos encounters.',
    },
    {
      question: 'What if we discover mold or asbestos during a project?',
      answer: 'Standard GL policies exclude mold and asbestos. You need pollution liability coverage for proper protection. If you discover these hazards, stop work immediately and follow proper protocols. We offer pollution coverage specifically for renovation contractors.',
    },
    {
      question: 'Do I need coverage for customer property in my care?',
      answer: 'Yes, standard GL excludes property in your care, custody, or control. You need an installation floater or inland marine coverage to protect materials, fixtures, and customer property during renovation. This is essential for kitchen and bath remodelers.',
    },
    {
      question: 'What about historic home renovations?',
      answer: 'Historic properties require specialized coverage due to unique materials, craftsmanship requirements, and preservation standards. We offer policies that cover the increased costs of matching historic materials and meeting preservation guidelines.',
    },
  ];

  const localProjects = [
    'Ridgewood Victorian Home Restorations',
    'Tenafly Kitchen & Bath Showroom Projects',
    'Englewood Historic District Renovations',
    'Fort Lee High-Rise Condo Remodels',
    'Glen Rock Whole-House Renovations',
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