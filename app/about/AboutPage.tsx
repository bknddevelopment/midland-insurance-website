'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  TrophyIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  HeartIcon,
  AcademicCapIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const teamMembers = [
  {
    name: 'Michael Delgado',
    role: 'President & Founder',
    bio: 'With over 30 years in construction insurance, Michael founded Midland Associates to provide contractors with the specialized coverage they deserve.',
    image: '/photos/team/michael-delgado.jpg',
    certifications: ['CIC', 'CPCU'],
  },
  {
    name: 'Sarah Johnson',
    role: 'VP of Commercial Lines',
    bio: 'Sarah specializes in complex construction risks and has helped hundreds of Bergen County contractors secure proper coverage.',
    image: '/photos/team/sarah-johnson.jpg',
    certifications: ['CIC', 'ARM'],
  },
  {
    name: 'David Chen',
    role: 'Construction Risk Specialist',
    bio: 'David brings 15 years of experience in construction risk management and safety program development.',
    image: '/photos/team/david-chen.jpg',
    certifications: ['CRIS', 'WCP'],
  },
  {
    name: 'Maria Rodriguez',
    role: 'Claims Advocate',
    bio: 'Maria ensures our contractors get fair and fast claims resolution, with a 98% satisfaction rate.',
    image: '/photos/team/maria-rodriguez.jpg',
    certifications: ['AIC', 'SCLA'],
  },
];

const milestones = [
  { year: '1994', event: 'Midland Associates founded in Bergen County' },
  { year: '2001', event: 'Expanded to serve all construction trades' },
  { year: '2008', event: 'Launched specialized contractor programs' },
  { year: '2015', event: 'Opened Paramus office location' },
  { year: '2020', event: 'Digital transformation and online services' },
  { year: '2024', event: 'Celebrating 30 years serving contractors' },
];

const certifications = [
  { name: 'Trusted Choice Independent Agency', icon: TrophyIcon },
  { name: 'Better Business Bureau A+ Rating', icon: StarIcon },
  { name: 'NJ Surplus Lines Licensed', icon: ShieldCheckIcon },
  { name: 'Construction Risk Insurance Specialist', icon: AcademicCapIcon },
];

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="About Midland Associates"
          subtitle="30 Years of Protecting Bergen County Contractors"
          description="Since 1994, we've been the trusted insurance partner for construction professionals throughout Bergen County and Northern New Jersey."
          primaryButton={{
            text: 'Meet Our Team',
            href: '#team',
          }}
          secondaryButton={{
            text: 'Our Story',
            href: '#story',
          }}
          backgroundImage="/photos/office-exterior.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Our Story Section */}
        <section id="story" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Story</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built on Trust, Expertise, and Local Knowledge
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Midland Associates was founded in 1994 by Michael Delgado, a former construction project manager who saw firsthand how generic insurance policies failed to protect contractors from real-world risks.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Starting from a small office in Hackensack, we've grown to become Bergen County's premier construction insurance agency, serving over 2,500 contractors and managing more than $50 million in premiums.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What sets us apart is our deep understanding of construction. Every member of our team has either worked in construction or specialized in construction insurance for their entire career. We speak your language and understand your risks.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600">2,500+</p>
                    <p className="text-gray-600">Contractors Served</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600">$50M+</p>
                    <p className="text-gray-600">Premiums Managed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600">98%</p>
                    <p className="text-gray-600">Client Retention</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600">30</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-100 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Milestones</h3>
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary-600 font-bold mr-4">{milestone.year}</span>
                        <span className="text-gray-700">{milestone.event}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Our Values Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Values</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What Drives Us Every Day
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <UserGroupIcon className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Client First</h3>
                <p className="text-gray-300">
                  Your success is our success. We work as your advocate, not just your agent, ensuring you get the coverage and service you deserve.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <ShieldCheckIcon className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Integrity Always</h3>
                <p className="text-gray-300">
                  We tell you what you need to hear, not what you want to hear. Honest advice and transparent pricing are non-negotiable.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <HeartIcon className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Community Focused</h3>
                <p className="text-gray-300">
                  Bergen County is our home. We're invested in the success of local contractors and the growth of our community.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Team</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Construction Insurance Experts You Can Trust
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team combines over 120 years of construction insurance experience with advanced certifications and genuine care for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photo */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <UserGroupIcon className="h-16 w-16" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    {member.certifications.map((cert) => (
                      <span key={cert} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Certifications & Associations */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Credentials</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Certifications & Associations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors"
                  >
                    <Icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                Our team maintains advanced industry certifications including:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['CIC', 'CPCU', 'ARM', 'CRIS', 'WCP', 'AIC', 'SCLA'].map((cert) => (
                  <span key={cert} className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Community Involvement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Community</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Invested in Bergen County
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Giving Back to Our Community
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  As a local business, we believe in supporting the community that has supported us for 30 years. We're proud to contribute to:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bergen County Habitat for Humanity - Insurance sponsor for building projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Construction Career Day - Annual sponsor educating youth about construction careers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Local Trade Associations - Active members and sponsors of safety programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contractors Relief Fund - Supporting contractors facing hardship</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Main Office</p>
                      <p className="text-gray-600">140 Route 17 North<br />Paramus, NJ 07652</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By Appointment</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 mt-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}