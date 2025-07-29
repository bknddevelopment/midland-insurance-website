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
  PaintBrushIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const remodelingServices = [
  {
    icon: HomeIcon,
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations from cabinets to appliances.',
    features: ['Custom cabinetry', 'Countertop installation', 'Modern appliances', 'Island additions'],
    popular: true
  },
  {
    icon: SparklesIcon,
    title: 'Bathroom Renovation',
    description: 'Luxurious bathroom updates with modern fixtures and finishes.',
    features: ['Walk-in showers', 'Vanity upgrades', 'Tile work', 'Fixture replacement'],
    popular: true
  },
  {
    icon: UserGroupIcon,
    title: 'Living Space Updates',
    description: 'Transform living rooms, dining rooms, and family areas.',
    features: ['Open floor plans', 'Built-in storage', 'Fireplace updates', 'Accent walls']
  },
  {
    icon: HomeIcon,
    title: 'Bedroom Makeovers',
    description: 'Create peaceful retreats with custom closets and finishes.',
    features: ['Walk-in closets', 'Built-in storage', 'Lighting design', 'Crown molding']
  },
  {
    icon: PaintBrushIcon,
    title: 'Whole Home Renovations',
    description: 'Complete interior updates for a cohesive, modern look.',
    features: ['Consistent design', 'Updated systems', 'New flooring', 'Fresh paint']
  },
  {
    icon: LightBulbIcon,
    title: 'Specialty Rooms',
    description: 'Create custom spaces like home offices, libraries, or wine cellars.',
    features: ['Custom design', 'Built-in features', 'Specialized lighting', 'Unique finishes']
  }
];

const remodelingProcess = [
  {
    step: '1',
    title: 'Design Consultation',
    description: 'Meet to discuss your vision, style preferences, and budget.'
  },
  {
    step: '2',
    title: '3D Design & Planning',
    description: 'Create detailed designs and 3D renderings of your new space.'
  },
  {
    step: '3',
    title: 'Material Selection',
    description: 'Choose finishes, fixtures, and materials with expert guidance.'
  },
  {
    step: '4',
    title: 'Demolition & Prep',
    description: 'Carefully remove old materials and prepare for new installation.'
  },
  {
    step: '5',
    title: 'Construction Phase',
    description: 'Execute the remodel with skilled craftsmen and quality materials.'
  },
  {
    step: '6',
    title: 'Final Walkthrough',
    description: 'Inspect every detail and ensure complete satisfaction.'
  }
];

const popularUpdates = [
  {
    category: 'Kitchen Updates',
    items: ['Quartz countertops', 'Subway tile backsplash', 'Soft-close cabinets', 'Kitchen islands']
  },
  {
    category: 'Bathroom Features',
    items: ['Frameless showers', 'Double vanities', 'Heated floors', 'Freestanding tubs']
  },
  {
    category: 'Living Areas',
    items: ['Hardwood floors', 'Recessed lighting', 'Crown molding', 'Custom built-ins']
  },
  {
    category: 'Smart Home',
    items: ['Smart lighting', 'Automated blinds', 'Voice controls', 'Security systems']
  }
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Licensed Professionals',
    description: 'Fully licensed contractors and skilled tradespeople.'
  },
  {
    icon: ClockIcon,
    title: 'Project Management',
    description: 'Dedicated project manager keeping everything on schedule.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Quality Guarantee',
    description: 'Workmanship warranty on all remodeling projects.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Transparent Pricing',
    description: 'Detailed quotes with no hidden costs or surprises.'
  }
];

const faqItems = [
  {
    question: 'How much does interior remodeling cost?',
    answer: 'Costs vary widely based on scope and finishes. Minor updates might start at $5,000-$15,000 per room, while major kitchen remodels average $25,000-$75,000, and bathroom renovations typically range from $10,000-$35,000. We provide detailed quotes after consultation.'
  },
  {
    question: 'How long does a remodeling project take?',
    answer: 'Timeline depends on project scope. A bathroom remodel typically takes 2-3 weeks, kitchen remodels 4-8 weeks, and whole home renovations 2-4 months. We provide realistic timelines and work to minimize disruption to your daily life.'
  },
  {
    question: 'Do I need to move out during remodeling?',
    answer: 'For single room projects, you can usually stay in your home. We set up dust barriers and work zones to minimize impact. For extensive whole-home renovations, temporary relocation might be more comfortable, especially during major system work.'
  },
  {
    question: 'How do I prepare for a remodeling project?',
    answer: 'Start by collecting inspiration images and setting a realistic budget. Clear the work area of personal items. We\'ll handle protecting adjacent areas and provide a detailed prep checklist. Good planning ensures a smoother renovation process.'
  }
];

export default function InteriorRemodeling() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Professional Interior Remodeling"
        subtitle="Transform Your Home's Interior"
        description="From kitchen and bathroom renovations to whole-home remodeling, we bring your vision to life with expert craftsmanship and attention to detail."
        primaryButton={{
          text: 'Get Free Consultation',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call Now',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      <Divider type="dark-to-white" />

      {/* Remodeling Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Services</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Interior Remodeling Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether updating a single room or renovating your entire home, we deliver exceptional results that enhance both beauty and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remodelingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${service.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

      {/* Popular Updates */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Trending Updates</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Popular Remodeling Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern updates that add value, functionality, and style to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularUpdates.map((update, index) => (
              <motion.div
                key={update.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{update.category}</h3>
                <ul className="space-y-2">
                  {update.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remodeling Process */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Remodeling Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined process that takes you from initial concept to stunning completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remodelingProcess.map((process, index) => (
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
              Your Trusted Remodeling Partner
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
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your remodeling project. Let's create the home you've always dreamed of.
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
              Schedule Consultation
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
              Interior Remodeling Questions
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