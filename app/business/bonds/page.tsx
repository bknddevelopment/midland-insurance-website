'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

export default function BondsPage() {
  const coverageItems = [
    {
      title: 'Contract/Performance Bonds',
      description: 'Guarantee that contractors will complete projects according to contract terms and specifications'
    },
    {
      title: 'Payment Bonds',
      description: 'Ensure subcontractors and suppliers are paid, protecting property owners from liens'
    },
    {
      title: 'License & Permit Bonds',
      description: 'Required by government agencies to obtain licenses for various business activities'
    },
    {
      title: 'Court/Judicial Bonds',
      description: 'Required in legal proceedings including appeal bonds, guardian bonds, and estate bonds'
    },
    {
      title: 'Fidelity Bonds',
      description: 'Protect businesses from employee dishonesty, theft, and fraudulent acts'
    },
    {
      title: 'Public Official Bonds',
      description: 'Guarantee faithful performance of duties by elected or appointed officials'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Fast Approvals',
      description: 'Quick turnaround times with instant approval for many bond types and qualified applicants.'
    },
    {
      icon: UserGroupIcon,
      title: 'Bond Expertise',
      description: 'Specialists who understand bonding requirements and can guide you through the process.'
    },
    {
      icon: ChartBarIcon,
      title: 'Competitive Rates',
      description: 'Access to multiple surety companies ensures you get the best rates for your situation.'
    }
  ];

  const faqItems = [
    {
      question: 'What\'s the difference between bonds and insurance?',
      answer: 'Insurance protects you from losses, while bonds protect your customers or the public. With a bond, if a claim is paid, you must reimburse the surety company. Bonds are a form of credit that guarantee your performance or compliance.'
    },
    {
      question: 'How much do bonds cost?',
      answer: 'Bond premiums typically range from 0.5% to 3% of the bond amount for qualified applicants. Rates depend on bond type, amount, your credit score, financial strength, and experience. Some bonds have flat fees regardless of amount.'
    },
    {
      question: 'What do I need to get bonded?',
      answer: 'Requirements vary by bond type. Generally, you\'ll need to complete an application, provide financial statements, and undergo a credit check. Larger bonds may require additional documentation like work history and bank references.'
    },
    {
      question: 'How quickly can I get a bond?',
      answer: 'Many license and permit bonds can be issued instantly. Contract bonds typically take 1-3 business days. Complex or high-value bonds may take longer. We expedite the process to meet your deadlines.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Surety Bonds in New Jersey"
      heroSubtitle="Your Trusted Bond Partner"
      heroDescription="Complete surety bond solutions for contractors, businesses, and professionals. Fast approvals, competitive rates, and expert guidance for all your bonding needs."
      
      overviewBadge="Surety Solutions"
      overviewTitle="Bonds That Build Trust"
      overviewContent="Surety bonds are essential for many businesses, providing financial guarantees that protect your clients and comply with regulations. Whether you're a contractor bidding on projects, a business owner obtaining licenses, or involved in legal proceedings, we make the bonding process simple and straightforward.\n\nOur extensive network of surety companies allows us to place bonds for businesses of all sizes and financial situations. From small license bonds to multi-million dollar contract bonds, we have the expertise and relationships to get you bonded quickly and affordably."
      
      coverageTitle="Types of Bonds We Provide"
      coverageDescription="Comprehensive bonding solutions for every business need"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Surety Bonds"
      benefitsDescription="Experience the advantages of working with bond specialists"
      benefits={benefits}
      
      ctaTitle="Get Bonded Today"
      ctaDescription="Apply for your surety bond and get approved fast with competitive rates."
      ctaPrimaryButton={{
        text: 'Apply for a Bond',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Surety Bond FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Industry-Specific Bonds Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Industry-Specific Bond Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Specialized bonding for your industry requirements
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BuildingOfficeIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Construction Bonds
                  </h3>
                  <p className="text-gray-600">
                    Bid, performance, payment, and maintenance bonds for contractors and subcontractors.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ScaleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Commercial Bonds
                  </h3>
                  <p className="text-gray-600">
                    License, permit, and compliance bonds for businesses and professionals.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <DocumentTextIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Specialty Bonds
                  </h3>
                  <p className="text-gray-600">
                    ERISA, utility, environmental, and other specialized bond requirements.
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