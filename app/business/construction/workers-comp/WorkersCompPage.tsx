'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  UserGroupIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function WorkersCompPage() {
  const service = {
    name: 'Workers\' Compensation Insurance',
    slug: 'workers-comp',
    description: 'New Jersey required workers compensation coverage for construction businesses. Protect your employees and your business with comprehensive workplace injury insurance.',
    shortDescription: 'State-mandated coverage that protects both employees and employers when workplace injuries occur on construction sites.',
  };

  const overview = {
    title: 'Essential Protection for Your Construction Team',
    content: 'Workers\' compensation insurance is required by New Jersey law for all construction businesses with employees. It provides medical benefits and wage replacement to employees injured on the job while protecting employers from lawsuits. In the high-risk construction industry, workers comp is not just a legal requirement—it\'s essential business protection.',
    highlights: [
      'Required by NJ law for all employees',
      'Covers medical expenses and lost wages',
      'Protects against employee lawsuits',
      'Includes rehabilitation benefits',
      'Experience modification available',
    ],
  };

  const coverage = {
    title: 'What Workers\' Comp Covers',
    items: [
      {
        name: 'Medical Expenses',
        description: 'All reasonable and necessary medical treatment for work injuries',
        included: true,
      },
      {
        name: 'Lost Wages',
        description: 'Partial wage replacement during recovery (typically 70% in NJ)',
        included: true,
      },
      {
        name: 'Disability Benefits',
        description: 'Compensation for permanent partial or total disability',
        included: true,
      },
      {
        name: 'Death Benefits',
        description: 'Benefits to dependents if a work-related death occurs',
        included: true,
      },
      {
        name: 'Rehabilitation',
        description: 'Vocational rehabilitation to return employees to work',
        included: true,
      },
      {
        name: 'Legal Defense',
        description: 'Defense against improper claims',
        included: true,
      },
      {
        name: 'Independent Contractors',
        description: 'Coverage for 1099 contractors (not covered)',
        included: false,
      },
      {
        name: 'Intentional Injuries',
        description: 'Injuries from horseplay or intoxication',
        included: false,
      },
    ],
  };

  const whoNeeds = {
    title: 'NJ Workers\' Comp Requirements',
    subtitle: 'Mandatory coverage for construction employers',
    items: [
      {
        type: 'All Employers',
        description: 'Any construction business with W-2 employees must carry coverage',
        icon: UserGroupIcon,
      },
      {
        type: 'Sole Proprietors',
        description: 'Optional but recommended; often required by GCs',
        icon: DocumentCheckIcon,
      },
      {
        type: 'LLCs with Employees',
        description: 'Required even if owners exclude themselves',
        icon: ScaleIcon,
      },
      {
        type: 'Subcontractors',
        description: 'GCs require subs to show proof of coverage',
        icon: ShieldCheckIcon,
      },
      {
        type: 'High-Risk Trades',
        description: 'Roofers, framers, and demolition have higher requirements',
        icon: ExclamationTriangleIcon,
      },
      {
        type: 'Union Contractors',
        description: 'Must meet union-specific coverage requirements',
        icon: CurrencyDollarIcon,
      },
    ],
  };

  const benefits = {
    title: 'Benefits of Our Workers\' Comp Program',
    items: [
      {
        benefit: 'Competitive Rates',
        description: 'Access to multiple carriers ensures best pricing for your class code',
      },
      {
        benefit: 'Pay-As-You-Go Options',
        description: 'Avoid large deposits with payroll-based premium payments',
      },
      {
        benefit: 'Safety Programs',
        description: 'Free safety resources to reduce claims and lower premiums',
      },
      {
        benefit: 'Claims Management',
        description: 'Dedicated claims team familiar with construction injuries',
      },
      {
        benefit: 'Return-to-Work Programs',
        description: 'Get employees back to work safely and reduce claim costs',
      },
      {
        benefit: 'Certificate Service',
        description: 'Fast certificate issuance for contracts and compliance',
      },
    ],
  };

  const costFactors = {
    title: 'Workers\' Comp Premium Factors',
    factors: [
      'Construction classification codes',
      'Annual payroll by class',
      'Experience modification factor',
      'Claims history (3-year lookback)',
      'Safety programs and training',
      'Subcontractor usage',
      'Premium payment method',
      'Carrier loss control requirements',
    ],
  };

  const claims = {
    title: 'Common Construction Workers\' Comp Claims',
    examples: [
      {
        scenario: 'Roofer Falls from Ladder',
        coverage: 'Medical treatment, surgery, and 6 months lost wages',
        outcome: '$85,000 total benefits paid',
      },
      {
        scenario: 'Back Injury Lifting Materials',
        coverage: 'Physical therapy and partial disability',
        outcome: '$45,000 in medical and indemnity',
      },
      {
        scenario: 'Circular Saw Accident',
        coverage: 'Emergency care, surgery, and permanent partial disability',
        outcome: '$125,000 lifetime benefits',
      },
    ],
  };

  const faqs = [
    {
      question: 'What are typical workers\' comp rates for construction in NJ?',
      answer: 'Rates vary significantly by trade. Clerical work may be 0.5% of payroll while roofing can exceed 20%. Your specific rate depends on classification, experience mod, and claims history. We\'ll provide exact rates for your business.',
    },
    {
      question: 'Can owners exclude themselves from coverage?',
      answer: 'In New Jersey, sole proprietors, partners, and LLC members can exclude themselves but must file specific forms. However, many general contractors require all individuals on site to be covered, so exclusion may limit your work opportunities.',
    },
    {
      question: 'What is an experience modification factor?',
      answer: 'Your "mod" compares your claims history to similar businesses. New businesses start at 1.0. Good safety records can reduce it below 1.0 (saving money), while poor records increase it above 1.0 (costing more).',
    },
    {
      question: 'Do I need workers\' comp for 1099 subcontractors?',
      answer: 'Generally no, but NJ strictly enforces employee classification. If the state determines your "1099s" are actually employees, you\'ll owe back premiums, penalties, and potential claims. We recommend proper classification review.',
    },
    {
      question: 'What happens if I don\'t have workers\' comp?',
      answer: 'Operating without required coverage in NJ results in stop-work orders, fines of $5,000+, personal liability for all medical costs, and potential criminal charges. It also disqualifies you from most construction contracts.',
    },
  ];

  const relatedServices = [
    {
      name: 'General Liability',
      description: 'Third-party injury protection',
      href: '/business/construction/general-liability',
    },
    {
      name: 'Disability Insurance',
      description: 'Income protection for owners',
      href: '/personal/disability',
    },
    {
      name: 'Employment Practices',
      description: 'Protection from employment lawsuits',
      href: '/business/employment-practices',
    },
  ];

  return (
    <ConstructionServiceTemplate
      service={service}
      overview={overview}
      coverage={coverage}
      whoNeeds={whoNeeds}
      benefits={benefits}
      costFactors={costFactors}
      claims={claims}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}