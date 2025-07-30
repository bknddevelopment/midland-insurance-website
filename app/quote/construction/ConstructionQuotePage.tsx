'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ConstructionQuotePage() {
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    dba: '',
    yearsInBusiness: '',
    businessType: '',
    federalTaxId: '',
    
    // Contact Information
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'NJ',
    zip: '',
    
    // Construction Details
    tradeType: '',
    licenseNumber: '',
    annualRevenue: '',
    numberOfEmployees: '',
    payroll: '',
    
    // Work Details
    workTypes: {
      residential: false,
      commercial: false,
      industrial: false,
      government: false,
    },
    percentNewConstruction: '',
    percentRemodel: '',
    percentRepair: '',
    largestProjectValue: '',
    
    // Subcontractors
    useSubcontractors: '',
    subcontractorCost: '',
    requireCertificates: '',
    
    // Coverage Needed
    coverageTypes: {
      generalLiability: false,
      workersComp: false,
      commercialAuto: false,
      toolsEquipment: false,
      buildersRisk: false,
      commercialProperty: false,
      professionalLiability: false,
      umbrella: false,
    },
    
    // Current Insurance
    currentlyInsured: '',
    currentCarrier: '',
    renewalDate: '',
    
    // Claims History
    claims5Years: '',
    claimsDescription: '',
    
    // Additional Info
    additionalInfo: '',
    preferredContactMethod: 'phone',
    bestTimeToContact: 'morning',
  });

  const tradeTypes = [
    'General Contractor',
    'Electrician',
    'Plumber',
    'HVAC Contractor',
    'Roofer',
    'Carpenter',
    'Mason',
    'Painter',
    'Landscaper',
    'Drywall Contractor',
    'Flooring Contractor',
    'Other',
  ];

  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'LLC',
    'S-Corporation',
    'C-Corporation',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const [category, field] = name.split('.');
      
      setFormData(prev => ({
        ...prev,
        [category]: {
          ...(prev as any)[category],
          [field]: checkbox.checked,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    alert('Thank you! We\'ll contact you within 24 hours with your construction insurance quote.');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Construction Insurance Quote"
        subtitle="Get Competitive Rates in Minutes"
        description="Complete coverage for contractors and construction businesses in Bergen County. Save up to 30% with our multiple carrier options."
        primaryButton={{
          text: 'Call for Instant Quote',
          href: 'tel:2018122184',
        }}
        backgroundImage="/photos/construction-quote-hero.jpg"
      />

      <Divider type="dark-to-white" />

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <CurrencyDollarIcon className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Save Money</h3>
              <p className="text-sm text-gray-600">Multiple carriers compete for your business</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Fast Process</h3>
              <p className="text-sm text-gray-600">Get quotes within 24 hours</p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Complete Coverage</h3>
              <p className="text-sm text-gray-600">All lines of construction insurance</p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Construction specialists on staff</p>
            </div>
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* Quote Form */}
      <section className="py-16 bg-slate-900 circle-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Your Construction Insurance Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Business Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <BuildingOfficeIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Business Information
                </h3>
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
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DBA (if applicable)
                    </label>
                    <input
                      type="text"
                      name="dba"
                      value={formData.dba}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years in Business *
                    </label>
                    <input
                      type="number"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <PhoneIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Construction Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Construction Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trade Type *
                    </label>
                    <select
                      name="tradeType"
                      value={formData.tradeType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      {tradeTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      License Number
                    </label>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Revenue *
                    </label>
                    <input
                      type="text"
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      required
                      placeholder="$"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees *
                    </label>
                    <input
                      type="number"
                      name="numberOfEmployees"
                      value={formData.numberOfEmployees}
                      onChange={handleInputChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Work Types */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TruckIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Work Types
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="workTypes.residential"
                      checked={formData.workTypes.residential}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Residential</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="workTypes.commercial"
                      checked={formData.workTypes.commercial}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Commercial</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="workTypes.industrial"
                      checked={formData.workTypes.industrial}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Industrial</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="workTypes.government"
                      checked={formData.workTypes.government}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Government</span>
                  </label>
                </div>
              </div>

              {/* Coverage Needed */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Coverage Needed
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="coverageTypes.generalLiability"
                      checked={formData.coverageTypes.generalLiability}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">General Liability</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="coverageTypes.workersComp"
                      checked={formData.coverageTypes.workersComp}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Workers Compensation</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="coverageTypes.commercialAuto"
                      checked={formData.coverageTypes.commercialAuto}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Commercial Auto</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="coverageTypes.toolsEquipment"
                      checked={formData.coverageTypes.toolsEquipment}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Tools & Equipment</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="coverageTypes.buildersRisk"
                      checked={formData.coverageTypes.buildersRisk}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Builders Risk</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="coverageTypes.umbrella"
                      checked={formData.coverageTypes.umbrella}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Umbrella Policy</span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                >
                  Get My Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <Link
                  href="tel:2018122184"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Call (201) 812-2184
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}