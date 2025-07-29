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
  BuildingOfficeIcon,
  SunIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const additionTypes = [
  {
    icon: HomeIcon,
    title: 'Room Additions',
    description: 'Add bedrooms, home offices, or expand living spaces to accommodate your growing needs.',
    features: ['Master suite additions', 'Home office spaces', 'Guest bedrooms', 'Expanded living rooms'],
    popular: true
  },
  {
    icon: SunIcon,
    title: 'Sunroom & Four-Season Rooms',
    description: 'Enjoy natural light year-round with beautiful sunroom additions.',
    features: ['Climate control options', 'Energy-efficient glass', 'Custom designs', 'Seamless integration'],
    popular: true
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Second Story Additions',
    description: 'Maximize your property by building up instead of out.',
    features: ['Structural engineering', 'Minimal yard impact', 'Maximum square footage', 'Modern designs']
  },
  {
    icon: UserGroupIcon,
    title: 'In-Law Suites',
    description: 'Create independent living spaces for extended family members.',
    features: ['Private entrance', 'Full kitchen/bath', 'Accessibility features', 'Privacy focused']
  },
  {
    icon: HomeIcon,
    title: 'Garage Additions',
    description: 'Add vehicle storage, workshop space, or bonus rooms above.',
    features: ['Attached or detached', 'Workshop space', 'Storage solutions', 'Bonus room options']
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Bump-Out Additions',
    description: 'Small expansions that make a big difference in functionality.',
    features: ['Kitchen expansions', 'Bathroom additions', 'Bay windows', 'Breakfast nooks']
  }
];

const buildingProcess = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Discuss your vision, needs, and budget for your home addition.'
  },
  {
    step: '2',
    title: 'Design & Planning',
    description: 'Create detailed architectural plans and 3D renderings.'
  },
  {
    step: '3',
    title: 'Permits & Approvals',
    description: 'Handle all necessary permits and HOA approvals.'
  },
  {
    step: '4',
    title: 'Foundation & Framing',
    description: 'Build the structural foundation and frame your addition.'
  },
  {
    step: '5',
    title: 'Systems Installation',
    description: 'Install electrical, plumbing, HVAC, and insulation.'
  },
  {
    step: '6',
    title: 'Finishing Touches',
    description: 'Complete interior and exterior finishes to match your home.'
  }
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Licensed & Insured',
    description: 'Fully licensed general contractors with comprehensive insurance coverage.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Detailed Contracts',
    description: 'Clear pricing, timelines, and scope of work in writing.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Quality Craftsmanship',
    description: '25+ years building beautiful, lasting home additions.'
  },
  {
    icon: ClockIcon,
    title: 'On-Time Completion',
    description: 'Realistic timelines with consistent progress updates.'
  }
];

const considerations = [
  {
    title: 'Budget Planning',
    points: ['Construction costs', 'Permit fees', 'Design fees', '10-20% contingency']
  },
  {
    title: 'Timeline Factors',
    points: ['Design phase: 2-4 weeks', 'Permits: 2-6 weeks', 'Construction: 8-16 weeks', 'Weather delays']
  },
  {
    title: 'Living Arrangements',
    points: ['Construction noise', 'Dust protection', 'Access limitations', 'Safety zones']
  },
  {
    title: 'ROI Considerations',
    points: ['Added square footage', 'Neighborhood values', 'Quality of construction', 'Market demand']
  }
];

const faqItems = [
  {
    question: 'How much does a home addition cost?',
    answer: 'Home addition costs vary widely based on size, complexity, and finishes. Basic room additions typically range from $80-$200 per square foot, while more complex additions like second stories can range from $150-$300 per square foot. We provide detailed estimates after our initial consultation.'
  },
  {
    question: 'Do I need permits for a home addition?',
    answer: 'Yes, most home additions require building permits. We handle the entire permit process including architectural drawings, structural engineering when needed, and submission to local authorities. This ensures your addition is built to code and legally compliant.'
  },
  {
    question: 'How long does it take to build an addition?',
    answer: 'Timeline depends on the size and complexity. A simple room addition typically takes 8-12 weeks from breaking ground, while second story additions can take 12-20 weeks. This doesn\'t include design and permitting time, which can add 4-10 weeks.'
  },
  {
    question: 'Will an addition increase my home\'s value?',
    answer: 'Well-designed and properly built additions typically add value. The ROI varies by project type - bedroom and bathroom additions often return 50-75% of cost, while outdoor living spaces may return 60-80%. Quality construction and design matching your existing home are key factors.'
  }
];

export default function HomeAdditions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Professional Home Additions"
        subtitle="Expand Your Living Space"
        description="From room additions to second stories, we create seamless home expansions that blend perfectly with your existing structure while adding the space your family needs."
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

      {/* Addition Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Addition Types</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Custom Home Addition Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need more bedrooms, a home office, or entertainment space, we design and build additions that feel like they've always been part of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionTypes.map((type, index) => (
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

      {/* Building Process */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Process</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              From Vision to Reality
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures your home addition project runs smoothly from initial design through final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingProcess.map((process, index) => (
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

      {/* Important Considerations */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Planning Guide</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Important Considerations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key factors to consider when planning your home addition project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {considerations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
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
              Your Trusted Addition Contractor
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
            Ready to Expand Your Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your home addition project. We'll help you create the perfect space for your family's needs.
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
              Home Addition Questions
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