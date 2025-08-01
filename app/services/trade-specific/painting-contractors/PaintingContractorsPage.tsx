'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  PaintBrushIcon,
  BeakerIcon,
  ShieldCheckIcon,
  HomeIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function PaintingContractorsPage() {
  const trade = {
    name: 'Painting Contractors',
    slug: 'painting-contractors',
    description: 'Tailored insurance for painting contractors serving Bergen County. From residential repaints to commercial coatings, we protect against overspray, surface damage, and environmental risks.',
    heroImage: '/photos/residential-painting.jpg',
  };

  const requirements = [
    'General Liability with painting classification',
    'Workers Compensation for painters',
    'Commercial Auto for work vehicles',
    'Tools & Equipment coverage',
    'Lead paint liability coverage',
    'Overspray protection endorsement',
    'Care, custody & control coverage',
    'Environmental liability for disposal',
  ];

  const commonRisks = [
    {
      risk: 'Overspray Damage',
      description: 'Paint drift damaging vehicles and property',
    },
    {
      risk: 'Lead Paint Exposure',
      description: 'Health claims from lead paint removal',
    },
    {
      risk: 'Surface Damage',
      description: 'Damage to floors, furniture, and fixtures',
    },
    {
      risk: 'Chemical Exposure',
      description: 'Fumes and solvent-related health issues',
    },
    {
      risk: 'Falls from Heights',
      description: 'Ladder and scaffold accidents',
    },
    {
      risk: 'Paint Failure',
      description: 'Peeling, bubbling, or color mismatch claims',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Overspray and property damage protection',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Lead Paint Liability',
      description: 'RRP compliance and lead exposure coverage',
      icon: BeakerIcon,
      href: '/business/construction/environmental',
    },
    {
      name: 'Commercial Auto',
      description: 'Vehicle and equipment transport coverage',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Tools & Equipment',
      description: 'Sprayers, lifts, and tool protection',
      icon: PaintBrushIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Property Coverage',
      description: 'Care, custody & control protection',
      icon: HomeIcon,
      href: '/business/property',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for painter injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$2,500-$6,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '11%',
    averageClaimSize: '$25,000',
  };

  const faqs = [
    {
      question: 'What is overspray coverage and why do I need it?',
      answer: 'Overspray coverage protects against paint drift damaging nearby property like cars, buildings, or landscaping. Standard GL policies often exclude or limit this coverage. Given Bergen County\'s density, overspray claims are common and can be expensive.',
    },
    {
      question: 'Do I need special insurance for lead paint work?',
      answer: 'Yes, lead paint removal requires RRP certification and specialized liability coverage. Standard policies often exclude lead-related claims. You need pollution liability and specific lead paint endorsements, plus higher limits due to potential health claims.',
    },
    {
      question: 'What coverage protects customer property in my care?',
      answer: 'Care, custody, and control coverage protects property you\'re working on or have temporary control over. This includes furniture moved for painting, floors covered with drop cloths, and fixtures removed during work. Standard GL typically excludes this.',
    },
    {
      question: 'How can painting contractors reduce insurance costs?',
      answer: 'Use low-VOC paints, maintain RRP certification, implement spray booth procedures, use proper ventilation, avoid lead paint work if possible, and maintain detailed project documentation. Many insurers offer credits for green painting certifications.',
    },
  ];

  const localProjects = [
    'Palisades Park Residential Revitalization',
    'Bergen County Administration Building',
    'Hackensack River Waterfront Condos',
    'Paramus School District Summer Painting',
    'Fort Lee Commercial Plaza Restoration',
    'Englewood Downtown Beautification Project',
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