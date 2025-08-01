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
  HomeModernIcon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TreeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function DumontPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Bergen County', url: '/locations/bergen-county' },
    { name: 'Dumont', url: '/locations/dumont' },
  ];

  const stats = [
    { icon: UsersIcon, value: '18,000+', label: 'Population' },
    { icon: CarIcon, value: '11,500+', label: 'Registered Vehicles' },
    { icon: HomeModernIcon, value: '95%', label: 'Homeownership Rate' },
    { icon: CurrencyDollarIcon, value: '$65-130', label: 'Monthly Savings Potential' }
  ];

  const coverageConsiderations = [
    {
      title: 'Safe Neighborhood Benefits',
      description: 'Lower rates for Dumont\'s low-crime residential areas',
      icon: ShieldCheckIcon,
      recommendations: [
        'Safe neighborhood discounts',
        'Lower comprehensive rates',
        'Reduced vandalism risk coverage'
      ]
    },
    {
      title: 'Homeowner Advantages',
      description: 'Bundle savings for property owners',
      icon: HomeIcon,
      recommendations: [
        'Home-auto bundle discounts',
        'Multi-policy savings up to 25%',
        'Umbrella policy options'
      ]
    },
    {
      title: 'Mature Community Coverage',
      description: 'Specialized options for experienced drivers',
      icon: TreeIcon,
      recommendations: [
        'Mature driver discounts',
        'Low-mileage programs',
        'Accident forgiveness options'
      ]
    }
  ];

  const neighborhoods = [
    'Grant Avenue Area', 'Madison Avenue', 'New Milford Border', 'Bergenfield Border',
    'Cresskill Border', 'Haworth Border', 'Washington Avenue', 'Dumont Center'
  ];

  const dumontFactors = [
    {
      factor: 'Quiet Residential Streets',
      impact: 'Lower accident rates and claims frequency',
      solution: 'Competitive rates reflecting safe driving environment'
    },
    {
      factor: 'High Homeownership',
      impact: 'Stable community with responsible drivers',
      solution: 'Bundle discounts and loyalty rewards'
    },
    {
      factor: 'Tree-Lined Streets',
      impact: 'Potential for falling branch damage',
      solution: 'Comprehensive coverage with fair deductibles'
    },
    {
      factor: 'Family Community',
      impact: 'Multiple vehicles per household common',
      solution: 'Multi-car discounts and family plans'
    }
  ];

  const savingsOpportunities = [
    {
      title: 'Safe Community Discount',
      description: 'Up to 20% off for low-crime area',
      icon: ShieldCheckIcon
    },
    {
      title: 'Homeowner Bundle',
      description: 'Save 25% combining home & auto',
      icon: HomeIcon
    },
    {
      title: 'Mature Driver Savings',
      description: 'Special rates for 50+ drivers',
      icon: TreeIcon
    },
    {
      title: 'Low Mileage Discount',
      description: 'Save if you drive under 7,500 miles/year',
      icon: CarIcon
    }
  ];

  const faqs = [
    {
      question: 'How much is car insurance in Dumont, NJ?',
      answer: 'Average car insurance in Dumont ranges from $120-200/month. As one of Bergen County\'s safest communities with tree-lined residential streets, Dumont residents often enjoy lower rates than more urban areas in the county.'
    },
    {
      question: 'What makes Dumont insurance rates lower?',
      answer: 'Dumont\'s low crime rate, quiet residential streets, high homeownership rate, and mature driver population all contribute to lower insurance rates. The borough\'s safety record means fewer claims and better rates for residents.'
    },
    {
      question: 'Can I bundle my home and auto insurance in Dumont?',
      answer: 'Yes! With Dumont\'s 95% homeownership rate, most residents qualify for home-auto bundles saving 20-25%. We work with carriers that offer excellent multi-policy discounts for Bergen County homeowners.'
    },
    {
      question: 'Are there special discounts for Dumont\'s mature drivers?',
      answer: 'Absolutely. Many carriers offer mature driver discounts starting at age 50, defensive driving course discounts, and low-mileage programs perfect for Dumont\'s retired residents. Savings can reach 15-30%.'
    },
    {
      question: 'What coverage do I need for Dumont\'s tree-lined streets?',
      answer: 'We recommend comprehensive coverage for protection against falling branches and storm damage. With Dumont\'s mature trees, this coverage is essential and typically costs just $10-20/month extra.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Dumont"
        locationSlug="dumont"
        geo={{ lat: 40.9406, lng: -73.9897 }}
        serviceRadius={10}
        description="Auto insurance in Dumont, NJ. Local agents serving Bergen County\'s safe neighborhoods with affordable car insurance and homeowner bundle discounts."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Auto Insurance Dumont NJ"
          subtitle="Safe Neighborhood Car Insurance Rates"
          description="Get affordable auto insurance in Dumont with rates that reflect our safe, tree-lined community. Save up to 25% with homeowner bundles and safe driver discounts."
          primaryButton={{
            text: 'Get Dumont Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/dumont-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Dumont Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Dumont Car Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lower Rates for Dumont\'s Safe Streets
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dumont\'s reputation as one of Bergen County\'s safest communities means better 
                auto insurance rates for residents. Our local expertise helps you maximize these savings.
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
                The Dumont Advantage
              </h3>
              <p className="text-gray-700 mb-4">
                Known as the "Garden Spot of Bergen County," Dumont\'s quiet residential character, 
                excellent safety record, and stable community translate directly into lower insurance costs. 
                With tree-lined streets and a strong sense of community, Dumont drivers benefit from some 
                of the most competitive auto insurance rates in Bergen County.
              </p>
              <Link
                href="/locations/bergen-county"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Compare Bergen County rates
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
                Auto Insurance Tailored for Dumont Residents
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Coverage options that match Dumont\'s safe, residential character
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

        {/* Dumont-Specific Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Dumont Enjoys Lower Insurance Rates
              </h2>
            </div>

            <div className="space-y-6">
              {dumontFactors.map((item, index) => (
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
                Dumont Auto Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take advantage of Dumont\'s safe community status for maximum savings
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
                Find More Dumont Savings
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
                Serving All Dumont Neighborhoods
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
                Also serving Bergenfield, New Milford, Cresskill, and surrounding Bergen County areas
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
                Dumont Auto Insurance Questions
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
              Get Your Dumont Safe Driver Discount Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take advantage of Dumont\'s excellent safety record with lower auto insurance rates. 
              Get your free quote and start saving.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Dumont Quote
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
                <ShieldCheckIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Safe Community</p>
                <p className="text-gray-600 text-sm">Lower rates for safe streets</p>
              </div>
              <div className="flex flex-col items-center">
                <HomeIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Homeowner Bundles</p>
                <p className="text-gray-600 text-sm">Save 25% bundling policies</p>
              </div>
              <div className="flex flex-col items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Best Rates</p>
                <p className="text-gray-600 text-sm">Competitive Dumont pricing</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}