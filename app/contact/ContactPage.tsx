'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Call Us',
    primary: '(201) 812-2184',
    secondary: 'Mon-Fri 9AM-5PM EST',
    action: 'tel:2018122184',
    buttonText: 'Call Now',
    preferred: true,
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    primary: 'info@midlandinsurance.biz',
    secondary: 'Response within 24 hours',
    action: 'mailto:info@midlandinsurance.biz',
    buttonText: 'Send Email',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Request Callback',
    primary: 'Schedule a consultation',
    secondary: 'We\'ll call you back',
    action: '#contact-form',
    buttonText: 'Request Call',
  },
];

const officeInfo = {
  address: '140 Route 17 North',
  city: 'Paramus',
  state: 'NJ',
  zip: '07652',
  phone: '(201) 812-2184',
  fax: '(201) 812-2185',
  email: 'info@midlandinsurance.biz',
  hours: [
    { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', time: 'By Appointment' },
    { day: 'Sunday', time: 'Closed' },
  ],
  parking: 'Free parking available',
  landmark: 'Near Garden State Plaza',
};

const reasons = [
  'Get a construction insurance quote',
  'File or check on a claim',
  'Update your policy coverage',
  'Add a certificate of insurance',
  'Discuss a new project',
  'Review your insurance needs',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    message: '',
    preferredContact: 'phone',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for contacting us! We\'ll be in touch within 24 hours.');
    }, 1000);
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <LocalBusinessSchema 
        locationName="Paramus"
        locationSlug="paramus"
        address={{
          city: "Paramus",
          state: "NJ",
          zip: "07652"
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Contact Midland Associates"
          subtitle="Bergen County's Construction Insurance Experts"
          description="Get in touch with our team for personalized construction insurance solutions. We're here to protect your business."
          primaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          secondaryButton={{
            text: 'Send Message',
            href: '#contact-form',
          }}
          backgroundImage="/photos/office-interior.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Contact Methods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Get In Touch</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you need a quick quote or have complex coverage questions, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`card text-center ${method.preferred ? 'ring-2 ring-primary-500' : ''}`}
                  >
                    {method.preferred && (
                      <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                        Fastest Response
                      </span>
                    )}
                    <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-lg font-medium text-gray-900 mb-1">{method.primary}</p>
                    <p className="text-gray-600 mb-6">{method.secondary}</p>
                    <a
                      href={method.action}
                      className={`inline-flex items-center px-6 py-3 ${
                        method.preferred
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } font-semibold rounded-lg transition-colors`}
                    >
                      {method.buttonText}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Office Information & Map */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="badge-light inline-block mb-4">Visit Our Office</div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Conveniently Located in Paramus
                </h2>
                
                <div className="bg-slate-800 rounded-lg p-8 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPinIcon className="h-6 w-6 text-primary-400 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Office Address</h3>
                        <p className="text-gray-300">
                          {officeInfo.address}<br />
                          {officeInfo.city}, {officeInfo.state} {officeInfo.zip}
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                          {officeInfo.landmark} • {officeInfo.parking}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ClockIcon className="h-6 w-6 text-primary-400 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Office Hours</h3>
                        {officeInfo.hours.map((schedule, index) => (
                          <p key={index} className="text-gray-300">
                            <span className="font-medium">{schedule.day}:</span> {schedule.time}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <PhoneIcon className="h-6 w-6 text-primary-400 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Contact Details</h3>
                        <p className="text-gray-300">
                          Phone: <a href={`tel:${officeInfo.phone}`} className="text-primary-400 hover:text-primary-300">{officeInfo.phone}</a><br />
                          Fax: {officeInfo.fax}<br />
                          Email: <a href={`mailto:${officeInfo.email}`} className="text-primary-400 hover:text-primary-300">{officeInfo.email}</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Serving All of Bergen County</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <Link href="/locations/fort-lee" className="hover:text-primary-400">Fort Lee</Link>
                      <Link href="/locations/hackensack" className="hover:text-primary-400">Hackensack</Link>
                      <Link href="/locations/paramus" className="hover:text-primary-400">Paramus</Link>
                      <Link href="/locations/ridgewood" className="hover:text-primary-400">Ridgewood</Link>
                      <Link href="/locations/mahwah" className="hover:text-primary-400">Mahwah</Link>
                      <Link href="/locations/bergen-county" className="hover:text-primary-400">All Areas →</Link>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/maps?q=140+Route+17+North+Paramus+NJ+07652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Directions
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="bg-slate-800 rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.1234567890123!2d-74.07531234567890!3d40.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzE1LjYiTiA3NMKwMDQnMzEuMSJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Midland Associates Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Send a Message</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Request a Construction Insurance Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="trade" className="block text-sm font-medium text-gray-700 mb-2">
                    Trade/Business Type *
                  </label>
                  <select
                    id="trade"
                    name="trade"
                    required
                    value={formData.trade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select your trade</option>
                    <option value="general-contractor">General Contractor</option>
                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="roofer">Roofer</option>
                    <option value="hvac">HVAC Contractor</option>
                    <option value="mason">Mason</option>
                    <option value="painter">Painter</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="landscaper">Landscaper</option>
                    <option value="drywall">Drywall Contractor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your insurance needs, current coverage, or any specific questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Reasons to Contact Us:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}