'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const njRequirements = [
  {
    title: 'Bodily Injury Liability',
    requirement: '$15,000 per person / $30,000 per accident',
    description: 'Covers injuries to others in accidents you cause',
    icon: UserGroupIcon
  },
  {
    title: 'Property Damage Liability',
    requirement: '$5,000 minimum',
    description: 'Covers damage to other vehicles and property',
    icon: CarIcon
  },
  {
    title: 'Personal Injury Protection (PIP)',
    requirement: '$15,000 minimum',
    description: 'Covers your medical expenses regardless of fault',
    icon: ShieldCheckIcon
  },
  {
    title: 'Uninsured Motorist Coverage',
    requirement: 'Optional but recommended',
    description: 'Protects you from drivers without insurance',
    icon: DocumentTextIcon
  }
];

const costFactors = [
  {
    title: 'Your Location in NJ',
    description: 'Urban areas like Newark and Jersey City typically have higher rates than suburban areas',
    impact: 'High',
    icon: MapPinIcon
  },
  {
    title: 'Driving Record',
    description: 'Clean records qualify for safe driver discounts up to 20%',
    impact: 'Very High',
    icon: ChartBarIcon
  },
  {
    title: 'Vehicle Type',
    description: 'Newer vehicles with safety features often qualify for discounts',
    impact: 'Medium',
    icon: CarIcon
  },
  {
    title: 'Coverage Limits',
    description: 'Higher limits provide better protection but increase premiums',
    impact: 'Medium',
    icon: ScaleIcon
  }
];

const savingsTips = [
  {
    title: 'Bundle Your Policies',
    description: 'Combine auto with home or renters insurance for multi-policy discounts',
    savings: 'Up to 25%'
  },
  {
    title: 'Maintain Good Credit',
    description: 'New Jersey allows credit-based insurance scoring',
    savings: 'Up to 15%'
  },
  {
    title: 'Complete Defensive Driving',
    description: 'NJ-approved courses can reduce rates for 3 years',
    savings: '5-10%'
  },
  {
    title: 'Choose Higher Deductibles',
    description: 'Raising deductibles from $500 to $1,000 can lower premiums',
    savings: '10-30%'
  },
  {
    title: 'Ask About Discounts',
    description: 'Good student, military, senior, and professional discounts available',
    savings: 'Varies'
  },
  {
    title: 'Pay in Full',
    description: 'Avoid monthly payment fees by paying your premium annually',
    savings: '$5-10/month'
  }
];

const njLocations = [
  { name: 'Newark', href: '/locations/newark', description: 'Auto insurance Newark NJ' },
  { name: 'Jersey City', href: '/locations/jersey-city', description: 'Car insurance Jersey City' },
  { name: 'Paterson', href: '/locations/paterson', description: 'Auto insurance Paterson NJ' },
  { name: 'Elizabeth', href: '/locations/elizabeth', description: 'Car insurance Elizabeth NJ' },
  { name: 'Trenton', href: '/locations/trenton', description: 'Auto insurance Trenton' },
  { name: 'Linden', href: '/locations/linden', description: 'Insurance Linden NJ' }
];

const faqItems = [
  {
    question: 'What is the minimum auto insurance required in New Jersey?',
    answer: 'New Jersey requires minimum liability coverage of $15,000/$30,000 for bodily injury and $5,000 for property damage. Personal Injury Protection (PIP) of at least $15,000 is also required unless you opt out in writing. While these are minimums, we recommend higher limits for better protection.'
  },
  {
    question: 'How much does car insurance cost in NJ?',
    answer: 'The average cost of car insurance in New Jersey varies by location and driver profile. Urban areas like Newark and Jersey City tend to have higher rates. Factors like your driving record, age, vehicle type, and coverage levels all impact your premium. Contact us for a personalized quote based on your specific situation.'
  },
  {
    question: 'Can I get cheap car insurance in NJ with a bad driving record?',
    answer: 'Yes, we work with multiple insurance carriers to find affordable options even for high-risk drivers. We can help you find companies that specialize in non-standard auto insurance and identify all available discounts to minimize your costs.'
  },
  {
    question: 'What discounts are available for NJ auto insurance?',
    answer: 'Common discounts include multi-policy bundling, safe driver, good student, defensive driving course completion, anti-theft devices, and safety features. Some carriers also offer discounts for low mileage, military service, and professional affiliations.'
  },
  {
    question: 'Do I need uninsured motorist coverage in New Jersey?',
    answer: 'While not required, uninsured motorist coverage is highly recommended in New Jersey. It protects you if you\'re hit by a driver without insurance or in a hit-and-run accident. Given that some drivers carry only minimum coverage or none at all, this protection is valuable.'
  },
  {
    question: 'How quickly can I get auto insurance coverage in NJ?',
    answer: 'We can often provide same-day coverage. Once you complete your application and make your initial payment, coverage can begin immediately. We\'ll provide proof of insurance documents you can use right away.'
  }
];

export default function NJAutoInsurancePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="NJ Auto Insurance"
        subtitle="Affordable Car Insurance for New Jersey Drivers"
        description="Get comprehensive auto insurance in New Jersey with competitive rates and local expertise. From Newark to Trenton, we protect Garden State drivers with coverage that fits your needs and budget."
        primaryButton={{
          text: 'Get NJ Auto Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call (201) 812-2184',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* Divider */}
      <Divider type="dark-to-white" />

      {/* NJ Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">New Jersey Requirements</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NJ Auto Insurance Requirements & Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding New Jersey's auto insurance requirements helps you stay legal and protected. 
              We'll help you navigate NJ's unique insurance laws and find the right coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {njRequirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start">
                  <req.icon className="h-12 w-12 text-primary-600 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {req.title}
                    </h3>
                    <p className="text-lg font-medium text-primary-600 mb-2">
                      {req.requirement}
                    </p>
                    <p className="text-gray-600">
                      {req.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Higher Coverage Limits?
            </h3>
            <p className="text-gray-700 mb-6">
              While New Jersey's minimum requirements keep you legal, they may not fully protect your assets. 
              Medical costs and vehicle repairs can quickly exceed minimum limits, leaving you personally liable for the difference.
            </p>
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Your NJ Auto Insurance Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider type="white-to-dark" />

      {/* Cost Factors Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Understanding Costs</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              What Affects Car Insurance Costs in New Jersey?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New Jersey auto insurance rates vary significantly based on several factors. 
              Understanding these helps you make informed decisions and potentially lower your premiums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <div className="flex items-start">
                  <factor.icon className="h-10 w-10 text-primary-400 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {factor.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      factor.impact === 'Very High' ? 'bg-red-500/20 text-red-300' :
                      factor.impact === 'High' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {factor.impact} Impact
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Tips Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Save Money</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              How to Get Cheap Car Insurance in NJ
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lower your auto insurance costs in New Jersey without sacrificing coverage. 
              Our experts help you find every available discount and money-saving opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savingsTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <CurrencyDollarIcon className="h-8 w-8 text-green-400" />
                  <span className="text-green-400 font-semibold">{tip.savings}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/affordable-auto-insurance-nj"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Learn More About Affordable NJ Auto Insurance
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Local Coverage</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Auto Insurance Across New Jersey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From urban centers to suburban communities, we provide auto insurance throughout the Garden State 
              with local agents who understand your area's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {njLocations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={location.href}
                  className="block bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <MapPinIcon className="h-6 w-6 text-primary-400" />
                    <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {location.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {location.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ClockIcon className="h-16 w-16 text-primary-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your NJ Auto Insurance Quote in Minutes
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of New Jersey drivers who trust us for affordable auto insurance. 
            Get coverage today with instant proof of insurance.
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

      {/* Divider */}
      <Divider type="dark-to-white" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              NJ Auto Insurance Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about car insurance in New Jersey
            </p>
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