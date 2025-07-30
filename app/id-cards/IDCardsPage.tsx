'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CreditCardIcon,
  DocumentTextIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function IDCardsPage() {
  const [activeTab, setActiveTab] = useState('auto');

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Insurance ID Cards', url: '/id-cards' },
  ];

  const cardTypes = {
    auto: {
      title: 'Auto Insurance ID Cards',
      description: 'Digital and physical proof of auto insurance for New Jersey drivers.',
      requirements: [
        'Policy number',
        'Vehicle information (VIN)',
        'Name of insured driver(s)',
        'Coverage effective dates'
      ],
      icon: CreditCardIcon
    },
    business: {
      title: 'Business Insurance Certificates',
      description: 'Certificates of insurance for contractors and business owners.',
      requirements: [
        'Business name and address',
        'Policy numbers',
        'Certificate holder information',
        'Additional insured details (if applicable)'
      ],
      icon: DocumentTextIcon
    }
  };

  const accessMethods = [
    {
      icon: ComputerDesktopIcon,
      title: 'Online Portal',
      description: 'Log in to your carrier\'s website to view and download ID cards instantly.',
      steps: [
        'Visit your insurance carrier\'s website',
        'Log in with your credentials',
        'Navigate to "Documents" or "ID Cards"',
        'Download or print your cards'
      ]
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile App',
      description: 'Most carriers offer mobile apps with digital ID card access.',
      steps: [
        'Download your carrier\'s mobile app',
        'Create an account or log in',
        'Access digital ID cards',
        'Save to your phone\'s wallet'
      ]
    },
    {
      icon: PhoneIcon,
      title: 'Call Our Office',
      description: 'We can request and email ID cards or certificates for you.',
      steps: [
        'Call us at (201) 812-2184',
        'Provide your policy information',
        'We\'ll contact your carrier',
        'Receive cards via email or mail'
      ]
    }
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Insurance ID Cards"
          subtitle="Quick Access to Your Proof of Insurance"
          description="Get instant access to your insurance ID cards and certificates. Digital options available for auto insurance and business certificates."
          primaryButton={{
            text: 'Call for Assistance',
            href: 'tel:2018122184',
          }}
          secondaryButton={{
            text: 'View Guide',
            href: '#how-to',
          }}
          backgroundImage="/photos/id-cards-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Card Types Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Card Types</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Insurance Documentation You Need
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-gray-200 p-1">
                {Object.entries(cardTypes).map(([key, type]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === key
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {type.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {Object.entries(cardTypes).map(([key, type]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeTab === key ? 1 : 0,
                    y: activeTab === key ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  className={activeTab === key ? 'block' : 'hidden'}
                >
                  <div className="bg-gray-50 rounded-lg p-8">
                    <div className="flex items-start mb-6">
                      <type.icon className="h-12 w-12 text-primary-600 mr-4" />
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {type.title}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {type.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Information Needed:
                      </h4>
                      <ul className="space-y-2">
                        {type.requirements.map((req) => (
                          <li key={req} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* How to Access Section */}
        <section id="how-to" className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">How to Access</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Three Ways to Get Your ID Cards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-lg p-6"
                  >
                    <Icon className="h-12 w-12 text-primary-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <span className="text-primary-400 font-semibold mr-2">
                            {stepIndex + 1}.
                          </span>
                          <span className="text-gray-300 text-sm">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Digital vs Physical Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Digital vs. Physical ID Cards
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <DevicePhoneMobileIcon className="h-8 w-8 text-blue-600 mr-3" />
                  Digital ID Cards
                </h3>
                <ul className="space-y-3">
                  {[
                    'Accepted by NJ law enforcement',
                    'Always with you on your phone',
                    'Can\'t be lost or damaged',
                    'Updated automatically',
                    'Environmentally friendly'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCardIcon className="h-8 w-8 text-gray-600 mr-3" />
                  Physical ID Cards
                </h3>
                <ul className="space-y-3">
                  {[
                    'Traditional proof of insurance',
                    'No technology required',
                    'Keep in glove compartment',
                    'Backup to digital version',
                    'Some prefer physical cards'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg max-w-3xl mx-auto">
              <div className="flex">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    New Jersey Digital ID Card Law
                  </h4>
                  <p className="text-gray-700">
                    As of 2016, New Jersey accepts electronic proof of auto insurance displayed on smartphones or tablets. 
                    The device must be turned on and the screen must be viewable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How quickly can I get my ID cards?',
                  answer: 'Digital ID cards are available instantly through carrier apps or websites. Physical cards can be mailed within 3-5 business days or picked up at our office.'
                },
                {
                  question: 'What if I need a certificate of insurance for my business?',
                  answer: 'We can generate certificates of insurance typically within 24 hours. For rush requests, we can often provide same-day service.'
                },
                {
                  question: 'Can I add additional insureds to my certificate?',
                  answer: 'Yes, we can add additional insureds to your certificate. You\'ll need to provide their name and address, and there may be an additional charge.'
                },
                {
                  question: 'What if my ID card information is incorrect?',
                  answer: 'Contact us immediately at (201) 812-2184. We\'ll work with your carrier to correct any errors and issue new cards.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Your ID Cards Now?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We\'re here to help you get your insurance documentation quickly and easily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2018122184"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (201) 812-2184
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Email Request
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}