'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { StarIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/solid';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  trade: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  featured?: boolean;
  projectType?: string;
  coverageTypes: string[];
}

export default function TestimonialsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials' },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Robert Martinez',
      company: 'Martinez Construction LLC',
      trade: 'General Contractor',
      location: 'Hackensack, NJ',
      rating: 5,
      review: 'Midland Associates saved our company over $15,000 annually on our insurance premiums. They found gaps in our coverage we didn\'t know existed and actually improved our protection while reducing costs. Michael and his team truly understand construction.',
      date: 'December 2024',
      featured: true,
      projectType: 'Commercial Construction',
      coverageTypes: ['General Liability', 'Workers Comp', 'Commercial Auto']
    },
    {
      id: '2',
      name: 'Sarah Chen',
      company: 'Chen Electrical Services',
      trade: 'Electrical Contractor',
      location: 'Fort Lee, NJ',
      rating: 5,
      review: 'When we had a major claim, Midland Associates went to bat for us. They handled everything with the carrier and got us a fair settlement quickly. Their claims advocacy made all the difference in keeping our business running.',
      date: 'November 2024',
      featured: true,
      coverageTypes: ['General Liability', 'Tools & Equipment', 'Commercial Auto']
    },
    {
      id: '3',
      name: 'Anthony DeAngelo',
      company: 'DeAngelo Plumbing & Heating',
      trade: 'Plumbing Contractor',
      location: 'Paramus, NJ',
      rating: 5,
      review: 'We\'ve been with Midland for 10 years. They\'ve always been there when we needed them, especially during the pandemic. They helped us navigate PPP insurance requirements and kept our coverage affordable when cash flow was tight.',
      date: 'October 2024',
      coverageTypes: ['General Liability', 'Workers Comp', 'Commercial Property']
    },
    {
      id: '4',
      name: 'Jennifer Walsh',
      company: 'Walsh Roofing Systems',
      trade: 'Roofing Contractor',
      location: 'Ridgewood, NJ',
      rating: 5,
      review: 'As a woman-owned construction business, I appreciate how Midland Associates takes time to explain everything clearly. They helped us get certified and showed us insurance discounts we qualified for. Excellent service!',
      date: 'September 2024',
      featured: true,
      coverageTypes: ['General Liability', 'Workers Comp', 'Umbrella Policy']
    },
    {
      id: '5',
      name: 'Michael O\'Brien',
      company: 'O\'Brien Excavation',
      trade: 'Excavation Contractor',
      location: 'Teaneck, NJ',
      rating: 5,
      review: 'The team at Midland understands excavation risks better than any other agency we\'ve worked with. They got us coverage for equipment other agencies said was too old to insure. Real problem solvers.',
      date: 'August 2024',
      coverageTypes: ['General Liability', 'Equipment Coverage', 'Commercial Auto']
    },
    {
      id: '6',
      name: 'Carlos Rodriguez',
      company: 'Rodriguez Painting Co.',
      trade: 'Painting Contractor',
      location: 'Englewood, NJ',
      rating: 5,
      review: 'Switched to Midland Associates 3 years ago and wish we\'d done it sooner. They respond to certificate requests immediately, which helps us bid more jobs. Their online portal makes everything easy.',
      date: 'July 2024',
      coverageTypes: ['General Liability', 'Workers Comp', 'Commercial Auto']
    },
    {
      id: '7',
      name: 'David Kim',
      company: 'Kim\'s HVAC Solutions',
      trade: 'HVAC Contractor',
      location: 'Cliffside Park, NJ',
      rating: 5,
      review: 'Midland Associates helped us through a difficult workers comp claim. They advocated for us with the carrier and kept our mod rate from skyrocketing. Their expertise saved our business.',
      date: 'June 2024',
      coverageTypes: ['General Liability', 'Workers Comp', 'Tools Coverage']
    },
    {
      id: '8',
      name: 'Patricia Sullivan',
      company: 'Sullivan Landscaping',
      trade: 'Landscaping Contractor',
      location: 'Fair Lawn, NJ',
      rating: 5,
      review: 'Best insurance agency for contractors in Bergen County. They understand seasonal businesses and helped structure our payments to match our cash flow. Always available when we need them.',
      date: 'May 2024',
      coverageTypes: ['General Liability', 'Commercial Auto', 'Equipment Coverage']
    },
    {
      id: '9',
      name: 'James Thompson',
      company: 'Thompson Concrete',
      trade: 'Concrete Contractor',
      location: 'Mahwah, NJ',
      rating: 5,
      review: 'We do a lot of municipal work requiring specific insurance limits and additional insureds. Midland handles all our complex requirements perfectly. They make compliance easy.',
      date: 'April 2024',
      projectType: 'Municipal Projects',
      coverageTypes: ['General Liability', 'Workers Comp', 'Bonds']
    },
    {
      id: '10',
      name: 'Maria Gonzalez',
      company: 'Gonzalez Flooring Inc.',
      trade: 'Flooring Contractor',
      location: 'Bergenfield, NJ',
      rating: 5,
      review: 'After shopping around with 5 different agencies, Midland Associates had the best coverage and price. More importantly, they took time to understand our business and recommend the right protection.',
      date: 'March 2024',
      coverageTypes: ['General Liability', 'Installation Coverage', 'Commercial Auto']
    },
    {
      id: '11',
      name: 'Steven Park',
      company: 'Park Home Builders',
      trade: 'Home Builder',
      location: 'Tenafly, NJ',
      rating: 5,
      review: 'Building custom homes requires specialized coverage. Midland Associates arranged our builders risk policies perfectly and helped us add course of construction coverage as needed. True professionals.',
      date: 'February 2024',
      projectType: 'Custom Homes',
      coverageTypes: ['Builders Risk', 'General Liability', 'Umbrella Policy']
    },
    {
      id: '12',
      name: 'Linda Chang',
      company: 'Chang Tile & Stone',
      trade: 'Tile Contractor',
      location: 'Palisades Park, NJ',
      rating: 5,
      review: 'We\'ve referred three other contractors to Midland Associates. They provide the same excellent service to everyone. Quick quotes, competitive pricing, and they really know construction insurance.',
      date: 'January 2024',
      coverageTypes: ['General Liability', 'Tools Coverage', 'Commercial Auto']
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const stats = {
    totalClients: '500+',
    averageSavings: '$12,000',
    claimsResolved: '98%',
    clientRetention: '94%'
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Client Testimonials"
          subtitle="What Bergen County Contractors Say About Us"
          description="Real reviews from real contractors. See why construction professionals trust Midland Associates for their insurance needs."
          primaryButton={{
            text: 'Get Your Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'View Case Studies',
            href: '/case-studies',
          }}
          backgroundImage="/photos/testimonials-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.totalClients}</p>
                <p className="text-gray-600 mt-1">Happy Contractors</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.averageSavings}</p>
                <p className="text-gray-600 mt-1">Average Annual Savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.claimsResolved}</p>
                <p className="text-gray-600 mt-1">Claims Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600">{stats.clientRetention}</p>
                <p className="text-gray-600 mt-1">Client Retention</p>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-gray" />

        {/* Featured Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
              <p className="text-xl text-gray-600">See how we\'ve helped contractors like you save money and improve coverage</p>
            </motion.div>

            <div className="space-y-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.company}</p>
                          <p className="text-sm text-gray-500">{testimonial.trade} • {testimonial.location}</p>
                        </div>
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.review}"
                      </blockquote>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.coverageTypes.map((coverage) => (
                          <span key={coverage} className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                            {coverage}
                          </span>
                        ))}
                      </div>
                    </div>
                    {testimonial.projectType && (
                      <div className="md:w-48 bg-gray-50 rounded-lg p-4 text-center">
                        <BuildingOfficeIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-600">Project Type</p>
                        <p className="text-sm text-gray-500">{testimonial.projectType}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="gray-to-white" />

        {/* All Testimonials Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
              <p className="text-xl text-gray-600">Every contractor has unique needs. See how we\'ve helped businesses across all trades.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter(t => !t.featured).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.trade} • {testimonial.location}</p>
                  </div>
                  <blockquote className="text-gray-700 text-sm italic mb-4">
                    "{testimonial.review}"
                  </blockquote>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join 500+ Satisfied Contractors
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the Midland Associates difference. Get better coverage, better service, and better prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Get Your Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}