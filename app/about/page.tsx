'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  TrophyIcon,
  PhoneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency, always putting our clients\' interests first.'
  },
  {
    icon: UserGroupIcon,
    title: 'Personal Service',
    description: 'Every client receives personalized attention and tailored insurance solutions.'
  },
  {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from product selection to customer service.'
  },
  {
    icon: CheckCircleIcon,
    title: 'Reliability',
    description: 'Our clients can count on us to be there when they need us most.'
  }
];

const timeline = [
  {
    year: '1990',
    title: 'Founded',
    description: 'Midland Associates Insurance Services was established in Upper Saddle River, NJ.'
  },
  {
    year: '1995',
    title: 'Expansion',
    description: 'Expanded our services to include comprehensive business insurance solutions.'
  },
  {
    year: '2000',
    title: 'Technology Integration',
    description: 'Implemented advanced technology systems to better serve our clients.'
  },
  {
    year: '2010',
    title: 'Growth',
    description: 'Reached milestone of serving over 1,000 families and businesses.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched online services and digital claim processing for enhanced convenience.'
  },
  {
    year: '2024',
    title: 'Present',
    description: 'Continuing to innovate and serve New Jersey with cutting-edge insurance solutions.'
  }
];

const team = [
  {
    name: 'John Smith',
    position: 'Principal Agent',
    experience: '25+ years',
    specialties: ['Personal Insurance', 'Commercial Lines']
  },
  {
    name: 'Sarah Johnson',
    position: 'Senior Agent',
    experience: '15+ years',
    specialties: ['Business Insurance', 'Risk Management']
  },
  {
    name: 'Michael Chen',
    position: 'Client Services Manager',
    experience: '12+ years',
    specialties: ['Claims Processing', 'Customer Relations']
  }
];

const faqItems = [
  {
    question: 'How long has Midland Associates been in business?',
    answer: 'We\'ve been proudly serving New Jersey since 1990, with over 30 years of experience in the insurance industry.'
  },
  {
    question: 'What makes your agency different from others?',
    answer: 'Our personalized approach, extensive carrier network, long-standing community presence, and commitment to building lasting relationships set us apart.'
  },
  {
    question: 'Do you offer 24/7 customer support?',
    answer: 'While our office hours are Monday-Friday 9AM-5PM, we provide after-hours support for urgent matters and claims.'
  },
  {
    question: 'Can you help with claims from other insurance companies?',
    answer: 'We primarily assist with claims from policies we\'ve written, but we\'re happy to provide guidance and referrals when needed.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="About Midland Associates Insurance Services"
        subtitle="Your Trusted Partner Since 1990"
        description="For over three decades, we've been providing comprehensive insurance solutions to families and businesses throughout New Jersey. Our commitment to personalized service and competitive rates has made us a trusted name in the community."
        primaryButton={{
          text: 'Contact Us',
          href: '/contact'
        }}
        secondaryButton={{
          text: 'Get Quote',
          href: '/quote'
        }}
        backgroundImage="/photos/team/team_photo_employees.webp"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Story</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Three Decades of Trusted Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 1990, Midland Associates Insurance Services has grown from a small local agency to a comprehensive insurance provider serving families and businesses across New Jersey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                To provide comprehensive insurance solutions that protect what matters most to our clients, while delivering exceptional service and building lasting relationships within our community.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that insurance is more than just a policy—it's peace of mind. That's why we take the time to understand each client's unique needs and provide personalized solutions that fit their lifestyle and budget.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">Over 30 years of experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">Thousands of satisfied clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">A+ rated insurance carriers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">Local New Jersey expertise</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <value.icon className="h-8 w-8 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Timeline */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Journey</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Milestones & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over three decades of growth, innovation, and dedicated service to the New Jersey community.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary-400">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full mx-8 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dark Section - Team */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Our Team</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Experienced Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our knowledgeable team brings decades of combined experience to serve your insurance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-8 rounded-lg text-center"
              >
                <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 mb-2">{member.position}</p>
                <p className="text-gray-300 mb-4">{member.experience}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block bg-primary-900 text-primary-100 px-2 py-1 rounded text-sm mr-2">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Midland Associates for their insurance needs.
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
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Visit Our Office
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
              Contact Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 