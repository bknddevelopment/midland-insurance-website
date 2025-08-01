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
  BuildingOffice2Icon,
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

export default function JerseyCityPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Jersey City', url: '/locations/jersey-city' },
  ];

  const stats = [
    { icon: UsersIcon, value: '292,000+', label: 'Population' },
    { icon: CarIcon, value: '175,000+', label: 'Registered Vehicles' },
    { icon: TrainSubwayIcon, value: '40%', label: 'Use Public Transit' },
    { icon: CurrencyDollarIcon, value: '$100-200', label: 'Monthly Savings Potential' }
  ];

  const coverageConsiderations = [
    {
      title: 'Urban Density Coverage',
      description: 'Higher liability limits for city driving and pedestrian traffic',
      icon: BuildingOffice2Icon,
      recommendations: [
        '$100/300K bodily injury minimum',
        '$100K property damage coverage',
        'Uninsured motorist protection essential'
      ]
    },
    {
      title: 'Parking & Theft Protection',
      description: 'Comprehensive coverage for street parking risks',
      icon: ShieldCheckIcon,
      recommendations: [
        'Comprehensive with low deductible',
        'Anti-theft device discounts',
        'Glass coverage for vandalism'
      ]
    },
    {
      title: 'Commuter-Friendly Options',
      description: 'Lower rates for drivers who use PATH/public transit',
      icon: TrainSubwayIcon,
      recommendations: [
        'Low-mileage discounts',
        'Usage-based insurance options',
        'Weekend driver programs'
      ]
    }
  ];

  const neighborhoods = [
    'Downtown/Waterfront', 'Journal Square', 'The Heights', 'Greenville',
    'Bergen-Lafayette', 'West Side', 'Liberty State Park Area', 'Newport'
  ];

  const jcSpecificFactors = [
    {
      factor: 'Manhattan Proximity',
      impact: 'Higher rates due to NYC traffic exposure',
      solution: 'Carriers with regional expertise offer better rates'
    },
    {
      factor: 'Diverse Demographics',
      impact: 'Wide range of coverage needs and languages',
      solution: 'Multilingual agents and flexible coverage options'
    },
    {
      factor: 'Mixed Transportation',
      impact: 'Many residents use cars occasionally',
      solution: 'Pay-per-mile and stored vehicle discounts'
    },
    {
      factor: 'Urban Development',
      impact: 'Construction zones and changing traffic patterns',
      solution: 'Comprehensive coverage for construction-related damage'
    }
  ];

  const savingsOpportunities = [
    {
      title: 'PATH Commuter Discount',
      description: 'Save up to 15% if you commute by public transit',
      icon: TrainSubwayIcon
    },
    {
      title: 'Garage Parking Discount',
      description: 'Lower rates for secured parking vs street parking',
      icon: CarIcon
    },
    {
      title: 'Professional Discounts',
      description: 'Special rates for finance, healthcare, and tech workers',
      icon: BuildingOffice2Icon
    },
    {
      title: 'Multi-Policy Bundle',
      description: 'Combine with renters or condo insurance for savings',
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Jersey City"
        locationSlug="jersey-city"
        geo={{ lat: 40.7178, lng: -74.0431 }}
        serviceRadius={10}
        description="Car insurance in Jersey City, NJ with local expertise. Affordable auto insurance for Hudson County drivers."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Car Insurance Jersey City"
          subtitle="Auto Insurance for Hudson County Drivers"
          description="Get affordable car insurance in Jersey City with coverage designed for urban driving. Local agents understand the unique needs of JC residents and help you save."
          primaryButton={{
            text: 'Get Jersey City Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/jersey-city-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Jersey City Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Jersey City Auto Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Smart Car Insurance for Jersey City Residents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jersey City's unique mix of urban density, Manhattan proximity, and diverse neighborhoods 
                requires tailored auto insurance solutions. We help you navigate these factors to find the best coverage.
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
                Why Jersey City Auto Insurance Costs More
              </h3>
              <p className="text-gray-700 mb-4">
                Jersey City drivers face unique challenges: high population density, proximity to NYC, 
                limited parking, and heavy traffic. These factors typically increase rates by 20-30% compared 
                to suburban NJ areas. However, our local expertise helps minimize these costs.
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
                Auto Insurance Coverage for Jersey City Drivers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Jersey City's unique environment requires specific coverage considerations
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

        {/* JC-Specific Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Jersey City Insurance Challenges & Solutions
              </h2>
            </div>

            <div className="space-y-6">
              {jcSpecificFactors.map((item, index) => (
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
                Jersey City Auto Insurance Discounts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Take advantage of discounts specifically available to Jersey City residents
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
                Serving All Jersey City Neighborhoods
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
                Also serving Hoboken, Union City, Bayonne, and surrounding Hudson County areas
              </p>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your Jersey City Auto Insurance Quote
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Jersey City drivers who save with our local expertise 
              and access to multiple insurance carriers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get JC Quote Now
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
                  <p className="text-white font-semibold">Quick Quotes</p>
                  <p className="text-gray-300 text-sm">Get rates in minutes, not hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Local Knowledge</p>
                  <p className="text-gray-300 text-sm">We understand Jersey City driving</p>
                </div>
              </div>
              <div className="flex items-start">
                <CurrencyDollarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Best Rates</p>
                  <p className="text-gray-300 text-sm">Access to 20+ top carriers</p>
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