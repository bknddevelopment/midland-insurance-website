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
  FilmIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const basementTypes = [
  {
    icon: FilmIcon,
    title: 'Entertainment Room',
    description: 'Create the ultimate media room or home theater for family entertainment.',
    features: ['Surround sound wiring', 'Theater lighting', 'Built-in seating', 'Projection screen options'],
    popular: true
  },
  {
    icon: UserGroupIcon,
    title: 'Family Recreation Room',
    description: 'Open spaces perfect for game rooms, play areas, and family gatherings.',
    features: ['Open floor plans', 'Game areas', 'Storage solutions', 'Kid-friendly finishes'],
    popular: true
  },
  {
    icon: BriefcaseIcon,
    title: 'Home Office Suite',
    description: 'Quiet, professional workspace with separate entrance options.',
    features: ['Sound insulation', 'Built-in storage', 'Network wiring', 'Natural lighting']
  },
  {
    icon: AcademicCapIcon,
    title: 'Guest Suite',
    description: 'Complete living space with bedroom, bathroom, and kitchenette.',
    features: ['Private bathroom', 'Mini kitchen', 'Separate entrance', 'Walk-in closet']
  },
  {
    icon: HeartIcon,
    title: 'Home Gym & Spa',
    description: 'Personal fitness center with options for sauna or spa features.',
    features: ['Rubber flooring', 'Mirror walls', 'Ventilation system', 'Equipment storage']
  },
  {
    icon: HomeIcon,
    title: 'Multi-Purpose Space',
    description: 'Flexible design combining multiple functions for maximum utility.',
    features: ['Modular design', 'Flexible layouts', 'Multiple zones', 'Smart storage']
  }
];

const finishingFeatures = [
  {
    category: 'Structural Work',
    items: ['Moisture barriers', 'Insulation upgrade', 'Egress windows', 'Ceiling solutions']
  },
  {
    category: 'Electrical & Plumbing',
    items: ['Recessed lighting', 'Outlet installation', 'Bathroom plumbing', 'HVAC extension']
  },
  {
    category: 'Flooring Options',
    items: ['Luxury vinyl plank', 'Carpet tiles', 'Polished concrete', 'Heated floors']
  },
  {
    category: 'Wall Finishes',
    items: ['Drywall & paint', 'Wood paneling', 'Stone accents', 'Built-in shelving']
  }
];

const process = [
  {
    step: '1',
    title: 'Inspection & Planning',
    description: 'Assess your basement condition and create a custom design plan.'
  },
  {
    step: '2',
    title: 'Waterproofing',
    description: 'Address any moisture issues and install proper vapor barriers.'
  },
  {
    step: '3',
    title: 'Framing & Systems',
    description: 'Build walls, run electrical, plumbing, and HVAC systems.'
  },
  {
    step: '4',
    title: 'Insulation & Drywall',
    description: 'Install energy-efficient insulation and hang drywall.'
  },
  {
    step: '5',
    title: 'Flooring & Finishes',
    description: 'Install flooring, paint walls, and add finishing touches.'
  },
  {
    step: '6',
    title: 'Final Details',
    description: 'Complete trim work, fixtures, and final inspection.'
  }
];

const benefits = [
  {
    icon: HomeIcon,
    title: 'Increased Home Value',
    description: 'Add up to 70% ROI with a professionally finished basement.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Code Compliance',
    description: 'All work meets local building codes and safety requirements.'
  },
  {
    icon: ClockIcon,
    title: 'Efficient Timeline',
    description: 'Most basements completed in 4-8 weeks.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Quality Materials',
    description: 'Moisture-resistant materials designed for below-grade use.'
  }
];

const faqItems = [
  {
    question: 'How much does basement finishing cost?',
    answer: 'Basement finishing typically ranges from $30-75 per square foot, depending on the complexity and finishes chosen. A basic 1,000 sq ft basement might cost $30,000-$50,000, while high-end finishes with bathrooms can reach $75,000 or more.'
  },
  {
    question: 'How long does it take to finish a basement?',
    answer: 'Most basement finishing projects take 4-8 weeks from start to finish. This includes framing, electrical, plumbing, insulation, drywall, flooring, and final finishes. Complex designs or additions like bathrooms may add 2-3 weeks.'
  },
  {
    question: 'Do I need permits to finish my basement?',
    answer: 'Yes, finishing a basement requires building permits in most areas. We handle all permit applications and ensure your project meets local building codes, including proper egress windows, ceiling height requirements, and electrical standards.'
  },
  {
    question: 'What about moisture and waterproofing?',
    answer: 'Proper moisture control is critical for basements. We start every project with a moisture assessment and install vapor barriers, proper insulation, and moisture-resistant materials. We also recommend addressing any external water issues before finishing.'
  }
];

export default function BasementFinishing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Professional Basement Finishing"
        subtitle="Transform Your Basement Into Living Space"
        description="Convert your unfinished basement into beautiful, functional living space. From entertainment rooms to home offices, we create custom basement solutions that add value and enjoyment to your home."
        primaryButton={{
          text: 'Get Free Estimate',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call Now',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      <Divider type="dark-to-white" />

      {/* Basement Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Design Options</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Popular Basement Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need extra living space, a home office, or entertainment area, we'll design the perfect basement for your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basementTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${type.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {type.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
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

      {/* Features & Options */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Features</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Basement Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every basement finishing project includes these essential elements for a comfortable, code-compliant space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {finishingFeatures.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{feature.category}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
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

      {/* Process Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              From Concrete to Comfort
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach ensures your basement is finished properly, on time, and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Benefits</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Finish Your Basement?
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
            Ready to Finish Your Basement?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your basement finishing project. We'll help you maximize your home's potential.
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
              Basement Finishing Questions
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