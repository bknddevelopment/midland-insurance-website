'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

export default function GeneralLiabilityInsurancePage() {
  const coverageItems = [
    {
      title: 'Bodily Injury & Property Damage',
      description: 'Coverage for injuries or property damage your business causes to third parties'
    },
    {
      title: 'Products & Completed Operations',
      description: 'Protection against claims from products you sell or work you\'ve completed'
    },
    {
      title: 'Personal & Advertising Injury',
      description: 'Coverage for libel, slander, copyright infringement, and false advertising claims'
    },
    {
      title: 'Medical Payments',
      description: 'No-fault medical coverage for injuries occurring on your premises'
    },
    {
      title: 'Damage to Rented Premises',
      description: 'Coverage for damage to spaces you rent or lease for business operations'
    },
    {
      title: 'Legal Defense Costs',
      description: 'Attorney fees and court costs for covered claims, even if groundless'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Essential Protection',
      description: 'Foundation coverage every business needs to protect against common liability risks.'
    },
    {
      icon: UserGroupIcon,
      title: 'Industry-Specific Options',
      description: 'Tailored coverage with endorsements for your specific business type and risks.'
    },
    {
      icon: ChartBarIcon,
      title: 'Flexible Limits',
      description: 'Coverage limits from $1 million to higher amounts based on your needs.'
    }
  ];

  const faqItems = [
    {
      question: 'What does general liability insurance cover?',
      answer: 'It covers third-party claims for bodily injury, property damage, and personal/advertising injury. This includes slip-and-fall accidents, damage you cause at client sites, product liability, and defamation claims.'
    },
    {
      question: 'Is general liability insurance required?',
      answer: 'While not legally required in most cases, it\'s often mandatory for business licenses, commercial leases, client contracts, and loan agreements. It\'s considered essential protection for any business.'
    },
    {
      question: 'What\'s NOT covered by general liability?',
      answer: 'It doesn\'t cover employee injuries (need workers\' comp), auto accidents (need commercial auto), professional mistakes (need professional liability), or property damage to your own assets (need property insurance).'
    },
    {
      question: 'How much general liability coverage do I need?',
      answer: 'Most businesses start with $1 million per occurrence and $2 million aggregate. Higher-risk businesses, those with contracts requiring more, or those wanting extra protection may need $2-5 million or more.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="General Liability Insurance in New Jersey"
      heroSubtitle="Foundation Coverage for Every Business"
      heroDescription="Protect your business with comprehensive general liability insurance. Essential coverage for customer injuries, property damage, and the lawsuits that can threaten your success."
      
      overviewBadge="Core Protection"
      overviewTitle="The Coverage Every Business Needs"
      overviewContent="General liability insurance is the cornerstone of business protection. It shields your company from the most common risks you face every day – a customer slipping in your store, damage caused during a service call, or a product that doesn't perform as expected.\n\nAlso known as commercial general liability (CGL), this coverage is often the first policy businesses purchase and the one most frequently required by landlords, clients, and lenders. Without it, a single incident could result in devastating legal costs and damages that threaten your business survival."
      
      coverageTitle="Comprehensive Liability Protection"
      coverageDescription="Coverage for the risks every business faces"
      coverageItems={coverageItems}
      
      benefitsTitle="Why General Liability is Essential"
      benefitsDescription="Protect your business from common but costly risks"
      benefits={benefits}
      
      ctaTitle="Get Protected Today"
      ctaDescription="Don't operate without essential liability coverage. Get your quote now."
      ctaPrimaryButton={{
        text: 'Get Your Liability Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="General Liability FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Common Claims Examples Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Common General Liability Claims
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Real scenarios that happen to businesses every day
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ExclamationTriangleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Slip & Fall Accidents
                  </h3>
                  <p className="text-gray-600">
                    Customer injuries from wet floors, uneven surfaces, or poor lighting on your premises.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BuildingOfficeIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Property Damage
                  </h3>
                  <p className="text-gray-600">
                    Damage caused while working at client locations or by products you\'ve sold.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <HandRaisedIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Advertising Injury
                  </h3>
                  <p className="text-gray-600">
                    Claims of slander, libel, or copyright infringement in your marketing materials.
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