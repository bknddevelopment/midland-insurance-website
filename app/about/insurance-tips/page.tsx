'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function InsuranceTipsPage() {
  const contentSections = [
    {
      title: 'Understanding Your Coverage',
      content: `One of the most important aspects of insurance is understanding exactly what you're paying for. Many people purchase insurance without fully comprehending their coverage limits, deductibles, and exclusions.`,
      isList: true,
      listItems: [
        'Review your policy annually to ensure coverage keeps pace with your needs',
        'Understand the difference between replacement cost and actual cash value',
        'Know your deductibles and how they affect your premiums',
        'Ask about exclusions - what your policy doesn\'t cover is as important as what it does',
        'Keep an updated inventory of your belongings for homeowners/renters insurance'
      ]
    },
    {
      title: 'Ways to Save on Insurance',
      content: `Insurance doesn't have to break the bank. There are numerous ways to reduce your premiums without sacrificing coverage:`,
      isList: true,
      listItems: [
        'Bundle multiple policies (home and auto) for multi-policy discounts',
        'Increase your deductibles if you have adequate emergency savings',
        'Maintain good credit - many insurers use credit scores in pricing',
        'Ask about all available discounts (safe driver, home security, good student)',
        'Shop around every few years - rates change and loyalty doesn\'t always pay',
        'Consider usage-based auto insurance if you drive less than average',
        'Install safety devices (alarm systems, smoke detectors, deadbolts)'
      ]
    },
    {
      title: 'Common Insurance Mistakes to Avoid',
      content: `Avoiding these common mistakes can save you money and ensure you're properly protected:`,
      isList: true,
      listItems: [
        'Underinsuring your home - replacement costs often exceed market value',
        'Choosing the cheapest policy without comparing coverage',
        'Not updating coverage after major life changes (marriage, new home, etc.)',
        'Letting policies lapse - gaps in coverage can be costly',
        'Not reading your policy documents thoroughly',
        'Failing to document belongings with photos/videos',
        'Assuming you\'re covered - always verify before assuming'
      ]
    },
    {
      title: 'When to Review Your Insurance',
      content: `Life changes, and your insurance should change with it. Review your coverage when:`,
      isList: true,
      listItems: [
        'You get married or divorced',
        'You have a child or children leave home',
        'You buy or sell a home',
        'You purchase a new vehicle',
        'You start a business or change jobs',
        'You make major home improvements',
        'You acquire valuable items (jewelry, art, collectibles)',
        'Your financial situation significantly changes'
      ]
    },
    {
      title: 'Filing Claims Effectively',
      content: `When you need to file a claim, following these tips can help ensure a smooth process:`,
      isList: true,
      listItems: [
        'Report claims promptly - delays can complicate the process',
        'Document everything with photos and written descriptions',
        'Keep all receipts and documentation related to the loss',
        'Be honest and thorough in your claim report',
        'Follow up regularly and keep records of all communications',
        'Understand your policy\'s claim process before you need it',
        'Work with your agent - they\'re there to help advocate for you'
      ]
    }
  ];

  const sidebarItems = [
    { title: 'About Us', href: '/about' },
    { title: "We're Independent", href: '/about/independent' },
    { title: 'Insurance Tips', href: '/about/insurance-tips' },
    { title: 'Refer Friends & Family', href: '/about/refer-friends' },
    { title: 'Leave A Review', href: '/about/leave-review' },
    { title: 'Request Quotes', href: '/quote' }
  ];

  const additionalSections = (
    <>
      {/* Quick Tips Grid */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Insurance Tips
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <LightBulbIcon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Annual Review
              </h3>
              <p className="text-gray-600">
                Schedule an annual insurance review to ensure your coverage matches your current needs and you're getting the best rates.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <CurrencyDollarIcon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bundle & Save
              </h3>
              <p className="text-gray-600">
                Combining your home and auto insurance with one carrier typically saves 15-25% on your premiums.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <ShieldCheckIcon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Maintain Coverage
              </h3>
              <p className="text-gray-600">
                Never let your insurance lapse. Continuous coverage often qualifies you for better rates and protects you from gaps.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <DocumentTextIcon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Document Everything
              </h3>
              <p className="text-gray-600">
                Keep photos, videos, and receipts of your belongings. This documentation is invaluable if you ever need to file a claim.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <ExclamationTriangleIcon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Know Your Risks
              </h3>
              <p className="text-gray-600">
                Understand what risks you face (flood, earthquake, etc.) and ensure you have appropriate coverage for your area.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <CheckCircleIcon className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ask Questions
              </h3>
              <p className="text-gray-600">
                Never hesitate to ask your agent questions. Understanding your coverage is key to making informed decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Guide CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <DocumentTextIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Free Insurance Guide
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Download our comprehensive guide to understanding and optimizing your insurance coverage.
            </p>
            <button className="bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors">
              Download Free Guide
            </button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <InfoPageTemplate
      heroTitle="Insurance Tips & Advice"
      heroSubtitle="Expert Guidance for Smart Coverage"
      heroDescription="Learn how to maximize your insurance coverage, save money, and avoid common mistakes with these helpful tips from our experts."
      heroPrimaryButton={{
        text: 'Get Expert Advice',
        href: '/contact'
      }}
      heroSecondaryButton={{
        text: 'Get a Quote',
        href: '/quote'
      }}
      contentSections={contentSections}
      sidebarTitle="More Resources"
      sidebarItems={sidebarItems}
      additionalSections={additionalSections}
      ctaTitle="Need Personalized Advice?"
      ctaDescription="Our experienced agents are here to answer your questions and help you make the best insurance decisions."
      ctaButton={{
        text: 'Talk to an Agent',
        href: '/contact'
      }}
    />
  );
}