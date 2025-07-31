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
  BuildingOfficeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const personalServices = [
  {
    icon: TruckIcon,
    title: 'Auto Insurance',
    description: 'Comprehensive coverage for your vehicle including liability, collision, and comprehensive protection.',
    features: ['Liability Coverage', 'Collision Coverage', 'Comprehensive Coverage', 'Uninsured Motorist'],
    href: '/services/auto-insurance'
  },
  {
    icon: HomeIcon,
    title: 'Homeowners Insurance',
    description: 'Protect your home and personal belongings with comprehensive homeowners coverage.',
    features: ['Dwelling Coverage', 'Personal Property', 'Liability Protection', 'Additional Living Expenses'],
    href: '/services/homeowners-insurance'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Condo Insurance',
    description: 'Specialized coverage for condominium owners protecting your unit and personal property.',
    features: ['Unit Coverage', 'Personal Property', 'Liability Protection', 'Loss Assessment'],
    href: '/services/condo-insurance'
  },
  {
    icon: UserGroupIcon,
    title: 'Renters Insurance',
    description: 'Affordable protection for tenants covering personal property and liability.',
    features: ['Personal Property', 'Liability Coverage', 'Medical Payments', 'Additional Living Expenses'],
    href: '/services/renters-insurance'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Boat Insurance',
    description: 'Comprehensive marine coverage for your watercraft and boating activities.',
    features: ['Hull Coverage', 'Liability Protection', 'Medical Payments', 'Uninsured Boaters'],
    href: '/services/boat-insurance'
  },
  {
    icon: TruckIcon,
    title: 'Classic Auto Insurance',
    description: 'Specialized coverage for classic, antique, and collector vehicles.',
    features: ['Agreed Value Coverage', 'Restoration Coverage', 'Spare Parts Coverage', 'Show Coverage'],
    href: '/services/classic-auto-insurance'
  }
];

const businessServices = [
  {
    icon: BuildingOfficeIcon,
    title: 'Business Owners Policy (BOP)',
    description: 'Comprehensive package combining property and liability coverage for small businesses.',
    features: ['Property Coverage', 'General Liability', 'Business Interruption', 'Equipment Coverage'],
    href: '/services/business-owners-policy'
  },
  {
    icon: ShieldCheckIcon,
    title: 'General Liability',
    description: 'Essential protection against third-party claims and lawsuits.',
    features: ['Bodily Injury', 'Property Damage', 'Personal Injury', 'Legal Defense'],
    href: '/services/general-liability'
  },
  {
    icon: TruckIcon,
    title: 'Commercial Auto',
    description: 'Coverage for business vehicles and commercial transportation needs.',
    features: ['Vehicle Coverage', 'Driver Coverage', 'Cargo Protection', 'Non-Owned Auto'],
    href: '/services/commercial-auto'
  },
  {
    icon: UserGroupIcon,
    title: 'Workers Compensation',
    description: 'Required coverage protecting employees and employers from workplace injuries.',
    features: ['Medical Expenses', 'Lost Wages', 'Disability Benefits', 'Return to Work'],
    href: '/services/workers-compensation'
  },
  {
    icon: DocumentTextIcon,
    title: 'Professional Liability',
    description: 'Protection against claims of professional negligence and errors.',
    features: ['Errors & Omissions', 'Legal Defense', 'Reputation Protection', 'Cyber Liability'],
    href: '/services/professional-liability'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Cyber Liability',
    description: 'Modern protection against data breaches and cyber attacks.',
    features: ['Data Breach Response', 'Cyber Extortion', 'Business Interruption', 'Regulatory Fines'],
    href: '/services/cyber-liability'
  }
];

const industries = [
  'Professional Services',
  'Retail & Restaurants',
  'Healthcare',
  'Construction',
  'Technology',
  'Manufacturing',
  'Real Estate',
  'Non-Profit Organizations'
];

const process = [
  {
    step: '1',
    title: 'Consultation',
    description: 'We discuss your specific needs and assess your current coverage'
  },
  {
    step: '2',
    title: 'Quote Comparison',
    description: 'We compare quotes from multiple A-rated carriers to find the best value'
  },
  {
    step: '3',
    title: 'Customization',
    description: 'We tailor coverage options to match your unique requirements'
  },
  {
    step: '4',
    title: 'Implementation',
    description: 'We handle all paperwork and ensure smooth policy activation'
  },
  {
    step: '5',
    title: 'Ongoing Support',
    description: 'We provide continued service including claims support and policy reviews'
  }
];

const faqItems = [
  {
    question: 'How do I know what coverage I need?',
    answer: 'Our experienced agents will assess your specific situation and recommend appropriate coverage based on your needs, budget, and risk factors.'
  },
  {
    question: 'Can you help me save money on my insurance?',
    answer: 'Yes! We work with multiple carriers to find competitive rates and can identify discounts you may qualify for.'
  },
  {
    question: 'What should I do if I need to file a claim?',
    answer: 'Contact us immediately. We\'ll guide you through the claims process and advocate for you with the insurance company.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options including monthly, quarterly, and annual payment plans to fit your budget.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Comprehensive Insurance Solutions"
        subtitle="Personal & Business Coverage"
        description="From auto and home insurance to comprehensive business protection, we provide the coverage you need with the personal service you deserve. Get personalized quotes from top-rated carriers."
        primaryButton={{
          text: 'Get Free Quote',
          href: EXTERNAL_URLS.QUOTE_FORM
        }}
        secondaryButton={{
          text: 'Contact Us',
          href: '/contact'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Personal Insurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Personal Insurance</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Protect What Matters Most
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive personal insurance solutions designed to protect your family, home, and assets with competitive rates and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
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
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
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
              Get Personal Insurance Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Business Insurance */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Business Insurance</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Protect Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business insurance solutions to protect your company, employees, and assets from unexpected risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-8 rounded-lg"
              >
                <service.icon className="h-12 w-12 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
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
              Get Business Insurance Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Dark Section - Industries We Serve */}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-white font-semibold">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark Section - Our Process */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Work With You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures you get the right coverage at the right price with exceptional service.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Start Your Quote Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, personalized insurance quote. Our experienced agents are ready to help you find the perfect coverage.
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

      {/* 9. Divider */}
      <Divider type="dark-to-white" />

      {/* 12. FAQ Section (Always Last Dark Section Before Final White) */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-8 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
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