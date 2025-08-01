'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  CalculatorIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ClockIcon,
  StarIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const savingsStrategies = [
  {
    title: 'Bundle Your Policies',
    savings: 'Save up to 25%',
    description: 'Combine auto with home or renters insurance for maximum discounts',
    icon: UserGroupIcon,
    tips: [
      'Multi-policy discounts with same carrier',
      'Simplified billing and claims',
      'Single deductible options available'
    ]
  },
  {
    title: 'Improve Your Credit Score',
    savings: 'Save up to 20%',
    description: 'Better credit can significantly lower your premiums in New Jersey',
    icon: ChartBarIcon,
    tips: [
      'Pay bills on time to boost score',
      'Review credit report for errors',
      'Reduce credit card balances'
    ]
  },
  {
    title: 'Take Defensive Driving',
    savings: 'Save 5-10%',
    description: 'Complete an approved course for guaranteed discounts',
    icon: ShieldCheckIcon,
    tips: [
      'Online courses available',
      'Discount lasts 3 years',
      'Point reduction benefit too'
    ]
  },
  {
    title: 'Choose Higher Deductibles',
    savings: 'Save 15-30%',
    description: 'Raising deductibles from $500 to $1,000 reduces premiums',
    icon: CalculatorIcon,
    tips: [
      'Keep deductible amount in savings',
      'Consider your risk tolerance',
      'Balance savings vs out-of-pocket'
    ]
  }
];

const discountOpportunities = [
  { discount: 'Safe Driver', requirement: 'No accidents/violations for 3 years', savings: 'Up to 20%' },
  { discount: 'Good Student', requirement: 'B average or better', savings: '10-15%' },
  { discount: 'Anti-Theft Device', requirement: 'Approved security system', savings: '5-10%' },
  { discount: 'Low Mileage', requirement: 'Under 7,500 miles/year', savings: '10-15%' },
  { discount: 'Military/Veteran', requirement: 'Active or former military', savings: '10-15%' },
  { discount: 'Professional/Alumni', requirement: 'Certain associations', savings: '5-10%' },
  { discount: 'Paid in Full', requirement: 'Pay annual premium upfront', savings: '5-10%' },
  { discount: 'Paperless Billing', requirement: 'Electronic statements', savings: '3-5%' }
];

const budgetOptions = [
  {
    title: 'Basic Legal Coverage',
    monthlyRange: '$50-80',
    description: 'Meet NJ minimum requirements affordably',
    coverage: [
      '$15K/$30K bodily injury',
      '$5K property damage',
      '$15K PIP coverage',
      'Basic liability only'
    ],
    bestFor: 'Older paid-off vehicles'
  },
  {
    title: 'Standard Protection',
    monthlyRange: '$80-150',
    description: 'Balance of coverage and affordability',
    coverage: [
      '$50K/$100K bodily injury',
      '$25K property damage',
      '$25K PIP coverage',
      'Uninsured motorist protection'
    ],
    bestFor: 'Most NJ drivers'
  },
  {
    title: 'Enhanced Coverage',
    monthlyRange: '$150-250',
    description: 'Better protection with collision/comprehensive',
    coverage: [
      '$100K/$300K bodily injury',
      '$50K property damage',
      'Collision & comprehensive',
      'Rental reimbursement'
    ],
    bestFor: 'Newer vehicles or loans'
  }
];

const comparisonFactors = [
  {
    factor: 'Coverage Limits',
    cheap: 'State minimums only',
    smart: 'Adequate protection for assets',
    impact: 'One accident can exceed minimums'
  },
  {
    factor: 'Deductibles',
    cheap: 'Very high deductibles',
    smart: 'Balanced deductibles you can afford',
    impact: 'Consider your emergency savings'
  },
  {
    factor: 'Customer Service',
    cheap: 'Limited support options',
    smart: 'Local agents and 24/7 claims',
    impact: 'Critical when you need help most'
  },
  {
    factor: 'Claims Process',
    cheap: 'Slow, complicated claims',
    smart: 'Fast, fair claim settlements',
    impact: 'Matters most after an accident'
  }
];

const cityRates = [
  { city: 'Newark', average: '$2,400', ourRate: '$1,800', savings: '$600/year' },
  { city: 'Jersey City', average: '$2,200', ourRate: '$1,650', savings: '$550/year' },
  { city: 'Paterson', average: '$2,100', ourRate: '$1,575', savings: '$525/year' },
  { city: 'Elizabeth', average: '$2,000', ourRate: '$1,500', savings: '$500/year' },
  { city: 'Trenton', average: '$1,900', ourRate: '$1,425', savings: '$475/year' },
  { city: 'Camden', average: '$2,300', ourRate: '$1,725', savings: '$575/year' }
];

export default function AffordableAutoInsurancePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Cheap Car Insurance NJ"
        subtitle="Affordable Auto Insurance Without Sacrificing Coverage"
        description="Find low cost auto insurance in New Jersey with real savings opportunities. We help you get cheap car insurance NJ while maintaining the protection you need."
        primaryButton={{
          text: 'Get Affordable Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call (201) 812-2184',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* Divider */}
      <Divider type="dark-to-white" />

      {/* Savings Strategies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Smart Savings</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to Get Cheap Car Insurance in NJ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lower your auto insurance costs by 30% or more with these proven strategies. 
              Our experts help you find every available discount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {savingsStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start">
                  <strategy.icon className="h-12 w-12 text-primary-600 flex-shrink-0 mr-4" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {strategy.title}
                      </h3>
                      <span className="text-green-600 font-bold">{strategy.savings}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {strategy.description}
                    </p>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider type="white-to-dark" />

      {/* Discount Opportunities Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">All Discounts</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              NJ Auto Insurance Discounts You May Qualify For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most drivers qualify for multiple discounts. We help you find and apply every one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {discountOpportunities.map((discount, index) => (
              <motion.div
                key={discount.discount}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800 p-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{discount.discount}</h4>
                  <p className="text-gray-400 text-sm">{discount.requirement}</p>
                </div>
                <div className="text-green-400 font-bold ml-4">
                  {discount.savings}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Check Your Discount Eligibility
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Budget Options Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Options</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Affordable Auto Insurance Options for Every Budget
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right level of coverage based on your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {budgetOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-3xl font-bold text-primary-400">
                    {option.monthlyRange}
                  </p>
                  <p className="text-gray-400 text-sm">per month</p>
                </div>
                <p className="text-gray-300 mb-4">
                  {option.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {option.coverage.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-primary-400 text-sm font-medium">
                  Best for: {option.bestFor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cheap vs Smart Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Smart Shopping</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Cheap vs. Smart: Finding the Right Balance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The cheapest insurance isn't always the best value. Here's what to consider:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Factor</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Just Cheap</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Smart & Affordable</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFactors.map((row, index) => (
                  <tr key={row.factor} className="border-t border-slate-700">
                    <td className="px-6 py-4 text-white font-medium">{row.factor}</td>
                    <td className="px-6 py-4 text-red-400">{row.cheap}</td>
                    <td className="px-6 py-4 text-green-400">{row.smart}</td>
                    <td className="px-6 py-4 text-gray-300">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Divider type="dark-to-white" />

      {/* City Rates Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Local Savings</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Affordable Auto Insurance Across New Jersey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you can save in major NJ cities with our competitive rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityRates.map((city, index) => (
              <motion.div
                key={city.city}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {city.city}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    City Average: <span className="line-through">${city.average}</span>
                  </p>
                  <p className="text-2xl font-bold text-primary-600">
                    Our Rate: {city.ourRate}
                  </p>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <p className="text-green-700 font-semibold">
                    You Save: {city.savings}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View all locations
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 p-8 rounded-lg">
            <div className="flex items-start">
              <LightBulbIcon className="h-12 w-12 text-primary-600 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pro Tips for Getting the Cheapest Car Insurance in NJ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-gray-700 flex items-start">
                      <span className="text-primary-600 font-bold mr-2">1.</span>
                      Compare quotes every 6-12 months - rates change frequently
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="text-primary-600 font-bold mr-2">2.</span>
                      Pay in full to avoid monthly fees ($5-10/month savings)
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="text-primary-600 font-bold mr-2">3.</span>
                      Review coverage annually - your needs change over time
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700 flex items-start">
                      <span className="text-primary-600 font-bold mr-2">4.</span>
                      Ask about group discounts through employer or associations
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="text-primary-600 font-bold mr-2">5.</span>
                      Consider usage-based insurance if you drive less than 10K miles/year
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="text-primary-600 font-bold mr-2">6.</span>
                      Keep continuous coverage - gaps increase rates significantly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CurrencyDollarIcon className="h-16 w-16 text-primary-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Saving on NJ Auto Insurance Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get affordable auto insurance quotes in minutes. We'll help you find cheap car insurance 
            in NJ without compromising on coverage or service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="tel:(201) 812-2184"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call (201) 812-2184
            </Link>
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Affordable Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 bg-slate-800 p-6 rounded-lg">
            <p className="text-white font-semibold mb-2">
              Average Customer Savings: $487/year
            </p>
            <p className="text-gray-300 text-sm">
              Based on customers who switched to us in 2024 and qualified for multiple discounts
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}