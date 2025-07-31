'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  HomeIcon, 
  TruckIcon, 
  BuildingOfficeIcon,
  PhoneIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const insuranceServices = [
  {
    icon: HomeIcon,
    title: 'Personal Insurance',
    description: 'Auto, home, condo, renters, and umbrella coverage to protect what matters most.',
    href: '/personal'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Business Insurance',
    description: 'General liability, property, workers comp, and commercial auto for all industries.',
    href: '/business'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Construction Insurance',
    description: 'Specialized coverage for contractors, builders, and construction trades.',
    href: '/services/construction-types'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Specialty Coverage',
    description: 'Professional liability, cyber insurance, and industry-specific solutions.',
    href: '/services'
  }
];

const whyChooseUs = [
  {
    title: 'Local Expertise',
    description: 'Over 30 years serving Bergen County families and businesses. We understand your unique needs.',
    icon: UserGroupIcon
  },
  {
    title: 'Claims Advocacy',
    description: 'We fight for you when claims arise, ensuring fair treatment and fast resolution.',
    icon: ShieldCheckIcon
  },
  {
    title: '20+ Carriers',
    description: 'Access to top-rated insurance carriers means better coverage and competitive rates.',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Fast Certificates',
    description: 'Get certificates of insurance in minutes, not days. Never miss a bid deadline.',
    icon: ClockIcon
  }
];

const testimonials = [
  {
    name: 'Robert Martinez',
    company: 'Martinez Construction LLC',
    trade: 'General Contractor',
    rating: 5,
    text: 'Midland Associates saved us $15,000 annually while improving our coverage. They understand business risks better than any other agency.',
    highlight: true
  },
  {
    name: 'Sarah Chen',
    company: 'Chen Electrical Services',
    trade: 'Electrical Contractor',
    rating: 5,
    text: 'When we had a major claim, they fought for us and got it resolved quickly. Their support kept our business running.'
  },
  {
    name: 'Mike O\'Brien',
    company: 'O\'Brien Excavation',
    trade: 'Excavation Contractor',
    rating: 5,
    text: 'They got us coverage for equipment other agencies said was too old. Real problem solvers who care.'
  }
];


const stats = {
  clients: '2,000+',
  savings: '$12,000',
  claimsSuccess: '98%',
  yearsExperience: '30+'
};

export default function HomePage() {
  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <Hero
          title="Your Trusted Insurance Partner"
          subtitle="Protecting Bergen County Since 1990"
          description="Get comprehensive coverage from New Jersey's trusted insurance experts. Personal, commercial, and specialty insurance solutions tailored to your needs. Quick quotes from 20+ carriers."
          primaryButton={{
            text: 'Get Your Free Quote',
            href: EXTERNAL_URLS.QUOTE_FORM
          }}
          secondaryButton={{
            text: 'Explore Coverage Options',
            href: '/services'
          }}
          backgroundImage="/images/consultation-background.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Stats Bar */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.clients}</p>
                <p className="text-gray-600 mt-1">Clients Protected</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.savings}</p>
                <p className="text-gray-600 mt-1">Average Annual Savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.claimsSuccess}</p>
                <p className="text-gray-600 mt-1">Claims Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.yearsExperience}</p>
                <p className="text-gray-600 mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Insurance Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Specialized Coverage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Insurance Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored coverage for individuals, families, and businesses. From personal protection to commercial ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insuranceServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center hover:shadow-xl transition-shadow"
                >
                  <service.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
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
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                View All Coverage Options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-gray" />

        {/* Industry Expertise */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge-light inline-block mb-4">Expert Coverage</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Insurance for Every Industry
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  From contractors to healthcare professionals, retailers to restaurants, 
                  we have the expertise and carrier relationships to protect your unique business.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Construction & Trades',
                    'Healthcare & Medical',
                    'Retail & Restaurants',
                    'Professional Services',
                    'Manufacturing',
                    'Real Estate',
                    'Technology',
                    'Non-Profits'
                  ].map((industry) => (
                    <div key={industry} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/business"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Find Your Industry Coverage
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Tailored to Your Needs</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Lines</h4>
                    <p className="text-sm text-gray-600">Home, auto, umbrella, life insurance, and more</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Small Business</h4>
                    <p className="text-sm text-gray-600">General liability, property, workers comp, BOP</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Commercial Lines</h4>
                    <p className="text-sm text-gray-600">Complex risks, high limits, specialty coverage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Employee Benefits</h4>
                    <p className="text-sm text-gray-600">Group health, dental, vision, disability, and 401k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="gray-to-dark" />

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Why Choose Midland</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bergen County's Construction Insurance Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another insurance agency. We provide personalized solutions, 
                understanding the unique needs of Bergen County families and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              >
                Learn About Our Experience
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Risk Management Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Free Risk Assessment Includes:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <DocumentCheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Coverage Gap Analysis</strong>
                        <p className="text-gray-600 text-sm mt-1">Identify missing coverage that could leave you exposed</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CurrencyDollarIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Premium Comparison</strong>
                        <p className="text-gray-600 text-sm mt-1">See how your rates compare to similar contractors</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ScaleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Contract Compliance Review</strong>
                        <p className="text-gray-600 text-sm mt-1">Ensure your coverage meets all contract requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ExclamationTriangleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Risk Mitigation Strategies</strong>
                        <p className="text-gray-600 text-sm mt-1">Learn how to reduce claims and lower premiums</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="badge-light inline-block mb-4">Free Service</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Reduce Risk, Lower Premiums
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our free insurance review helps identify coverage gaps and opportunities 
                  to reduce your insurance costs. We'll review your current policies, analyze your 
                  needs, and provide actionable recommendations.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Many contractors save 20-40% on premiums after implementing our risk management strategies.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Your Free Risk Assessment
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-gray" />

        {/* Testimonials - Construction Specific */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Success Stories</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from Bergen County families and businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-lg shadow-lg ${
                    testimonial.highlight ? 'ring-2 ring-primary-600 scale-105' : ''
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-sm text-primary-600">{testimonial.trade}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                Read More Success Stories
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="gray-to-white" />

        {/* Location Focus */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Local Expertise</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving Bergen County Construction Companies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From our Paramus office, we serve contractors throughout Bergen County and Northern New Jersey
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {[
                'Hackensack', 'Fort Lee', 'Paramus', 'Teaneck', 'Englewood', 'Ridgewood',
                'Fair Lawn', 'Bergenfield', 'Mahwah', 'Ramsey', 'Wyckoff', 'Franklin Lakes'
              ].map((city) => (
                <Link
                  key={city}
                  href={`/locations/${city.toLowerCase().replace(' ', '-')}`}
                  className="bg-gray-50 hover:bg-primary-50 rounded-lg p-4 text-center transition-colors"
                >
                  <p className="font-medium text-gray-900">{city}</p>
                </Link>
              ))}
            </div>
            
            <div className="bg-primary-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Our Bergen County Office
              </h3>
              <p className="text-gray-700 mb-2">140 Route 17 North, Paramus, NJ 07652</p>
              <p className="text-gray-700 mb-6">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Directions
                </Link>
                <a
                  href="tel:2018122184"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  (201) 812-2184
                </a>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Final CTA */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Save on Construction Insurance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get competitive quotes from multiple carriers in minutes. Our insurance experts are standing by.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get Your Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </a>
            </div>
            <p className="text-gray-400 mt-6">
              Average savings: $12,000/year • Quotes in 15 minutes • No obligation
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}