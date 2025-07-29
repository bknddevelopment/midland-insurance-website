'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function BusinessPropertyInsurancePage() {
  const coverageItems = [
    {
      title: 'Building Coverage',
      description: 'Protection for owned buildings including structures, fixtures, and permanently installed equipment'
    },
    {
      title: 'Business Personal Property',
      description: 'Coverage for furniture, equipment, inventory, and supplies inside your business'
    },
    {
      title: 'Business Income',
      description: 'Lost income and operating expenses if your business is forced to close due to covered damage'
    },
    {
      title: 'Equipment Breakdown',
      description: 'Protection for mechanical breakdown of heating, cooling, electrical, and production equipment'
    },
    {
      title: 'Outdoor Property',
      description: 'Coverage for signs, fences, and property in the open on your premises'
    },
    {
      title: 'Valuable Papers',
      description: 'Protection for important documents and records including cost to recreate'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Coverage',
      description: 'All-risk protection with replacement cost coverage for maximum protection.'
    },
    {
      icon: UserGroupIcon,
      title: 'Customized Solutions',
      description: 'Policies tailored to your property type, location, and business operations.'
    },
    {
      icon: ChartBarIcon,
      title: 'Loss Prevention',
      description: 'Risk assessment and prevention strategies to minimize claims and reduce premiums.'
    }
  ];

  const faqItems = [
    {
      question: 'What perils are covered by business property insurance?',
      answer: 'Standard policies cover fire, lightning, explosion, windstorm, hail, smoke, vandalism, theft, and more. Flood and earthquake require separate policies. "All-risk" policies cover everything except specifically excluded perils.'
    },
    {
      question: 'What\'s the difference between actual cash value and replacement cost?',
      answer: 'Actual cash value pays the depreciated value of damaged property. Replacement cost pays to replace items with new ones of similar kind and quality. Replacement cost provides better protection but costs slightly more.'
    },
    {
      question: 'Do I need business income coverage?',
      answer: 'Yes, if a covered loss would disrupt your operations. It pays ongoing expenses like rent, payroll, and loan payments while you\'re closed, plus lost profits. Most businesses can\'t afford months without income.'
    },
    {
      question: 'Is property of others covered?',
      answer: 'Yes, most policies include coverage for property of others in your care, custody, or control. This includes customer property being serviced, consignment goods, and leased equipment.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Business Property Insurance in New Jersey"
      heroSubtitle="Protect Your Business Assets"
      heroDescription="Comprehensive property insurance for New Jersey businesses. Protect your building, equipment, inventory, and income with coverage designed for commercial properties."
      
      overviewBadge="Asset Protection"
      overviewTitle="Safeguard Your Business Investment"
      overviewContent="Your business property represents years of hard work and investment. From your building and equipment to inventory and business income, you need comprehensive protection against the unexpected. Fire, theft, storms, and other disasters can strike without warning, potentially destroying everything you've built.\n\nBusiness property insurance provides the financial protection you need to rebuild and recover. Beyond just replacing damaged property, it can cover lost income while you're closed for repairs, ensuring your business survives even major disasters. Don't let a single incident erase years of success."
      
      coverageTitle="Complete Property Protection"
      coverageDescription="Coverage for all your business assets and income"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Our Property Coverage"
      benefitsDescription="Protection that helps you rebuild and recover"
      benefits={benefits}
      
      ctaTitle="Protect Your Business Assets"
      ctaDescription="Get a property insurance quote tailored to your business needs and risks."
      ctaPrimaryButton={{
        text: 'Get Your Property Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Business Property Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Types of Properties Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Properties We Protect
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Specialized coverage for every type of business property
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BuildingOfficeIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Office Buildings
                  </h3>
                  <p className="text-gray-600">
                    Professional offices, medical buildings, and multi-tenant properties.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ComputerDesktopIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Retail & Restaurants
                  </h3>
                  <p className="text-gray-600">
                    Stores, shopping centers, restaurants, and hospitality businesses.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <CurrencyDollarIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Industrial & Warehouse
                  </h3>
                  <p className="text-gray-600">
                    Manufacturing facilities, warehouses, and distribution centers.
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