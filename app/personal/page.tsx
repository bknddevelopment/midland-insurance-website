'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TruckIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const personalServices = [
  {
    icon: TruckIcon,
    title: 'Auto Insurance',
    description: 'Comprehensive auto coverage including liability, collision, comprehensive, and uninsured motorist protection.',
    features: ['Liability Coverage', 'Collision & Comprehensive', 'Uninsured Motorist', 'Medical Payments'],
    href: '/personal/auto',
    popular: true
  },
  {
    icon: HomeIcon,
    title: 'Homeowners Insurance',
    description: 'Complete protection for your home, personal property, and liability coverage.',
    features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection', 'Additional Living Expenses'],
    href: '/personal/homeowners',
    popular: true
  },
  {
    icon: ShieldCheckIcon,
    title: 'Condo Insurance',
    description: 'Specialized coverage for condominium owners protecting your unit and belongings.',
    features: ['Unit Coverage', 'Personal Property', 'Liability Protection', 'Loss Assessment'],
    href: '/personal/condo'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Boat Insurance',
    description: 'Marine coverage for your watercraft including hull, liability, and medical payments.',
    features: ['Hull Coverage', 'Liability Protection', 'Medical Payments', 'Uninsured Boaters'],
    href: '/personal/boat'
  },
  {
    icon: TruckIcon,
    title: 'Classic Auto Insurance',
    description: 'Specialized coverage for antique, classic, and collector vehicles.',
    features: ['Agreed Value Coverage', 'Restoration Coverage', 'Spare Parts', 'Show Coverage'],
    href: '/personal/classic-auto'
  },
  {
    icon: ShieldCheckIcon,
    title: 'High Net Worth Insurance',
    description: 'Enhanced coverage limits and services for high-value homes and assets.',
    features: ['Higher Coverage Limits', 'Personal Service', 'Worldwide Coverage', 'Identity Fraud'],
    href: '/personal/high-net-worth'
  },
  {
    icon: HomeIcon,
    title: 'Flood Insurance',
    description: 'Separate flood coverage to protect your home and belongings from flood damage.',
    features: ['NFIP Coverage', 'Private Flood Options', 'Building Coverage', 'Contents Coverage'],
    href: '/personal/flood'
  },
  {
    icon: UserGroupIcon,
    title: 'Life Insurance',
    description: 'Term and permanent life insurance to protect your family\'s financial future.',
    features: ['Term Life', 'Whole Life', 'Universal Life', 'Group Life'],
    href: '/personal/life'
  },
  {
    icon: TruckIcon,
    title: 'Motorcycle Insurance',
    description: 'Coverage for motorcycles, scooters, and other recreational vehicles.',
    features: ['Liability Coverage', 'Collision Coverage', 'Comprehensive', 'Uninsured Motorist'],
    href: '/personal/motorcycle'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Travel Insurance',
    description: 'Protection for domestic and international travel including trip cancellation.',
    features: ['Trip Cancellation', 'Medical Coverage', 'Baggage Protection', 'Emergency Evacuation'],
    href: '/personal/travel'
  }
];

const benefits = [
  {
    title: 'Personalized Service',
    description: 'Every client receives individualized attention and coverage recommendations based on their specific needs.'
  },
  {
    title: 'Multiple Carriers',
    description: 'We work with top-rated insurance companies to find you the best coverage at competitive rates.'
  },
  {
    title: 'Local Expertise',
    description: 'Our agents understand New Jersey requirements and can help you navigate state-specific regulations.'
  },
  {
    title: 'Claims Advocacy',
    description: 'We advocate for you during the claims process to ensure fair and timely settlement.'
  }
];

const faqItems = [
  {
    question: 'How much personal insurance coverage do I need?',
    answer: 'Coverage needs vary by individual circumstances. We assess your assets, income, and risk exposure to recommend appropriate coverage limits that protect your financial security.'
  },
  {
    question: 'Can I bundle my personal insurance policies?',
    answer: 'Yes! Bundling auto and home insurance often provides significant discounts while simplifying your insurance management with one agent and one renewal date.'
  },
  {
    question: 'What factors affect my insurance premiums?',
    answer: 'Factors include your driving record, credit score, location, coverage limits, deductibles, and the type/age of your home or vehicle. We help you understand and optimize these factors.'
  },
  {
    question: 'How often should I review my personal insurance?',
    answer: 'We recommend annual reviews or whenever you have major life changes like buying a home, getting married, having children, or acquiring valuable assets.'
  }
];

export default function PersonalInsurance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Personal Insurance Coverage"
        subtitle="Protect What Matters Most"
        description="Comprehensive personal insurance solutions for New Jersey families. From auto and home to life and specialty coverage, we provide the protection you need with the personal service you deserve."
        primaryButton={{
          text: 'Get Personal Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Contact Agent',
          href: '/contact'
        }}
        backgroundImage="/photos/gallery/girl_running_family-square-a2be1c64494345d5fb22e340c59dcf3b-kjg5vbql0rsf.webp"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Personal Insurance Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Personal Coverage Options</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Protection for Your Family
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive personal insurance solutions designed to protect your family, home, vehicles, and financial future with competitive rates and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${service.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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

          <div className="text-center mt-12">
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Personalized Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Why Choose Us */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Why Choose Midland Associates</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Personal Insurance Done Right
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference of working with an independent insurance agency that puts your needs first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <CheckCircleIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your personal insurance needs. Our experienced agents are here to help you find the right coverage at the right price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="tel:(201) 812-2184"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call (201) 812-2184
            </Link>
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Online Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Divider */}
      <Divider type="dark-to-white" />

      {/* 8. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personal Insurance Questions
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