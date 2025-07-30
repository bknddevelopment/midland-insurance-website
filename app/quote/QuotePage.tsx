'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const steps = [
  { number: 1, title: 'Business Info', description: 'Tell us about your business' },
  { number: 2, title: 'Coverage Needs', description: 'Select your coverage types' },
  { number: 3, title: 'Details', description: 'Provide specific information' },
  { number: 4, title: 'Contact', description: 'How to reach you' },
];

const coverageTypes = [
  { id: 'general-liability', name: 'General Liability', required: true },
  { id: 'workers-comp', name: 'Workers\' Compensation', required: true },
  { id: 'commercial-auto', name: 'Commercial Auto' },
  { id: 'builders-risk', name: 'Builder\'s Risk' },
  { id: 'tools-equipment', name: 'Tools & Equipment' },
  { id: 'professional-liability', name: 'Professional Liability' },
  { id: 'umbrella', name: 'Commercial Umbrella' },
  { id: 'bonds', name: 'Contractor Bonds' },
];

const trades = [
  'General Contractor',
  'Electrician',
  'Plumber',
  'Roofer',
  'HVAC Contractor',
  'Mason',
  'Painter',
  'Carpenter',
  'Landscaper',
  'Drywall Contractor',
  'Other',
];

const projectTypes = [
  'Residential New Construction',
  'Residential Renovation',
  'Commercial Construction',
  'Government Projects',
  'Mixed Projects',
];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Business Info
    businessName: '',
    trade: '',
    yearsInBusiness: '',
    numberOfEmployees: '',
    annualRevenue: '',
    projectTypes: [] as string[],
    
    // Step 2: Coverage Needs
    coverageTypes: ['general-liability', 'workers-comp'],
    currentlyInsured: '',
    currentCarrier: '',
    renewalDate: '',
    
    // Step 3: Details
    largestProjectValue: '',
    typicalProjectValue: '',
    workInMultipleStates: '',
    subcontractorsUsed: '',
    priorClaims: '',
    safetyProgram: '',
    additionalInfo: '',
    
    // Step 4: Contact
    contactName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    bestTimeToCall: '',
    projectLocation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'projectTypes') {
        setFormData(prev => ({
          ...prev,
          projectTypes: checked 
            ? [...prev.projectTypes, value]
            : prev.projectTypes.filter(pt => pt !== value)
        }));
      } else if (name === 'coverageTypes') {
        setFormData(prev => ({
          ...prev,
          coverageTypes: checked
            ? [...prev.coverageTypes, value]
            : prev.coverageTypes.filter(ct => ct !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    alert('Thank you! We\'ll prepare your quote and contact you within 24 hours.');
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Get Quote', url: '/quote' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Get Your Construction Insurance Quote"
          subtitle="Quick • Competitive • Comprehensive"
          description="Get customized coverage options from 20+ top-rated carriers. Our construction insurance experts will find the perfect protection for your business."
          primaryButton={{
            text: 'Start Quote Below',
            href: '#quote-form',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/construction-site.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Why Choose Midland</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Smarter Way to Buy Construction Insurance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <BuildingOfficeIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">20+ Carriers</h3>
                <p className="text-gray-600">
                  Access to specialized construction insurers for better rates and coverage
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <WrenchScrewdriverIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trade Expertise</h3>
                <p className="text-gray-600">
                  Specialists who understand your specific trade risks and needs
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <ClockIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Quotes</h3>
                <p className="text-gray-600">
                  Most quotes delivered within 24 hours, many same-day
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <CurrencyDollarIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save Money</h3>
                <p className="text-gray-600">
                  Average savings of 15-30% by comparing multiple carriers
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex-1 relative">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          currentStep >= step.number
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {currentStep > step.number ? (
                          <CheckCircleIcon className="h-6 w-6" />
                        ) : (
                          step.number
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`h-1 flex-1 mx-2 ${
                            currentStep > step.number ? 'bg-primary-600' : 'bg-gray-300'
                          }`}
                        />
                      )}
                    </div>
                    <div className="mt-2">
                      <p className="text-xs font-medium text-gray-900">{step.title}</p>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {/* Step 1: Business Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell Us About Your Business
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Trade/Business Type *
                      </label>
                      <select
                        name="trade"
                        required
                        value={formData.trade}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select your trade</option>
                        {trades.map(trade => (
                          <option key={trade} value={trade}>{trade}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years in Business *
                        </label>
                        <input
                          type="number"
                          name="yearsInBusiness"
                          required
                          min="0"
                          value={formData.yearsInBusiness}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Employees *
                        </label>
                        <select
                          name="numberOfEmployees"
                          required
                          value={formData.numberOfEmployees}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">Select range</option>
                          <option value="1">Just me</option>
                          <option value="2-5">2-5</option>
                          <option value="6-10">6-10</option>
                          <option value="11-25">11-25</option>
                          <option value="26-50">26-50</option>
                          <option value="50+">50+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Revenue *
                      </label>
                      <select
                        name="annualRevenue"
                        required
                        value={formData.annualRevenue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select range</option>
                        <option value="0-250k">Under $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1M</option>
                        <option value="1m-2.5m">$1M - $2.5M</option>
                        <option value="2.5m-5m">$2.5M - $5M</option>
                        <option value="5m+">Over $5M</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Types (check all that apply)
                      </label>
                      <div className="space-y-2">
                        {projectTypes.map(type => (
                          <label key={type} className="flex items-center">
                            <input
                              type="checkbox"
                              name="projectTypes"
                              value={type}
                              checked={formData.projectTypes.includes(type)}
                              onChange={handleChange}
                              className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="ml-2 text-gray-700">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Coverage Needs */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What Coverage Do You Need?
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Coverage Types
                      </label>
                      <div className="space-y-3">
                        {coverageTypes.map(coverage => (
                          <label key={coverage.id} className="flex items-start">
                            <input
                              type="checkbox"
                              name="coverageTypes"
                              value={coverage.id}
                              checked={formData.coverageTypes.includes(coverage.id)}
                              onChange={handleChange}
                              disabled={coverage.required}
                              className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5"
                            />
                            <div className="ml-3">
                              <span className="text-gray-700 font-medium">
                                {coverage.name}
                                {coverage.required && (
                                  <span className="text-sm text-gray-500 ml-2">(Required in NJ)</span>
                                )}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Are you currently insured? *
                      </label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="currentlyInsured"
                            value="yes"
                            checked={formData.currentlyInsured === 'yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="currentlyInsured"
                            value="no"
                            checked={formData.currentlyInsured === 'no'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.currentlyInsured === 'yes' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Insurance Carrier
                          </label>
                          <input
                            type="text"
                            name="currentCarrier"
                            value={formData.currentCarrier}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Policy Renewal Date
                          </label>
                          <input
                            type="date"
                            name="renewalDate"
                            value={formData.renewalDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Details */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Additional Details
                  </h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Largest Project Value
                        </label>
                        <input
                          type="text"
                          name="largestProjectValue"
                          placeholder="$"
                          value={formData.largestProjectValue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Typical Project Value
                        </label>
                        <input
                          type="text"
                          name="typicalProjectValue"
                          placeholder="$"
                          value={formData.typicalProjectValue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Do you work in multiple states?
                      </label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="workInMultipleStates"
                            value="yes"
                            checked={formData.workInMultipleStates === 'yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="workInMultipleStates"
                            value="no"
                            checked={formData.workInMultipleStates === 'no'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Do you use subcontractors?
                      </label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="subcontractorsUsed"
                            value="yes"
                            checked={formData.subcontractorsUsed === 'yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="subcontractorsUsed"
                            value="no"
                            checked={formData.subcontractorsUsed === 'no'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Any claims in the past 5 years?
                      </label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="priorClaims"
                            value="yes"
                            checked={formData.priorClaims === 'yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="priorClaims"
                            value="no"
                            checked={formData.priorClaims === 'no'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Do you have a written safety program?
                      </label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="safetyProgram"
                            value="yes"
                            checked={formData.safetyProgram === 'yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="safetyProgram"
                            value="no"
                            checked={formData.safetyProgram === 'no'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any specific coverage needs or questions?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    How Can We Reach You?
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Phone</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Email</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="text"
                            checked={formData.preferredContact === 'text'}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary-600 border-gray-300"
                          />
                          <span className="ml-2">Text</span>
                        </label>
                      </div>
                    </div>

                    {formData.preferredContact === 'phone' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Best Time to Call
                        </label>
                        <select
                          name="bestTimeToCall"
                          value={formData.bestTimeToCall}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">Select a time</option>
                          <option value="morning">Morning (9AM-12PM)</option>
                          <option value="afternoon">Afternoon (12PM-5PM)</option>
                          <option value="evening">Evening (5PM-7PM)</option>
                          <option value="anytime">Anytime</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Project Location
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        placeholder="City or County in Bergen County"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div className="bg-primary-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        What Happens Next?
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">We\'ll review your information and shop multiple carriers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Receive customized quotes within 24 hours</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Review coverage options with our construction insurance expert</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">No obligation - compare and decide at your pace</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
                  >
                    Next
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
                  >
                    Get My Quotes
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </button>
                )}
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Your information is secure and will never be sold
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center text-gray-600">
                  <ShieldCheckIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm">SSL Secured</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm">Licensed in NJ</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm">2,500+ Contractors Served</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Quick Quote CTA */}
        <section className="py-16 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prefer to Talk to an Expert?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our construction insurance specialists are ready to help you find the perfect coverage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Visit Our Office
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}