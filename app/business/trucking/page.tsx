'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  TruckIcon,
  MapIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function TruckingInsurancePage() {
  const coverageItems = [
    {
      title: 'Primary Liability',
      description: 'Required coverage for bodily injury and property damage caused by your trucks'
    },
    {
      title: 'Physical Damage',
      description: 'Comprehensive and collision coverage for your trucks and trailers'
    },
    {
      title: 'Motor Truck Cargo',
      description: 'Protection for freight you\'re hauling against damage, theft, or loss'
    },
    {
      title: 'General Liability',
      description: 'Coverage for non-trucking operations like loading/unloading and premises liability'
    },
    {
      title: 'Non-Trucking Liability',
      description: 'Bobtail coverage for owner-operators when not under dispatch'
    },
    {
      title: 'Trailer Interchange',
      description: 'Coverage for non-owned trailers in your possession under written agreement'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'DOT Compliance',
      description: 'Coverage that meets federal and state requirements including required filings.'
    },
    {
      icon: UserGroupIcon,
      title: 'Trucking Expertise',
      description: 'Specialists who understand trucking operations, regulations, and unique risks.'
    },
    {
      icon: ChartBarIcon,
      title: 'Fleet Programs',
      description: 'Competitive rates for owner-operators to large fleets with safety incentives.'
    }
  ];

  const faqItems = [
    {
      question: 'What insurance is required for commercial trucking?',
      answer: 'The FMCSA requires $750,000 to $5 million in liability coverage depending on cargo type. Most truckers also need physical damage, cargo, and general liability coverage. State requirements may vary.'
    },
    {
      question: 'What affects trucking insurance costs?',
      answer: 'Premiums depend on driving records, cargo type, operating radius, vehicle age, safety programs, and claims history. Long-haul operations and hazmat typically cost more than local delivery.'
    },
    {
      question: 'Do owner-operators need different coverage?',
      answer: 'Owner-operators need primary liability when under dispatch and non-trucking liability (bobtail) for personal use. They may also need physical damage, occupational accident, and cargo coverage.'
    },
    {
      question: 'What\'s the difference between primary and general liability?',
      answer: 'Primary liability covers accidents while driving. General liability covers other business operations like loading/unloading injuries, cargo handling damage, and premises accidents.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Commercial Trucking Insurance in New Jersey"
      heroSubtitle="Keep Your Trucks Rolling"
      heroDescription="Comprehensive trucking insurance for owner-operators and fleets. From local delivery to long-haul operations, we provide the coverage required to keep you compliant and protected."
      
      overviewBadge="Transportation Coverage"
      overviewTitle="Insurance That Keeps America Moving"
      overviewContent="The trucking industry faces unique challenges and regulations that require specialized insurance solutions. Whether you're an owner-operator with one truck or manage a large fleet, you need coverage that protects your vehicles, cargo, and business while meeting complex regulatory requirements.\n\nOur trucking insurance programs are designed by specialists who understand your industry. We provide the required coverages for DOT compliance, protect against the specific risks you face on the road, and help you manage costs through safety programs and fleet discounts. Let us handle your insurance so you can focus on delivering."
      
      coverageTitle="Complete Trucking Protection"
      coverageDescription="Specialized coverage for all trucking operations"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Trucking Insurance"
      benefitsDescription="Industry expertise that drives your success"
      benefits={benefits}
      
      ctaTitle="Get Rolling with the Right Coverage"
      ctaDescription="Get a trucking insurance quote that meets your needs and regulatory requirements."
      ctaPrimaryButton={{
        text: 'Get Your Trucking Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Trucking Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Types of Operations Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Trucking Operations We Cover
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Specialized coverage for every type of trucking business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <TruckIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    For-Hire Truckers
                  </h3>
                  <p className="text-gray-600">
                    General freight, flatbed, refrigerated, and specialized commodity haulers.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <MapIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Delivery
                  </h3>
                  <p className="text-gray-600">
                    Box trucks, straight trucks, and local cartage operations.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ClipboardDocumentCheckIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Specialty Hauling
                  </h3>
                  <p className="text-gray-600">
                    Auto haulers, tankers, hazmat, heavy haul, and other specialized operations.
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