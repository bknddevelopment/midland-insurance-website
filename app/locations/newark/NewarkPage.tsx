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
  TruckIcon,
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

export default function NewarkPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Newark', url: '/locations/newark' },
  ];

  const stats = [
    { icon: UsersIcon, value: '282,000+', label: 'Population' },
    { icon: CarIcon, value: '185,000+', label: 'Registered Vehicles' },
    { icon: ExclamationTriangleIcon, value: '15%', label: 'Higher Than State Average' },
    { icon: CurrencyDollarIcon, value: '$50-150', label: 'Monthly Savings Potential' }
  ];

  const coverageNeeds = [
    {
      title: 'Urban Driving Protection',
      description: 'Higher liability limits for city traffic and congestion',
      icon: CarIcon,
      recommendations: ['$100/300K bodily injury', '$50K property damage', 'Uninsured motorist coverage']
    },
    {
      title: 'Theft & Vandalism Coverage',
      description: 'Comprehensive protection for parking on city streets',
      icon: ShieldCheckIcon,
      recommendations: ['Comprehensive coverage', 'Lower deductibles', 'Rental reimbursement']
    },
    {
      title: 'Multi-Vehicle Solutions',
      description: 'Coverage for families with multiple cars',
      icon: TruckIcon,
      recommendations: ['Multi-car discounts', 'Named driver policies', 'Usage-based options']
    }
  ];

  const neighborhoods = [
    'Ironbound', 'Downtown Newark', 'North Ward', 'South Ward', 
    'Central Ward', 'West Ward', 'Forest Hill', 'Weequahic'
  ];

  const localFactors = [
    {
      factor: 'High Traffic Density',
      impact: 'Increased accident risk requires higher liability limits',
      solution: 'We find carriers specializing in urban coverage'
    },
    {
      factor: 'Vehicle Theft Rates',
      impact: 'Newark has higher auto theft rates than suburban areas',
      solution: 'Comprehensive coverage with anti-theft discounts'
    },
    {
      factor: 'Public Transit Options',
      impact: 'Many residents use cars less frequently',
      solution: 'Low-mileage discounts and usage-based policies'
    },
    {
      factor: 'Diverse Demographics',
      impact: 'Wide range of coverage needs and budgets',
      solution: 'Access to 20+ carriers for best matches'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Newark"
        locationSlug="newark"
        geo={{ lat: 40.7357, lng: -74.1724 }}
        serviceRadius={15}
        description="Auto insurance in Newark, NJ with local expertise. Get cheap car insurance Newark with coverage designed for urban drivers."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Auto Insurance Newark, NJ"
          subtitle="Cheap Car Insurance for Newark Drivers"
          description="Get affordable auto insurance in Newark with coverage designed for city driving. Local agents understand Newark's unique challenges and help you save."
          primaryButton={{
            text: 'Get Newark Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/newark-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Newark Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Newark Auto Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Newark Drivers Pay More (And How We Help)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Newark's urban environment means higher insurance rates, but our local expertise 
                helps you find the best coverage at the lowest prices.
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
                Newark Auto Insurance Rates: What You Need to Know
              </h3>
              <p className="text-gray-700 mb-4">
                Newark drivers typically pay 15-25% more than the New Jersey average due to urban risk factors. 
                However, with the right coverage strategy and discounts, you can significantly reduce your premiums.
              </p>
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Compare Newark rates now
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
                Auto Insurance Coverage for Newark Drivers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Newark's unique driving environment requires specific coverage considerations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coverageNeeds.map((need, index) => (
                <motion.div
                  key={need.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <need.icon className="h-12 w-12 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{need.title}</h3>
                  <p className="text-gray-300 mb-4">{need.description}</p>
                  <ul className="space-y-2">
                    {need.recommendations.map((rec, idx) => (
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

        {/* Local Factors Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Expertise</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How We Address Newark's Insurance Challenges
              </h2>
            </div>

            <div className="space-y-6">
              {localFactors.map((item, index) => (
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

        {/* Neighborhoods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Areas</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving All Newark Neighborhoods
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
                Plus surrounding areas including Belleville, Bloomfield, East Orange, Irvington, and more
              </p>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Save on Newark Auto Insurance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get quotes from multiple carriers in minutes. Local agents who understand Newark's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Newark Quote
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
                  <p className="text-white font-semibold">Same-Day Coverage</p>
                  <p className="text-gray-300 text-sm">Get insured today with instant proof</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Newark Experts</p>
                  <p className="text-gray-300 text-sm">Local agents who know the city</p>
                </div>
              </div>
              <div className="flex items-start">
                <CurrencyDollarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Best Rates</p>
                  <p className="text-gray-300 text-sm">Compare 20+ carriers instantly</p>
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