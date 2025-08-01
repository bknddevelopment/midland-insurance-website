'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  FireIcon,
  ShieldCheckIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  BeakerIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function EmergencyRestorationPage() {
  const trade = {
    name: 'Emergency Restoration',
    slug: 'emergency-restoration',
    description: 'Specialized insurance for emergency restoration contractors in Bergen County. Fire, water, and storm damage restoration requires immediate response and comprehensive coverage for high-risk work.',
    heroImage: '/photos/emergency-restoration-hero.jpg',
  };

  const requirements = [
    '24/7 emergency response capability',
    'Pollution liability for mold and contaminants',
    'Bailee\'s coverage for customer property',
    'Commercial Auto with emergency vehicle coverage',
    'High-limit General Liability',
    'Workers Comp with high-risk classifications',
  ];

  const commonRisks = [
    {
      risk: 'Secondary Damage',
      description: 'Additional damage during restoration process',
    },
    {
      risk: 'Mold Growth',
      description: 'Mold developing after water damage restoration',
    },
    {
      risk: 'Contents Damage',
      description: 'Damage to customer\'s personal property',
    },
    {
      risk: 'Hazardous Materials',
      description: 'Asbestos, lead paint, or chemical exposure',
    },
    {
      risk: 'Structural Collapse',
      description: 'Working in compromised buildings',
    },
    {
      risk: 'Time-Sensitive Claims',
      description: 'Delays causing additional damage or loss',
    },
  ];

  const coverageOptions = [
    {
      name: 'Pollution Liability',
      description: 'Mold, asbestos, and biohazard coverage',
      icon: BeakerIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Bailee\'s Coverage',
      description: 'Protection for customer property in your care',
      icon: ShieldCheckIcon,
      href: '/business/construction/bailees-coverage',
    },
    {
      name: 'Emergency Vehicle',
      description: 'Coverage for 24/7 response vehicles',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Equipment Coverage',
      description: 'Restoration equipment and tools',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Professional Liability',
      description: 'Errors in assessment or restoration',
      icon: FireIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Business Interruption',
      description: 'Coverage for your emergency operations',
      icon: ClockIcon,
      href: '/business/business-interruption',
    },
  ];

  const industryStats = {
    averagePremium: '$12,000-$35,000',
    typicalLimits: '$2M/$4M GL + Pollution',
    percentWithClaims: '28%',
    averageClaimSize: '$75,000',
  };

  const faqs = [
    {
      question: 'Why is pollution liability essential for restoration contractors?',
      answer: 'Restoration work often involves mold, sewage, asbestos, or other contaminants. Standard GL policies exclude pollution, leaving you exposed to major claims. Pollution liability covers cleanup costs, third-party damages, and legal defense for contamination claims.',
    },
    {
      question: 'What is bailee\'s coverage and why do I need it?',
      answer: 'Bailee\'s coverage protects customer property in your care during restoration - furniture, electronics, documents, etc. Without it, you\'re responsible for any damage or loss to these items during cleaning, storage, or transport. This is critical for contents restoration.',
    },
    {
      question: 'How does 24/7 emergency response affect insurance needs?',
      answer: 'Emergency response increases risks due to rushed conditions, night work, and compromised structures. You need higher liability limits, emergency vehicle coverage, and often excess liability. Employee safety programs and proper equipment are essential for managing premiums.',
    },
    {
      question: 'What coverage is needed for biohazard and trauma cleanup?',
      answer: 'Biohazard cleanup requires specialized pollution liability covering bloodborne pathogens, crime scene cleanup, and proper disposal. You also need professional liability for proper remediation protocols and potentially higher workers compensation coverage for the increased risks.',
    },
  ];

  const localProjects = [
    'Hurricane Ida Flood Restoration - Hackensack',
    'Fort Lee High-Rise Fire Damage Recovery',
    'Bergen County Municipal Building Water Damage',
    'Paramus Mall Pipe Burst Emergency Response',
    'Teaneck Apartment Complex Mold Remediation',
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