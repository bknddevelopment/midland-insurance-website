'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  SparklesIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const countertopTypes = [
  {
    icon: SparklesIcon,
    title: 'Granite Countertops',
    description: 'Natural stone beauty with exceptional durability and heat resistance.',
    features: ['Natural patterns', 'Heat resistant', 'Scratch resistant', '10-15 year warranty'],
    popular: true
  },
  {
    icon: SwatchIcon,
    title: 'Quartz Countertops',
    description: 'Engineered stone combining beauty with low maintenance requirements.',
    features: ['Non-porous surface', 'Stain resistant', 'Consistent patterns', 'No sealing required'],
    popular: true
  },
  {
    icon: HomeIcon,
    title: 'Marble Countertops',
    description: 'Timeless elegance with unique veining patterns for luxury kitchens.',
    features: ['Unique patterns', 'Heat resistant', 'Premium appearance', 'Increases home value']
  },
  {
    icon: SwatchIcon,
    title: 'Solid Surface',
    description: 'Seamless, non-porous surfaces perfect for modern kitchen designs.',
    features: ['Seamless joints', 'Repairable', 'Custom shapes', 'Integrated sinks']
  },
  {
    icon: HomeIcon,
    title: 'Butcher Block',
    description: 'Warm wood surfaces bringing natural beauty to your kitchen.',
    features: ['Natural warmth', 'Eco-friendly', 'Easy to refinish', 'Antibacterial properties']
  },
  {
    icon: SwatchIcon,
    title: 'Laminate Options',
    description: 'Budget-friendly solutions with modern designs and patterns.',
    features: ['Affordable pricing', 'Many patterns', 'Easy installation', 'Low maintenance']
  }
];

const installationProcess = [
  {
    step: '1',
    title: 'Free Consultation',
    description: 'In-home measurement and design consultation to understand your vision.'
  },
  {
    step: '2',
    title: 'Material Selection',
    description: 'Choose from our extensive selection of quality countertop materials.'
  },
  {
    step: '3',
    title: 'Precise Measurement',
    description: 'Professional templating ensures perfect fit for your space.'
  },
  {
    step: '4',
    title: 'Fabrication',
    description: 'Expert cutting and edge finishing in our state-of-the-art facility.'
  },
  {
    step: '5',
    title: 'Professional Installation',
    description: 'Certified installers ensure flawless installation and cleanup.'
  },
  {
    step: '6',
    title: 'Final Inspection',
    description: 'Quality check and care instructions for your new countertops.'
  }
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Licensed & Insured',
    description: 'Fully licensed contractors with comprehensive insurance coverage.'
  },
  {
    icon: ClockIcon,
    title: 'Timely Installation',
    description: 'Most installations completed within 1-2 days of fabrication.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Competitive Pricing',
    description: 'Fair, transparent pricing with no hidden fees or surprises.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Expert Craftsmanship',
    description: 'Over 20 years of experience in countertop installation.'
  }
];

const faqItems = [
  {
    question: 'How long does countertop installation take?',
    answer: 'The entire process typically takes 2-3 weeks from initial consultation to completion. Template creation takes 1-2 hours, fabrication 7-10 days, and installation usually completes in one day.'
  },
  {
    question: 'What is the most durable countertop material?',
    answer: 'Quartz and granite are the most durable options. Quartz is non-porous and requires no sealing, while granite offers natural beauty with excellent heat resistance. Both can last 20+ years with proper care.'
  },
  {
    question: 'Do you remove old countertops?',
    answer: 'Yes, we provide complete removal and disposal of your existing countertops as part of our installation service. We ensure proper disposal and recycling when possible.'
  },
  {
    question: 'What warranty do you offer?',
    answer: 'We provide a 1-year workmanship warranty on all installations. Material warranties vary by manufacturer, typically ranging from 10-15 years for quartz and lifetime warranties for some granite options.'
  }
];

export default function CountertopInstallation() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Professional Countertop Installation"
        subtitle="Transform Your Kitchen & Bathroom"
        description="Expert countertop installation services for granite, quartz, marble, and more. Quality materials, professional installation, and competitive pricing for your home improvement project."
        primaryButton={{
          text: 'Get Free Estimate',
          href: EXTERNAL_URLS.QUOTE_FORM
        }}
        secondaryButton={{
          text: 'Call Now',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      <Divider type="dark-to-white" />

      {/* Countertop Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Materials</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Premium Countertop Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide selection of quality countertop materials to match your style, budget, and functionality needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countertopTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${type.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {type.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular Choice
                  </div>
                )}
                <type.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* Installation Process */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From consultation to completion, we manage every step of your countertop installation with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Why Choose Us</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Trusted Countertop Experts
            </h2>
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
                <benefit.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your countertop installation project. Our experts are ready to help bring your vision to life.
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
              Get Free Estimate
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
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
              Countertop Installation Questions
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