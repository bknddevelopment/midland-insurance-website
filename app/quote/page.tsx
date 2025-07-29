'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const personalInsuranceTypes = [
  'Auto Insurance',
  'Homeowners Insurance',
  'Condo Insurance',
  'Renters Insurance',
  'Motorcycle Insurance',
  'Boat Insurance',
  'Classic Auto Insurance',
  'Umbrella Insurance',
  'Life Insurance',
  'Flood Insurance',
  'High Net Worth Insurance',
  'Travel Insurance'
];

const businessInsuranceTypes = [
  'General Liability',
  'Business Owners Policy (BOP)',
  'Commercial Auto',
  'Workers Compensation',
  'Professional Liability',
  'Cyber Liability',
  'Commercial Property',
  'Commercial Umbrella',
  'Employment Practices Liability',
  'Directors & Officers (D&O)',
  'Commercial Trucking',
  'Builders Risk',
  'Bonds'
];

const benefits = [
  {
    icon: ClockIcon,
    title: 'Quick Response',
    description: 'Get a response within 24 hours on all quote requests'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Multiple Options',
    description: 'Compare quotes from multiple top-rated insurance carriers'
  },
  {
    icon: UserIcon,
    title: 'Personal Service',
    description: 'Work directly with experienced local insurance agents'
  },
  {
    icon: PhoneIcon,
    title: '24/7 Support',
    description: 'Access to claims support and assistance when you need it'
  }
];

const faqItems = [
  {
    question: 'How long does it take to get a quote?',
    answer: 'Most quotes can be provided within 24 hours. Complex commercial risks may take 2-3 business days for comprehensive coverage analysis.'
  },
  {
    question: 'Do you charge for quotes?',
    answer: 'No, all quotes are completely free with no obligation. We provide detailed coverage comparisons from multiple carriers at no cost.'
  },
  {
    question: 'What information do you need for a quote?',
    answer: 'Basic information varies by coverage type but typically includes property addresses, driver information, business details, and current coverage limits.'
  },
  {
    question: 'Can I get quotes for multiple types of insurance?',
    answer: 'Absolutely! We often provide bundled quotes for multiple coverage types which can result in significant savings through multi-policy discounts.'
  }
];

export default function QuotePage() {
  const [quoteType, setQuoteType] = useState('personal');
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NJ',
    zipCode: '',
    businessName: '',
    industry: '',
    employees: '',
    annualRevenue: '',
    currentInsurance: '',
    coverageNeeds: '',
    preferredContact: 'email',
    bestTimeToCall: '',
    additionalInfo: ''
  });

  const handleInsuranceToggle = (insurance: string) => {
    setSelectedInsurance(prev => 
      prev.includes(insurance) 
        ? prev.filter(item => item !== insurance)
        : [...prev, insurance]
    );
  };

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
    console.log('Form submitted:', { quoteType, selectedInsurance, formData });
    // In a real app, this would send the data to your backend
    alert('Quote request submitted! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Get Your Insurance Quote"
        subtitle="Fast, Free, and Personalized"
        description="Get customized insurance quotes from multiple top-rated carriers. Our experienced agents will find you the best coverage at competitive rates."
        primaryButton={{
          text: 'Start Quote Below',
          href: '#quote-form'
        }}
        secondaryButton={{
          text: 'Call (201) 812-2184',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Quote Form */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-light inline-block mb-4">Free Quote Request</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out our simple form to get personalized insurance quotes from multiple carriers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Quote Type Selection */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What type of insurance do you need?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setQuoteType('personal')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    quoteType === 'personal' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <UserIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Personal Insurance</h4>
                  <p className="text-sm text-gray-600 mt-1">Auto, home, life, and personal coverage</p>
                </button>
                <button
                  type="button"
                  onClick={() => setQuoteType('business')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    quoteType === 'business' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <BuildingOfficeIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Business Insurance</h4>
                  <p className="text-sm text-gray-600 mt-1">Commercial, liability, and business coverage</p>
                </button>
              </div>
            </div>

            {/* Insurance Type Selection */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Which {quoteType} insurance types are you interested in?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {(quoteType === 'personal' ? personalInsuranceTypes : businessInsuranceTypes).map((insurance) => (
                  <button
                    key={insurance}
                    type="button"
                    onClick={() => handleInsuranceToggle(insurance)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedInsurance.includes(insurance)
                        ? 'border-primary-500 bg-primary-50 text-primary-900'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                        selectedInsurance.includes(insurance) 
                          ? 'border-primary-500 bg-primary-500' 
                          : 'border-gray-300'
                      }`}>
                        {selectedInsurance.includes(insurance) && (
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium">{insurance}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Address Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="NJ">New Jersey</option>
                    <option value="NY">New York</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="CT">Connecticut</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Business Information (if business quote) */}
            {quoteType === 'business' && (
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required={quoteType === 'business'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required={quoteType === 'business'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select...</option>
                      <option value="1">Just me</option>
                      <option value="2-5">2-5 employees</option>
                      <option value="6-10">6-10 employees</option>
                      <option value="11-25">11-25 employees</option>
                      <option value="26-50">26-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Revenue
                    </label>
                    <select
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select...</option>
                      <option value="Under $100K">Under $100K</option>
                      <option value="$100K - $500K">$100K - $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="Over $10M">Over $10M</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Insurance Company
                  </label>
                  <input
                    type="text"
                    name="currentInsurance"
                    value={formData.currentInsurance}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best Time to Call
                  </label>
                  <select
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 7PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Coverage Needs or Questions
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Please describe any specific coverage needs, questions, or additional information that would help us provide you with the best quote..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Get My Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We will contact you within 24 hours with your personalized quote.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Why Choose Us */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Why Choose Midland Associates</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              The Quote Process That Works for You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference of working with an independent insurance agency that puts your needs first.
            </p>
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

      {/* 6. Dark Section - Contact Info */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experienced agents are here to help you find the perfect coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <PhoneIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak with an agent today</p>
              <a href="tel:(201) 812-2184" className="text-primary-400 hover:text-primary-300 font-medium">
                (201) 812-2184
              </a>
            </div>
            <div className="text-center">
              <EnvelopeIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your questions</p>
              <a href="mailto:Service@midlandinsurance.biz" className="text-primary-400 hover:text-primary-300 font-medium">
                Service@midlandinsurance.biz
              </a>
            </div>
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Come to our office</p>
              <p className="text-primary-400 font-medium">
                345 RT 17 STE 22<br />
                Upper Saddle River, NJ 07458
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800 rounded-lg">
              <ClockIcon className="h-5 w-5 text-primary-400 mr-2" />
              <span className="text-gray-300">
                <strong className="text-white">Office Hours:</strong> Mon-Fri 9AM-5PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Divider */}
      <Divider type="dark-to-white" />

      {/* 8. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quote Process Questions
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
        </div>
      </section>

      <Footer />
    </div>
  );
} 