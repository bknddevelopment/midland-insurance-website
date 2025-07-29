'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import ComparisonTable from '@/components/shared/ComparisonTable';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function IndependentPage() {
  const contentSections = [
    {
      title: 'What Does Being Independent Mean?',
      content: `Being an independent insurance agency means we work for YOU, not any single insurance company. Unlike "captive" agents who can only sell products from one carrier, we have the freedom to shop multiple insurance companies to find the best coverage at the most competitive rates.

This independence is crucial because no single insurance company is the best fit for everyone. What works for your neighbor might not be the best option for you. Your unique circumstances – your home, vehicles, business, and family situation – all factor into determining the ideal insurance solution.`
    },
    {
      title: 'The Power of Choice',
      content: `When you work with Midland Associates, you gain access to over 20 top-rated insurance carriers. This means:

• More Coverage Options: We can find policies that match your specific needs, not force you into a one-size-fits-all solution.

• Better Pricing: By comparing multiple carriers, we often find significant savings without sacrificing coverage.

• Flexibility: As your needs change, we can easily adjust your coverage or switch carriers without you having to find a new agent.

• Objective Advice: Our recommendations are based solely on what's best for you, not what earns us the highest commission.`
    },
    {
      title: 'Your Advocate, Not a Salesperson',
      content: `Perhaps the most important benefit of working with an independent agent is having someone on your side. When you have a claim or need to make changes to your policy, we advocate for you with the insurance company.

We're not beholden to any carrier's sales quotas or corporate policies. Our success is measured by your satisfaction and the long-term relationships we build with our clients. This means we'll fight for fair claim settlements, help you understand your coverage, and ensure you're never paying for insurance you don't need.`
    }
  ];

  const comparisonFeatures = [
    'Number of carriers',
    'Unbiased recommendations',
    'Shop for best rates',
    'Work for the client',
    'Claims advocacy',
    'Policy flexibility',
    'Personalized service',
    'Long-term relationships'
  ];

  const comparisonPlans = [
    {
      name: 'Independent Agent',
      highlighted: true,
      features: {
        'Number of carriers': '20+ Carriers',
        'Unbiased recommendations': true,
        'Shop for best rates': true,
        'Work for the client': true,
        'Claims advocacy': true,
        'Policy flexibility': true,
        'Personalized service': true,
        'Long-term relationships': true
      }
    },
    {
      name: 'Captive Agent',
      highlighted: false,
      features: {
        'Number of carriers': '1 Carrier Only',
        'Unbiased recommendations': false,
        'Shop for best rates': false,
        'Work for the client': false,
        'Claims advocacy': 'Limited',
        'Policy flexibility': false,
        'Personalized service': 'Sometimes',
        'Long-term relationships': 'Varies'
      }
    },
    {
      name: 'Direct/Online',
      highlighted: false,
      features: {
        'Number of carriers': '1 Carrier',
        'Unbiased recommendations': false,
        'Shop for best rates': false,
        'Work for the client': false,
        'Claims advocacy': false,
        'Policy flexibility': 'Limited',
        'Personalized service': false,
        'Long-term relationships': false
      }
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
      {/* Comparison Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable
            title="See the Difference"
            description="Compare the benefits of working with an independent agent"
            features={comparisonFeatures}
            plans={comparisonPlans}
          />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Choosing an Independent Agency
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CurrencyDollarIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Money</h3>
              <p className="text-gray-600">
                Access to multiple carriers means we can find you the best rates without sacrificing coverage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600">
                One call to us replaces calling dozens of insurance companies. We do the shopping for you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <ShieldCheckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Coverage</h3>
              <p className="text-gray-600">
                We match you with carriers that specialize in your specific needs for optimal protection.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <UserGroupIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-600">
                Work with the same local agent who knows you and your needs, year after year.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <ChartBarIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We continuously monitor your coverage and shop for better rates at renewal time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <SparklesIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Claims Advocacy</h3>
              <p className="text-gray-600">
                When you have a claim, we're on your side, helping navigate the process for fair treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carrier Partners */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Carrier Partners
            </h2>
            <p className="text-lg text-gray-600">
              We work with over 20 A-rated insurance carriers to find you the best coverage
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="text-gray-700 font-medium">Progressive</div>
              <div className="text-gray-700 font-medium">Travelers</div>
              <div className="text-gray-700 font-medium">Hartford</div>
              <div className="text-gray-700 font-medium">Safeco</div>
              <div className="text-gray-700 font-medium">MetLife</div>
              <div className="text-gray-700 font-medium">CNA</div>
              <div className="text-gray-700 font-medium">Nationwide</div>
              <div className="text-gray-700 font-medium">Liberty Mutual</div>
              <div className="text-gray-700 font-medium">And Many More...</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <InfoPageTemplate
      heroTitle="We're Independent"
      heroSubtitle="Your Advantage in Insurance"
      heroDescription="Discover why working with an independent insurance agency gives you more choices, better rates, and superior service."
      heroPrimaryButton={{
        text: 'Get a Quote',
        href: '/quote'
      }}
      heroSecondaryButton={{
        text: 'Contact Us',
        href: '/contact'
      }}
      contentSections={contentSections}
      sidebarTitle="Learn More"
      sidebarItems={sidebarItems}
      additionalSections={additionalSections}
      ctaTitle="Experience the Independent Advantage"
      ctaDescription="Let us show you how much you can save while getting better coverage."
      ctaButton={{
        text: 'Get Your Free Quote',
        href: '/quote'
      }}
    />
  );
}