'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function IndependentPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'We\'re Independent', url: '/about/independent' },
  ];

  const independentBenefits = [
    {
      icon: ChartBarIcon,
      title: 'Multiple Carrier Options',
      description: 'We work with over 30 top-rated insurance companies to find the best coverage and rates for you.',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Pricing',
      description: 'By comparing multiple carriers, we ensure you get the most competitive rates available.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Unbiased Advice',
      description: 'We work for you, not the insurance company. Our recommendations are based solely on your needs.',
    },
    {
      icon: UserGroupIcon,
      title: 'Personal Service',
      description: 'You\'ll have a dedicated agent who knows you and your coverage, not a call center.',
    },
  ];

  const captiveVsIndependent = [
    {
      category: 'Carrier Options',
      captive: 'One insurance company only',
      independent: 'Multiple insurance companies',
    },
    {
      category: 'Price Comparison',
      captive: 'Single quote',
      independent: 'Compare multiple quotes',
    },
    {
      category: 'Coverage Options',
      captive: 'Limited to one carrier\'s products',
      independent: 'Best coverage from any carrier',
    },
    {
      category: 'Claims Support',
      captive: 'Carrier handles directly',
      independent: 'We advocate for you',
    },
    {
      category: 'Policy Changes',
      captive: 'Must stay with same carrier',
      independent: 'Can switch carriers anytime',
    },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="We're Independent"
          subtitle="Your Advocate in Insurance"
          description="As an independent insurance agency, we work for you - not the insurance companies. This means better coverage, competitive rates, and personalized service."
          primaryButton={{
            text: 'Get Independent Advice',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Learn More',
            href: '#benefits',
          }}
          backgroundImage="/photos/independent-agency-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* What It Means Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">The Independent Advantage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Being Independent Means for You
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlike captive agents who represent one company, we represent you. We have access to multiple insurance carriers and can shop for the best combination of coverage and price.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {independentBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Comparison Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Independent vs. Captive Agents
              </h2>
              <p className="text-xl text-gray-300">
                See the difference independence makes
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-4 bg-slate-700 font-semibold text-white">
                  Feature
                </div>
                <div className="p-4 bg-red-900/20 font-semibold text-red-300 text-center">
                  Captive Agent
                </div>
                <div className="p-4 bg-green-900/20 font-semibold text-green-300 text-center">
                  Independent Agent
                </div>
              </div>
              {captiveVsIndependent.map((item, index) => (
                <div key={item.category} className={`grid grid-cols-3 gap-0 ${index % 2 === 0 ? 'bg-slate-800/50' : ''}`}>
                  <div className="p-4 text-gray-300 font-medium">
                    {item.category}
                  </div>
                  <div className="p-4 text-gray-400 text-center">
                    {item.captive}
                  </div>
                  <div className="p-4 text-gray-300 text-center flex items-center justify-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                    {item.independent}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Our Carrier Partners Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Partners</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted Insurance Carriers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We partner with financially strong, reputable insurance companies to provide you with reliable coverage options.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'The Hartford',
                'Travelers',
                'Liberty Mutual',
                'CNA',
                'Zurich',
                'Chubb',
                'Progressive',
                'Safeco'
              ].map((carrier) => (
                <div key={carrier} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <BuildingOfficeIcon className="h-8 w-8 text-gray-400 mr-3" />
                  <span className="text-gray-700 font-medium">{carrier}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8">
              And many more regional and specialty carriers...
            </p>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* How We Work Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Work for You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-primary-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Understand Your Needs
                </h3>
                <p className="text-gray-600">
                  We start by learning about your specific situation, risks, and coverage requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-primary-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Shop Multiple Carriers
                </h3>
                <p className="text-gray-600">
                  We compare quotes from multiple insurance companies to find the best coverage and price.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-primary-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  We\'re here for claims, policy changes, and annual reviews to ensure continued protection.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HandRaisedIcon className="h-16 w-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the Independent Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of Bergen County residents and businesses who trust us as their independent insurance advocate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-colors"
              >
                Get Independent Quote
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Talk to an Agent
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}