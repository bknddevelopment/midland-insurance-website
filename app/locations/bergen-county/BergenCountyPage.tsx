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
  BuildingOffice2Icon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function BergenCountyPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Bergen County', url: '/locations/bergen-county' },
  ];

  const stats = [
    { icon: UsersIcon, value: '955,000+', label: 'Population' },
    { icon: CarIcon, value: '625,000+', label: 'Registered Vehicles' },
    { icon: BuildingOffice2Icon, value: '70', label: 'Municipalities' },
    { icon: CurrencyDollarIcon, value: '$100-200', label: 'Avg Monthly Savings' }
  ];

  const majorCities = [
    { name: 'Hackensack', population: '46,000+', href: '/locations/hackensack', description: 'County seat with urban rates' },
    { name: 'Fort Lee', population: '40,000+', href: '/locations/fort-lee', description: 'GW Bridge area, higher rates' },
    { name: 'Paramus', population: '26,000+', href: '/locations/paramus', description: 'Shopping capital, moderate rates' },
    { name: 'Englewood', population: '29,000+', href: '/locations/englewood', description: 'Diverse community, varied rates' },
    { name: 'Teaneck', population: '41,000+', href: '/locations/teaneck', description: 'Family-friendly, good rates' },
    { name: 'Fair Lawn', population: '34,000+', href: '/locations/fair-lawn', description: 'Suburban rates, safe streets' },
    { name: 'Ridgewood', population: '25,000+', href: '/locations/ridgewood', description: 'Upscale area, competitive rates' },
    { name: 'Lyndhurst', population: '22,000+', href: '/locations/lyndhurst', description: 'Mixed residential/commercial' }
  ];

  const featuredLocations = [
    { name: 'Rutherford', href: '/locations/rutherford', feature: 'NYC commuter discounts' },
    { name: 'Clifton', href: '/locations/clifton', feature: 'Highway corridor coverage' },
    { name: 'Bergenfield', href: '/locations/bergenfield', feature: 'Family-friendly rates' },
    { name: 'Dumont', href: '/locations/dumont', feature: 'Safe neighborhood discounts' },
    { name: 'New Milford', href: '/locations/new-milford', feature: 'Small town savings' },
    { name: 'North Arlington', href: '/locations/north-arlington', feature: 'Competitive urban rates' },
    { name: 'Lodi', href: '/locations/lodi', feature: 'Working-class discounts' },
    { name: 'Garfield', href: '/locations/garfield', feature: 'Diverse community options' }
  ];

  const allBergenCountyTowns = [
    'Allendale', 'Alpine', 'Bergenfield', 'Bogota', 'Carlstadt', 'Cliffside Park', 
    'Clifton', 'Closter', 'Cresskill', 'Demarest', 'Dumont', 'East Rutherford',
    'Edgewater', 'Elmwood Park', 'Emerson', 'Englewood', 'Englewood Cliffs',
    'Fair Lawn', 'Fairview', 'Fort Lee', 'Franklin Lakes', 'Garfield', 
    'Glen Rock', 'Hackensack', 'Harrington Park', 'Hasbrouck Heights', 'Haworth',
    'Hillsdale', 'Ho-Ho-Kus', 'Leonia', 'Little Ferry', 'Lodi', 'Lyndhurst',
    'Mahwah', 'Maywood', 'Midland Park', 'Montvale', 'Moonachie', 'New Milford',
    'North Arlington', 'Northvale', 'Norwood', 'Oakland', 'Old Tappan', 'Oradell',
    'Palisades Park', 'Paramus', 'Park Ridge', 'Ramsey', 'Ridgefield', 
    'Ridgefield Park', 'Ridgewood', 'River Edge', 'River Vale', 'Rochelle Park',
    'Rockleigh', 'Rutherford', 'Saddle Brook', 'Saddle River', 'South Hackensack',
    'Teaneck', 'Tenafly', 'Teterboro', 'Upper Saddle River', 'Waldwick',
    'Wallington', 'Washington Township', 'Westwood', 'Wood-Ridge', 'Woodcliff Lake',
    'Wyckoff'
  ];

  const insuranceFactors = [
    {
      factor: 'NYC Proximity',
      impact: 'Higher rates near bridges and tunnels',
      solution: 'Commuter discounts and usage-based options'
    },
    {
      factor: 'Population Density',
      impact: 'Varies from urban to suburban rates',
      solution: 'Zone-based pricing for fair rates'
    },
    {
      factor: 'Income Levels',
      impact: 'Higher property values affect coverage needs',
      solution: 'Flexible coverage limits and deductibles'
    },
    {
      factor: 'Traffic Patterns',
      impact: 'Major highways increase accident risk',
      solution: 'Safe driver programs and defensive driving discounts'
    }
  ];

  const countyBenefits = [
    {
      title: 'Multi-Town Coverage',
      description: 'One policy covers you anywhere in Bergen County',
      icon: MapPinIcon
    },
    {
      title: 'Local Agent Network',
      description: 'Agents in multiple Bergen County locations',
      icon: UsersIcon
    },
    {
      title: 'County-Wide Discounts',
      description: 'Special rates for Bergen County residents',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Quick Claims Service',
      description: 'Local adjusters throughout the county',
      icon: ClockIcon
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Bergen County"
        locationSlug="bergen-county"
        geo={{ lat: 40.9263, lng: -74.0770 }}
        serviceRadius={25}
        description="Auto insurance throughout Bergen County, NJ. Local agents serving all 70 municipalities with competitive rates and personalized service."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Bergen County Auto Insurance"
          subtitle="Car Insurance for New Jersey's Most Populous County"
          description="Get affordable auto insurance anywhere in Bergen County. From Fort Lee to Mahwah, we serve all 70 municipalities with local expertise and competitive rates."
          primaryButton={{
            text: 'Get Bergen County Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/bergen-county-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Bergen County Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Bergen County Coverage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Auto Insurance for 955,000+ Bergen County Residents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As New Jersey's most populous county, Bergen County's diverse communities each have unique 
                auto insurance needs. Our local expertise helps you find the perfect coverage at the best rate.
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
                Why Bergen County Drivers Choose Us
              </h3>
              <p className="text-gray-700 mb-4">
                Bergen County's unique position between New York City and suburban New Jersey creates 
                diverse insurance needs. From busy urban centers like Hackensack to quiet towns like 
                Alpine, we understand the local factors that affect your rates and coverage needs.
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

        {/* Major Cities Grid */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Major Cities</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Auto Insurance in Bergen County's Largest Cities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {majorCities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={city.href}
                    className="block bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{city.name}</h3>
                    <p className="text-primary-400 mb-2">Pop: {city.population}</p>
                    <p className="text-gray-300 text-sm">{city.description}</p>
                    <span className="inline-flex items-center text-primary-400 text-sm mt-3">
                      Get quote
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Locations */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Featured Locations</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Popular Bergen County Communities We Serve
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredLocations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={location.href}
                    className="block bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors text-center"
                  >
                    <MapPinIcon className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold">{location.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{location.feature}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* All Towns Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Complete Coverage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving All 70 Bergen County Municipalities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No matter where you live in Bergen County, we provide local auto insurance expertise
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {allBergenCountyTowns.map((town, index) => (
                  <div
                    key={index}
                    className="text-center p-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {town}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't see your town listed with its own page? We still serve your area! 
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 ml-1">
                  Contact us for a personalized quote.
                </Link>
              </p>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Insurance Factors */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Factors</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bergen County Auto Insurance Factors
              </h2>
            </div>

            <div className="space-y-6">
              {insuranceFactors.map((item, index) => (
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

        {/* County Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Why Choose Us</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bergen County-Wide Insurance Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <benefit.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/cheap-car-insurance-bergen-county"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Find Cheap Car Insurance in Bergen County
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your Bergen County Auto Insurance Quote
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Bergen County drivers who save with our local expertise 
              and access to multiple insurance carriers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get County-Wide Quote
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
                <MapPinIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">70 Towns Covered</p>
                  <p className="text-gray-300 text-sm">Complete Bergen County coverage</p>
                </div>
              </div>
              <div className="flex items-start">
                <ChartBarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Competitive Rates</p>
                  <p className="text-gray-300 text-sm">Save $100-200/month average</p>
                </div>
              </div>
              <div className="flex items-start">
                <CurrencyDollarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Local Expertise</p>
                  <p className="text-gray-300 text-sm">Serving Bergen County since 1989</p>
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