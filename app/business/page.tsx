'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const businessServices = [
  {
    icon: BuildingOfficeIcon,
    title: 'Business Owners Policy (BOP)',
    description: 'Comprehensive package combining property and liability coverage for small to medium businesses.',
    features: ['Property Coverage', 'General Liability', 'Business Interruption', 'Equipment Coverage'],
    href: '/business/bop',
    popular: true
  },
  {
    icon: ShieldCheckIcon,
    title: 'General Liability',
    description: 'Essential protection against third-party claims for bodily injury and property damage.',
    features: ['Bodily Injury', 'Property Damage', 'Personal Injury', 'Legal Defense'],
    href: '/business/general-liability',
    popular: true
  },
  {
    icon: TruckIcon,
    title: 'Commercial Auto',
    description: 'Coverage for business vehicles, company cars, and commercial transportation needs.',
    features: ['Vehicle Coverage', 'Driver Coverage', 'Cargo Protection', 'Non-Owned Auto'],
    href: '/business/commercial-auto'
  },
  {
    icon: UserGroupIcon,
    title: 'Workers Compensation',
    description: 'Required coverage protecting employees and employers from workplace injuries.',
    features: ['Medical Expenses', 'Lost Wages', 'Disability Benefits', 'Return to Work'],
    href: '/business/workers-compensation'
  },
  {
    icon: DocumentTextIcon,
    title: 'Professional Liability',
    description: 'Protection against claims of professional negligence, errors, and omissions.',
    features: ['Errors & Omissions', 'Legal Defense', 'Reputation Protection', 'Regulatory Proceedings'],
    href: '/business/professional-liability'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cyber Liability',
    description: 'Modern protection against data breaches, cyber attacks, and digital threats.',
    features: ['Data Breach Response', 'Cyber Extortion', 'Business Interruption', 'Regulatory Fines'],
    href: '/business/cyber-liability'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Business Property Insurance',
    description: 'Coverage for your business buildings, equipment, inventory, and contents.',
    features: ['Building Coverage', 'Equipment Protection', 'Inventory Coverage', 'Business Income'],
    href: '/business/property'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Commercial Umbrella',
    description: 'Additional liability protection beyond your primary commercial policies.',
    features: ['Excess Liability', 'Broader Coverage', 'Legal Defense', 'Worldwide Coverage'],
    href: '/business/commercial-umbrella'
  },
  {
    icon: DocumentTextIcon,
    title: 'Bonds',
    description: 'Contract, license, and fidelity bonds to meet contractual and regulatory requirements.',
    features: ['Contract Bonds', 'License Bonds', 'Fidelity Bonds', 'Court Bonds'],
    href: '/business/bonds'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Builders Risk',
    description: 'Specialized coverage for construction projects and building renovations.',
    features: ['Construction Coverage', 'Materials Protection', 'Equipment Coverage', 'Soft Costs'],
    href: '/business/builders-risk'
  },
  {
    icon: TruckIcon,
    title: 'Commercial Trucking',
    description: 'Specialized coverage for trucking companies and commercial transportation.',
    features: ['Motor Truck Cargo', 'Non-Trucking Liability', 'Physical Damage', 'General Liability'],
    href: '/business/trucking'
  }
];

const industries = [
  {
    name: 'Professional Services',
    description: 'Lawyers, consultants, accountants, and other professional service providers'
  },
  {
    name: 'Retail & Restaurants',
    description: 'Retail stores, restaurants, and customer-facing businesses'
  },
  {
    name: 'Healthcare',
    description: 'Medical practices, clinics, and healthcare service providers'
  },
  {
    name: 'Construction',
    description: 'Contractors, builders, and construction-related businesses'
  },
  {
    name: 'Technology',
    description: 'Software companies, IT services, and technology consultants'
  },
  {
    name: 'Manufacturing',
    description: 'Manufacturers, distributors, and industrial operations'
  },
  {
    name: 'Real Estate',
    description: 'Real estate agents, property managers, and development companies'
  },
  {
    name: 'Non-Profit',
    description: 'Non-profit organizations, associations, and charitable institutions'
  }
];

const benefits = [
  {
    title: 'Industry Expertise',
    description: 'We understand the unique risks and requirements of different industries and provide specialized coverage solutions.'
  },
  {
    title: 'Risk Assessment',
    description: 'Our comprehensive risk assessment identifies potential exposures and recommends appropriate coverage.'
  },
  {
    title: 'Claims Support',
    description: 'We provide dedicated claims support and advocate for fair settlement of your business claims.'
  },
  {
    title: 'Competitive Pricing',
    description: 'Access to multiple carriers ensures you get the best coverage at competitive rates for your business.'
  }
];

const faqItems = [
  {
    question: 'What business insurance do I need to get started?',
    answer: 'Most businesses need General Liability and, if you have employees, Workers Compensation. Depending on your business type, you may also need Professional Liability, Commercial Auto, or Property coverage.'
  },
  {
    question: 'How much does business insurance cost?',
    answer: 'Costs vary significantly based on your industry, business size, location, and coverage needs. We provide customized quotes to ensure you get appropriate coverage at competitive rates.'
  },
  {
    question: 'Can I get all my business insurance from one carrier?',
    answer: 'Often yes, through a Business Owners Policy (BOP) or by bundling multiple coverages. We help you find the most efficient and cost-effective coverage structure.'
  },
  {
    question: 'How often should I review my business insurance?',
    answer: 'We recommend annual reviews and whenever you have significant business changes like expansion, new locations, additional employees, or changes in services offered.'
  }
];

export default function BusinessInsurance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Business Insurance Coverage"
        subtitle="Protect Your Business Investment"
        description="Comprehensive business insurance solutions for New Jersey companies. From small businesses to large enterprises, we provide the protection you need to operate with confidence and peace of mind."
        primaryButton={{
          text: 'Get Business Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Contact Agent',
          href: '/contact'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Business Insurance Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Business Coverage Options</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Business Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business with our comprehensive commercial insurance solutions. From liability and property coverage to specialized industry-specific protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
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
              href="/quote"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Get Business Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Industries We Serve */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Industries We Serve</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Specialized Coverage for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique risks and requirements of different industries and provide specialized coverage solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dark Section - Why Choose Us */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Why Choose Midland Associates</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Business Insurance Done Right
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference of working with an independent insurance agency that understands business needs.
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

      {/* 7. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a customized business insurance quote tailored to your industry and specific needs. Our commercial insurance experts are here to help.
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
              href="/quote"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Get Business Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Divider */}
      <Divider type="dark-to-white" />

      {/* 9. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Business Insurance Questions
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