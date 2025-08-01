'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  MapPinIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CalculatorIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  TruckIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function CheapInsurancePage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Bergen County', url: '/locations/bergen-county' },
    { name: 'Cheap Car Insurance', url: '/cheap-car-insurance-bergen-county' },
  ];

  const cheapestTowns = [
    { town: 'Alpine', avgRate: '$110-160/mo', savings: 'Up to 35%', link: '/locations/alpine' },
    { town: 'Rockleigh', avgRate: '$115-165/mo', savings: 'Up to 33%', link: '/locations/rockleigh' },
    { town: 'Old Tappan', avgRate: '$120-170/mo', savings: 'Up to 30%', link: '/locations/old-tappan' },
    { town: 'Saddle River', avgRate: '$125-175/mo', savings: 'Up to 28%', link: '/locations/saddle-river' },
    { town: 'Woodcliff Lake', avgRate: '$125-175/mo', savings: 'Up to 28%', link: '/locations/woodcliff-lake' },
    { town: 'Ho-Ho-Kus', avgRate: '$130-180/mo', savings: 'Up to 25%', link: '/locations/ho-ho-kus' },
    { town: 'Upper Saddle River', avgRate: '$130-180/mo', savings: 'Up to 25%', link: '/locations/upper-saddle-river' },
    { town: 'Demarest', avgRate: '$135-185/mo', savings: 'Up to 23%', link: '/locations/demarest' }
  ];

  const savingStrategies = [
    {
      strategy: 'Bundle Home & Auto',
      savings: '20-25%',
      description: 'Combine policies with one carrier',
      icon: UserGroupIcon
    },
    {
      strategy: 'Raise Deductibles',
      savings: '15-30%',
      description: 'Increase from $500 to $1,000',
      icon: CalculatorIcon
    },
    {
      strategy: 'Good Student Discount',
      savings: '10-25%',
      description: 'For students with B average or better',
      icon: AcademicCapIcon
    },
    {
      strategy: 'Safe Driver Rewards',
      savings: '10-40%',
      description: '3+ years without accidents',
      icon: ShieldCheckIcon
    },
    {
      strategy: 'Low Mileage Discount',
      savings: '5-20%',
      description: 'Drive under 7,500 miles/year',
      icon: TruckIcon
    },
    {
      strategy: 'Pay in Full',
      savings: '5-10%',
      description: 'Pay 6 months upfront',
      icon: CurrencyDollarIcon
    }
  ];

  const carriersByPrice = [
    {
      tier: 'Budget Carriers',
      carriers: ['Progressive', 'GEICO', 'Esurance'],
      avgRate: '$110-150/mo',
      bestFor: 'Basic coverage, younger drivers'
    },
    {
      tier: 'Value Carriers',
      carriers: ['State Farm', 'Liberty Mutual', 'Farmers'],
      avgRate: '$140-180/mo',
      bestFor: 'Balance of price and service'
    },
    {
      tier: 'NJ Specialists',
      carriers: ['NJM Insurance', 'Plymouth Rock', 'Palisades'],
      avgRate: '$100-140/mo',
      bestFor: 'NJ residents with good records'
    },
    {
      tier: 'High-Risk Specialists',
      carriers: ['The General', 'Dairyland', 'National General'],
      avgRate: '$150-250/mo',
      bestFor: 'Drivers with violations or poor credit'
    }
  ];

  const bergenCountyFactors = [
    {
      factor: 'Location Within County',
      impact: 'Urban areas cost 20-40% more than suburbs',
      tip: 'Consider address when moving'
    },
    {
      factor: 'Commute Distance',
      impact: 'NYC commuters pay 15-25% more',
      tip: 'Work from home discounts available'
    },
    {
      factor: 'Vehicle Choice',
      impact: 'SUVs and luxury cars cost 30-50% more',
      tip: 'Choose insurance-friendly vehicles'
    },
    {
      factor: 'Coverage Levels',
      impact: 'State minimums save 40-60% vs full coverage',
      tip: 'Balance protection with affordability'
    }
  ];

  const quickSavingsTips = [
    'Compare quotes every 6-12 months',
    'Improve your credit score',
    'Take a defensive driving course',
    'Install anti-theft devices',
    'Choose paperless billing',
    'Ask about professional discounts',
    'Consider usage-based insurance',
    'Remove coverage on older vehicles'
  ];

  const locationHighlights = [
    { name: 'Hackensack', link: '/locations/hackensack', feature: 'Urban rates, multiple carriers' },
    { name: 'Fort Lee', link: '/locations/fort-lee', feature: 'High-risk specialists available' },
    { name: 'Paramus', link: '/locations/paramus', feature: 'Shopping district discounts' },
    { name: 'Ridgewood', link: '/locations/ridgewood', feature: 'Family-friendly rates' },
    { name: 'Englewood', link: '/locations/englewood', feature: 'Diverse coverage options' },
    { name: 'Teaneck', link: '/locations/teaneck', feature: 'Community group discounts' },
    { name: 'Fair Lawn', link: '/locations/fair-lawn', feature: 'Suburban savings' },
    { name: 'Rutherford', link: '/locations/rutherford', feature: 'Commuter discounts' },
    { name: 'Clifton', link: '/locations/clifton', feature: 'Passaic border rates' },
    { name: 'Bergenfield', link: '/locations/bergenfield', feature: 'Family bundle savings' },
    { name: 'Dumont', link: '/locations/dumont', feature: 'Safe neighborhood discounts' },
    { name: 'New Milford', link: '/locations/new-milford', feature: 'Small town rates' }
  ];

  const faqs = [
    {
      question: 'What\'s the cheapest car insurance in Bergen County?',
      answer: 'The cheapest rates typically come from NJM Insurance ($100-140/mo), GEICO ($110-150/mo), and Progressive ($115-155/mo) for drivers with clean records. Rates vary significantly by town - Alpine and Rockleigh have the lowest average rates, while Fort Lee and Hackensack are higher.'
    },
    {
      question: 'How can I get cheap car insurance with bad credit in Bergen County?',
      answer: 'Focus on insurers that don\'t heavily weight credit scores like Progressive, The General, or Dairyland. Consider higher deductibles, state minimum coverage, and pay upfront if possible. Improving your credit can save 20-50% over time.'
    },
    {
      question: 'Which Bergen County towns have the cheapest insurance rates?',
      answer: 'The cheapest towns are typically Alpine, Rockleigh, Old Tappan, and Saddle River, with rates 20-35% below county average. More expensive areas include Fort Lee, Hackensack, and Englewood due to higher traffic and urban density.'
    },
    {
      question: 'Can I get cheap full coverage in Bergen County?',
      answer: 'Yes, full coverage can be affordable with the right approach. Bundle policies (save 20-25%), choose higher deductibles (save 15-30%), maintain good credit, and qualify for multiple discounts. Average full coverage runs $150-250/month.'
    },
    {
      question: 'What discounts are available for Bergen County drivers?',
      answer: 'Common discounts include: multi-car (15-25%), home-auto bundle (20-25%), good student (10-25%), safe driver (10-40%), defensive driving course (5-10%), and low mileage (5-20%). Most drivers qualify for 3-5 discounts.'
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
          title="Cheap Car Insurance Bergen County"
          subtitle="Affordable Coverage for All 70 Municipalities"
          description="Find the cheapest car insurance rates in Bergen County. Compare quotes from 20+ carriers, discover exclusive discounts, and save up to 40% on your auto insurance."
          primaryButton={{
            text: 'Get Cheap Quotes Now',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/bergen-county-affordable.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Cheapest Towns Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Lowest Rates</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cheapest Car Insurance by Bergen County Town
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insurance rates vary significantly across Bergen County\'s 70 towns. 
                Here are the areas with the lowest average premiums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cheapestTowns.map((town, index) => (
                <motion.div
                  key={town.town}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-green-50 border border-green-200 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Link href={town.link} className="block">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{town.town}</h3>
                    <p className="text-green-700 font-bold mb-1">{town.avgRate}</p>
                    <p className="text-sm text-green-600">{town.savings}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-900 text-center">
                <strong>Pro Tip:</strong> Living in a lower-risk ZIP code can save you hundreds per year. 
                Consider insurance costs when choosing where to live in Bergen County.
              </p>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Saving Strategies Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Save Money</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Get Cheap Car Insurance in Bergen County
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stack these strategies to maximize your savings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savingStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.strategy}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg text-center"
                >
                  <strategy.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{strategy.strategy}</h3>
                  <p className="text-2xl font-bold text-green-400 mb-2">{strategy.savings}</p>
                  <p className="text-gray-300 text-sm">{strategy.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                The average Bergen County driver can save $600-1,200/year by combining multiple discounts
              </p>
              <Link
                href="/affordable-auto-insurance-nj"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Explore All Savings Options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Carriers by Price Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Compare Carriers</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bergen County Insurance Carriers by Price Range
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {carriersByPrice.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tier.tier}</h3>
                  <div className="mb-3">
                    {tier.carriers.map((carrier, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-white text-gray-700 rounded-full text-sm mr-2 mb-2 border border-gray-200">
                        {carrier}
                      </span>
                    ))}
                  </div>
                  <p className="text-primary-600 font-semibold mb-2">{tier.avgRate}</p>
                  <p className="text-gray-600 text-sm">Best for: {tier.bestFor}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Bergen County Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What Affects Bergen County Insurance Rates?
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {bergenCountyFactors.map((item, index) => (
                <motion.div
                  key={item.factor}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.factor}
                      </h3>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">
                        {item.impact}
                      </p>
                    </div>
                    <div>
                      <p className="text-primary-400 text-sm font-medium">
                        💡 {item.tip}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Quick Tips Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Quick Tips</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                8 Quick Ways to Lower Your Bergen County Rates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickSavingsTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-primary-50 p-4 rounded-lg text-center"
                >
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-gray-800 font-medium">{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* All Locations Grid */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">All Towns</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Cheap Insurance Available in All Bergen County Towns
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locationHighlights.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={location.link}
                    className="block bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">{location.name}</h3>
                        <p className="text-gray-400 text-sm">{location.feature}</p>
                      </div>
                      <MapPinIcon className="h-6 w-6 text-primary-400" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/locations/bergen-county"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
              >
                View all 70 Bergen County locations
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
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
                Cheap Bergen County Car Insurance Questions
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
              Start Saving on Bergen County Car Insurance Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Bergen County drivers who saved an average of $600/year. 
              Get quotes from 20+ carriers in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Cheap Quotes Now
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
                <CurrencyDollarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Lowest Rates</p>
                  <p className="text-gray-300 text-sm">20+ carriers compared</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">All 70 Towns</p>
                  <p className="text-gray-300 text-sm">Local Bergen County expertise</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Quick Quotes</p>
                  <p className="text-gray-300 text-sm">Results in 5 minutes</p>
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