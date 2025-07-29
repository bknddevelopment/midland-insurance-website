'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

export default function CommercialAutoInsurancePage() {
  const coverageItems = [
    {
      title: 'Liability Coverage',
      description: 'Protection for bodily injury and property damage your vehicles cause to others'
    },
    {
      title: 'Physical Damage Coverage',
      description: 'Comprehensive and collision coverage for your commercial vehicles'
    },
    {
      title: 'Medical Payments',
      description: 'Coverage for medical expenses for drivers and passengers regardless of fault'
    },
    {
      title: 'Uninsured/Underinsured Motorist',
      description: 'Protection when other drivers lack adequate insurance coverage'
    },
    {
      title: 'Hired & Non-Owned Auto',
      description: 'Coverage for vehicles you rent or employees use for business purposes'
    },
    {
      title: 'Cargo Coverage',
      description: 'Protection for goods and materials being transported in your vehicles'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Fleet-Friendly Coverage',
      description: 'Whether you have one vehicle or a hundred, we provide scalable solutions with fleet discounts.'
    },
    {
      icon: UserGroupIcon,
      title: 'Industry Expertise',
      description: 'Specialized coverage for contractors, delivery services, sales fleets, and more.'
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Management',
      description: 'Fleet safety programs and telematics options to help reduce premiums and claims.'
    }
  ];

  const faqItems = [
    {
      question: 'What vehicles need commercial auto insurance?',
      answer: 'Any vehicle used for business purposes needs commercial coverage, including cars, vans, trucks, and specialty vehicles. This includes vehicles owned by the business, leased vehicles, and sometimes employee vehicles used for work.'
    },
    {
      question: 'How is commercial auto different from personal auto insurance?',
      answer: 'Commercial auto insurance offers higher liability limits, covers business-related risks, protects multiple drivers, and includes specialized coverages like hired/non-owned auto. Personal policies typically exclude business use.'
    },
    {
      question: 'Do my employees need to be listed on the policy?',
      answer: 'All regular drivers should be listed. Some policies allow "any driver" coverage for larger fleets. Driver records affect premiums, so maintaining hiring and training standards is important.'
    },
    {
      question: 'What factors affect commercial auto premiums?',
      answer: 'Premiums depend on vehicle types, usage, radius of operation, driver records, cargo transported, safety features, and claims history. We help identify ways to reduce costs while maintaining proper coverage.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Commercial Auto Insurance in New Jersey"
      heroSubtitle="Keep Your Business Moving Forward"
      heroDescription="Comprehensive commercial auto insurance for New Jersey businesses. Protect your vehicles, drivers, and bottom line with coverage designed for how you work."
      
      overviewBadge="Fleet Protection"
      overviewTitle="Coverage That Drives Your Success"
      overviewContent="Your commercial vehicles are essential to your business operations. Whether you're making deliveries, visiting job sites, or meeting clients, you need insurance that protects your vehicles, drivers, and business from the unique risks of commercial driving.\n\nCommercial auto insurance goes beyond personal coverage to address business-specific needs like higher liability limits, multiple drivers, and specialized vehicle uses. We work with businesses of all sizes to create customized auto insurance programs that provide comprehensive protection while managing costs."
      
      coverageTitle="Complete Commercial Auto Protection"
      coverageDescription="Coverage designed for business vehicles and operations"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Commercial Auto"
      benefitsDescription="Expert solutions for your business vehicle needs"
      benefits={benefits}
      
      ctaTitle="Protect Your Business Vehicles"
      ctaDescription="Get a commercial auto insurance quote tailored to your fleet and operations."
      ctaPrimaryButton={{
        text: 'Get Your Commercial Auto Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Commercial Auto Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Types of Businesses We Cover Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Industries We Protect
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Specialized commercial auto solutions for every industry
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <TruckIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Contractors & Trades
                  </h3>
                  <p className="text-gray-600">
                    Pickups, vans, and specialty vehicles for construction and service businesses.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <UsersIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sales & Service
                  </h3>
                  <p className="text-gray-600">
                    Coverage for sales fleets, service technicians, and business travel.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Delivery & Transport
                  </h3>
                  <p className="text-gray-600">
                    Box trucks, cargo vans, and delivery vehicles with cargo protection.
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