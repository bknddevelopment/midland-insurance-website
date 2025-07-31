'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  HomeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const coverageHighlights = [
  {
    icon: HomeIcon,
    title: 'Asset Protection',
    description: 'Protects your home, savings, and investments from lawsuits',
    details: ['Home equity protection', 'Investment accounts', 'Future earnings', 'Personal property']
  },
  {
    icon: TruckIcon,
    title: 'Auto Liability Extension',
    description: 'Additional coverage beyond your auto policy limits',
    details: ['Serious accidents', 'Multiple vehicle incidents', 'Teen driver protection', 'Guest driver coverage']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Personal Liability',
    description: 'Coverage for incidents at home or elsewhere',
    details: ['Dog bite liability', 'Pool accidents', 'Slip and fall incidents', 'Sports injuries']
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Legal Defense',
    description: 'Coverage for legal fees even if you\'re not at fault',
    details: ['Attorney fees', 'Court costs', 'Settlement costs', 'Defense expenses']
  }
];

const coverageLimits = [
  { amount: '$1 Million', premium: 'Starting at $150/year', popular: false },
  { amount: '$2 Million', premium: 'Starting at $220/year', popular: true },
  { amount: '$3 Million', premium: 'Starting at $290/year', popular: false },
  { amount: '$5 Million', premium: 'Starting at $440/year', popular: false }
];

const whoNeedsUmbrella = [
  {
    title: 'Homeowners',
    description: 'Protect your home equity and assets from lawsuits'
  },
  {
    title: 'Parents with Teen Drivers',
    description: 'Extra protection for inexperienced drivers'
  },
  {
    title: 'Pool or Trampoline Owners',
    description: 'Coverage for attractive nuisances'
  },
  {
    title: 'Dog Owners',
    description: 'Protection from bite liability claims'
  },
  {
    title: 'High Net Worth Individuals',
    description: 'Shield substantial assets from litigation'
  },
  {
    title: 'Landlords',
    description: 'Additional liability coverage for rental properties'
  }
];

const faqItems = [
  {
    question: 'What is umbrella insurance?',
    answer: 'Umbrella insurance is extra liability coverage that protects you beyond the limits of your auto and home insurance policies. It kicks in when those limits are exhausted and provides additional protection for your assets.'
  },
  {
    question: 'How much umbrella coverage do I need?',
    answer: 'Coverage needs vary based on your assets, income, and risk exposure. Most people start with $1-2 million, but those with significant assets or higher risk factors may need $5 million or more.'
  },
  {
    question: 'What does umbrella insurance cover?',
    answer: 'Umbrella insurance covers bodily injury liability, property damage liability, and personal liability situations like libel, slander, and defamation. It also provides legal defense coverage.'
  },
  {
    question: 'Is umbrella insurance expensive?',
    answer: 'Umbrella insurance is surprisingly affordable. A $1 million policy typically costs $150-300 per year, making it one of the best values in insurance protection.'
  }
];

export default function PersonalUmbrellaPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Personal Umbrella Insurance"
        subtitle="Extra Protection When You Need It Most"
        description="Get $1-5 million in additional liability coverage to protect your assets and future. Affordable umbrella insurance for New Jersey families."
        primaryButton={{
          text: 'Get Umbrella Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call (201) 812-2184',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/girl_running_family-square-a2be1c64494345d5fb22e340c59dcf3b-kjg5vbql0rsf.webp"
      />

      <Divider type="dark-to-white" />

      {/* Coverage Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Benefits</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why You Need Umbrella Insurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's litigious society, a single accident or incident can result in a lawsuit that exceeds your standard insurance limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <item.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* Coverage Limits Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Options</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the right amount of umbrella coverage based on your assets and risk exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageLimits.map((limit, index) => (
              <motion.div
                key={limit.amount}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800 p-6 rounded-lg text-center relative ${
                  limit.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {limit.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CurrencyDollarIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {limit.amount}
                </h3>
                <p className="text-gray-300">
                  {limit.premium}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Your Umbrella Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who Needs Umbrella Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Risk Assessment</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Who Needs Umbrella Insurance?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If any of these situations apply to you, umbrella insurance provides essential protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoNeedsUmbrella.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="dark-to-white" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Umbrella Insurance Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Have More Questions?
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}