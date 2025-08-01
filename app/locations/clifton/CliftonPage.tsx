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
  BuildingStorefrontIcon,
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

export default function CliftonPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Clifton', url: '/locations/clifton' },
  ];

  const stats = [
    { icon: UsersIcon, value: '90,000+', label: 'Population' },
    { icon: CarIcon, value: '55,000+', label: 'Registered Vehicles' },
    { icon: BuildingStorefrontIcon, value: 'Route 3 & 46', label: 'Major Highways' },
    { icon: CurrencyDollarIcon, value: '$80-160', label: 'Monthly Savings Potential' }
  ];

  const coverageConsiderations = [
    {
      title: 'Highway Corridor Coverage',
      description: 'Protection for Routes 3, 46, and 21 driving',
      icon: CarIcon,
      recommendations: [
        'Enhanced collision coverage',
        'Higher liability limits (100/300/100)',
        'Uninsured motorist protection'
      ]
    },
    {
      title: 'Diverse Community Coverage',
      description: 'Flexible options for Clifton\'s multicultural residents',
      icon: UsersIcon,
      recommendations: [
        'Multilingual support available',
        'SR-22 filing assistance',
        'International driver coverage'
      ]
    },
    {
      title: 'Urban-Suburban Mix',
      description: 'Coverage for city and residential driving',
      icon: HomeIcon,
      recommendations: [
        'Comprehensive for street parking',
        'Glass coverage for vandalism',
        'Rental car reimbursement'
      ]
    }
  ];

  const neighborhoods = [
    'Allwood', 'Albion Place', 'Athenia', 'Botany Village',
    'Delawanna', 'Lakeview', 'Main Avenue', 'Montclair Heights'
  ];

  const cliftonFactors = [
    {
      factor: 'Major Highway Intersection',
      impact: 'Higher traffic volume and accident risk',
      solution: 'Comprehensive collision and liability coverage'
    },
    {
      factor: 'Diverse Demographics',
      impact: 'Varied coverage needs and budgets',
      solution: 'Flexible payment plans and coverage options'
    },
    {
      factor: 'Mixed Residential/Commercial',
      impact: 'Different risk profiles by area',
      solution: 'Zone-based pricing for fair rates'
    },
    {
      factor: 'Passaic County Location',
      impact: 'Different rates than Bergen County',
      solution: 'County-specific carrier relationships'
    }
  ];

  const savingsOpportunities = [
    {
      title: 'Safe Driver Discount',
      description: 'Save up to 25% with clean driving record',
      icon: ShieldCheckIcon
    },
    {
      title: 'Multi-Language Discount',
      description: 'Special rates with bilingual support',
      icon: UsersIcon
    },
    {
      title: 'Local Employment Discount',
      description: 'Work in Clifton? Save on coverage',
      icon: BuildingStorefrontIcon
    },
    {
      title: 'Family Bundle Savings',
      description: 'Multi-car and home insurance bundles',
      icon: HomeIcon
    }
  ];

  const faqs = [
    {
      question: 'How much is car insurance in Clifton, NJ?',
      answer: 'Average car insurance in Clifton ranges from $140-240/month. Rates vary based on your neighborhood, with areas near major highways typically seeing higher rates due to increased accident risk. Clifton\'s position in Passaic County can mean slightly lower rates than neighboring Bergen County.'
    },
    {
      question: 'What coverage do I need for Routes 3, 46, and 21?',
      answer: 'For highway driving, we recommend minimum 100/300/100 liability coverage, comprehensive and collision with $500-$1000 deductibles, and uninsured motorist protection. The high traffic volume on these routes increases accident risk.'
    },
    {
      question: 'Are there special programs for international drivers in Clifton?',
      answer: 'Yes! Clifton\'s diverse community means many carriers offer programs for international drivers, including those with foreign licenses or limited US driving history. We can help you find coverage regardless of your background.'
    },
    {
      question: 'How does Clifton compare to neighboring towns for insurance?',
      answer: 'Clifton typically has moderate rates - higher than suburban areas but lower than urban centers like Newark or Jersey City. Your specific rate depends on your neighborhood, with quieter residential areas having lower rates than commercial corridors.'
    },
    {
      question: 'What discounts are available for Clifton residents?',
      answer: 'Common discounts include safe driver (up to 25% off), multi-car (15-20% off), defensive driving course completion (10% off), and local employment discounts. Many carriers also offer special rates for teachers, healthcare workers, and first responders.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Clifton"
        locationSlug="clifton"
        geo={{ lat: 40.8584, lng: -74.1638 }}
        serviceRadius={15}
        description="Auto insurance in Clifton, NJ. Local agents serving Passaic County with affordable car insurance for diverse communities and highway commuters."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Auto Insurance Clifton NJ"
          subtitle="Car Insurance for Passaic County Drivers"
          description="Get affordable auto insurance in Clifton with coverage designed for highway corridors and diverse neighborhoods. Save up to 25% with our exclusive discounts."
          primaryButton={{
            text: 'Get Clifton Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/clifton-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Clifton Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Clifton Car Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Auto Insurance for Clifton\'s Diverse Community
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clifton\'s unique position at the intersection of major highways and its diverse neighborhoods 
                requires flexible auto insurance solutions. We provide coverage that fits your needs and budget.
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
                Why Clifton Drivers Need Specialized Coverage
              </h3>
              <p className="text-gray-700 mb-4">
                As New Jersey\'s 11th largest city, Clifton presents unique insurance challenges. The convergence 
                of Routes 3, 46, and 21 creates heavy traffic patterns, while the city\'s diverse neighborhoods 
                range from dense urban areas to quiet residential streets. Our local expertise helps you navigate 
                these factors for optimal coverage and rates.
              </p>
              <Link
                href="/nj-auto-insurance"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn about NJ auto insurance requirements
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
                Auto Insurance Coverage for Clifton Drivers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored protection for Clifton\'s unique driving environment
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

        {/* Clifton-Specific Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Clifton Insurance Challenges & Solutions
              </h2>
            </div>

            <div className="space-y-6">
              {cliftonFactors.map((item, index) => (
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
                Clifton Auto Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to save on car insurance in Clifton
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
                Find More Savings Options
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
                Serving All Clifton Neighborhoods
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
                Also serving Passaic, Paterson, Nutley, and surrounding Passaic County areas
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
                Clifton Auto Insurance Questions
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
              Start Saving on Clifton Auto Insurance Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of Clifton drivers who trust us for affordable, 
              reliable auto insurance coverage. Get your free quote in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Clifton Quote
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
                <p className="text-gray-900 font-semibold">Local Service</p>
                <p className="text-gray-600 text-sm">Serving Clifton since 1989</p>
              </div>
              <div className="flex flex-col items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Save Money</p>
                <p className="text-gray-600 text-sm">Average savings of $600/year</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}