'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  HeartIcon,
  CurrencyDollarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function LifeInsurancePage() {
  const coverageItems = [
    {
      title: 'Term Life Insurance',
      description: 'Affordable coverage for a specific period (10, 20, or 30 years) with level premiums'
    },
    {
      title: 'Whole Life Insurance',
      description: 'Permanent coverage with guaranteed death benefit and cash value accumulation'
    },
    {
      title: 'Universal Life Insurance',
      description: 'Flexible permanent coverage with adjustable premiums and death benefits'
    },
    {
      title: 'Variable Life Insurance',
      description: 'Permanent coverage with investment options for cash value growth potential'
    },
    {
      title: 'Final Expense Insurance',
      description: 'Smaller policies designed to cover funeral costs and final expenses'
    },
    {
      title: 'Survivorship Life Insurance',
      description: 'Coverage for two people that pays out after both have passed, ideal for estate planning'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Financial Security',
      description: 'Protect your family\'s financial future and ensure they can maintain their lifestyle.'
    },
    {
      icon: UserGroupIcon,
      title: 'Personalized Solutions',
      description: 'We analyze your unique situation to recommend the right type and amount of coverage.'
    },
    {
      icon: ChartBarIcon,
      title: 'Multiple Carriers',
      description: 'Access to top-rated life insurance companies ensures competitive rates and options.'
    }
  ];

  const faqItems = [
    {
      question: 'How much life insurance do I need?',
      answer: 'A common rule of thumb is 10 times your annual income, but the right amount depends on your debts, income replacement needs, future expenses (like college), and existing assets. We\'ll help you calculate the appropriate coverage.'
    },
    {
      question: 'What\'s the difference between term and whole life insurance?',
      answer: 'Term life provides coverage for a specific period at lower costs, ideal for temporary needs like mortgages or raising children. Whole life offers permanent coverage with cash value accumulation but higher premiums.'
    },
    {
      question: 'Do I need a medical exam for life insurance?',
      answer: 'Many policies require a medical exam, but we also offer no-exam options with simplified underwriting. These may have lower coverage limits or higher premiums but provide faster approval.'
    },
    {
      question: 'Can I get life insurance with pre-existing conditions?',
      answer: 'Yes, many people with health conditions can get life insurance. The type of condition, its severity, and management affect rates and options. We work with carriers specializing in various health situations.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Life Insurance in New Jersey"
      heroSubtitle="Protect What Matters Most"
      heroDescription="Comprehensive life insurance solutions to protect your family's financial future. From term life to permanent coverage, we'll help you find the right policy for your needs and budget."
      
      overviewBadge="Financial Protection"
      overviewTitle="Secure Your Family's Future"
      overviewContent="Life insurance is one of the most important financial decisions you'll make. It's not just about covering final expenses – it's about ensuring your loved ones can maintain their lifestyle, pay off debts, fund education, and achieve their dreams even if you're not there.\n\nWe understand that thinking about life insurance can be uncomfortable, but we're here to make the process simple and stress-free. Our experienced agents will help you understand your options, calculate the right coverage amount, and find a policy that fits your budget while providing the protection your family deserves."
      
      coverageTitle="Life Insurance Options"
      coverageDescription="Find the right type of coverage for your specific needs and goals"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Life Insurance"
      benefitsDescription="Expert guidance to protect your family's financial future"
      benefits={benefits}
      
      ctaTitle="Take the First Step Today"
      ctaDescription="Get a personalized life insurance quote and protect your family's tomorrow."
      ctaPrimaryButton={{
        text: 'Get Your Life Insurance Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Life Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Life Insurance Uses Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How Life Insurance Protects Your Family
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Life insurance provides financial security for many important needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <HeartIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Income Replacement
                  </h3>
                  <p className="text-gray-600">
                    Replace lost income so your family can maintain their standard of living and meet daily expenses.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <CurrencyDollarIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Debt Protection
                  </h3>
                  <p className="text-gray-600">
                    Pay off mortgages, car loans, credit cards, and other debts so they don't burden your family.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <AcademicCapIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Future Planning
                  </h3>
                  <p className="text-gray-600">
                    Fund children's education, retirement for surviving spouse, and other long-term financial goals.
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