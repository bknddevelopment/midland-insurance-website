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
  HomeIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function LindenPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Linden', url: '/locations/linden' },
  ];

  const stats = [
    { icon: UsersIcon, value: '43,000+', label: 'Residents Protected' },
    { icon: BuildingOfficeIcon, value: '2,500+', label: 'Local Businesses' },
    { icon: CurrencyDollarIcon, value: '$75-125', label: 'Average Monthly Savings' },
    { icon: ClockIcon, value: '30+', label: 'Years Serving Linden' }
  ];

  const insuranceTypes = [
    {
      title: 'Auto Insurance',
      description: 'Comprehensive car insurance for Linden drivers with competitive rates',
      icon: CarIcon,
      features: [
        'Coverage for all vehicle types',
        'Multi-car discounts available',
        'SR-22 filing assistance',
        'Same-day coverage options'
      ],
      href: '/personal/auto'
    },
    {
      title: 'Homeowners Insurance',
      description: 'Protect your Linden home with comprehensive coverage',
      icon: HomeIcon,
      features: [
        'Full replacement cost coverage',
        'Personal property protection',
        'Liability coverage included',
        'Flood insurance available'
      ],
      href: '/personal/homeowners'
    },
    {
      title: 'Business Insurance',
      description: 'Commercial coverage for Linden businesses of all sizes',
      icon: BuildingOfficeIcon,
      features: [
        'General liability coverage',
        'Commercial property insurance',
        'Workers compensation',
        'Business auto coverage'
      ],
      href: '/business'
    }
  ];

  const lindenHighlights = [
    {
      title: 'Industrial Heritage',
      description: 'Special coverage for businesses in Linden\'s industrial sectors',
      details: 'From warehouses to manufacturing, we understand industrial insurance needs'
    },
    {
      title: 'Residential Growth',
      description: 'Insurance solutions for Linden\'s growing residential communities',
      details: 'New construction coverage and established neighborhood protection'
    },
    {
      title: 'Transportation Hub',
      description: 'Coverage options for Linden\'s strategic location near major highways',
      details: 'Commercial auto and trucking insurance specialists'
    },
    {
      title: 'Diverse Community',
      description: 'Multilingual service for Linden\'s diverse population',
      details: 'Agents who speak Spanish, Polish, Portuguese, and more'
    }
  ];

  const neighborhoods = [
    'Tremley Point', 'Linden Industrial Park', 'Wood Avenue Corridor',
    'St. Georges Avenue', 'Grasselli', 'Winfield Park Border'
  ];

  const whyChooseUs = [
    {
      icon: MapPinIcon,
      title: 'Local Linden Expertise',
      description: 'Agents who live and work in Union County understand your specific needs'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Rates',
      description: 'Access to 20+ carriers means finding the best rates for Linden residents'
    },
    {
      icon: ClockIcon,
      title: 'Quick Response Time',
      description: 'Same-day quotes and rapid claims processing when you need it most'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Coverage',
      description: 'From basic liability to full coverage, we tailor policies to your needs'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName="Linden"
        locationSlug="linden"
        geo={{ lat: 40.6220, lng: -74.2446 }}
        serviceRadius={10}
        description="Insurance in Linden, NJ. Auto, home, and business insurance with local agents serving Union County."
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Insurance Linden, NJ"
          subtitle="Your Local Insurance Partner in Union County"
          description="Get comprehensive insurance coverage in Linden with local agents who understand your needs. Auto, home, and business insurance with personalized service and competitive rates."
          primaryButton={{
            text: 'Get Linden Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/linden-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Linden Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted Insurance Provider in Linden Since 1990
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Serving Linden families and businesses with comprehensive insurance solutions 
                and exceptional local service for over 30 years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Insurance Types Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Options</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Complete Insurance Solutions for Linden
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From personal auto to commercial coverage, we protect what matters most to Linden residents and businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insuranceTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <type.icon className="h-12 w-12 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={type.href}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Linden Highlights Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Knowledge</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Linden Residents Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lindenHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-primary-400 mb-3">
                    {highlight.description}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {highlight.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Advantage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Linden Insurance Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Areas</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving All of Linden
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
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

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Also serving nearby areas including Elizabeth, Rahway, Roselle, and Carteret
              </p>
              <Link
                href="/locations"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                View all service locations
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <TruckIcon className="h-16 w-16 text-primary-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your Free Linden Insurance Quote Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers in Linden who trust us for their insurance needs. 
              Get personalized coverage with local service you can count on.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Linden Quote
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
                  <p className="text-white font-semibold">Quick Service</p>
                  <p className="text-gray-300 text-sm">Same-day quotes and coverage available</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Local Office</p>
                  <p className="text-gray-300 text-sm">Serving Linden for over 30 years</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheckIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">All Coverage Types</p>
                  <p className="text-gray-300 text-sm">Auto, home, business, and more</p>
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