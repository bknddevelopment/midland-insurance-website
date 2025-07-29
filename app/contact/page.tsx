'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: '(201) 812-2184',
    description: 'Call us during business hours for immediate assistance',
    action: 'tel:(201) 812-2184'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: 'Service@midlandinsurance.biz',
    description: 'Send us an email and we\'ll respond within 24 hours',
    action: 'mailto:Service@midlandinsurance.biz'
  },
  {
    icon: MapPinIcon,
    title: 'Address',
    details: '345 RT 17 STE 22, Upper Saddle River, NJ 07458',
    description: 'Visit our office for in-person consultations',
    action: 'https://maps.google.com/?q=345+RT+17+STE+22+Upper+Saddle+River+NJ+07458'
  },
  {
    icon: ClockIcon,
    title: 'Hours',
    details: 'Monday - Friday: 9:00 AM - 5:00 PM',
    description: 'Saturday & Sunday: By appointment only',
    action: null
  }
];

const serviceAreas = [
  'Upper Saddle River',
  'Saddle River',
  'Mahwah',
  'Ramsey',
  'Allendale',
  'Wyckoff',
  'Franklin Lakes',
  'Oakland',
  'Ridgewood',
  'Paramus',
  'Hillsdale',
  'Woodcliff Lake'
];

const faqItems = [
  {
    question: 'What should I bring to my appointment?',
    answer: 'Please bring your current insurance policies, driver\'s license, vehicle registration, and any other relevant documents related to your insurance needs.'
  },
  {
    question: 'Do you offer virtual consultations?',
    answer: 'Yes, we offer phone and video consultations for your convenience, especially for initial quotes and policy reviews.'
  },
  {
    question: 'How quickly can I get a quote?',
    answer: 'We can often provide quotes within the same day. For complex commercial policies, it may take 1-2 business days.'
  },
  {
    question: 'Do you offer after-hours support?',
    answer: 'While our office hours are Monday-Friday 9AM-5PM, we provide emergency contact information for urgent claims situations.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Contact Midland Associates"
        subtitle="Get In Touch Today"
        description="Ready to protect what matters most? Contact our experienced insurance professionals for personalized service, competitive quotes, and expert guidance. We're here to help you find the perfect coverage."
        primaryButton={{
          text: 'Call Now',
          href: 'tel:(201) 812-2184'
        }}
        secondaryButton={{
          text: 'Get Quote',
          href: '/quote'
        }}
        backgroundImage="/photos/team/team_photo_employees.webp"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Contact Information</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're committed to providing prompt, professional service through every channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <info.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-3">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {info.description}
                </p>
                {info.action && (
                  <Link
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {info.title === 'Phone' ? 'Call Now' : 
                     info.title === 'Email' ? 'Send Email' : 
                     info.title === 'Address' ? 'Get Directions' : 'Contact'}
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
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
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="(201) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="auto-quote">Auto Insurance Quote</option>
                    <option value="home-quote">Home Insurance Quote</option>
                    <option value="business-quote">Business Insurance Quote</option>
                    <option value="claim-support">Claim Support</option>
                    <option value="policy-review">Policy Review</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell us about your insurance needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors btn-transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Service Areas
                </h3>
                <p className="text-gray-600 mb-6">
                  We proudly serve clients throughout Bergen County and surrounding areas in New Jersey.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={area} className="flex items-center">
                      <MapPinIcon className="h-4 w-4 text-primary-600 mr-2" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive map would be embedded here</p>
                    <p className="text-sm text-gray-500">345 RT 17 STE 22, Upper Saddle River, NJ 07458</p>
                  </div>
                </div>
                <Link
                  href="https://maps.google.com/?q=345+RT+17+STE+22+Upper+Saddle+River+NJ+07458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Get Directions
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Emergency Contact */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="badge-light inline-block mb-4">Emergency Support</div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent insurance matters, claims reporting, or after-hours emergencies, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="tel:(201) 812-2184"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Link>
            <Link
              href="mailto:Service@midlandinsurance.biz"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              <EnvelopeIcon className="mr-2 h-5 w-5" />
              Email Support
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Divider */}
      <Divider type="dark-to-white" />

      {/* 7. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact & Service Questions
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
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Learn More About Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 