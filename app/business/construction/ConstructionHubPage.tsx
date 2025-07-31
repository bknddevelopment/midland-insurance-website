'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  TruckIcon,
  UsersIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const services = [
  {
    name: 'General Liability',
    description: 'Protect against third-party injuries and property damage claims',
    icon: ShieldCheckIcon,
    href: '/business/construction/general-liability',
    highlight: 'Most Popular',
  },
  {
    name: "Builder's Risk",
    description: 'Coverage for buildings and materials during construction',
    icon: BuildingOfficeIcon,
    href: '/business/construction/builders-risk',
  },
  {
    name: "Workers' Compensation",
    description: 'Required coverage for employee injuries on the job',
    icon: UsersIcon,
    href: '/business/construction/workers-comp',
    highlight: 'NJ Required',
  },
  {
    name: 'Commercial Auto',
    description: 'Fleet and vehicle coverage for construction businesses',
    icon: TruckIcon,
    href: '/business/construction/commercial-auto',
  },
  {
    name: 'Contractor Bonds',
    description: 'License, permit, and performance bonds',
    icon: DocumentTextIcon,
    href: '/business/construction/bonds',
  },
  {
    name: 'Tools & Equipment',
    description: 'Inland marine coverage for valuable tools and machinery',
    icon: CurrencyDollarIcon,
    href: '/business/construction/tools-equipment',
  },
];

const trades = [
  'General Contractors',
  'Electricians',
  'Plumbers',
  'Roofers',
  'HVAC Contractors',
  'Masons',
  'Painters',
  'Carpenters',
  'Landscapers',
  'Drywall Contractors',
];

const whyChooseUs = [
  {
    title: '20+ Insurance Carriers',
    description: 'Access to multiple A-rated carriers ensures competitive rates',
    icon: ChartBarIcon,
  },
  {
    title: 'Construction Specialists',
    description: '30+ years insuring Bergen County contractors',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Local Expertise',
    description: 'We understand NJ regulations and local project requirements',
    icon: MapPinIcon,
  },
  {
    title: 'Fast Quotes',
    description: 'Get multiple quotes in 15 minutes, not days',
    icon: ClockIcon,
  },
];

const stats = [
  { number: '5,000+', label: 'Contractors Insured' },
  { number: '30+', label: 'Years Experience' },
  { number: '20+', label: 'Insurance Carriers' },
  { number: '24/7', label: 'Claims Support' },
];

const faqs = [
  {
    question: 'What insurance is required for contractors in New Jersey?',
    answer: 'New Jersey requires workers compensation for all employees and general liability with minimum limits varying by municipality. Many contracts also require additional insured endorsements and specific coverage limits.',
  },
  {
    question: 'How much does construction insurance cost?',
    answer: 'Costs vary based on trade, revenue, number of employees, claims history, and coverage limits. Small contractors typically pay $1,500-$5,000 annually for basic coverage, while larger operations may pay significantly more.',
  },
  {
    question: 'What does general liability cover for contractors?',
    answer: 'General liability covers third-party bodily injury, property damage, completed operations, and advertising injury claims. It protects against lawsuits from accidents on job sites or damage caused by your work.',
  },
  {
    question: 'Do I need builders risk insurance?',
    answer: 'Builders risk is essential for new construction and major renovations. It covers the structure, materials, and equipment during construction. Many contracts require it, and it protects your investment until project completion.',
  },
];

export default function ConstructionHubPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Business', url: '/business' },
    { name: 'Construction Insurance', url: '/business/construction' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Construction Insurance in Bergen County, NJ"
          subtitle="Protecting Contractors Since 1990"
          description="Comprehensive insurance solutions for construction professionals. From general liability to builders risk, we have the coverage you need at competitive rates."
          primaryButton={{
            text: 'Get Free Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/construction-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Services</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Construction Insurance Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your business with coverage designed specifically for contractors and construction professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:shadow-xl transition-shadow relative"
                >
                  {service.highlight && (
                    <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.highlight}
                    </div>
                  )}
                  <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Stats Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Impact</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bergen County's Trusted Construction Insurance Agency
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-5xl font-bold text-primary-400 mb-2">{stat.number}</p>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Trades We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Specialized Coverage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Insurance for Every Trade
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand the unique risks each trade faces and provide customized coverage solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {trades.map((trade, index) => (
                <Link
                  key={trade}
                  href={`/trades/${trade.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-4 bg-gray-50 rounded-lg text-center hover:bg-primary-50 hover:shadow-md transition-all group"
                >
                  <TruckIcon className="h-8 w-8 text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-700 font-medium">{trade}</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/trades"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                View All Trades We Serve
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Why Choose Us</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                The Midland Associates Advantage
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
                  <item.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Local Projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge-light inline-block mb-4">Local Expertise</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Insuring Bergen County's Biggest Projects
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  From the Route 80 widening to Hackensack's high-rise boom, we've provided insurance for Bergen County's most significant construction projects.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Vermella Paramus luxury apartments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ora Hackensack residential tower</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bergen Town Center redevelopment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Modera Fort Lee high-rise</span>
                  </li>
                </ul>
                <Link
                  href="/locations/bergen-county"
                  className="inline-flex items-center mt-8 text-primary-600 hover:text-primary-700 font-medium text-lg"
                >
                  Explore Bergen County Coverage
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Quote Request
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Select Trade</option>
                    {trades.map(trade => (
                      <option key={trade}>{trade}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Get Free Quote
                  </button>
                </form>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Or call <a href="tel:2018122184" className="text-primary-600 font-semibold">(201) 812-2184</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* FAQ Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQ</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Common Construction Insurance Questions
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
                  <p className="text-gray-300">{faq.answer}</p>
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
              Ready to Protect Your Construction Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get competitive quotes from multiple carriers in minutes. Our construction insurance experts are standing by.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors btn-transition"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}