'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CalculatorIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function QuotesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NJ Auto Insurance', url: '/nj-auto-insurance' },
    { name: 'Quotes', url: '/nj-auto-insurance/quotes' },
  ];

  const quoteFactors = [
    {
      category: 'Driver Information',
      factors: [
        'Age and gender',
        'Driving history (accidents, violations)',
        'Years of driving experience',
        'Credit score (in most cases)'
      ],
      impact: '40-50%'
    },
    {
      category: 'Vehicle Details',
      factors: [
        'Year, make, and model',
        'Safety features and ratings',
        'Annual mileage',
        'Primary use (commute, pleasure)'
      ],
      impact: '20-30%'
    },
    {
      category: 'Coverage Choices',
      factors: [
        'Liability limits selected',
        'Comprehensive and collision',
        'Deductible amounts',
        'Additional coverage options'
      ],
      impact: '20-25%'
    },
    {
      category: 'Location Factors',
      factors: [
        'ZIP code and neighborhood',
        'Urban vs. suburban area',
        'Local crime rates',
        'Garage vs. street parking'
      ],
      impact: '10-15%'
    }
  ];

  const averageRates = [
    { coverage: 'State Minimum', monthly: '$85-125', annual: '$1,020-1,500' },
    { coverage: 'Standard (50/100/50)', monthly: '$125-175', annual: '$1,500-2,100' },
    { coverage: 'Full Coverage', monthly: '$175-250', annual: '$2,100-3,000' },
    { coverage: 'Premium (100/300/100)', monthly: '$225-325', annual: '$2,700-3,900' }
  ];

  const carrierComparison = [
    {
      carrier: 'Progressive',
      strengths: 'High-risk drivers, SR-22',
      avgRate: '$145/mo',
      rating: '4.2/5'
    },
    {
      carrier: 'GEICO',
      strengths: 'Good drivers, military',
      avgRate: '$125/mo',
      rating: '4.4/5'
    },
    {
      carrier: 'State Farm',
      strengths: 'Young drivers, families',
      avgRate: '$155/mo',
      rating: '4.3/5'
    },
    {
      carrier: 'Allstate',
      strengths: 'Safe drivers, seniors',
      avgRate: '$165/mo',
      rating: '4.1/5'
    },
    {
      carrier: 'Liberty Mutual',
      strengths: 'Customization, bundles',
      avgRate: '$160/mo',
      rating: '4.0/5'
    },
    {
      carrier: 'NJM Insurance',
      strengths: 'NJ residents only',
      avgRate: '$115/mo',
      rating: '4.6/5'
    }
  ];

  const discounts = [
    { name: 'Multi-Policy Bundle', savings: '15-25%', icon: UserGroupIcon },
    { name: 'Safe Driver', savings: '10-40%', icon: ShieldCheckIcon },
    { name: 'Good Student', savings: '10-25%', icon: DocumentTextIcon },
    { name: 'Defensive Driving', savings: '5-10%', icon: ShieldCheckIcon },
    { name: 'Low Mileage', savings: '5-20%', icon: ClockIcon },
    { name: 'Anti-Theft Device', savings: '5-15%', icon: ShieldCheckIcon }
  ];

  const quoteTips = [
    {
      tip: 'Compare Multiple Carriers',
      description: 'Get quotes from at least 5 insurers for best rates',
      icon: ChartBarIcon
    },
    {
      tip: 'Bundle Policies',
      description: 'Combine auto with home or renters insurance',
      icon: BuildingOfficeIcon
    },
    {
      tip: 'Adjust Deductibles',
      description: 'Higher deductibles = lower premiums',
      icon: CalculatorIcon
    },
    {
      tip: 'Review Annually',
      description: 'Rates change - shop around every year',
      icon: ClockIcon
    }
  ];

  const faqs = [
    {
      question: 'How can I get the cheapest auto insurance quote in NJ?',
      answer: 'To get the cheapest quote: maintain a clean driving record, compare quotes from multiple carriers, choose higher deductibles, bundle policies, ask about all available discounts, and consider usage-based insurance if you drive less than 10,000 miles annually.'
    },
    {
      question: 'What information do I need for an accurate NJ auto insurance quote?',
      answer: 'You\'ll need: driver\'s license numbers for all drivers, vehicle VIN or year/make/model, current insurance information, driving history for past 5 years, annual mileage estimate, and desired coverage levels. Having this ready speeds up the quote process.'
    },
    {
      question: 'Why do auto insurance quotes vary so much between companies?',
      answer: 'Each insurer uses different formulas to calculate risk and price policies. Factors weighted differently include: credit scores, driving history, age groups, vehicle types, and location data. This is why shopping around is crucial - one company\'s high-risk driver is another\'s preferred customer.'
    },
    {
      question: 'How often should I get new auto insurance quotes in NJ?',
      answer: 'Shop for new quotes annually or when: your policy renews, you have a life change (marriage, new home, etc.), your driving record improves, you pay off your car loan, or your credit score increases. Many people save hundreds by switching insurers.'
    },
    {
      question: 'Are online auto insurance quotes accurate?',
      answer: 'Online quotes are generally accurate estimates, but final rates may vary slightly after underwriting review. For most accurate quotes, provide complete and honest information. Instant online quotes are typically within 5-10% of final rates.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="NJ Auto Insurance Quotes"
          subtitle="Compare Rates & Save up to 40%"
          description="Get instant auto insurance quotes from top New Jersey carriers. Free comparison, no obligation, and expert advice from licensed NJ agents."
          primaryButton={{
            text: 'Get Free Quotes Now',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
        />

        <Divider type="dark-to-white" />

        {/* Quote Factors Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Quote Factors</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Affects Your NJ Auto Insurance Quote?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding these factors helps you get better rates and make informed decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quoteFactors.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{item.category}</h3>
                    <span className="text-primary-600 font-bold">{item.impact}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.factors.map((factor, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Average Rates Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">NJ Rates</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Average Auto Insurance Rates in New Jersey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                2024 average rates for different coverage levels in New Jersey
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-700">
                        <th className="px-6 py-4 text-left text-white font-semibold">Coverage Level</th>
                        <th className="px-6 py-4 text-center text-white font-semibold">Monthly Rate</th>
                        <th className="px-6 py-4 text-center text-white font-semibold">Annual Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {averageRates.map((rate, index) => (
                        <tr key={index} className="hover:bg-slate-700 transition-colors">
                          <td className="px-6 py-4 text-gray-300">{rate.coverage}</td>
                          <td className="px-6 py-4 text-center text-primary-400 font-semibold">{rate.monthly}</td>
                          <td className="px-6 py-4 text-center text-gray-300">{rate.annual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                * Rates based on 35-year-old driver with clean record, average credit, and 2020 Honda Civic
              </p>
            </div>
          </div>
        </section>

        {/* Carrier Comparison */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Compare Carriers</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Top NJ Auto Insurance Companies Compared
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carrierComparison.map((carrier, index) => (
                <motion.div
                  key={carrier.carrier}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{carrier.carrier}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300 text-sm">
                      <span className="text-gray-400">Best for:</span> {carrier.strengths}
                    </p>
                    <p className="text-primary-400 font-semibold">
                      Avg Rate: {carrier.avgRate}
                    </p>
                    <p className="text-yellow-400">
                      Rating: {carrier.rating}
                    </p>
                  </div>
                  <Link
                    href={EXTERNAL_URLS.QUOTE_FORM}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium"
                    {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
                  >
                    Get Quote →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Discounts Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Save Money</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Common NJ Auto Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most drivers qualify for multiple discounts - savings can add up to 40% or more
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discounts.map((discount, index) => (
                <motion.div
                  key={discount.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <discount.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{discount.name}</h3>
                  <p className="text-2xl font-bold text-primary-600 mb-2">{discount.savings}</p>
                  <p className="text-gray-600 text-sm">Potential Savings</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-primary-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stack Your Discounts for Maximum Savings
              </h3>
              <p className="text-gray-700 mb-6">
                The average NJ driver qualifies for 3-5 discounts. Make sure to ask about all available 
                discounts when getting your quote - many agents won't mention them unless you ask!
              </p>
              <Link
                href="/affordable-auto-insurance-nj"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Explore all money-saving options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Quote Tips Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Pro Tips</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Get the Best Insurance Quotes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quoteTips.map((tip, index) => (
                <motion.div
                  key={tip.tip}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg text-center"
                >
                  <tip.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tip.tip}</h3>
                  <p className="text-gray-300 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQs</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Auto Insurance Quote Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your Free NJ Auto Insurance Quotes
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Compare rates from 20+ top carriers in minutes. Save an average of $600/year 
              when you switch through our agency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Compare Quotes Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Quick Process</p>
                  <p className="text-gray-300 text-sm">Quotes in 5 minutes or less</p>
                </div>
              </div>
              <div className="flex items-start">
                <ChartBarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Compare Options</p>
                  <p className="text-gray-300 text-sm">20+ carriers side-by-side</p>
                </div>
              </div>
              <div className="flex items-start">
                <CurrencyDollarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Save Money</p>
                  <p className="text-gray-300 text-sm">Average $600/year savings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}