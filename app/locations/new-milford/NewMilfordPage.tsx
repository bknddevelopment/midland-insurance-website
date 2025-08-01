'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  CarIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function NewMilfordPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Bergen County', url: '/locations/bergen-county' },
    { name: 'New Milford', url: '/locations/new-milford' },
  ];

  const stats = [
    { icon: UsersIcon, value: '16,500+', label: 'Population' },
    { icon: CarIcon, value: '10,800+', label: 'Registered Vehicles' },
    { icon: BuildingStorefrontIcon, value: '2.8 sq mi', label: 'Small Town Feel' },
    { icon: CurrencyDollarIcon, value: '$60-120', label: 'Monthly Savings Potential' }
  ];

  const coverageConsiderations = [
    {
      title: 'Small Town Benefits',
      description: 'Lower rates for New Milford\'s close-knit community',
      icon: UsersIcon,
      recommendations: [
        'Small town discount rates',
        'Lower traffic accident risk',
        'Community-based pricing'
      ]
    },
    {
      title: 'River Road Coverage',
      description: 'Protection for Hackensack River area driving',
      icon: MapPinIcon,
      recommendations: [
        'Flood zone considerations',
        'Bridge and tunnel coverage',
        'Weather-related protection'
      ]
    },
    {
      title: 'Local Business Support',
      description: 'Coverage for Main Street shopping and dining',
      icon: BuildingStorefrontIcon,
      recommendations: [
        'Parking lot incident coverage',
        'Local employment discounts',
        'Business owner special rates'
      ]
    }
  ];

  const neighborhoods = [
    'River Road Area', 'Main Street District', 'Boulevard Section', 'Madison Avenue',
    'Berkley Street Area', 'Milford Avenue', 'Veterans Memorial Park Area', 'Oradell Border'
  ];

  const newMilfordFactors = [
    {
      factor: 'Small Town Character',
      impact: 'Lower crime rates and safer streets',
      solution: 'Competitive rates reflecting community safety'
    },
    {
      factor: 'Hackensack River Location',
      impact: 'Potential flood zone considerations',
      solution: 'Comprehensive coverage with flood protection'
    },
    {
      factor: 'Local Shopping District',
      impact: 'Main Street parking and traffic patterns',
      solution: 'Coverage optimized for local driving'
    },
    {
      factor: 'Residential Stability',
      impact: 'Long-term residents with good driving records',
      solution: 'Loyalty discounts and stable pricing'
    }
  ];

  const savingsOpportunities = [
    {
      title: 'Small Town Discount',
      description: 'Save 15-20% for low-traffic areas',
      icon: UsersIcon
    },
    {
      title: 'Local Business Owner',
      description: 'Special rates for entrepreneurs',
      icon: BuildingStorefrontIcon
    },
    {
      title: 'Safe Driver Rewards',
      description: 'Up to 25% off with clean record',
      icon: ShieldCheckIcon
    },
    {
      title: 'Multi-Policy Bundle',
      description: 'Combine home & auto for savings',
      icon: HomeIcon
    }
  ];

  const faqs = [
    {
      question: 'How much is car insurance in New Milford, NJ?',
      answer: 'Average car insurance in New Milford ranges from $110-190/month. As Bergen County\'s small town with low crime rates and less traffic, New Milford residents typically enjoy some of the most affordable rates in the county.'
    },
    {
      question: 'Why are New Milford rates lower than neighboring towns?',
      answer: 'New Milford\'s small size (2.8 square miles), low crime rate, minimal traffic congestion, and stable residential population all contribute to lower insurance rates compared to busier Bergen County towns.'
    },
    {
      question: 'Do I need flood coverage for the Hackensack River area?',
      answer: 'While standard auto insurance covers flood damage to vehicles, residents near the Hackensack River should ensure they have comprehensive coverage. This protects against water damage from storms and flooding.'
    },
    {
      question: 'Are there discounts for New Milford business owners?',
      answer: 'Yes! Many carriers offer special rates for local business owners, especially those on Main Street. You may also qualify for commercial auto coverage if you use your vehicle for business.'
    },
    {
      question: 'What\'s the best coverage for New Milford\'s quiet streets?',
      answer: 'Most New Milford residents do well with standard 50/100/50 liability coverage plus comprehensive and collision. The low accident rate means you can often choose higher deductibles to save money.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="New Milford"
        locationSlug="new-milford"
        geo={{ lat: 40.9351, lng: -74.0190 }}
        serviceRadius={10}
        description="Auto insurance in New Milford, NJ. Local agents serving Bergen County\'s small town with affordable car insurance and personalized service."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Auto Insurance New Milford NJ"
          subtitle="Small Town Service, Big Savings"
          description="Get affordable auto insurance in New Milford with rates that reflect our small town safety. Local agents, personalized service, and savings up to 25%."
          primaryButton={{
            text: 'Get New Milford Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/new-milford-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* New Milford Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">New Milford Car Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Small Town Charm, Lower Insurance Rates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                New Milford\'s compact size and tight-knit community translate to some of Bergen County\'s 
                best auto insurance rates. Experience personalized service with hometown values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The New Milford Advantage
              </h3>
              <p className="text-gray-700 mb-4">
                At just 2.8 square miles, New Milford maintains its small-town character while offering 
                all the conveniences of Bergen County living. This unique combination of safety, community, 
                and location means our residents enjoy lower auto insurance rates without sacrificing coverage 
                quality. Our local expertise ensures you get every discount you deserve.
              </p>
              <Link
                href="/affordable-auto-insurance-nj"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Discover more ways to save
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Coverage Recommendations */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Smart Coverage</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Auto Insurance for New Milford\'s Unique Needs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Coverage designed for small town living with big protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coverageConsiderations.map((coverage, index) => (
                <motion.div
                  key={coverage.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <coverage.icon className="h-12 w-12 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{coverage.title}</h3>
                  <p className="text-gray-300 mb-4">{coverage.description}</p>
                  <ul className="space-y-2">
                    {coverage.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Milford-Specific Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why New Milford Enjoys Great Insurance Rates
              </h2>
            </div>

            <div className="space-y-6">
              {newMilfordFactors.map((item, index) => (
                <motion.div
                  key={item.factor}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
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
                        ✓ {item.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Savings Opportunities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Save Money</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                New Milford Auto Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Small town living means big savings on auto insurance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {savingsOpportunities.map((saving, index) => (
                <motion.div
                  key={saving.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <saving.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {saving.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {saving.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/cheap-car-insurance-bergen-county"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Explore All Savings Options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Areas</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving All New Milford Areas
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {neighborhoods.map((area, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <MapPinIcon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">{area}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Also serving Oradell, River Edge, Dumont, and surrounding Bergen County areas
              </p>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* FAQ Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQs</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                New Milford Auto Insurance Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Small Town Service with Big Savings
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join your New Milford neighbors who trust us for affordable auto insurance 
              with the personal touch only a local agency can provide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get New Milford Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors btn-transition"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <UsersIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Small Town Service</p>
                <p className="text-gray-600 text-sm">Personal attention guaranteed</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Local Knowledge</p>
                <p className="text-gray-600 text-sm">We know New Milford</p>
              </div>
              <div className="flex flex-col items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Best Rates</p>
                <p className="text-gray-600 text-sm">Small town savings</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}