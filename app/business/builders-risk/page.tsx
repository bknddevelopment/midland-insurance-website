'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function BuildersRiskInsurancePage() {
  const coverageItems = [
    {
      title: 'Building Under Construction',
      description: 'Coverage for the structure being built, including materials and supplies on-site'
    },
    {
      title: 'Equipment & Tools',
      description: 'Protection for construction equipment, tools, and machinery at the job site'
    },
    {
      title: 'Soft Costs',
      description: 'Coverage for additional expenses like loan interest, real estate taxes, and advertising costs due to delays'
    },
    {
      title: 'Materials in Transit',
      description: 'Protection for building materials while being transported to the construction site'
    },
    {
      title: 'Theft & Vandalism',
      description: 'Coverage for losses due to theft of materials or vandalism at the construction site'
    },
    {
      title: 'Natural Disasters',
      description: 'Protection against damage from storms, wind, hail, and other weather-related perils'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Project-Specific Coverage',
      description: 'Tailored policies that match your construction timeline and specific project risks.'
    },
    {
      icon: UserGroupIcon,
      title: 'Construction Expertise',
      description: 'We understand construction projects and can help structure coverage for any size job.'
    },
    {
      icon: ChartBarIcon,
      title: 'Flexible Terms',
      description: 'Coverage that starts when you break ground and converts to permanent property insurance upon completion.'
    }
  ];

  const faqItems = [
    {
      question: 'When should I purchase builders risk insurance?',
      answer: 'Builders risk coverage should be in place before any materials are delivered to the site or construction begins. The policy can be purchased by the property owner, general contractor, or subcontractor depending on contractual requirements.'
    },
    {
      question: 'What\'s not covered by builders risk insurance?',
      answer: 'Typically excludes employee injuries (covered by workers\' comp), auto accidents, professional errors, earthquakes (unless added), and normal wear and tear. Faulty workmanship may also be excluded.'
    },
    {
      question: 'How long does builders risk coverage last?',
      answer: 'Policies are typically written for the expected duration of construction, usually 3 to 12 months. Extensions are available if the project takes longer than anticipated. Coverage ends when construction is complete or the property is occupied.'
    },
    {
      question: 'Who should be named on the builders risk policy?',
      answer: 'All parties with a financial interest should be named, including the property owner, general contractor, subcontractors, and lenders. This ensures everyone is protected and helps avoid disputes.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Builders Risk Insurance in New Jersey"
      heroSubtitle="Protect Your Construction Investment"
      heroDescription="Comprehensive builders risk insurance coverage for construction projects throughout New Jersey. Safeguard your investment from groundbreaking to grand opening."
      
      overviewBadge="Construction Coverage"
      overviewTitle="Coverage That Builds With Your Project"
      overviewContent="Construction projects face unique risks that standard property insurance doesn't cover. From the moment materials arrive on site until the final certificate of occupancy, builders risk insurance protects your investment against damage, theft, and unexpected delays.\n\nWhether you're building a single-family home, renovating a commercial property, or managing a large development project, our builders risk policies provide essential protection. We work with contractors, developers, and property owners to ensure comprehensive coverage that matches the scope and timeline of each project."
      
      coverageTitle="What Builders Risk Insurance Covers"
      coverageDescription="Comprehensive protection throughout the construction process"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Builders Risk"
      benefitsDescription="Expert guidance for construction insurance needs"
      benefits={benefits}
      
      ctaTitle="Protect Your Construction Project"
      ctaDescription="Get a builders risk insurance quote tailored to your specific project needs."
      ctaPrimaryButton={{
        text: 'Get Your Builders Risk Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Builders Risk Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Types of Projects Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Projects We Protect
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From small renovations to major developments
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BuildingOfficeIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    New Construction
                  </h3>
                  <p className="text-gray-600">
                    Ground-up construction of homes, commercial buildings, and multi-unit developments.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Renovations
                  </h3>
                  <p className="text-gray-600">
                    Major renovations, additions, and remodeling projects for existing structures.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ClockIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Installation Projects
                  </h3>
                  <p className="text-gray-600">
                    Installation of major equipment, infrastructure improvements, and specialty construction.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}