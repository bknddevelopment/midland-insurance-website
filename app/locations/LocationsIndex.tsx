'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  BuildingOfficeIcon,
  UsersIcon,
  TruckIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Image from 'next/image';

const locations = [
  {
    name: 'Bergen County',
    slug: 'bergen-county',
    type: 'county',
    description: 'Comprehensive county-wide coverage for all 70 municipalities',
    population: '955,732',
    keyStats: {
      municipalities: 70,
      activeProjects: '400+',
      avgProjectValue: '$5.2M',
    },
    highlights: [
      'Largest county in New Jersey',
      'Major construction hub',
      'Diverse project types',
      'Strong local economy'
    ],
  },
  {
    name: 'Fort Lee',
    slug: 'fort-lee',
    type: 'city',
    description: 'High-rise specialists serving the Gold Coast',
    population: '40,191',
    keyStats: {
      activeHighRises: 12,
      avgProjectValue: '$125M',
      topTrades: 'GCs, Electricians, HVAC',
    },
    highlights: [
      'Luxury high-rise center',
      'Major development zone',
      'Hudson River views',
      'Premium insurance needs'
    ],
  },
  {
    name: 'Hackensack',
    slug: 'hackensack',
    type: 'city',
    description: 'County seat with major medical and commercial projects',
    population: '46,030',
    keyStats: {
      medicalProjects: 8,
      commercialDev: '15+',
      avgProjectValue: '$45M',
    },
    highlights: [
      'Medical construction hub',
      'Downtown revitalization',
      'Government projects',
      'Mixed-use developments'
    ],
  },
  {
    name: 'Paramus',
    slug: 'paramus',
    type: 'city',
    description: 'Retail capital undergoing major renovations',
    population: '26,698',
    keyStats: {
      retailProjects: 20,
      renovationValue: '$300M+',
      topTrades: 'Interior, HVAC, Electrical',
    },
    highlights: [
      'Retail renovation boom',
      'Mall modernization',
      'Mixed-use conversions',
      'High traffic areas'
    ],
  },
  {
    name: 'Ridgewood',
    slug: 'ridgewood',
    type: 'city',
    description: 'Upscale residential and historic preservation projects',
    population: '25,179',
    keyStats: {
      residentialProjects: 30,
      avgHomeValue: '$800K+',
      preservationProjects: 10,
    },
    highlights: [
      'High-end residential',
      'Historic preservation',
      'Downtown development',
      'Premium craftsmanship'
    ],
  },
  {
    name: 'Mahwah',
    slug: 'mahwah',
    type: 'city',
    description: 'Growing township with commercial and residential expansion',
    population: '25,890',
    keyStats: {
      commercialSpace: '2M sq ft',
      newDevelopments: 12,
      infrastructureProjects: 5,
    },
    highlights: [
      'Corporate headquarters',
      'Residential growth',
      'Infrastructure updates',
      'Border location advantage'
    ],
  },
];

export default function LocationsIndex() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Bergen County Construction Insurance"
          subtitle="Serving All 70 Municipalities"
          description="From Fort Lee's high-rises to Mahwah's commercial developments, we provide specialized construction insurance throughout Bergen County."
          primaryButton={{
            text: 'Get Local Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/bergen-county-map.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Why Local Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Expertise</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Local Construction Insurance Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bergen County's diverse construction landscape requires an insurance partner who understands local regulations, project types, and market conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <BuildingOfficeIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Municipal Requirements
                </h3>
                <p className="text-gray-600">
                  Each Bergen County municipality has unique insurance requirements. We know them all.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <UsersIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Local Relationships
                </h3>
                <p className="text-gray-600">
                  30+ years serving Bergen County means established relationships with local contractors and carriers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <TruckIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  On-Site Service
                </h3>
                <p className="text-gray-600">
                  Local presence means we can visit your job sites and provide hands-on support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Locations Grid */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Service Areas</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Select Your Bergen County Location
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all ${
                    location.type === 'county' ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {location.name}
                      </h3>
                      <p className="text-gray-300">{location.description}</p>
                    </div>
                    <MapPinIcon className="h-8 w-8 text-primary-400 flex-shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-700 rounded p-3">
                      <p className="text-sm text-gray-400">Population</p>
                      <p className="text-lg font-semibold text-white">{location.population}</p>
                    </div>
                    {Object.entries(location.keyStats).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="bg-slate-700 rounded p-3">
                        <p className="text-sm text-gray-400">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </p>
                        <p className="text-lg font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Key Highlights:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {location.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <CheckCircleIcon className="h-4 w-4 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                  >
                    View {location.name} Details
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Additional Areas */}
            <div className="mt-12 bg-slate-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Also Serving These Bergen County Communities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold text-primary-400 mb-2">Northern Bergen</p>
                  <ul className="space-y-1 text-sm">
                    <li>Allendale</li>
                    <li>Franklin Lakes</li>
                    <li>Oakland</li>
                    <li>Wyckoff</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-primary-400 mb-2">Central Bergen</p>
                  <ul className="space-y-1 text-sm">
                    <li>Fair Lawn</li>
                    <li>Glen Rock</li>
                    <li>River Edge</li>
                    <li>Westwood</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-primary-400 mb-2">Eastern Bergen</p>
                  <ul className="space-y-1 text-sm">
                    <li>Englewood</li>
                    <li>Teaneck</li>
                    <li>Bergenfield</li>
                    <li>Dumont</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-primary-400 mb-2">Southern Bergen</p>
                  <ul className="space-y-1 text-sm">
                    <li>Lyndhurst</li>
                    <li>Rutherford</li>
                    <li>Wood-Ridge</li>
                    <li>Hasbrouck Heights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Bergen County Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Market Overview</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bergen County Construction Market
              </h2>
            </div>

            <div className="bg-primary-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <CurrencyDollarIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900">$3.2B</p>
                  <p className="text-gray-700">Annual Construction Value</p>
                </div>
                <div>
                  <BuildingOfficeIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900">400+</p>
                  <p className="text-gray-700">Active Projects</p>
                </div>
                <div>
                  <UsersIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900">2,500+</p>
                  <p className="text-gray-700">Licensed Contractors</p>
                </div>
                <div>
                  <TruckIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900">15,000+</p>
                  <p className="text-gray-700">Construction Workers</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Major Project Types
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">High-Rise Residential</span>
                    <span className="font-semibold">35%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Medical Facilities</span>
                    <span className="font-semibold">20%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Retail/Commercial</span>
                    <span className="font-semibold">25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Infrastructure</span>
                    <span className="font-semibold">10%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Single Family</span>
                    <span className="font-semibold">10%</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Insurance Requirements by Location
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Fort Lee (High-Rise)</span>
                    <span className="font-semibold">$5M-$10M GL</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Hackensack (Medical)</span>
                    <span className="font-semibold">$2M-$5M GL</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Paramus (Retail)</span>
                    <span className="font-semibold">$1M-$2M GL</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Ridgewood (Residential)</span>
                    <span className="font-semibold">$1M-$2M GL</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">County Infrastructure</span>
                    <span className="font-semibold">$5M+ GL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Get Location-Specific Coverage Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're working on Fort Lee high-rises or Mahwah commercial projects, we have the right coverage for your Bergen County construction business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Your Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                
                <a
                  href="tel:2018122184"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  (201) 812-2184
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-white/80">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Monday-Friday: 9AM-5PM | Saturday: By Appointment</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}