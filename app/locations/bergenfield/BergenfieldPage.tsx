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
  AcademicCapIcon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function BergenfieldPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Bergen County', url: '/locations/bergen-county' },
    { name: 'Bergenfield', url: '/locations/bergenfield' },
  ];

  const stats = [
    { icon: UsersIcon, value: '28,000+', label: 'Population' },
    { icon: CarIcon, value: '18,000+', label: 'Registered Vehicles' },
    { icon: UserGroupIcon, value: '65%', label: 'Family Households' },
    { icon: CurrencyDollarIcon, value: '$70-140', label: 'Monthly Savings Potential' }
  ];

  const coverageConsiderations = [
    {
      title: 'Family-Focused Coverage',
      description: 'Protection for Bergenfield\'s family-oriented community',
      icon: HomeIcon,
      recommendations: [
        'Multi-car family discounts',
        'Teen driver safety programs',
        'Good student discount eligibility'
      ]
    },
    {
      title: 'School Zone Safety',
      description: 'Coverage for areas near schools and parks',
      icon: AcademicCapIcon,
      recommendations: [
        'Higher liability for school zones',
        'Pedestrian accident coverage',
        'Defensive driving discounts'
      ]
    },
    {
      title: 'Residential Protection',
      description: 'Coverage for quiet neighborhoods and local streets',
      icon: ShieldCheckIcon,
      recommendations: [
        'Comprehensive for tree damage',
        'Lower rates for garage parking',
        'Home-auto bundle savings'
      ]
    }
  ];

  const neighborhoods = [
    'Borough Center', 'North Section', 'Cooper\'s Pond Area', 'West Englewood',
    'Ruckman Road Area', 'New Bridge Road', 'Washington Avenue', 'Teaneck Border'
  ];

  const bergenfieldFactors = [
    {
      factor: 'Family Community',
      impact: 'Multiple teen drivers and family vehicles',
      solution: 'Family plans with teen driver discounts'
    },
    {
      factor: 'School Districts',
      impact: 'Heavy morning and afternoon traffic',
      solution: 'Coverage optimized for school zone driving'
    },
    {
      factor: 'Residential Streets',
      impact: 'Lower accident rates but parking concerns',
      solution: 'Balanced coverage with competitive rates'
    },
    {
      factor: 'Local Shopping Areas',
      impact: 'Parking lot incidents and local traffic',
      solution: 'Comprehensive coverage for minor incidents'
    }
  ];

  const savingsOpportunities = [
    {
      title: 'Family Bundle Discount',
      description: 'Save 20-30% with multiple cars',
      icon: UserGroupIcon
    },
    {
      title: 'Good Student Discount',
      description: 'Up to 25% off for honor students',
      icon: AcademicCapIcon
    },
    {
      title: 'Safe Neighborhood Rate',
      description: 'Lower rates for residential areas',
      icon: HomeIcon
    },
    {
      title: 'Mature Driver Discount',
      description: 'Special rates for experienced drivers',
      icon: ShieldCheckIcon
    }
  ];

  const faqs = [
    {
      question: 'How much is car insurance in Bergenfield, NJ?',
      answer: 'Average car insurance in Bergenfield ranges from $130-220/month. As a family-friendly Bergen County suburb with lower crime rates and less traffic than urban areas, Bergenfield often enjoys more competitive rates than neighboring cities.'
    },
    {
      question: 'What discounts are available for Bergenfield families?',
      answer: 'Bergenfield families can save with multi-car discounts (20-30%), good student discounts (up to 25%), safe driver discounts, and home-auto bundles. Many carriers also offer special rates for families with teen drivers who complete safety courses.'
    },
    {
      question: 'Do I need extra coverage for teen drivers?',
      answer: 'Yes, we recommend higher liability limits when adding teen drivers. Consider 100/300/100 coverage, plus collision and comprehensive. Many insurers offer teen safety programs that can reduce rates by 10-15%.'
    },
    {
      question: 'How does Bergenfield compare to other Bergen County towns?',
      answer: 'Bergenfield typically has moderate rates within Bergen County - lower than urban areas like Hackensack but slightly higher than more rural towns. The family-friendly atmosphere and good safety record help keep rates competitive.'
    },
    {
      question: 'What coverage is recommended for local driving?',
      answer: 'For Bergenfield\'s residential streets and local shopping areas, we recommend at least 50/100/50 liability coverage, plus comprehensive for tree damage and vandalism. Many residents also add rental reimbursement for convenience.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Bergenfield"
        locationSlug="bergenfield"
        geo={{ lat: 40.9276, lng: -73.9973 }}
        serviceRadius={10}
        description="Auto insurance in Bergenfield, NJ. Local agents serving Bergen County families with affordable car insurance and personalized service."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Auto Insurance Bergenfield NJ"
          subtitle="Family-Friendly Car Insurance Coverage"
          description="Get affordable auto insurance in Bergenfield with coverage designed for families. Save up to 30% with multi-car discounts and local expertise."
          primaryButton={{
            text: 'Get Bergenfield Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/bergenfield-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Bergenfield Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Bergenfield Car Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Protecting Bergenfield Families Since 1989
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bergenfield\'s close-knit community and family-oriented neighborhoods deserve 
                auto insurance that understands local needs. We specialize in coverage for families, 
                teen drivers, and multi-car households.
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
                Why Bergenfield Families Choose Us
              </h3>
              <p className="text-gray-700 mb-4">
                With excellent schools, safe neighborhoods, and a strong sense of community, 
                Bergenfield attracts families who value security and stability. Our insurance 
                solutions reflect these values with comprehensive coverage, family discounts, 
                and personalized service that puts your family\'s protection first.
              </p>
              <Link
                href="/personal/auto"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn more about family auto insurance
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
                Auto Insurance Designed for Bergenfield Families
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection for your family\'s vehicles and drivers
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

        {/* Bergenfield-Specific Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Understanding Bergenfield\'s Insurance Needs
              </h2>
            </div>

            <div className="space-y-6">
              {bergenfieldFactors.map((item, index) => (
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
                Bergenfield Family Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Special savings for Bergenfield families and safe drivers
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
                Discover More Family Savings
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
                Serving All Bergenfield Neighborhoods
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
                Also serving Teaneck, Dumont, New Milford, and surrounding Bergen County areas
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
                Bergenfield Auto Insurance Questions
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
              Protect Your Bergenfield Family Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the coverage your family deserves with rates that fit your budget. 
              Quick quotes, family discounts, and local service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Family Quote
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
                <UserGroupIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Family Focused</p>
                <p className="text-gray-600 text-sm">Multi-car & teen discounts</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Local Expertise</p>
                <p className="text-gray-600 text-sm">Serving Bergenfield families</p>
              </div>
              <div className="flex flex-col items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Family Savings</p>
                <p className="text-gray-600 text-sm">Save up to 30% bundling</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}