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
  TrainSubwayIcon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function RutherfordPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Bergen County', url: '/locations/bergen-county' },
    { name: 'Rutherford', url: '/locations/rutherford' },
  ];

  const stats = [
    { icon: UsersIcon, value: '18,800+', label: 'Population' },
    { icon: CarIcon, value: '12,500+', label: 'Registered Vehicles' },
    { icon: TrainSubwayIcon, value: '35%', label: 'NYC Commuters' },
    { icon: CurrencyDollarIcon, value: '$75-150', label: 'Monthly Savings Potential' }
  ];

  const coverageConsiderations = [
    {
      title: 'Commuter Protection',
      description: 'Coverage for NYC commuters and train station parking',
      icon: TrainSubwayIcon,
      recommendations: [
        'Comprehensive coverage for station parking',
        'Higher liability limits for NYC driving',
        'Gap coverage for leased vehicles'
      ]
    },
    {
      title: 'Family-Friendly Coverage',
      description: 'Protection for Rutherford\'s family-oriented community',
      icon: HomeIcon,
      recommendations: [
        'Multi-car discount opportunities',
        'Teen driver programs and discounts',
        'Umbrella policy considerations'
      ]
    },
    {
      title: 'Local Road Protection',
      description: 'Coverage for Route 3 and local traffic challenges',
      icon: ShieldCheckIcon,
      recommendations: [
        'Collision coverage for highway driving',
        'Uninsured motorist protection',
        'Roadside assistance coverage'
      ]
    }
  ];

  const neighborhoods = [
    'Carlstadt Border', 'East Rutherford Border', 'Downtown Rutherford', 'West End',
    'Lyndhurst Border', 'Ridge Road Area', 'Union Avenue Corridor', 'Riverside Area'
  ];

  const rutherfordFactors = [
    {
      factor: 'NYC Commuter Town',
      impact: 'Lower mileage but station parking risks',
      solution: 'Commuter discounts with comprehensive coverage'
    },
    {
      factor: 'Route 3 Proximity',
      impact: 'Higher accident risk from highway traffic',
      solution: 'Enhanced collision and liability coverage'
    },
    {
      factor: 'Historic Homes',
      impact: 'Narrow streets and limited parking',
      solution: 'Coverage for parking-related incidents'
    },
    {
      factor: 'Family Community',
      impact: 'Multiple drivers per household common',
      solution: 'Multi-car and family bundle discounts'
    }
  ];

  const savingsOpportunities = [
    {
      title: 'NJ Transit Commuter Discount',
      description: 'Save up to 20% if you commute by train',
      icon: TrainSubwayIcon
    },
    {
      title: 'Multi-Car Family Discount',
      description: 'Bundle multiple vehicles for bigger savings',
      icon: CarIcon
    },
    {
      title: 'Good Student Discount',
      description: 'Special rates for honor roll students',
      icon: HomeIcon
    },
    {
      title: 'Home & Auto Bundle',
      description: 'Combine with homeowners for maximum savings',
      icon: ShieldCheckIcon
    }
  ];

  const faqs = [
    {
      question: 'How much is car insurance in Rutherford, NJ?',
      answer: 'Average car insurance in Rutherford ranges from $150-250/month, depending on coverage levels, driving history, and vehicle type. As a Bergen County suburb with many NYC commuters, rates are moderate compared to urban areas but higher than rural NJ.'
    },
    {
      question: 'What coverage do I need for commuting to NYC?',
      answer: 'NYC commuters should consider higher liability limits (100/300/100), comprehensive coverage for train station parking, and gap insurance if leasing. Many Rutherford residents also add rental car coverage for flexibility.'
    },
    {
      question: 'Are there discounts for Rutherford residents?',
      answer: 'Yes! Common discounts include NJ Transit commuter discounts (up to 20% off), multi-car family discounts, good student discounts for Rutherford High School students, and home-auto bundles for homeowners.'
    },
    {
      question: 'Do I need special coverage for Route 3 driving?',
      answer: 'While not required, we recommend enhanced collision coverage and higher liability limits for regular Route 3 drivers. The highway sees heavy traffic and higher speeds, increasing accident risk.'
    },
    {
      question: 'What\'s the minimum auto insurance required in Rutherford?',
      answer: 'New Jersey requires minimum coverage of 15/30/5 liability plus PIP (Personal Injury Protection). However, most Rutherford residents opt for higher limits due to property values and commuting patterns.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Rutherford"
        locationSlug="rutherford"
        geo={{ lat: 40.8265, lng: -74.1066 }}
        serviceRadius={10}
        description="Auto insurance in Rutherford, NJ. Local agents serving Bergen County with affordable car insurance for families and NYC commuters."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Auto Insurance Rutherford NJ"
          subtitle="Car Insurance for Bergen County Families"
          description="Get affordable auto insurance in Rutherford with coverage designed for NYC commuters and local families. Save up to 20% with our exclusive discounts."
          primaryButton={{
            text: 'Get Rutherford Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/rutherford-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Rutherford Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Rutherford Car Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted Auto Insurance for Rutherford Residents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rutherford\'s unique blend of suburban charm and NYC accessibility requires 
                tailored auto insurance solutions. We help local families and commuters find the perfect coverage.
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
                Why Choose Local Rutherford Auto Insurance?
              </h3>
              <p className="text-gray-700 mb-4">
                As a historic Bergen County borough with tree-lined streets and a strong sense of community, 
                Rutherford presents unique insurance needs. From protecting vehicles at the train station to 
                navigating Route 3, we understand the local challenges and provide solutions that work.
              </p>
              <Link
                href="/locations/bergen-county"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Explore Bergen County auto insurance options
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
                Auto Insurance Coverage for Rutherford Drivers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Customized protection for Rutherford\'s commuters and families
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

        {/* Rutherford-Specific Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Rutherford Insurance Factors & Solutions
              </h2>
            </div>

            <div className="space-y-6">
              {rutherfordFactors.map((item, index) => (
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
                Rutherford Auto Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take advantage of discounts specifically available to Rutherford residents
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
                href="/affordable-auto-insurance-nj"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Explore All Money-Saving Options
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
                Serving All Rutherford Neighborhoods
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
                Also serving East Rutherford, Lyndhurst, North Arlington, and surrounding Bergen County areas
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
                Rutherford Auto Insurance Questions
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
              Get Your Rutherford Auto Insurance Quote Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of Rutherford families who trust us for affordable, 
              comprehensive auto insurance coverage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Rutherford Quote
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
                <ClockIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Quick Quotes</p>
                <p className="text-gray-600 text-sm">Get rates in 5 minutes</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Local Expertise</p>
                <p className="text-gray-600 text-sm">Serving Rutherford since 1989</p>
              </div>
              <div className="flex flex-col items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Save Money</p>
                <p className="text-gray-600 text-sm">Average savings of $500/year</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}